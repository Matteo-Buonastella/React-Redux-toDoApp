//Evaluate actions here i.e. fetch, create
import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items: [], //all posts
    item: {} //single post to add
}

export default function(state = initialState, action){
    switch(action.type){   
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:   //because we are using json placeholder, we are just going to return added item and push it on, instead of adding to database and re-fetching
            return {
                ...state,
                item: action.payload  //will be a single post
            };
        default:
            return state;         
    }
}