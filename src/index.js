import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠따
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();

// index.js 가 App.ks에 있는 HTML 을 index.html 로 넣어준다.