import React, { Component } from 'react';

export default class FilterString extends Component{

    constructor(){
        super()

        this.state = {
            unFilteredArray: ['tiger', 'lion', 'cheetah', 'bear', 'shark', 'monkey'],
            userInput: '',
            filteredArray : []
        }
    }

    UpdateUser(val){
        this.setState({userInput: val})
    }

    Sorted(userInput){
        let animals = this.state.unFilteredArray
        let newarr = this.state.filteredArray

        for(var i = 0; i < animals.length; i++){
            if(animals[i].includes(userInput)){
                newarr.push(animals[i])
            }
        }
        this.setState({filteredArray : newarr})
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String</h4>
                <span className="puzzleText">Animals: {(JSON.stringify(this.state.unFilteredArray, null, 10) )}</span>
                <input className="inputLine" onChange={(event) => this.UpdateUser(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.Sorted(this.state.userInput)}>Sort</button>
                <span className="resultsBox filterStringRB">Filtered Animals: {(JSON.stringify(this.state.filteredArray, null, 10) )}</span>
            </div>
        )
    }
}