import React, { Component } from 'react'
import './PostHeader.css'

class PostHeader extends Component {

    render() {

        const { title, price, time } = this.props;

        return (
            <div id="postHeader">
                <ul>
                    <li>
                        {title}
                    </li>
                    <li>
                        Budget: {price}
                    </li>
                    <li>
                        Night Time: {time}
                    </li>
                </ul>
            </div>
        )
    }
}

export default PostHeader
