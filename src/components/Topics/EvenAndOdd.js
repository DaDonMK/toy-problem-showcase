import React, { Component } from 'react';

export default class EvenAndOdd extends Component{

    constructor(){
        super()

        this.state = {
            evenArray : [],
            oddArray : [],
            userInput : ''
        }
    }

    handleChanges(val){
        this.setState({ userInput : val })
    }

    assignEvenAndOdds(userInput) {
       
        let array = userInput.split(',')
        let even = []
        let odd = []

        for(var i = 0; i < userInput.length; i++){
            if(array[i] % 2 === 0){
                even.push(array[i])
            }else{
                odd.push(array[i])
            }

        }
        this.setState({evenArray : even, oddArray : odd})

    }


    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds</h4>
                <input className='inputLine' onChange={(event) => this.handleChanges(event.target.value)}></input>
                <button className='confirmationButton' onClick={() => (this.assignEvenAndOdds(this.state.userInput))}>Split</button>
                <span className="resultsBox">Evens: {this.state.evenArray}</span>
                <span className="resultsBox">Odds: {this.state.oddArray}</span>
            </div>  
        )
    }

}
