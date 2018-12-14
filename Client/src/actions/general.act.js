


// export const getMoviesList = () => {
//     return {
//         type: 'GET_MOVIES_LIST',
//         payload: moviesList
//     }
// }

export const formSubmit = (data) => {
    return {
        type: 'API',
        payload: { type: 'FORM_SUBMIT', data, method: 'post',path:'' }
    }
}


export const api = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}

export const setOpenModalKey = (key) => {
    return {
        type: 'SET_OPEN_MODAL_KEY',
        payload: key
    }
}

// export const update = (newData) => {
//     return {
//         type: 'UPDATE',
//         payload: newData
//     }
// }

export const update = (newDatas, newData, index) => {
    return {
        type: 'API',
        payload: { type: 'UPDATE', newDatas, newData, index, method: 'put' }
    }
}

export const deleteMovie = (newDatas, index) => {
    return {
        type: 'API',
        payload: { type: 'DELETE', newDatas, index, method: 'delete' }
    }
}

export const addMovie = (currentDb, newData, id) => {
    return {
        type: 'API',
        payload: { type: 'ADD', currentDb, newData, id, method: 'post' }
    }
}

export const isMovieExist = (val) => {
    return {
        type: 'IS_MOVIE_EXIST',
        payload: val
    }
}