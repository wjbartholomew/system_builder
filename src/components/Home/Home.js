import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {


goToCreate = () => {
    this.props.history.push('/create')
}

goToAbout = () => {
    this.props.history.push('/about')
}

goToExisting = () => {
    this.props.history.push('/existing')
}


    render() {
        return (
            <>
            <div className="Create">
                <p>Create New System</p>
                <button onClick={this.goToCreate}>Get Started!</button>
                <button onClick={this.goToAbout}>About</button>
            </div>
            <div>
                <p>View Existing Systems</p>
                <button onClick={this.goToExisting}>View Existing</button>
            </div>
             
            </>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(Home);