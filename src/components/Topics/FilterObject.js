import React, { Component } from 'react';

export default class FilterObject extends Component{

    constructor(){
        super()

        this.state = {

            students: [
                {
                    name: 'Alex',
                    grade: 85,
                    age: 10
                },
                {
                    name: 'Alice',
                    grade: 97,
                    age:20
                },
                {
                    name : 'Mo',
                    grade: 76,
                    age:30
                }
            ],

            userInput : '',
            filteredArray : []
        }
    }

    handleChange(val){
        this.setState({userInput : val})
    }

    filterStudents(prop){
        let students = this.state.students
        let filteredStudents = []

        for(var i = 0; i < students.length; i++){
            if (students[i].hasOwnProperty(prop)){
                filteredStudents.push(students[i])
            }
        }
        this.setState({filteredArray: filteredStudents})
    }


    render(){
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original:{ JSON.stringify(this.state.students, null, 10)} </span>
                <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterStudents(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered : {JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}