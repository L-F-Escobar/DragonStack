import React, {Component} from 'react';
import { patchy, plain, skinny, slender, sporty, spotted, stocky, striped } from '../assets';

const propertyMap = {
    backgroundColor: {
        black: '#263238', 
        white: '#CFD8DC', 
        green: '#A5d6a7', 
        blue: '#0277bd'
    },
    build: {slender, stocky, sporty, skinny},
    pattern: {plain, striped, spotted, patchy},
    size: {small: 100, medium: 140, large: 180, enormous: 220}
};

class DragonAvatar extends Component {
    render() {
        // props = properties inheritance from parent to child a data object
        const { dragon } = this.props.dragon;

        return (
            <div>
                <span>Generation Id: {dragon.generationId}. </span>
                <span>Dragon Id: {dragon.dragonId}. </span>

                {dragon.traits.map(trait => trait.traitValue).join(', ')}
            </div>
        )
    }
}

export default DragonAvatar;