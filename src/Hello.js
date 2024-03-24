import React from 'react'; // react 불러오기

// function Hello(props) {
//     return (
//         <div style={{color: props.color}}>
//             안녕하세요. {props.name} 님{props.isSpecial ? '?!?!!' : null}
//         </div>
//     );
// }
function Hello({name, color, isSpecial}) {
    return (
        <div style={{color: color}}>
            {/*안녕하세요. {name} 님{isSpecial ? '?!?!!' : null}*/}
            안녕하세요. {name} 님{isSpecial && '?!?!!'}
        </div>
    );
}

Hello.defaultProps = {
    name: "디폴트 이름"
}

export default Hello; // Hello 라는 컴포넌트를 내보겠다라는 의미