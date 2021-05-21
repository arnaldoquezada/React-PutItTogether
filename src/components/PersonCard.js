import React, { Component } from 'react';
import './component.scss';

class PersonCard extends Component{
    addYear = ()=>{
        this.setState({
            age:this.state.age +1
        });

    }
    constructor(props){
        super(props);
        this.state = {
            age:this.props.age
        }
    }
   render(){
       const {firstName, lastName, age, hairColor} = this.props;
       return(
           <div className="content">
                <div className="person-Card">
                    <h1>{lastName}, {firstName} </h1>
                    <p>Age:{this.state.age}</p>
                    <p>Hair Color:{hairColor}</p>
                    <button onClick= {this.addYear} >Birthday Button for {firstName} {lastName}</button>
                </div> 
           </div>
   );
}
}
export default PersonCard;