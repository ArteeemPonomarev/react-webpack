import React from 'react';
import './app.less';
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../reducers/repoReducer";

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.repos.count)

    function onCountClick() {
        const digit = count + 1;
        dispatch(setCount(digit))
    }

    return (
        <div className="app">
            <button onClick={onCountClick}>Count</button>
            <div>{count}</div>
        </div>
    );
};

export default App;