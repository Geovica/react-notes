import React, {Component} from 'react';
import './App.css'
// import Welcome  from './Components/Welcome';
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import ConditionalRendering from './Components/ConditionalRendering'



class App extends Component{
  render() {
  return (
    <div className="App">
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      <ConditionalRendering />
    {/* <Welcome /> */}


    </div>
  );
}
}

export default App;
