import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class SelectCategory extends Component {


    // state = {
    //     systemAttributes: {
    //         totalSystemPrice: 0,
    //         mostExpensiveComponent: '',
    //         analogDigital: '',
    //         potentialMismatches: '',
    //         requiredAccessories: ''
    //     }
    // }


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

    componentDidMount(){
        this.appropriateRoomSize();
        this.sourceType();
        this.mostExpensiveComponent();
        this.potentialMismatches();
    }

    componentDidUpdate(){
        this.totalSystemPrice();
        this.mostExpensiveComponent();
        this.sourceType();
        this.appropriateRoomSize();
        this.potentialMismatches();
    }


    totalSystemPrice = () => {
        let systemPrice = 0;
        this.props.state.source.map(item => 
            systemPrice = systemPrice + parseInt(item.price))
        this.props.state.amplification.map(item =>
            systemPrice = systemPrice + parseInt(item.price))
        this.props.state.speakers.map(item =>
            systemPrice = systemPrice + parseInt(item.price))
        this.props.state.cables.map(item =>
            systemPrice = systemPrice + parseInt(item.price))
        this.props.state.accessories.map(item =>
            systemPrice = systemPrice + parseInt(item.price))
        console.log('totalSystemPrice is ', systemPrice)


        this.props.dispatch({
            type: 'SET_SYSTEM_PRICE',
            payload: systemPrice
        })

    }

 

    mostExpensiveComponent = () => {

        let price = 0;
        let component = 'Please add a component'

        this.props.state.source.map(item => {
            if(parseInt(item.price) > price) {
                price = item.price 
                component = item.brand + ' ' + item.name
            }
        })
        this.props.state.amplification.map(item => {
            if (parseInt(item.price) > price) {
                price = item.price
                component = item.brand + ' ' + item.name
            }
        })
        this.props.state.speakers.map(item => {
            if (parseInt(item.price) > price) {
                price = item.price
                component = item.brand + ' ' + item.name
            }
        })
        this.props.state.cables.map(item => {
            if (parseInt(item.price) > price) {
                price = item.price
                component = item.brand + ' ' + item.name
            }
        })
        this.props.state.accessories.map(item => {
            if (parseInt(item.price) > price) {
                price = item.price
                component = item.brand + ' ' + item.name
            }
        })
        
        console.log('most expensive commponent is ', component)

        this.props.dispatch({
            type: 'SET_MOST_EXPENSIVE_COMPONENT',
            payload: component
        })
    }


    sourceType = () => { 

        let digital = false;
        let analog = false;
        let sourceType = '';

        this.props.state.source.map(item => {
            if(item.source_type === 'digital') {
                digital = true
            }
            else if (item.source_type === 'analog') {
                analog = true
            }
        })

        if(digital === false && analog === false){
            sourceType = 'Please add a source component'
        }
        else if (digital === true && analog === false){
            sourceType = 'digital'
        }
        else if (digital === false && analog === true) {
            sourceType = 'analog'
        }
        else if (digital === true && analog === true) {
            sourceType = 'analog and digital'
        }

        this.props.dispatch({
            type:'SET_SOURCE_TYPE',
            payload: sourceType
        })

    }


    appropriateRoomSize = () => {

        let powerOutput = '';
        let speakerSensitivity = '';
        let bassOutput = '';
        let appropriateRoomSize = '';

        this.props.state.amplification.map(item => 
            powerOutput = item.power_output
            )
        this.props.state.speakers.map(item => 
            speakerSensitivity = item.Sensitivity)

        this.props.state.speakers.map(item => 
            bassOutput = item.bass_output)


        console.log('bassOutput', bassOutput)
        console.log('powerOutput', powerOutput)
        console.log('speakerSensitivity', speakerSensitivity)
        
        if (powerOutput === 'low' && speakerSensitivity === 'low' && bassOutput === 'low'){
            appropriateRoomSize = 'small'
        }
        else if (powerOutput === 'low' && speakerSensitivity === 'high' && bassOutput === 'low'){
        appropriateRoomSize = 'small or medium'
        }
        else if (powerOutput === 'low' && speakerSensitivity === 'high' && bassOutput === 'medium') {
            appropriateRoomSize = 'small, medium or large'
        }
        else if (powerOutput === 'low' && speakerSensitivity === 'high' && bassOutput === 'high') {
            appropriateRoomSize = 'medium or large'
        }
        else if (powerOutput === 'medium' && speakerSensitivity === 'high' && bassOutput === 'low') {
            appropriateRoomSize = 'small or medium'
        }
        else if (powerOutput === 'medium' && speakerSensitivity === 'high' && bassOutput === 'medium') {
            appropriateRoomSize = 'small, medium or large'
        }
        else if (powerOutput === 'medium' && speakerSensitivity === 'high' && bassOutput === 'high') {
            appropriateRoomSize = 'small, medium or large'
        }
        else if (powerOutput === 'medium' && speakerSensitivity === 'low' && bassOutput === 'low') {
            appropriateRoomSize = 'small or medium'
        }
        else if (powerOutput === 'medium' && speakerSensitivity === 'low' && bassOutput === 'medium') {
            appropriateRoomSize = 'small, medium or large'
        }
        else if (powerOutput === 'medium' && speakerSensitivity === 'low' && bassOutput === 'high') {
            appropriateRoomSize = 'medium or large'
        }
        else if (powerOutput === 'high' && speakerSensitivity === 'low' && bassOutput === 'low') {
            appropriateRoomSize = 'small or medium'
        }
        else if (powerOutput === 'high' && speakerSensitivity === 'low' && bassOutput === 'medium') {
            appropriateRoomSize = 'small, medium or large'
        }
        else if (powerOutput === 'high' && speakerSensitivity === 'low' && bassOutput === 'high') {
            appropriateRoomSize = 'medium or large'
        }
        else if (powerOutput === 'high' && speakerSensitivity === 'high' && bassOutput === 'low') {
            appropriateRoomSize = 'small or medium'
        }
        else if (powerOutput === 'high' && speakerSensitivity === 'high' && bassOutput === 'medium') {
            appropriateRoomSize = 'small, medium or large'
        }
        else if (powerOutput === 'high' && speakerSensitivity === 'high' && bassOutput === 'high') {
            appropriateRoomSize = 'medium or large'
        }
        else {
            appropriateRoomSize = 'Please choose amplification and speakers'
        }


        console.log('appropriate room size', appropriateRoomSize)

        this.props.dispatch({
            type: 'SET_APPROPRIATE_ROOM_SIZE',
            payload: appropriateRoomSize
        })
    }

    potentialMismatches = () => {
        let userRoom  = this.props.state.userRoomSize;
        let userListeningHabits = this.props.state.userListeningHabits;
        let speakerSensitivity = '';
        let bassOutput = '';
        let powerOutput = '';
        let potentialMismatches = 'none detected';

        this.props.state.amplification.map(item =>
            powerOutput = item.power_output
        )
        this.props.state.speakers.map(item =>
            bassOutput = item.bass_output)


        
        if (this.props.state.roomSize.includes(userRoom)){
            potentialMismatches = 'Everything looks good!'
        }
        else if (userRoom === 'small') {
            potentialMismatches = 'That speaker may overload your room with bass'
        }
        else if (userRoom === 'large' && bassOutput === 'low') {
            potentialMismatches = 'That speaker will have a hard time providing \"room filling\" sound due to its low bass output in your large room.'

        }
        else if (userRoom === 'large' && powerOutput === 'low') {
            potentialMismatches = 'You may want more power than the amplifier you chose can provide. Alternatively you could choose a high sensitivity speaker to pair with this amplifier. This component pairing may compromise maximum sound levels and dynamics'

        }
        else if (userRoom === 'large' && powerOutput === 'medium' && userListeningHabits === '2') {
            potentialMismatches = 'Given your desire to listen at loud level, it is recommended that you choose a more powerful amplifier or a high sensitivity speaker.'

        }


        console.log('in potentialMismatches')
        console.log('userRoom', userRoom)
        console.log('userListeningHabits', userListeningHabits)
        console.log('bassOutput', bassOutput)
        console.log('speakerSensitivity', speakerSensitivity)
        console.log('powerOutput', powerOutput)
        console.log('potentialMismatches', potentialMismatches)


        this.props.dispatch({
            type: 'SET_POTENTIAL_MISMATCHES',   
            payload: potentialMismatches
        })
    }

    saveSystem = () => {

    //     axios.post('/savesystem',
    //     {
    //         name: this.props.state.newSystem.name,
    //         description: this.props.state.newSystem.description,
    //         recommendations: this.props.state.newSystem.recommendations,
    //         total_price: this.props.state.systemPrice,
    //         most_expensive_component: this.props.state.expensiveComponent,
    //         appropriate_room_size: this.props.state.roomSize,
    //         analog_digital: this.props.state.sourceType,
    //         potential_mismatches: this.props.state.potentialMismatches
    //     }.catch(error=> console.log('SAVE SYSTEM FAILED', error))
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
                    <p>Total Price: ${this.props.state.systemPrice}</p>
                    <p>Most Expensive Component: {this.props.state.expensiveComponent}</p>
                    <p>Appropriate for a room of size: {this.props.state.roomSize}</p>
                    <p>Analog/digital: {this.props.state.sourceType}</p>
                    <p>Potential Component Mismatches: {this.props.state.potentialMismatches}</p>
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