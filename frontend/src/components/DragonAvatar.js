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

    get DragonImage() {

        const dragonPropertyMap = {};
        // console.log('DRAGON', this.props.dragon.dragon);
        // console.log('TRAITS', this.props.dragon.dragon.traits);

        this.props.dragon.traits.forEach(trait => {
            // console.log('TRAIT666', trait);
            const { traitType, traitValue } = trait;

            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        });

        const { backgroundColor, build, pattern, size } = dragonPropertyMap;

        const sizing = { width: size, height: size };

        return (
            <div className='dragon-avatar-image-wrapper'>
                <div className='dragon-avatar-image-background' style={{ backgroundColor, ...sizing}}></div>
                    <img src={pattern} className='dragon-avatar-image-pattern' style={{ ...sizing }}/>
                    <img src={build} className='dragon-avatar-image' style={{ ...sizing }}/>
            </div>
        );
    }

    render() {
        // console.log('PROPS', this.props);
        // console.log('DRAGON', this.props.dragon);
        
        // props = properties inheritance from parent to child a data object
        const { dragon } = this.props;

        if (!dragon.dragonId) return <div></div>;

        return (
            <div>
                <span>Generation Id: {dragon.generationId}. </span>
                <span>Dragon Id: {dragon.dragonId}. </span>

                {dragon.traits.map(trait => trait.traitValue).join(', ')}
                { this.DragonImage }
            </div>
        )
    }
}

export default DragonAvatar;