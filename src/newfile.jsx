import React from 'react'

const SimpleComponent = () => {
  return <div>Example</div>
}

class ClassComponent extends React.Component {
  render() {
    return <div>Example1</div>
  }
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

console.log('arun')

class Newfile extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, this is first page called <SimpleComponent /> {element}  <ClassComponent /> </h1>
      </div>
    )
  }
}

export default Newfile;