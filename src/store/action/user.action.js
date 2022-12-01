import { storageService } from "../../services/storage.service"


export function onLogin(user) {
    return async (dispatch) => {
        storageService.save('user', user)
        dispatch({
            type: 'USER_LOGIN',
            user: user
        })

    }
}

export function onLogOut() {
    return async (dispatch) => {
        storageService.save('user', null)
        dispatch({
            type: 'USER_LOGOUT',
            user: null
        })
    }
}

export function setRoomList(rooms) {
    return async (dispatch) => {
        try {
            storageService.save('rooms', rooms)
            dispatch({
                type: 'SET_ROOMS',
                rooms: rooms
            })
        } catch (err) {
            console.log(err);
        }

    }
}

