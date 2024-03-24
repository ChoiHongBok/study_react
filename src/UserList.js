import React, {useEffect} from "react";

function User({user, onRemove, onToggle}) {
    // deps 가 비워져 있으면 컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출된다
    // useEffect 는 함수를 반환 할 수 있는데 이를 cleanup 함수라 한다 deps 가 비워져 있으면 컴포넌틑가 사리질 떄 호출댐

    // Mount 시 작업
    // - props 로 받은 값을 컴포넌트의 로컬 상태로 설정
    // - 외부 API 요청 (REST API 등)
    // - 라이브러리 사용 (D3, Video.js 등...)
    // - setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
    // UnMount 시 작업업
    // - setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
    // - 라이브러리 인스턴스 제거

    // deps 에 특정 값을 넣으면
    // - 처음 마운트 될 떄, 값이 바뀌 때, 언마운트 시, 값이 바뀌기 직전에도 호출출
    // - useEffect 안에서 사용하는 상태나 props 가 있다면 deps 안에 넣어주기
    // - 넣지 않게 된다면 useEffect 에 등록한 함수가 실행 될 때 최신 props / 상태를 가르키지 않게 된다
    // - deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출이 됩
    useEffect(() => {
        // console.log('user 값이 설정됨');
        // console.log(user);
        return () => {
            // console.log('user 가 바뀌기 전..');
            // console.log(user);
        }
    }, [user]);

    return (
        <div>
            <b onClick={() => onToggle(user.id)} style={{color: user.active ? 'green' : 'black'}}>
                {user.username}
            </b>
            <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} onRemove={onRemove} onToggle={onToggle} key={user.id} />
            ))}
            {/* 아이디가 없는 경우에는 */}
            {/*{users.map((user, index) => (*/}
            {/*    <User user={user} key={index} />*/}
            {/*))}*/}
        </div>
    );
}

export default UserList;