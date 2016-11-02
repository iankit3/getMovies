import React from 'react';

import Data from '../services/data-service';

const URL = 'https://api.myapifilms.com/imdb/inTheaters?token=ad904c10-339c-4daa-b3cd-8fa80f52f583';

class Elem extends React.Component{

   constructor() {
        super();
        this.state = {
            data: []
        }
    }

  componentDidMount(){
      Data.getData(URL).then( (res) => this.setState({data:res.data.inTheaters[1].movies}) )
  }

  render(){
     var data = this.state.data; 
     
      return(
          <div>
              {data.map(function(e){
                  return (<div key={e.idIMDB} className="elem"> 
                  <a className="mv-card" target="_blank" href={e.urlIMDB}><img src={e.urlPoster} alt={e.title}/></a>
                  <div className="mv-details">
                     <h2>Title: {e.title}</h2>
                     <em>Year: {e.year}</em> Rating<code> {e.rating}</code>
                     <p>{e.simplePlot}</p>
                  </div>   
                  </div>)
              })}
          </div>
      )
  }
}

export default Elem;