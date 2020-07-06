import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCategory extends Component {

    goToSource = () => {
        this.props.history.push('/choosesource')
    }
    goToAmplification = () => {
        this.props.history.push('/chooseamplification')
    }
    goToSpeakers = () => {
        this.props.history.push('/choosespeakers')
    }
    goToCables = () => {
        this.props.history.push('/choosecables')
    }
    goToAccessories = () => {
        this.props.history.push('/chooseaccessories')
    }

    deleteSource = (event) => {
        console.log('in delete source function');
        console.log('delete source event value:', event.target.value);
        this.props.dispatch({
            type: 'DELETE_SOURCE',
            payload: event.target.value
        })
    }
    deleteAmplification = (event) => {
        console.log('in delete source function');
        console.log('delete source event value:', event.target.value);
        this.props.dispatch({
            type: 'DELETE_AMPLIFICATION',
            payload: event.target.value
        })
    }
    deleteSpeakers = (event) => {
        console.log('in delete source function');
        console.log('delete source event value:', event.target.value);
        this.props.dispatch({
            type: 'DELETE_SPEAKERS',
            payload: event.target.value
        })
    }
    deleteCables = (event) => {
        console.log('in delete source function');
        console.log('delete source event value:', event.target.value);
        this.props.dispatch({
            type: 'DELETE_CABLES',
            payload: event.target.value
        })
    }
    deleteAccessories = (event) => {
        console.log('in delete source function');
        console.log('delete source event value:', event.target.value);
        this.props.dispatch({
            type: 'DELETE_ACCESSORIES',
            payload: event.target.value
        })
    }

    

    render() {
        return (
            <div>
                <h1>Select a Category to Begin!</h1>

                <div className="category">
                    <h2>Source Components</h2>
                    <div>
                        {this.props.state.source.map((item,index) => (
                            <div key={index} className="component">
                                <p>Brand: {item.brand}</p>
                                <p>Name: {item.name}</p>
                                <img src={item.image} alt={item.name}></img>
                                <button value={index} onClick={(event) => this.deleteSource(event)}>Delete Component</button>
                            </div>
                        ))}

                    </div>
                    <button onClick={this.goToSource}>Add Component</button>
                </div>
                <div>
                    <h2>Amplification</h2>
                    <div>
                        {this.props.state.amplification.map((item, index) => (
                            <div key={index} className="component">
                                <p>Brand: {item.brand}</p>
                                <p>Name: {item.name}</p>
                                <img src={item.image} alt={item.name}></img>
                                <button value={index} onClick={(event) => this.deleteAmplification(event)}>Delete Component</button>
                            </div>
                        ))}

                    </div>
                    <button onClick={this.goToAmplification}>Add Component</button>
                </div>
                <div>
                    <h2>Speakers</h2>
                    <div>
                        {this.props.state.speakers.map((item, index) => (
                            <div key={index} className="component">
                                <p>Brand: {item.brand}</p>
                                <p>Name: {item.name}</p>
                                <img src={item.image} alt={item.name}></img>
                                <button value={index} onClick={(event) => this.deleteSpeakers(event)}>Delete Component</button>
                            </div>
                        ))}

                    </div>
                    <button onClick={this.goToSpeakers}>Add Component</button>
                </div>
                <div>
                    <h2>Cables</h2>
                    <div>
                        {this.props.state.cables.map((item, index) => (
                            <div key={index} className="component">
                                <p>Brand: {item.brand}</p>
                                <p>Name: {item.name}</p>
                                <img src={item.image} alt={item.name}></img>
                                <button value={index} onClick={(event) => this.deleteCables(event)}>Delete Component</button>
                            </div>
                        ))}

                    </div>
                    <button onClick={this.goToCables}>Add Component</button>
                </div>
                <div>
                    <h2>Accessories</h2>
                    <div>
                        {this.props.state.accessories.map((item, index) => (
                            <div key={index} className="component">
                                <p>Brand: {item.brand}</p>
                                <p>Name: {item.name}</p>
                                <img src={item.image} alt={item.name}></img>
                                <button value={index} onClick={(event) => this.deleteAccessories(event)}>Delete Component</button>
                            </div>
                        ))}

                    </div>
                    <button onClick={this.goToAccessories}>Add Component</button>
                </div>

                <div>
                    <h2>System Information</h2>
                    <h3>System Name: {this.props.state.newSystem.name}</h3>
                    <p>Description: {this.props.state.newSystem.description}</p>
                    <p>Recommendations: {this.props.state.newSystem.recommendations}</p>
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