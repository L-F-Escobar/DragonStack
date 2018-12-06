import React, { Component } from 'react';

const DEFAULT_GENERATION = { generationId: "", expiration: ""};

// By extending, this class gets preloaded with a much of methods & properties.
class Generation extends Component {
    state = { generation: DEFAULT_GENERATION };
    // constructor() {
    //     this.state = {};
    // } //same thing

    componentDidMount() {
        this.fetchGeneration();
    }
    
    fetchGeneration = () => {
        fetch("http://localhost:5000/generation")
            .then(response => response.json())
            .then(json => {
                console.log('json:', json)

                this.setState({ generation: json.generation });
            })
            .catch(error => console.log('error', error));
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