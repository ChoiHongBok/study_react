import React, {useRef} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
    const users = [
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
    ];

    const nextId = useRef(4); // useRef : nextId.current 에 기본값이 된다

    const onCreate = () => {
        nextId.current += 1;
    };

    return (
        <div>
            <Wrapper>
                <Hello name='최홍복' color='red' isSpecial={true} />
                <Hello color='blue' isSpecial /> {/* Default true */}
                <Hello />
            </Wrapper>
            <Counter />
            <InputSample />
            <UserList users={users} />
        </div>
    );
}

export default App;
