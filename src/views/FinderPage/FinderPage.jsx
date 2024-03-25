import React, { Component } from 'react'
import './FinderPage.css'
import { Filter, Posts, MapFinder } from '../../components/finderPageComponents/index.js'


export class FinderPage extends Component {
    constructor() {
        super()
        this.state = {
            view: 'list',
            location: '',
            preference: '',   
            price: '',
            time: '' 
        }
    }

    changeView() {
        let { view } = this.state
        if (view === 'list') {
            this.setState({ view: 'map' })
        } else {
            this.setState({ view: 'list'})
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value 
        });
    }

    render() {
        const { view, location, preference, price, time } = this.state
        const { isLoggedIn } = this.props
        // console.log(time);
        return (
            <div className='finder'>
                <Filter 
                    view={ view }
                    changeView={() => this.changeView()}
                    isLoggedIn={isLoggedIn}
                    changeHandler={ e => this.changeHandler(e)}
                    location={location}
                    preference={preference}
                    price={price}
                    time={time}
                />
                <div id='finderView'>
                    {view==='list' && 
                    <React.Fragment>
                        <Posts 
                            location={location}
                            preference={preference}
                            price={price}
                            time={time}
                        />
                        {/* <Pagination /> */}
                    </React.Fragment>
                    }
                    {view==='map' && <MapFinder />}
                </div>
            </div>
        )
    }
}

export default FinderPage
