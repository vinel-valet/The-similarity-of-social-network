import React from "react";
import Users from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

const UsersContainer = () => {

    let dispatch = useDispatch();
    let state = useSelector((state) => state.usersPage);
    let follow =(userId) => dispatch(followAC(userId));
    let unfollow =(userId) => dispatch(unfollowAC(userId));
    let setUsers =(users) => dispatch(setUsersAC(users));


    return <Users state = {state}
                  follow = {follow}
                  unfollow = {unfollow}
                  setUsers = {setUsers}
    />
};

export default UsersContainer;