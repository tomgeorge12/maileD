import React, { Component } from 'react';
import PropTypes from 'prop-types';

class login extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <input type="password" />
                <button>{"Login"}</button>
            </div>
        );
    }
}

export default login;