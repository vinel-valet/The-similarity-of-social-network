import React from "react";
import './Users.css'


let Users = ({state, follow, setUsers, unfollow}) => {
    return <div>
        {
            state.users.map(u => <div key={u.id}>
                <div>
                    <div>

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => follow(u.id)}>follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;