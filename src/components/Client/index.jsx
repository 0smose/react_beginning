import React from 'react';

class Client extends React.Component {
    render() {
      let { firstName, lastName, job, img } = this.props;
      console.log(firstName, lastName);
  
      return (
        <>
         <img src={`${img}`} className="card-img-top"></img>
          <h1>{firstName} {lastName}</h1>
           {job} 
        </>
         
        
      );
    }
  }
 
export default Client;