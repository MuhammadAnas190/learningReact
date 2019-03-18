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
        // this.state.id = Math.random();

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

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Home Ninjas={this.state.ninjas}/>
                    <h1>Welcome to React {this.state.name}</h1>
                    {/*<button onClick={this.HandlerClick}>Click Me</button>*/}
                    {/*<form onSubmit={this.HandleSubmit}>*/}
                        {/*<input type="text" onChange={this.HandleChange}/>*/}
                        {/*<button>Submit</button>*/}
                    {/*</form>*/}
                    <Ninja_add newNinja={this.addNinja}/>
                </header>
            </div>
        );
    }
}

export default App;