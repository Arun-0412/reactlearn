import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Routerwithdata from "./routerwithdata/main";
// import Hooks from "./hooks/hookslearn";
// import Menu from './demo/menu'
// import App from './App';
// import Newfile from './newfile';
import Redux from './redux/main';
// import Reduxtoolkit from './redux/toolkit/master';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* Adding the new file in the menu start */}
    {/* <div className="container">
    <Newfile /> </div> */}
    {/* <Routerwithdata/> */}
    {/* <Hooks /> */}
     {/* <Menu/> */}
     <Redux />
    {/* Adding the new file in the menu end   */}
    {/* <Reduxtoolkit /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
