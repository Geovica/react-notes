import React, {Component} from 'react';
import './App.css'
// import Welcome  from './Components/Welcome';
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'



class App extends Component{
  render() {
  return (
    <div className="App">
      {/* <EventBind /> */}
      <ParentComponent />
    {/* <Welcome /> */}


    </div>
  );
}
}

export default App;
