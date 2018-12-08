import React, { Component } from 'react';
import DragonAvatar from './DragonAvatar.js';

const DEFAULT_DRAGON = {
    dragonId: "", 
    bday: "", 
    nickName: "", 
    traits: [], 
    generationId: ""
};

// By extending, this class gets preloaded with a much of methods & properties.
class Dragon extends Component {
    state = { dragon: DEFAULT_DRAGON };

    // Life cycle mount
    componentDidMount() {
        this.fetchDragon();
    }

    
    fetchDragon = () => {
        fetch("http://localhost:5000/dragon/new")
            .then( (response) => response.json())
            .then(json => {
                console.log('JSON DOG:', json);

                this.setState({ dragon: json.dragon });
            })
            .catch(error => console.error('error', error));
    }
    
    render() {
        return <DragonAvatar dragon={this.state}/>;
    }
}

export default Dragon;