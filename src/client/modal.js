import React, { Component } from 'react';
import PropTypes from 'prop-types';

class login extends Component {
    render() {
        const { title, content } = this.props;
        return (
            <div className="modal display" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" onClick={()=> {this.props.toggleModal("", "")}} data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{content}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={()=> {this.props.toggleModal("", "")}} className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;