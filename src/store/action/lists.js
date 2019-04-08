import axios from '../../apis/axios';

export const lists = ( ) => {
    return dispatch => {
        axios.get('/lists')
        .then(res => {
           console.log(res.data);
           dispatch({type: 'LIST_FETCHED', payload: res.data});
        }).catch(e => {
            
        });  
    }
};

