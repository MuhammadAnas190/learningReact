import React, {Component} from 'react';
import './App.css';
import "./Components/home/Home"
import Home from "./Components/home/Home";
import Ninja_add from "./Components/addNinja/Ninja_add";

class App extends Component {
    state = {
        ninjas: [
            {name: "Anas", age: 20, designation: "tester", id: 1},
            {name: "Umer", age: 22, designation: "testing", id: 2},
            {name: "Atif", age: 24, designation: "tested", id: 3},

        ]
    };
    addNinja = (ninja) => {
        console.log(ninja);
        ninja.id = Math.random();
        // this.state.ninjas.push(ninja)
        /**
         * using the above ninjas array and setting up a clone of that array, to add new arrays
         */
        let ninjas = [...this.state.ninjas, ninja];
        this.setState({
            ninjas: ninjas
        })
    };
    // HandlerClick = (e) => {
    //     this.setState({
    //         name: "Super"
    //     })
    // };
    // HandleChange = (e) => {
    //     this.setState ({
    //         name: e.target.value
    //     })
    // };
    // HandleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Submitted check" + this.state.name);
    // };
    deleteNinjas = (id) => {
        // console.log(id);
        /**
         * Filter the array and return the new array. If equals then filter it.
        */
        let Ninjas = this.state.ninjas.filter(
            ninja => {
                return ninja.id !== id
            });
        this.setState({
                ninjas: Ninjas
            }
        )
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Home Ninjas={this.state.ninjas} deleteNinja={this.deleteNinjas}/>
                    <h1>Welcome to React {this.state.name}</h1>
                    {/*<button onClick={this.HandlerClick}>Click Me</button>*/}
                    {/*<form onSubmit={this.HandleSubmit}>*/}
                        {/*<input type="text" onChange={this.HandleChange}/>*/}
                        {/*<button>Submit</button>*/}
                    {/*</form>*/}
                </header>
                <Ninja_add newNinja={this.addNinja}/>
            </div>
        );
    }
}

export default App;
