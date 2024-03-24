import React from "react";

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}

function UserList({users}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
            {/* 아이디가 없는 경우에는 */}
            {/*{users.map((user, index) => (*/}
            {/*    <User user={user} key={index} />*/}
            {/*))}*/}
        </div>
    );
}

export default UserList;