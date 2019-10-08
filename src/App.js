import React, {Component} from 'react';
import Counter from './Components/Counter';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import ExtendBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';



class App extends Component{
  render() {
  return (
    <div className="App">
    <Counter  />
    <Greet name="Geo"/>
    <Welcome name=" Geovic" /> 
 
    <ExtendBind />


    <ParentComponent />

    <UserGreeting />

    
    </div>
  );
}
}

export default App;
