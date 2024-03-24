import React, {useState} from "react";

function InputSample() {
    let [account, changeAccount] = useState({
        name: "",
        nick: ""
    });

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
    }

    return (
        <>
            <input name="name" value={name} onInput={onInput} placeholder="이름" />
            <input name="nick" value={nick} onInput={onInput} placeholder="닉네임" />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name} ({nick})</b>
            </div>
        </>
    );
}

export default InputSample;