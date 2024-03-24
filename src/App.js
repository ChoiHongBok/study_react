import React, {useState, useRef, useMemo, useCallback} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log("활성 사용자 수 세는중");
    return users.filter(user => {
        return user.active;
    }).length;
}

function App() {
    const [users, changeUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    let [createUser, changeCreateUser] = useState({
        userName: "",
        email: ""
    });

    let {userName, email} = createUser;

    const onChange = useCallback((e) => {
        const {name, value} = e.target;

        changeCreateUser({
            ...createUser,
            [name]: value
        });
    }, [createUser]);

    const nextId = useRef(4); // useRef : nextId.current 에 기본값이 된다
    const onCreate = useCallback(() => {
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
    }, [users, userName, email]);

    const onRemove = useCallback((id) => {
        changeUsers(
            users.filter(user => {
                return user.id !== id;
            })
        );
    }, [users]);

    const onToggle = useCallback((id) => {
        changeUsers(users.map(user =>
            user.id == id ? {...user, active: !user.active} : user
        ));
    }, [users]);

    // useMemo 는 이전에 계산 한 값을 재사용한다는 의미를 가진다.
    // 그래서 랜더링 되어도 본인이 원하는데이터가 아니면 랜더링 되지 않고 이전에 값을 사용한다.
    let activeUserCount = useMemo(() => {
        countActiveUsers(users);
    }, [users]);

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
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성 사용자 수 : {activeUserCount}</div>
        </div>
    );
}

export default App;
