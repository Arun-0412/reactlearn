import React, { useState, useEffect, createContext, useContext, useRef, useReducer, useCallback, useMemo } from 'react';

function Hookslearn() {


  // Hooks only called on top level of the component. the component must be function. or else the hooks will not work

  // 1. use state start 

  // usestate will declare only on the parent class. and usestate will used for change the const value by accessing
  // set method, that is const [variable name, variable access name] = useState(need to display initialy).
  // when we need to change the useState value, we need to use variable access name to update the value
  
  function Usestate() { // function name this will be called to run this section
    const [count, setCount] = useState(0); // usestate 

    const [click, setArun] = useState('Start');

    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
    return <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}. and now it's a my new {setCar.brand = "Audi"}. updated from {car.brand}</p>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Add Click Count </button>
      <button onClick={() => setCount(count - 1)}> Delete Click Count  </button>
      <p>the click text is {click} </p>
      <button onClick={() => setArun('clicked')}>1</button>
    </div>;


  }

  // 1. use state end 

  // 2. use effect start

  // use effect is used for getting the effects of the component. it means anything changed in this
  // component the default useeffect will call each time rendor. there are three types of calling
  // rendor on the 1st time load,based on the master rendor [],based on the property and state.

  function Useeffect() {
    // const [demo, setDemo] = useState(0); // method 1 rendor on the 1st time load

    // useEffect(() => { 
    //   setTimeout(() => {
    //     setDemo((demo) => demo + 1);
    //   }, 1000);
    // });

    // return <h1>I've rendered {demo} times!</h1>;

  // const [count, setCount] = useState(0); //method 2 based on the master rendor []
  // const [calculation, setCalculation] = useState(0);

  // useEffect(() => {
  //   setCalculation(() => count * 2);
  // }, [count]); // we need to add the variable name here


  // return (
  //   <>
  //     <p>Count: {count}</p>
  //     <button onClick={() => setCount((c) => c + 1)}>+</button>
  //     <p>Calculation: {calculation}</p>
  //   </>

  const [count, setCount] = useState(0); //method 3 based on the property and state

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
  }

  // 2. use effect end

  // 3. use context start

//   function Component1() { // basic method to pass the state to another component
//   const [user, setUser] = useState("default name");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//        <button onClick={()=>setUser('arun')}>update name</button>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 user={user} />
//     </>
//   );
// }

// function Component4({ user }) {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 user={user} />
//     </>
//   );
// }

// function Component5({ user }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }


const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
       <button onClick={()=>setUser('mozhi')}>update name</button>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext); // usercontext is a const name

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

  // 3. use context end

  // 4. use ref start

  function Userefmethod1() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
  
    useEffect(() => {
      count.current = count.current + 1;
    });
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    );
    
  }

  function Userefmethod2() {
    const inputElement = useRef();
  
    const focusInput = () => {
      inputElement.current.focus();
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
  }
  
  function Userefmethod3() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );
  }

  // 4. use ref end

  // 5. use reducer start

  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return state;
    }
  };
  
  function Usereduce() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
  
    const handleComplete = (todo) => {
      dispatch({ type: "COMPLETE", id: todo.id });
    };
  
    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </>
    );
  }

  function Usereduce2() {

      function tester(state,action){
        // if(action.type == 'plus'){
        //   return state + 1;
        // }
        // else {
        //   return state - 1;
        // }
        switch(action.type){
          case 'plus' :
            return state + 1;
          case 'minus' :
            return state - 1;
          default:
            return state;
        }
      }

      const [test,dispatch] = useReducer(tester,0);
      return <>
      initial state of value - {test}

      <button onClick={()=>dispatch({type:'plus'})}>+</button>
      <button onClick={()=>dispatch({type:'minus'})}>-</button>

      </>;
  }

  // 5. use reducer end

  // 6. use callback start 

  const Usecallbackmethod = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    // const addTodo = () => { // method 1
    //   setTodos((t) => [...t, "New Todo"]);
    // };

    const addTodo = useCallback(() => { // method 2
      setTodos((t) => [...t, "New Todo"]);
    }, [todos]);
  
    return (
      <>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
  };

  const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };

  

  // 6. use callback end 

  // 7. use memo start 

  function getRandomNumber() {
    let randomNumber = '';
    for (let index = 0; index < 10; index++) {
      if (index === 9) {
      randomNumber = Math.random();
      }
    }
    return randomNumber;
  }

  function Usememodemo () {
    const [reRender, setReRender] = useState();
    const [changeIt, setChangeIt] = useState();
    const randomNum = useMemo (() => getRandomNumber(), [changeIt]);
    console.log('rerendor');
    // const randomNum = getRandomNumber();
    return (
      
    <div>
      {/* <h1>{Math.random()}</h1> */}
    <h1>{randomNum}</h1>
    <button onClick={() => setReRender(Math.random())}>Rerender</button>
    <button onClick={() => setChangeIt(Math.random())}>Changeit</button>
    </div>
    );
  }

  // 7. use memo end 

  return (
    <div>

       1. use state start  
      <Usestate />

       1. use state end  
       2. use effect start  
      <Useeffect />

       2. use effect end  
       3. use context start  
      <Component1/>

       3. use context end  
       4. use ref Start  
      <Userefmethod1 />
      <Userefmethod2 />
      <Userefmethod3 />
       4. use ref end 
       5. use reducer start  
      <Usereduce/> <br/><br/>
<Usereduce2/><br/><br/>
       5. use reducer end 

       6. use callback Start

       <Usecallbackmethod /> 

       6. use callback end

       7. use memo start 
<Usememodemo />
       7. use memo end
    </div>

  );
}

export default Hookslearn;
