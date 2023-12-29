import React, {useState, useRef} from "react";

function InputSample () {

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: ""
    });

    const nameInput = useRef(null);

    const {firstName, lastName} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,      // 기존의 input 객체를 복사
            [name]: value   // name 키를 가진 값을 value 설정
        });
    };

    const onReset = () => {
        setInputs({
            firstName: "",
            lastName: ""
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="firstName" onChange={onChange} value={firstName} placeholder="성" />
            <input name="lastName" onChange={onChange} value={lastName} placeholder="이름" ref={nameInput} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {firstName} {lastName}</b>
            </div>
        </div>
    );
}

export default InputSample;