const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Nikolay',
            status: 'I will go to Poland',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: false,
            fullName: 'Dmitriy',
            status: 'I will go to Poland too',
            location: {city: 'Pinsk', country: 'Belarus'}
        },
        {
            id: 3,
            followed: true,
            fullName: 'Viktor',
            status: 'I"m stay at Pinsk',
            location: {city: 'Minsk', country: 'Belarus'}
        }
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state
    }
};

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;
