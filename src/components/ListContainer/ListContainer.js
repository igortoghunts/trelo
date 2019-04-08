import React, { Component } from 'react';
import { connect } from 'react-redux';

import { lists } from '../../store/action/lists';
import List from './List/List';

class Logo extends Component {

    ComponentDidMount = () => {
        this.props.lists();
    };

    render () {
        return (       
            <div className="lists-container">
                <List />
                <button className="add-list-btn btn">Add a list</button>
            </div>
        );
    }
}

export default connect (null, { lists })(Logo);

