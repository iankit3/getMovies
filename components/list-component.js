import React from 'react';

import Elem from './elem-component';
import Data from '../services/data-service';

class List extends React.Component{
    constructor() {
        super();
        this.state = {
            name:'abcd',
            data: []
        }
    }

  getData(){
      Data.getData('https://api.github.com/users/iankit3').then( (res) => this.setState({name:res.name,data:res}) )
  }

  render(){
      //var ELEM = this.state.data.map( (e) =>  )
            //  <button type="button" onClick={this.getData.bind(this)}>getData</button>
            //  <h3>{this.state.name}</h3>
      return(
          <div className="list-wrapper">
             <Elem />
          </div>
      )
  }
}

export default List;