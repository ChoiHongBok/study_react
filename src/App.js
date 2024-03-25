import React, {useState, useRef, useMemo, useCallback, useReducer} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = {
    createUser: {
        userName: '',
        email: ''
    },
    users: [
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
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_INPUT": return {
            ...state,
            createUser: {
                ...state.createUser,
                [action.name]: action.value
            }
        }
        case 'CREATE_USER': return {
            createUser: initialState.createUser,
            users: state.users.concat(action.user)
        }
        case 'REMOVE_USER': return {
            ...state,
            users: state.users.filter(user => {
                return user.id !== action.id
            })
        }
        case 'TOGGLE_USER': return {
            ...state,
            users: state.users.map(user => user.id === action.id ? {...user, active: !user.active} : user)
        }
        default: return state;
    };
}

function App() {
    // useReducer 후
    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;
    const {userName, email} = state.createUser;
    const nextId = useRef(4);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: "CHANGE_INPUT",
            name,
            value
        });
    }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                userName,
                email
            }
        });
        nextId.current += 1;
    }, [userName, email]);

    const onRemove = useCallback((id) => {
        dispatch({
            type: "REMOVE_USER",
            id
        });
    }, []);

    const onToggle = useCallback((id) => {
        dispatch({
            type: "TOGGLE_USER",
            id
        });
    }, []);

    let count = useMemo(() => {
        return countActiveUsers(users);
    }, [users])

    return (
        <>
            <CreateUser userName={userName} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
        </>
    );

    // useReducer 전
    // const [users, changeUsers] = useState([
    //     {
    //         id: 1,
    //         username: 'velopert',
    //         email: 'public.velopert@gmail.com',
    //         active: true
    //     },
    //     {
    //         id: 2,
    //         username: 'tester',
    //         email: 'tester@example.com',
    //         active: false
    //     },
    //     {
    //         id: 3,
    //         username: 'liz',
    //         email: 'liz@example.com',
    //         active: false
    //     }
    // ]);
    //
    // let [createUser, changeCreateUser] = useState({
    //     userName: "",
    //     email: ""
    // });
    //
    // let {userName, email} = createUser;
    //
    // const onChange = useCallback((e) => {
    //     const {name, value} = e.target;
    //
    //     changeCreateUser(createUser => ({
    //         ...createUser,
    //         [name]: value
    //     }));
    // }, []);
    //
    // const nextId = useRef(4); // useRef : nextId.current 에 기본값이 된다
    // const onCreate = useCallback(() => {
    //     const user = {
    //         id: nextId.current,
    //         username: userName,
    //         email: email
    //     }
    //
    //     // changeUsers([
    //     //     ...users,
    //     //     user
    //     // ]);
    //     changeUsers(users => {
    //         return users.concat(user);
    //     });
    //
    //     changeCreateUser({
    //         userName: "",
    //         email: ""
    //     });
    //
    //     nextId.current += 1;
    // }, [userName, email]);
    //
    // const onRemove = useCallback((id) => {
    //     changeUsers(users => {
    //         users.filter(user => {
    //             return user.id !== id;
    //         })
    //     });
    // }, []);
    //
    // const onToggle = useCallback((id) => {
    //     changeUsers(users => {
    //         users.map(user =>
    //             user.id == id ? {...user, active: !user.active} : user
    //         )
    //     });
    // }, []);
    //
    // // useMemo 는 이전에 계산 한 값을 재사용한다는 의미를 가진다.
    // // 그래서 랜더링 되어도 본인이 원하는데이터가 아니면 랜더링 되지 않고 이전에 값을 사용한다.
    // let activeUserCount = useMemo(() => countActiveUsers(users), [users]);
    //
    // return (
    //     <div>
    //         {/*<Wrapper>*/}
    //         {/*    <Hello name='최홍복' color='red' isSpecial={true} />*/}
    //         {/*    <Hello color='blue' isSpecial /> /!* Default true *!/*/}
    //         {/*    <Hello />*/}
    //         {/*</Wrapper>*/}
    //         {/*<Counter />*/}
    //         {/*<InputSample />*/}
    //         <CreateUser userName={userName} email={email} onChange={onChange} onCreate={onCreate} />
    //         <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    //         <div>활성 사용자 수 : {activeUserCount}</div>
    //     </div>
    // );
}

export default App;
