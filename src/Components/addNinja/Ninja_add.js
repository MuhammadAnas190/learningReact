import React, { Component }  from "react";

class Ninja_add extends Component {
    state = {
        name: null,
        age: null,
        designation: null
    };
    handleAgeChange = (e) => {
        const regex = /^[0-9\b]+$/;
        return regex.test(e.target.value) ? (
            this.setState ({
                age: e.target.value
            })
        ) : null
    };
    handleChange = (e) => {
        return (
            this.setState ({
                [e.target.id] : e.target.value
            })
        )
    };
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.newNinja(this.state);
    };

    render (){
        return (
            <div className="AddNinja">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleAgeChange}/>
                    <label htmlFor="designation">Designation:</label>
                    <input type="text" id="designation" onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Ninja_add