import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
        addAge : this.props.age
    }
    }

    addAgeToOne =() => {
        this.setState({addAge:this.state.addAge +1})
    }
    render(){
        const { firstName, lastName,hairColor } = this.props;
        return <div>
            <h1>{lastName} , {firstName}</h1>
            <h5>Age : {this.state.addAge} </h5>
            <h5>HairColor : {hairColor} </h5>
            <button onClick={this.addAgeToOne}>Birthday for {firstName} {lastName}</button>
        </div>
    }
}
export default PersonCard;