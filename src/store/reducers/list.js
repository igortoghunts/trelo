const initialstate = {
    lists: [],
    addList: null
}

export const lists = (state = initialstate, action) => {
    switch(action.type){
        case 'LIST_FETCHED': return { ...state, lists: action.payload }
        default: return state;
    }
}

export const addList = (state = initialstate, action) => {
    switch(action.type){
        case 'LIST_ADDED': return { ...state, addList: action.payload }
        default: return state;
    }
}
