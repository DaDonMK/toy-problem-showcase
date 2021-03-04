import React, { Component } from 'react';

export default class Sum extends Component{

    constructor(){
    super()
        this.state={
            input1 : '',
            input2: '',
            sum: null
        }
    }


    setVal1(val){
        this.setState({input1 : parseInt(val, 10)})
    }

    setVal2(val){
        this.setState({input2 : parseInt(val, 10)})
    }

    Suming(num1, num2){
        let result = num1 + num2
        this.setState({sum: result})
        
    }

    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" type="number" onChange={(event) => this.setVal1(event.target.value)}></input>
                <input className="inputLine" type="number" onChange={(event) => this.setVal2(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.Suming(this.state.input1, this.state.input2)}>Sum</button>
                <span className="resultsBox">Sum: {(this.state.sum)}</span>
            </div>
        )
    }
}

//try input value after