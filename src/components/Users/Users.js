import React from "react";


let Users = ({state, follow, setUsers, unfollow}) => {
    return <div>
        {
            state.users.map(u => <div key={u.id}>
                <span>
                    <div>

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>unfollow(u.id)}>Unfollow</button>
                            : <button onClick={()=>follow(u.id)}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;