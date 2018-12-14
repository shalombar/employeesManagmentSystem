import * as actions from '../actions/general.act';
// import * as Functions from '../common/functions/functions';

const axios = require('axios');

export default store => next => action => {
    if (action.type == 'API') {
        const SERVER_ENDPOINT = "http://localhost:8081/employees/";
        const OMDb_API = 'https://www.omdbapi.com/?apikey=81d51a00';

        let { type, method, index, newData, newDatas, id, currentDb, path, data } = action.payload;

        let api = {
            'get': () => {
                axios({
                    method: 'get',
                    url: SERVER_ENDPOINT + path,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: data
                })
                    .then((res) => {
                        store.dispatch(actions.api(type, data))
                    })
                    .catch((err) => console.log(err))
            },
            'post': () => {
                axios({
                    method: 'post',
                    url: SERVER_ENDPOINT + path,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                })
                    .then((res) => {
                        store.dispatch(actions.api(type, data))
                    })
                    .catch((err) => console.log(err))

            },
            'put': () => {
                // axios.put((SERVER_ENDPOINT + '/' + index + '/'), newData).then((res) => {
                store.dispatch(actions.api(type, newDatas))
                // })
                // .catch((err) => console.log(err))
            },
            'delete': () => {
                // axios.delete(SERVER_ENDPOINT + '/' + index + '/').then((res) => {
                store.dispatch(actions.api(type, newDatas))
                // })
                // .catch((err) => console.log(err))
            }
        }

        // if (type == 'ADD') {
        //     let title = newData.title.replace(' ', '+');

        //     axios.get(OMDb_API + '&t=' + title + '&y=' + newData.year).then((respone) => {
        //         if (!respone.data.respone) {
        //             return;
        //         }

        //         let newMovie = respone.data;

        //         newMovie['id'] = id;
        //         if (!Functions.isMovieExist(currentDb, newMovie.imdbID)) {
        //             api[method](newMovie);
        //             store.dispatch(actions.isMovieExist(false))
        //         }
        //         else {
        //             store.dispatch(actions.isMovieExist(true))
        //         }
        //     })
        //         .catch((err) => console.log(err))
        // }
        // else {
        api[method]();
        // }
    }
    return next(action)
}