const initialstate = {
    lists: null
}

export const lists = (state = initialstate, action) => {
    switch(action.type){
        case 'LIST_FETCHED': return { ...state, lists: action.payload }
        default: return state;
    }
}
