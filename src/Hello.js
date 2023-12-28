// 리액트 컴포넌트를 만들 떈 아래처럼 리액트를 불러와주어야 한다.
import React from 'react';

Hello.defaultProps = {
    name: "이름 없듬"
}

// function Hello (props) {
//     return (
//         <>
//             <div>안녕하세요. Hello.js 입니다.</div>
//             <div style={{color: props.color}}>{props.name} 공부 중</div>
//         </>
//     );
// }

// 비구조화 할당(구조 분해) 문법을 사용하면 조금 더 코드를 간결하게 사용 가능
// JSX 에서 null, false, undefined 를 렌더링하게 된다면 아무것도 나타나지 않는다
function Hello ({name, color, isSpecial, isTest}) {
    return (
        <>
            <div>안녕하세요. Hello.js 입니다.</div>
            {isSpecial ? <b>*</b> : null}
            {isSpecial && <b>*</b>}
            {isTest && <b>*</b>}
            <div style={{color: color}}>{name} 공부 중</div>
        </>
    );
}

// Hello 라는 컴포넌트를 내보겠다는 의미이다
export default Hello;
