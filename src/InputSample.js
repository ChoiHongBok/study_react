import React, {useState, useRef} from "react";

function InputSample() {
    let [account, changeAccount] = useState({
        name: "",
        nick: ""
    });

    // useRef 를 이용하여
    const nameInput = useRef();
    const {name, nick} = account;

    function onInput(e) {
        const {value, name} = e.target;

        changeAccount({
            ...account,
            [name]: value
        });
    }

    function onReset() {
        changeAccount({
            name: "",
            nick: ""
        });

        nameInput.current.focus();
    }

    return (
        <>
            <input name="name" value={name} onInput={onInput} ref={nameInput} placeholder="이름" />
            <input name="nick" value={nick} onInput={onInput} placeholder="닉네임" />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name} ({nick})</b>
            </div>
        </>
    );
}

export default InputSample;