import React, {useState} from 'react';
import './App.css';

function App() {
    // ES6 destructuring
    // let [a, b] = [10, 100] : a = 10, b = 100

    // 변수 : 변수는 데이터가 변경되어도 자동 렌더링이 되지 않는다.
    let topTitle = 'React 연습'

    // state 는 데이터가 변경되면 HTML 이 자동으로 랜더링된다.
    let [title, changeTitle] = useState(['강남 카페', '강남 돈까스']);

    return (
        <div classname="txt_middle">
            <div className="nav_black">
                <div style={{color: "red", fontSize: "30px"}}>{topTitle}</div>
            </div>
            <div className="list">
                <h3>{title[0]}</h3>
            </div>
        </div>
    );
}

export default App;