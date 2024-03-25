import React, { Component } from 'react'
import './Filter.css'
import mapIcon from '../../../assets/map-icon.png'
import listIcon from '../../../assets/list-icon.png'


export class Filter extends Component {
    constructor(){
        super()
        this.state = {
            time: '',
          };
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { view, changeView, isLoggedIn, location, preference, price, changeHandler } = this.props
        const { time } = this.state
        // console.log(time)
        // redirect user to login before making a post
        const makePostButtonUrl = isLoggedIn ? '/makepost' : 'login'
        return (
            <div>
                <div id='topHeading'>
                    <h2 className='roomHeading'>Find your next roommate</h2>
                    <a href={makePostButtonUrl}>
                        <button className='postButton'>Make a Post</button>
                    </a>
                </div>
                <table className='filter'>
                    <tbody>
                        <tr>
                            <td className='filterItem'>
                                <select name="location" value={location} id="location" className='select select1' onChange={changeHandler}>
                                    <option value="">Location</option>
                                    <option >Andhra Pradesh</option>
                                    <option >Arunachal Pradesh</option>
                                    <option >Assam</option>
                                    <option >Bihar</option>
                                    <option >Chhattisgarh</option>
                                    <option >Goa</option>
                                    <option >Gujarat</option>
                                    <option >Haryana</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Jharkhand</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Maharashtra</option>
                                    <option>Manipur</option>
                                    <option>Meghalaya</option>
                                    <option>Mizoram</option>
                                    <option>Nagaland</option>
                                    <option>Odisha</option>
                                    <option>Punjab</option>
                                    <option>Rajasthan</option>
                                    <option>Sikkim</option>
                                    <option>Tamil Nadu</option>
                                    <option>Telangana</option>
                                    <option>Tripura</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Uttarakhand</option>
                                    <option>West Bengal</option>
                                    <option>Andaman and Nicobar Islands</option>
                                    <option>Chandigarh</option>
                                    <option>Delhi</option>
                                    <option>Puducherry</option>
                                </select>
                            </td>
                            <td className='filterItem'>
                                <select name="preference" value={preference} id="preference" className='select select3' onChange={changeHandler}>
                                    <option value="">Preference</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Student">Student</option>
                                    <option value="Professional">Professional</option>
                                    <option value="Elderly">Elderly</option>
                                    <option value="No Smoking">No Smoking</option>
                                    <option value="No Drinking">No Drinking</option>
                                    <option value="No Partying">No Partying</option>
                                    <option value="No Pets">No Pets</option>
                                    <option value="420 Friendly">420 Friendly</option>
                                </select>
                            </td>
                            {/* <td className='filterItem'>
                                <select name="time" value={time} id="time" className='select select3' onChange={this.changeHandler}>
                                    <option value="">Time</option>
                                    <option>9:00 PM</option>
                                    <option>9:30 PM</option>
                                    <option>10:00 PM</option>
                                    <option>10:30 PM</option>
                                    <option>11:00 PM</option>
                                    <option>11:30 PM</option>
                                    <option>12:00 PM</option>
                                    <option>12:30 PM</option>
                                </select>
                            </td> */}

                            <td className='filterItem'>
                                <select name="price" value={price} id="price" className='select select4' onChange={changeHandler}>
                                    <option value="">Price</option>
                                    <option >1500/Rs-2000/Rs</option>
                                    <option >2000/Rs-3500/Rs</option>
                                    <option >3500/Rs-4500/Rs</option>
                                    <option >4500/Rs-5500/Rs</option>
                                    <option >5500/Rs-6500/Rs</option>
                                    <option >6500/Rs-7500/Rs</option>
                                    <option >7500/Rs-8500/Rs</option>
                                    <option >8500/Rs-10,000/Rs</option>
                                </select>
                            </td>
                            <td className='filterItem viewIconContainer'>
                                {view === 'list' ?
                                    <input type="image" src={mapIcon} onClick={() => changeView()} id='viewIcon' alt='Map View' /> :
                                    <input type="image" src={listIcon} onClick={() => changeView()} id='viewIcon' alt='List View' />
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Filter
