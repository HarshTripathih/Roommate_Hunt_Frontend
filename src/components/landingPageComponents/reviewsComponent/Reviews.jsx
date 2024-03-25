import React, { Component } from 'react';
import Review from './Review'
import './Review.css'
import userPhoto1 from '../../../assets/potrait2.jpg'
import userPhoto2 from '../../../assets/potrait3.jpg'
import userPhoto3 from '../../../assets/potrait4.jpg'



// We need to get users from server using a callback function.

const users = [
    {
        userPhoto: userPhoto3,
        userName: 'Harsh Tripathi',
        location: 'North | Delhi',
        review: 'I moved to Jalandhar from Delhi, and I can\'t imagine finding the perfect roommate so easily if it wasn\'t for The Roommate Hunt.'  
    },
    {
        userPhoto: userPhoto3,
        userName: 'Ujjwal Rastogi',
        location: 'North | Uttar Pradesh',
        review: 'Finding roommates was never this easy! I love this website. Especially being a university student, it helped me a lot.'
    },
    {
        userPhoto: userPhoto3,
        userName: 'Siddharth Kushwaha',
        location: 'North | Uttar Pradesh',
        review: 'Found my roommate and my life partner! These guys are the best! I\'m a working professional, and I move a lot. Thanks Roomate Hunt. '
    }
]


class Reviews extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='ReviewBox'>
                <Review userInfo={users[0]} />
                <Review userInfo={users[1]} />
                <Review userInfo={users[2]} />
            </div>


         );
    }
}
 
export default Reviews;