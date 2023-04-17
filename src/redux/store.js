// import  createStore from 'redux';
import { legacy_createStore as createStore } from 'redux';

export const counter_increment = 'counter/increment';
export const counter_decrement = 'counter/decrement';



const reducer1 = (state = {count: 0},action) => {
    if(action.type === counter_increment){
        return {count:state.count + 1};
    }
    else if (action.type === counter_decrement) {
        return {count:state.count - 1};
    }
    else{
        return state;
    }
}

const reducer2 = (state = [],action) => {
    if(action.type === 'push'){
        const data = [...state];
        data.push(action.value);
        return [...data];
    }
    else if (action.type === 'pop') {
        const data = [...state];
        data.pop(action.value);
        return [...data];
    }
    else{
        return [...state];
    }
}

const joinreducer = ( state={}, action) => {
    return {
       r1: reducer1(state.reduce1,action),
       r2: reducer2(state.reduce2,action)
    }
}

const store = createStore(joinreducer);

export default store;