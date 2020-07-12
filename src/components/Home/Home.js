import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css'

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
                <h3>Create New System</h3>
                <button onClick={this.goToCreate}>Get Started!</button>
                <button onClick={this.goToAbout}>About</button>
            </div>
            <div className="Create">
                <h3>View Existing Systems</h3>
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