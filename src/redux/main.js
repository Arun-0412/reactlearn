import store , { counter_increment,counter_decrement } from "./store";

function main () {
   const increment = () => {
        store.dispatch({type:counter_increment});
        console.log(store.getState());
    }
    
   const decrement = () => {
        store.dispatch({type:counter_decrement});
        console.log(store.getState());
    }

    const push = () => {
        store.dispatch({type:'push',value: Math.random()});
        console.log(store.getState());
    }
    
   const pop = () => {
        store.dispatch({type:'pop'});
        console.log(store.getState());
    }
    return <>
    <h1>{store.getState().count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={push}>push</button>
    <button onClick={pop}>pop</button>
    </>
}

export default main;