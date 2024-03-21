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
    // 주의 : onClick={함수()} 사용시 바로 함수 실행
    function clickChangeTitle() {
        // state 를 직접 건들지 않고 DeepCopy 후 대체
        let newTitle = [...title];
        newTitle[0]  = '이디야';
        changeTitle(newTitle);
    }

    return (
        <div className="txtM">
            <div className="navBlack">
                <div style={{color: "red", fontSize: "30px"}}>{topTitle}</div>
            </div>
            <div className="txtL pad5">
                {title[0]}
                <span className="marL5" onClick={() => {changeRecommend(recommend + 1)}}>👍 {recommend}</span>
                <button className="marL5" onClick={clickChangeTitle}>카페 이름 변경</button>
            </div>

            <Modal />
        </div>
    );
}

function Modal() {
    return (
        // 의미 없는 <div></div> 대신 <></> 사용 가능 : return 안에 있는 건 태그 하나로 묶어야 한다.
        <div className="txtL pad5">
            <h4>Component Modal</h4>
        </div>
        // <>
        //     <h2>Component Modal</h2>
        // </>
    );
}

export default App;
