import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './components/Component.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/Main.jsx'; // Our custom react component
import Main2 from './components/Main2.jsx'; // Our custom react component


import RaisedButton from 'material-ui/RaisedButton';


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
        <Main/>
        <Main2/>

        <AwesomeComponent/>
        <MuiThemeProvider>
          <MyAwesomeReactComponent />
        </MuiThemeProvider>
      </div>
    );
  }
}

App.defaultProps = {
   footer: "Injected footer...",
}


injectTapEventPlugin();
render(<App/>, document.getElementById('app'));
