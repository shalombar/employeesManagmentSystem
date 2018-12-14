export default (state = {}, action) => {
    state = {
        test: 'i am redux test',
        ...state
    }
    switch (action.type) {
        case 'GET_MOVIES_LIST':
            let moviesList = action.payload;

            return {
                ...state,
                moviesList: moviesList
            }
       
        default:
            return state
    }
    return state;
}