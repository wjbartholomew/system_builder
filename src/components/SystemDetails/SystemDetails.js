import React, { Component } from 'react';
import { connect } from 'react-redux';

class SystemDetails extends Component {

    render() {
        return (
            <div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(SystemDetails);