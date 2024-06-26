import React, { Component } from 'react';
import mottoImg from '../../../assets/roomies.jpg'
import mottogirl from '../../../assets/motto2.jpg'
import './Motto.css'
import MottoText from './MottoText'

class Motto extends Component {
    state = {}


    render() {
        return (
            <>
            <div className='ContainerProp'>
                <div >
                    <img src={mottoImg} className='roommatesImage' alt='motto' />
                </div>
                <div className='mottoText'>
                    <MottoText />
                </div>
                <div>
                    <a href='/finder'>
                        <button className='LearnMoreButton'>Learn More</button>
                    </a>
                </div>
            </div>
            <div >
                <img src={mottogirl} className='motogirl' alt='motto'/>
            </div>
            </>
        );
    }
}

export default Motto;