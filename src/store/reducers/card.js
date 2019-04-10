const initialstate = {
    cards: [],
    addCard: null
}

export const cards = (state = initialstate, action) => {
    switch(action.type){
        case 'CARDS_FETCHED': return { ...state, cards: action.payload }
        default: return state;
    }
    
}

export const addCard = (state = initialstate, action) => {

    switch(action.type){
        case 'CARD_ADDED': return { ...state, addCard: action.payload }
        default: return state;
    }

}

