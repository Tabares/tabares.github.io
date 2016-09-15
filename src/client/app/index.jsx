import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/Component.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      header: "the title",
      body: "This is my body injected to the Component",
      data: 0
    }
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber(){
    this.setState({data: this.state.data + 1})
  }

  unmountApp(){
    setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
  }

  render () {
    return (
      <div>
        <h1> Profile Page!</h1>
        <br/><h3>Main Component (React)!</h3>
        <AwesomeComponent/>


      </div>
    );
  }
}

App.defaultProps = {
   footer: "Injected footer...",
}

render(<App/>, document.getElementById('app'));
