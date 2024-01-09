import React, {useEffect} from "react";

function User ({user, onRemove, onToggle}) {
    //  useEffect 라는 Hook 을 사용하여 컴포넌트가
    //  마운트 됐을 때 (처음 나타났을 때)
    //  언마운트 됐을 때 (사라질 때)
    //  업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리하는 방법에 대해서 알아보겠습니다.

    // useEffect(a, b) a에는 함수 , b에는 의존값이 들어있는 배열 (deps)
    // deps 가 비어있는 경우에는 컴포넌트가 사라질 떄 cleanup 함수가 호출됩니다
    // 마운트 시 하는 작업
    // 1. props 로 받은 값을 컴포넌트의 로컬 상태로 저장
    // 2. 외부 API 요청 (REST API 등)
    // 3. 라이브러리 사용 (D3, Video.js 등...)
    // 4. setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
    // 언마운트 시 하는 작업
    // 1. setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기(clearInterval, cleanTimeout)
    // 2. 라이브러리 인스턴스 제거

    // useEffect(() => {
    //     console.log("컴포넌트가 화면에 나타남");
    //     return () => {
    //         console.log("컴포넌트가 화면에서 사라짐");
    //     };
    // }, []);

    useEffect(() => {
        // console.log("user 값이 설정됨");
        // console.log(user);
        return () => {
            // console.log("user 가 바뀌기 전..");
            // console.log(user);
        };
    }, [user]); // useEffect 안에서 사용하는 상태나 props 가 있다면 deps 에 넣어주자 (넣지 않을 시 최신 상태/props 를 가르키지 않게 된다)

    // deps 생략하기 : 생략 시 컴포넌트가 리렌더링 될 때마다 호출이 된다
    // useEffect(() => {
    //     console.log(user);
    // });

    return (
        <div>
            <b style={{cursor: "pointer", color: user.active ? 'green' : 'black'}} onClick={() => onToggle(user.id)}>
                {user.username}
            </b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id, user.username, user.email)}>삭제</button>
        </div>
    );
};

function UserList ({users, onRemove, onToggle}) {
    // const users = [
    //     {
    //         id: 1,
    //         username: 'Number 1',
    //         email: 'number1@gmail.com'
    //     },
    //     {
    //         id: 2,
    //         username: 'Number 2',
    //         email: 'number2@gmail.com'
    //     },
    //     {
    //         id: 3,
    //         username: 'Number 3',
    //         email: 'number3@gmail.com'
    //     }
    // ];

    // 배열 랜더링 시 고유한 key 가 필요한 이유는 랜더링 시 효율성 때문이다 시각적으로 보고 싶으면 https://react.vlpt.us/basic/11-render-array.html 를 참고
    return (
        <div>
            {/*<User user={users[0]} />*/}
            {/*<User user={users[1]} />*/}
            {/*<User user={users[2]} />*/}
            {/*{users.map(user => (*/}
            {/*    <User user={user} key={user.id} />  // React 는 배열을 랜더링 할 떄에는 key 라는 props 를 설정해야한다.*/}
            {/*))}*/}
            {/*{users.map((user, index) => (*/}
            {/*    <User user={user} key={index} />  // key 가 없으면 index 라도 넣어준다*/}
            {/*))}*/}
            {users.map((user, id) => (
                <User user={user} key={id} onRemove={onRemove} onToggle={onToggle} />  // key 가 없으면 index 라도 넣어준다
            ))}
        </div>
    );
};

// function UserList () {
//     const users = [
//         {
//             id: 1,
//             username: 'Number 1',
//             email: 'number1@gmail.com'
//         },
//         {
//             id: 2,
//             username: 'Number 2',
//             email: 'number2@gmail.com'
//         },
//         {
//             id: 3,
//             username: 'Number 3',
//             email: 'number3@gmail.com'
//         }
//     ];
//
//     return (
//         <div>
//             <div>
//                 <b>{users[0].username}</b> <span>({users[0].email})</span>
//             </div>
//             <div>
//                 <b>{users[1].username}</b> <span>({users[1].email})</span>
//             </div>
//             <div>
//                 <b>{users[2].username}</b> <span>({users[1].email})</span>
//             </div>
//         </div>
//     );
// };

export default UserList;