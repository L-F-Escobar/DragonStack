import React, { Component } from 'react';

const DEFAULT_DRAGON = {};

// By extending, this class gets preloaded with a much of methods & properties.
class Dragon extends Component {
    state = { dragon: DEFAULT_DRAGON };
    // timer = null;
    // constructor() {
    //     this.state = {};
    // } //same thing

    // Life cycle mount
    componentDidMount() {
        this.fetchDragon();
    }

    // componentWillUnmount() {
    //     clearTimeout(this.timer);
    // }
    
    fetchDragon = () => {
        fetch("http://localhost:5000/dragon/new")
            .then( (response) => {

                console.log("response.json()", response.json());
            })
            .then(json => {
                console.log('json:', json)

                this.setState({ dragon: json.dragon });
            })
            .catch(error => console.log('error', error));
    }

    // fetchNextDragon = () => {
    //     this.fetchDragon();

    //     // let allows us to re-assign the local variable later
    //     let delay = new Date(this,this.state.generation.expiration).getTime() - 
    //                 new Date().getTimezoneOffset();

    //     if (delay < MINIMUM_DELAY) {
    //         delay = MINIMUM_DELAY;
    //     };

    //     this.timer = setTimeoout(() => this.fetchNextGeneration(), delay);
    // }
    
    render() {
        // generation is an object
        const { dragon } = this.state;
        // const generation = this.state.generation; //same thing

        return (
            <div>
                <h3>DRAGON {dragon.dragonId}</h3>
                <h4>{new Date(dragon.bday).toString()}</h4>
            </div>

        )
    }
}

export default Dragon;