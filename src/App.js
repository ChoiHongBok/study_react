import React, {useState} from 'react';
import './App.css';

function App() {
    // ES6 destructuring
    // let [a, b] = [10, 100] : a = 10, b = 100

    // 변수 : 변수는 데이터가 변경되어도 자동 렌더링이 되지 않는다.
    let topTitle = 'React 연습'

    // state 는 데이터가 변경되면 HTML 이 자동으로 랜더링된다.
    let [title, changeTitle] = useState(['스타벅스', '강남 돈까스']);
    let [recommend, changeRecommend] = useState(0);

    // onClick={함수} / onClick={() => {}}

    return (
        <div classname="txt_middle">
            <div className="nav_black">
                <div style={{color: "red", fontSize: "30px"}}>{topTitle}</div>
            </div>
            <div className="list">
                <div className="pad5">
                    {title[0]} <span className="marL5" onClick={() => {changeRecommend(recommend + 1)}}>👍</span> <span>{recommend}</span>
                </div>
            </div>
        </div>
    );
}

export default App;