import React from "react";

function User ({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
};

function UserList ({users}) {
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
            {users.map((user, index) => (
                <User user={user} key={index} />  // key 가 없으면 index 라도 넣어준다
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