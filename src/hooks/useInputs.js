// 커스텀 Hooks 을 만들 떄에는 보통 use 로 시작해서 만들기
import React, {useState, useCallback} from "react";

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((e) => {
        const {name, value} = e.target;

        setForm(form => ({
            ...form,
            [name]: value
        }));
    }, []);

    const reset = useCallback(() => {
        setForm(initialForm, [initialForm]);
    });

    return [form, onChange, reset];
}

export default useInputs;