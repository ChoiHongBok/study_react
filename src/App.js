// warning 을 보고 싶지 않다면 /* eslint-disable */ 작성하기 /**/ 도 같이 작성해야함
import React, {useState} from "react";
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

// <div class="클래스명"> -> <div className="클래스명"> 으로 사용
/*function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>);
}*/

function App() {

    // state 란
    // 1. 변수 대신 쓰는 데이터 저장공간
    // 2. useState() 를 이용해 만들어야함
    // 3. 문자, 숫자, array, object 전부 저장 가능
    // state 사용 이유
    // 웹이 App 처럼 동작하게 만들고 싶을 떄
    // state 는 데이터가 변경되면 HTML 이 자동으로 재랜더링이 됩니다(변수는 변경되어도 자동 랜더링이 안된다)
    // HTML 이 새로고침 없이도 스무스하게 변경됨

    // useState 를 이용한 테스트 데이터
    // let [name, function] function 으로 name 데이터를 변경
    // let [title, changeTitle] = useState("카페 이름 추천 받습니다");
    let [title, changeTitle] = useState(["카페 이름 추천 받습니다", "사실 추천 안 받습니다"]);
    let [views, changeViews] = useState(0);
    let [number, setNumber] = useState(0);

    // style 을 여러 방식으로 표현하기 위한 테스트 코드
    let tempColor = {
        color: "blue",
        fontsize: "30px"
    };

    // let cafe = <h4>Cafe</h4>;
    // let cafe = <h4 style={{color: "blue", fontsize: "30px"}}>Cafe</h4>;
    let cafe = <h2 style={tempColor}>Cafe</h2>;

    // className 에 사용하기 위한 데이터
    // let temp = 'logo';

    function fnChangeTitle () {
        let newArray = [...title];
        newArray[0] = '카페 이름 추천 안 받습니다';
        changeTitle(newArray);
    };

    // 함수로도 사용 가능한다는것을 위한 테스트 함수
    function textNumber () {
        return <h4>100</h4>;
    };

    const onIncrease = () => {
        setNumber(pervNumber => pervNumber + 1);
    };
    const onDecrease = () => {
        setNumber(number - 1);
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);

    const [user, setUser] = useState({
        username: "",
        email: ""
    });

    const {username, email} = user;

    const onChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const onCreate = () => {
        const inputData = {
            id: users.length + 1,
            username,
            email
        };

        setUsers([...users, inputData]);

        setUser({
            username: '',
            email: ''
        });
    };

    const onRemove = (id, username, email) => {
        console.log(id);
        console.log(username);
        console.log(email);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="App">
            <div>
                <div className="nav-black">
                    <div>UserList</div>
                </div>
                <UserList users={users} onRemove={onRemove} />
            </div>
            <div>
                <div className="nav-black">
                    <div>Create User</div>
                </div>
                <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
            </div>
            <div>
                <div className="nav-black">
                    <div>React Study</div>
                </div>
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<img src={logo} className={temp} alt="logo" />*/}
                {cafe}
                {textNumber()}
            </div>
            <div>
                <div className="nav-black">
                    <div>UseState</div>
                </div>
                <button onClick={fnChangeTitle} style={{marginTop: "20px", color: "red"}}>글자 변경 버튼</button>
                <h4>useState Test (useState) : {useState}</h4>
                <h4>useState Test (title) : {title}</h4>
                <h4>useState Test (title[0]) : {title[0]}</h4>
                <h4>useState Test (title[1]) : {title[1]}</h4>
            </div>
            <div>
                <div className="nav-black">
                    <div>OnClick</div>
                </div>
                <div className="list">
                    <p><span onClick={() => {console.log(1)}}>클릭 시 숫자가 증가합니다.</span> = 0</p>
                </div>
                <div className="list">
                    <p><span onClick={() => {changeViews(views + 1)}}>클릭 시 숫자가 증가합니다.</span> = {views}</p>
                </div>
                <div>
                    <h4>{number}</h4>
                    <button onClick={onIncrease}>+1</button>
                    <button onClick={onDecrease}>-1</button>
                </div>
            </div>
            <div>
                <div className="nav-black">
                    <div>Modal</div>
                </div>
                <Modal />
            </div>
            <div>
                <div className="nav-black">
                    <div>New.js</div>
                </div>
                <Hello name='react' color='red' />
                <Hello color='pink' />
                <Wrapper>
                    <Hello name='react' color='red' isSpecial={true} isTest />
                    <Hello color='pink' />
                </Wrapper>
            </div>
            <div>
                <div className="nav-black">
                    <div>InputSample</div>
                </div>
                <InputSample />
            </div>
        </div>);
}

// Component 는 function App() 과 같은 선상에서 만들어 준다
// 단점은 state 쓸 때 복잡해진다 (상위 Component 에서 만든 state 를 쓰려면 props 문법을 이용해야한다)
function Modal () {
    return (
        <div className="modal" style={{marginTop: "20px", padding: "20px", background: "#eee"}}>
            <h2>제목</h2>
            <p>날짜</p>
            <p>내용</p>
        </div>);
};

export default App;
// export default
// 해당 모듈엔 하나의 개체(변수, 클래스, 함수 등)만 있다는 의미
// 해당 모듈의 전체 개체를 export 한다는 의미
// 원하는 이름으로 import 가 가능하다.(ex. import ThisIsSample from "경로")

// export
// 복수의 개체가 있는 라이브러리 형태의 모듈에서 가져오기 할 때 사용
// 특정 개체만 가져오는게 가능
// 원하는 이름으로 import 가 불가능

// #########################################################################
// React-Bootstrap : 오픈 소스 프론트엔드 프레임워크
// react 에서 Bootstrap5 를 사용할 수 있또록 개발한 라이브러리
// npm install react-bootstrap bootstrap
// App.js or index.js 에서 import 'bootstrap/dist/css/bootstrap.min.css'; 선언
// 컴포넌트를 import 할 떄에는 import Button from 'react-bootstrap/Button'; or import {Button} from 'react-bootstrap';
// Bootstrap 버튼 타입을 적용하기 위해서는 variant 속성을 사용한다.
// function Button () {
//     return (
//         <div>
//             <Button variant="primary">Primary</Button>
//             <Button variant="secondary">Secondary</Button>
//             <Button variant="success">success</Button>
//             <Button variant="warning">Warning</Button>
//         </div>
//     )
// };
