import React, {Component} from "react";

class Home extends Component {
    render() {
        /**
         * Destructuring props
         */
        const {Ninjas} = this.props;
        const ninjaList = Ninjas.map (Ninjas => {
            return Ninjas.age > 18 ? (
                // Ternary Operator OR could use If condition
                // Basically outputting conditional code
                 <div className="ninjas" key={Ninjas.id}>
                    <p>Welcome {Ninjas.name} and your age is {Ninjas.age}</p>
                    <p>Your Designation {Ninjas.designation}</p>
                </div>
            ) : (<div className="ninjas" key={Ninjas.id}>
                <p>Welcome {Ninjas.name} </p>
                <p>You are not eligible for job because your age is {Ninjas.age} and Your Designation will be {Ninjas.designation}</p>
            </div>);
        });
        

        return (
            <div className="ninjas-list">
                {ninjaList}
            </div>
        )
    }
}

export default Home;