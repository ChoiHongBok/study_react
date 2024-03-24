import React, {useState} from 'react';

function Counter() {
    let [number, changeNumber] = useState(0);

    const onIncrease = () => {
        // changeNumber(number + 1);
        changeNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        // changeNumber(number - 1);
        changeNumber(prevNumber => {
            return prevNumber <= 0 ? prevNumber : prevNumber - 1;
        });
    }

    // test1 은 이 함수 당시에 number 값에 + 1 을 증가시키기 떄문에 최종적으로 + 1 만 증가한다
    // const test1 = () => {
    //     changeNumber(number + 1);
    //     changeNumber(number + 1);
    //     console.log(number);
    // }

    // test2 는 number 에 이전값 0 + 1 다음 1 + 1 로 2가 증가한다 그래서 test2 가 좀더 실시간적이다다
    // const test2 = () => {
    //     changeNumber(prevNumber => prevNumber + 1);
    //     changeNumber(prevNumber => prevNumber + 1);
    //     console.log(number);
    // }

    return (
        <div>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
            {/*<button onClick={test1}>+2</button>*/}
            {/*<button onClick={test2}>+2</button>*/}
            <span style={{marginLeft: "5px"}}>{number}</span>
        </div>
    );
}

export default Counter;