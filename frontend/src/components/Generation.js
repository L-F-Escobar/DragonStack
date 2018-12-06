import React, { Component } from 'react';

// By extending, this class gets preloaded with a much of methods & properties.
class Generation extends Component {
    state = { generation: { generationId: 999, expiration: "2020-06-30" } };
    // constructor() {
    //     this.state = {};
    // } //same thing

    componentDidMount() {
        this.fetchGeneration();
    }
    
    fetchGeneration = () => {
        fetch("http://localhost:5000/generation")
            .then( response => console.log('response6666', response));
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