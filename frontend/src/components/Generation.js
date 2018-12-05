import React, { Component } from 'react';

// By extending, this class gets preloaded with a much of methods & properties.
class Generation extends Component {
    render() {
        const generation = { "generationId": 999, expiration: "2020-06-30"};
        return (
            <div>
                <h3>Generation {generation.generationId}. Expires on:</h3>
                <h4>{new Date(generation.expiration).toString()}</h4>
            </div>

        )
    }
}

export default Generation;