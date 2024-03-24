import React, {useState, useRef} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
    const [users, changeUsers] = useState([
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
    ]);

    let [createUser, changeCreateUser] = useState({
        userName: "",
        email: ""
    });

    let {userName, email} = createUser;

    const onChange = (e) => {
        const {name, value} = e.target;

        changeCreateUser({
            ...createUser,
            [name]: value
        });
    };

    const nextId = useRef(4); // useRef : nextId.current 에 기본값이 된다
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username: userName,
            email: email
        }

        // changeUsers([
        //     ...users,
        //     user
        // ]);
        changeUsers(users.concat(user));

        changeCreateUser({
            userName: "",
            email: ""
        });

        nextId.current += 1;
    };

    const onRemove = (id) => {
        changeUsers(
            users.filter(user => {
                return user.id !== id;
            })
        );
    };

    return (
        <div>
            {/*<Wrapper>*/}
            {/*    <Hello name='최홍복' color='red' isSpecial={true} />*/}
            {/*    <Hello color='blue' isSpecial /> /!* Default true *!/*/}
            {/*    <Hello />*/}
            {/*</Wrapper>*/}
            {/*<Counter />*/}
            {/*<InputSample />*/}
            <CreateUser userName={userName} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} />
        </div>
    );
}

export default App;
