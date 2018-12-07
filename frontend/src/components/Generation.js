import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: "", expiration: ""};
const MINIMUM_DELAY = 3000;

// By extending, this class gets preloaded with a much of methods & properties.
class Generation extends Component {
    state = { generation: DEFAULT_GENERATION };
    timer = null;
    // constructor() {
    //     this.state = {};
    // } //same thing

    // Life cycle hook
    componentDidMount() {
        this.fetchNextGeneration();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    
    fetchGeneration = () => {
        fetch("http://localhost:5000/generation")
            .then(response => response.json())
            .then(json => {
                console.log('json:', json);

                this.setState({ generation: json.generation });
            })
            .catch(error => console.log('error', error));
    }

    fetchNextGeneration = () => {
        this.fetchGeneration();

        // let allows us to re-assign the local variable later
        let delay = new Date(this.state.generation.expiration).getTime() - 
                    new Date().getTime();

        if (delay < MINIMUM_DELAY) {
            delay = MINIMUM_DELAY;
        };

        this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
    }
    
    render() {
        // generation is an object
        const { generation } = this.state;
        // const generation = this.state.generation; //same thing

        return (
            <div>
                <h3>Generation {generation.generationId}. Expires on:</h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>

        )
    }
}

export default Generation;