import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class AboutPage extends Component {


  goToCreate = () => {
    this.props.history.push('/create')
  }

  render() {
    return (
    
          <div>
            <div>
              <p>
                Welcome to Sounds Simple! A stereo system configuration app. Choosing to create a new high-fidelity home stereo system can be easy. Sounds Simple will guide you in picking all the necessary components and alert you to any potential component mismatches. Just click below to start! 
                <br></br>
                <br></br>
                <div className="button">
                <button onClick={this.goToCreate} >Create System!</button>
                </div>
              </p>
            </div>
          </div>

    )
  }
}


const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(AboutPage);