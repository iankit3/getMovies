import React from 'react';
import Head from './components/head-component'
import List from './components/list-component'

class App extends React.Component{
   render(){
       return(
           <div>   
            <Head />
            <List />
           </div>
       )
   }
}

export default App;
