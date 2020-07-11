import React, { Component } from 'react';
import { connect } from 'react-redux';
import './existingSystems.css'

class ExistingSystems extends Component {

    componentWillMount(){
        this.getExistingSystems();
        this.getExistingComponents();
        
    }
    
    getExistingSystems = () => {
        this.props.dispatch({
        type: 'GET_EXISTING_SYSTEMS',
        })

        
    }

    getExistingComponents = () => {
        this.props.dispatch({
            type: 'GET_EXISTING_SYSTEM_COMPONENTS'
        })
    }

    goToSystemDetails = (event) => {
        this.props.dispatch({
            type: 'SET_SYSTEM_TO_VIEW',
            payload: event.target.value
        })
        this.props.history.push('/existingsystemdetails')
    }

    getPrice = (id) => {
        let price = 0;
        this.props.state.existingSystemComponents.map(item => {
            if (item.system_id === id) {
            price = price + parseInt(item.price) }})
        
            return price
        
    }


    render() {
        return (
            <div>
                <h1>Existing Systems:</h1>
                {this.props.state.existingSystems.map(details => {
                    let price = 0;
                return <div key={details.system_id} className="systemDiv">
                    <h2>{details.name}</h2>
                    Description: {details.description}
                    <br></br>
                    <br></br>
                    Source: {this.props.state.existingSystemComponents.map(item => {
                        if (item.system_id === details.id && item.component_category === 1 ) {
                                    return item.brand, item.name
                                    
                        }
                    })}
                    <br></br>
                    Amplification: {this.props.state.existingSystemComponents.map(item => {
                        if (item.system_id === details.id && item.component_category === 2) {
                            return item.brand, item.name

                        }
                    })}
                    <br></br>
                    Speakers: {this.props.state.existingSystemComponents.map(item => {
                        if (item.system_id === details.id && item.component_category === 3) {
                            return item.brand, item.name

                        }
                    })}
                    <br></br>
                    Cables: {this.props.state.existingSystemComponents.map(item => {
                        if (item.system_id === details.id && item.component_category === 4) {
                            return item.brand, item.name

                        }
                    })}
                    <br></br>
                    Accessories: {this.props.state.existingSystemComponents.map(item => {
                        if (item.system_id === details.id && item.component_category === 5) {
                            return item.brand, item.name

                        }
                    })}
                    <br></br>
                    <br></br>
                    Total Price: ${this.getPrice(details.id)}
                
                    <br></br>
                    <br></br>
                        
                                <button value={details.id} onClick={this.goToSystemDetails}>View System Details</button>
                    </div>
                })}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(ExistingSystems);