const SET_COUNT = "SET_COUNT";


const defaultState = {
    item: [], // полученные с api github репозитории
    isFetching: true,
    count: 0
}

export default function repoReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_COUNT:
            return {...state, count: action.payload}
        default:
            return state
    }
}

export const setCount = (count) => ({type: SET_COUNT, payload: count})