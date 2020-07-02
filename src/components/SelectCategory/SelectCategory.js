import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCategory extends Component {

    goToChoose = () => {
        this.props.history.push('/choose')
    }

    render() {
        return (
            <div>
                <h1>Select a Category to Begin!</h1>

                <div>
                    <h2>Source Components</h2>
                    <button onClick={this.goToChoose}>Add Component</button>
                </div>
                <div>
                    <h2>Amplification</h2>
                    <button onClick={this.goToChoose}>Add Component</button>
                </div>
                <div>
                    <h2>Speakers</h2>
                    <button onClick={this.goToChoose}>Add Component</button>
                </div>
                <div>
                    <h2>Cables</h2>
                    <button onClick={this.goToChoose}>Add Component</button>
                </div>
                <div>
                    <h2>Accessories</h2>
                    <button onClick={this.goToChoose}>Add Component</button>
                </div>

                <div>
                    <h2>System Information</h2>
                    <h3>System Name</h3>
                    <p>Description:</p>
                    <p>Recommendations:</p>
                    <p>Total Price:</p>
                    <p>Most Expensive Component:</p>
                    <p>Appropriate for a room of size:</p>
                    <p>Analog/digital:</p>
                    <p>Potential Component Mismatches:</p>
                </div>
                <div>
                    
                    <button onClick={this.goToChoose}>Save System</button>
                    <button onClick={this.goToChoose}>Delete System</button>
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(SelectCategory);