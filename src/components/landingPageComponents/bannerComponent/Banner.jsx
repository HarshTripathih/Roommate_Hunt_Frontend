import React, { Component } from 'react';
import './Banner.css'

class Banner extends Component {
    state = {  }
    render() { 
        return (
            <div className='bgImage'>
                    {/* Add NavBar Here. */}
                <div>
                    <h3 className='bannerTextHeader'>From Strangers to Apartment Allies: The Roommate Hunt </h3>
                    <p className='bannerText'>
                    New to India ? Just moved cities? Looking for someone to share a place with? You've come to the perfect place. The Roommate Hunt is your true friend which helps you find your next roommate!
                    </p>
                </div>
                <a href='/finder'>
                    <button className='seeAllListingsButton'>See all postings</button>
                </a>
            </div>
   
        );
    }
}
 
export default Banner;