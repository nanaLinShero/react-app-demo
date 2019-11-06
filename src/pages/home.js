import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <p>这是首页</p>
                <Link to="/about">go to About</Link>
            </div>
        );
    }
}

export default Home;