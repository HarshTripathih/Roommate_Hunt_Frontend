import React, { Component } from 'react';
import './Motto.css'

class MottoText extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p className='textHeader'> Our Motto </p>
                <p className='textContent'>The Roommate Hunt is inspired by a real life issue that the founders faced when they first moved to India from different parts of the world. At Roommate Hunter, we want to make sure that moving to a new place is as seamless and easy as possible. The Roommate Hunter is the one stop solution to accelerate your ideal roommate search.</p>
            </div>

         );
    }
}
 
export default MottoText;