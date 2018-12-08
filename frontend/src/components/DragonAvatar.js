import React, {Component} from 'react';

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