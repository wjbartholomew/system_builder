import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExistingSystemDetails.css'

class ExistingSystemDetails extends Component {

    render() {
        return (
            <div>
                <h1>System Details:</h1>
                Source(s):
                <br></br>
                {this.props.state.existingSystemComponents.map(item => {
                    if (item.system_id == this.props.state.systemToView && item.component_category === 1){
                        return < div key = { item.table_id } className = "component" >
                            <h3>Component</h3>
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <p>Description: {item.description}</p>
                            <p>Source Type: {item.source_type}</p>
                            <p>Price: ${item.price}</p>
                            <img src={item.image} alt={item.name}></img>
                            </div>
                    }
                })}
<br></br>
                Amplification:
                <br></br>
                {this.props.state.existingSystemComponents.map(item => {
                    if (item.system_id == this.props.state.systemToView && item.component_category === 2) {
                        return < div key={item.table_id} className="component" >
                            <h3>Component</h3>
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <p>Description: {item.description}</p>
                            <p>Price: ${item.price}</p>
                            <p>Power Output: {item.power_output}</p>

                            <img src={item.image} alt={item.name}></img>
                        </div>
                    }
                })}
                <br></br>
                Speakers:
                <br></br>
                {this.props.state.existingSystemComponents.map(item => {
                    if (item.system_id == this.props.state.systemToView && item.component_category === 3) {
                        return < div key={item.table_id} className="component" >
                            <h3>Component</h3>
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <p>Description: {item.description}</p>
                            <p>Sensitivity: {item.sensitivity}</p>
                            <p>Bass Output: {item.bass_output}</p>
                            <p>Price: ${item.price}</p>
                            <img src={item.image} alt={item.name}></img>
                        </div>
                    }
                })}
                <br></br>
                Cables:
                <br></br>
                {this.props.state.existingSystemComponents.map(item => {
                    if (item.system_id == this.props.state.systemToView && item.component_category === 4) {
                        return < div key={item.table_id} className="component" >
                            <h3>Component</h3>
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <p>Description: {item.description}</p>
                            <p>Price: ${item.price}</p>
                            <img src={item.image} alt={item.name}></img>
                        </div>
                    }
                })}
                <br></br>
                Accessories:
                <br></br>
                {this.props.state.existingSystemComponents.map(item => {
                    if (item.system_id == this.props.state.systemToView && item.component_category === 5) {
                        return < div key={item.table_id} className="component" >
                            <h3>Component</h3>
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <p>Description: {item.description}</p>
                            <p>Price: ${item.price}</p>
                            <img src={item.image} alt={item.name}></img>
                        </div>
                    }
                })}
                <br></br>
                <br></br>



                {/* <div>
                    <h2>System Information</h2>
                    <h3>System Name: {this.props.state.newSystem.newSystem.name}</h3>
                    <p>Description: {this.props.state.newSystem.newSystem.description}</p>
                    <p>Recommendations: {this.props.state.newSystem.newSystem.recommendations}</p>
                    <p>Total Price: ${this.totalSystemPrice()}</p>
                    <p>Most Expensive Component: {this.mostExpensiveComponent()}</p>
                    <p>Appropriate for a room of size: {this.appropriateRoomSize()}</p>
                    <p>Analog/digital: {this.sourceType()}</p>
                    <p>Potential Component Mismatches: {this.potentialMismatches()}</p>
                </div> */}




                <button>Delete System</button> <button>Edit System</button>
            </div> 
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(ExistingSystemDetails);