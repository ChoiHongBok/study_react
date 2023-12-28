import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
root.render(
    <App />
);

// <React.StrictMode> 가 없어도 동작이 잘 되는 이유
// strict 모드는 개발 과정 중에만 적용이 된다. 배포 후에는 저절로 동작하지 않는다.
// 리액트는 랜더링 단계와 커밋 단계 두가지의 단계로 동작
// 랜더링 단계 : render 함수를 호출해서 이전 렌더와 비교를 수행하는 단계
// 커밋 단계 : 라이프 사이클 함수를 실행시키며 DOM 노드를 추가/변경해주는 단계 (일반적으로 렌더링 단계보다 빠르다)
// 그로인해 느린 렌더링 단계에서 여러 생명주기 메서드가 여러번 호출되기도 합니다. 이러한 것들은 strict 모드에서는 미리 파악하고 경고를 해준다 보통 class component 의 생명주기 메소드인 componentWillMount()나 componentWillUpdate() 등에서 이런 형태가 나타나지만
// setState 에서 역시 이러한 현상들이 나타납니다. 당연히 setState 와 같은 기능으로 사용되는 useState 에서도 이러한 현상이 나타나는 경우가 있다
// 이러한 메서드들은 여러 번 호출될 수 있기 때문에 원하는 결과값을 보존하기 위해서 미리 잡아야 합니다. 그럴 때 우리가 Strict 모드를 통해 2번 수행되는 메서드들을 잡아 미리 고칠 수가 있는 것입니다.
// 물론 Strict 모드가 자동적으로 모든 부작용을 찾아낼 수는 없지만, 문제가 될 만한 함수를 두 번 실행하는 방법으로써 이러한 발견을 도와줍니다. 즉 Double-Invoke 방식을 통해 이를 우리에게 알려주는 것이죠.

// strict 모드가 발견하는 문제점
// 안전하지 않은 생명주기를 사용하는 컴포넌트 발견
// 레거시 문자열 ref 사용에 대한 경고
// 권장되지 않는 findDOMNode 사용에 대한 경고
// 예상치 못한 부작용 검사
// 레거시 context API 검사

// double-invoked가 발생하는 함수
// 클래스 컴포넌트의 constructor, render 그리고 shouldComponentUpdate
// 클래스 컴포넌트의 getDrivedStateFromProps static 메서드
// 함수 컴포넌트 바디
// State updater 함수(setState 의 첫 번째 인자)
// useState, useMemo, useReducer 에 전달되는 함수

// 나는 애가 왜 작동이 안 될까????
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function      앱에서 성능 측정을 시작하려면 함수를 전달하세요.
// to log results (for example: reportWebVitals(console.log))                   결과 기록(예: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals      또는 분석 엔드포인트로 보냅니다. 자세히 알아보기: https://bit.ly/CRA-vitals
reportWebVitals();
