import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SelectCategory.css'


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
    goToExistingSystems = () => {

        this.saveSystemComponents()

        this.props.history.push('/existing')
    }

    saveSystemComponents = () => {
        console.log('systemId:',this.props.state.newSystem.newSystem.uniqueSystemId)
        console.log('userId', this.props.state.user.id)
        this.props.state.systemComponents.map(item =>
            this.props.dispatch({
                type: 'SAVE_SYSTEM_COMPONENTS_TO_DATABASE',
                payload: {componentId: item.id, systemId: this.props.state.newSystem.newSystem.uniqueSystemId, userId: this.props.state.user.id}
            })
        )

        this.saveSystemDetails();
    }

    saveSystemDetails = () => {
        this.props.dispatch({
            type: 'SAVE_SYSTEM_TO_DATABASE',
            payload: this.props.state.newSystem.newSystem
        })
    }

    deleteComponent = (event) => {
        this.props.dispatch({
            type: 'DELETE_COMPONENT',
            payload: event.target.value
        })
    }


    totalSystemPrice = () => {
        let systemPrice = 0;
        this.props.state.systemComponents.map(item => 
            systemPrice = systemPrice + parseInt(item.price))
        console.log('totalSystemPrice is ', systemPrice)

        return systemPrice

        // this.props.dispatch({
        //     type: 'SET_SYSTEM_PRICE',
        //     payload: systemPrice
        // })
    }

 

    mostExpensiveComponent = () => {

        let price = 0;
        let component = 'Please add a component'

        this.props.state.systemComponents.map(item => {
            if(parseInt(item.price) > price) {
                price = item.price 
                component = item.brand + ' ' + item.name
            }
        })
        
        console.log('most expensive commponent is ', component)

        return component

        // this.props.dispatch({
        //     type: 'SET_MOST_EXPENSIVE_COMPONENT',
        //     payload: component
        // })
    }


    sourceType = () => { 

        let digital = false;
        let analog = false;
        let sourceType = '';

        this.props.state.systemComponents.map(item => {
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

        return sourceType

        // this.props.dispatch({
        //     type:'SET_SOURCE_TYPE',
        //     payload: sourceType
        // })
    }

    appropriateRoomSize = () => {

        let powerOutput = '';
        let speakerSensitivity = '';
        let bassOutput = '';
        let appropriateRoomSize = '';

        this.props.state.systemComponents.map(item => {
            if(item.component_category === 2) {
                powerOutput = item.power_output
            }
        })
        this.props.state.systemComponents.map(item => {
            if(item.component_category === 3){
            speakerSensitivity = item.sensitivity
            }
        })

        this.props.state.systemComponents.map(item => {
            if (item.component_category === 3){
            bassOutput = item.bass_output
            }
        })


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
;

        return appropriateRoomSize

        
    }

    potentialMismatches = () => {
        let userRoom  = this.props.state.newSystem.newSystem.userRoomSize;
        let userListeningHabits = this.props.state.newSystem.newSystem.userListeningHabits;
        let potentialMismatches = 'None Detected';
        let powerOutput = '';
        let speakerSensitivity = '';
        let bassOutput = '';
        let appropriateRoomSize = '';

        this.props.state.systemComponents.map(item => {
            if (item.component_category === 2) {
                powerOutput = item.power_output
            }
        })
        this.props.state.systemComponents.map(item => {
            if (item.component_category === 3) {
                speakerSensitivity = item.sensitivity
            }
        })

        this.props.state.systemComponents.map(item => {
            if (item.component_category === 3) {
                bassOutput = item.bass_output
            }
        })


        console.log('bassOutput', bassOutput)
        console.log('powerOutput', powerOutput)
        console.log('speakerSensitivity', speakerSensitivity)

        if (powerOutput === 'low' && speakerSensitivity === 'low' && bassOutput === 'low') {
            appropriateRoomSize = 'small'
        }
        else if (powerOutput === 'low' && speakerSensitivity === 'high' && bassOutput === 'low') {
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
console.log('appropriateRoomSize', appropriateRoomSize)
        
        if (appropriateRoomSize.includes(userRoom) && userListeningHabits === '1'){
            potentialMismatches = 'Everything Looks Good!'
        }
        else if (userRoom === 'small') {
            potentialMismatches = 'That speaker may overload your room with bass'
        }
        else if (userRoom === 'large' && bassOutput === 'low') {
            potentialMismatches = 'That speaker will have a hard time providing "room filling" sound due to its low bass output in your large room.'

        }
        else if (userRoom === 'large' && powerOutput === 'low' && speakerSensitivity !== 'high') {
            potentialMismatches = 'You may want more power than the amplifier you chose can provide. Alternatively you could choose a high sensitivity speaker to pair with this amplifier. This component pairing may compromise maximum sound levels and dynamics'

        }
        else if (userRoom === 'large' && powerOutput === 'medium' && userListeningHabits === '2' && speakerSensitivity !== 'high') {
            potentialMismatches = 'Given your desire to listen at loud level, it is recommended that you choose a more powerful amplifier or a high sensitivity speaker.'

        }
        else {
            potentialMismatches = 'None Detected'
        }


        console.log('in potentialMismatches')
        console.log('userRoom', userRoom)
        console.log('userListeningHabits', userListeningHabits)
        console.log('bassOutput', bassOutput)
        console.log('powerOutput', powerOutput)
        console.log('potentialMismatches', potentialMismatches)

        return potentialMismatches

    }

    


    render() {
        return (
            <div>
                <h1>Select a Category to Begin!</h1>

                <div className="category">
                    <h2>Source Components</h2>
                    <div>
                        {this.props.state.systemComponents.map((item,index) => {
                            if(item.component_category === 1) {
                                return <div key={index} className="selectedComponent">
                                            <h3>{item.brand} {item.name}</h3>
                                            <p>Description: {item.description}</p>
                                            <p>Source Type: {item.source_type}</p>
                                            <p>Price: ${item.price}</p>
                                            <img src={item.image} alt={item.name}></img>
                                            <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                        </div>
                            }
                        }
                        )}

                    </div>
                    <div className="selectButton">
                        <button  onClick={this.goToSource}>Add Component</button>
                    </div>
                </div>
                <div className="category">
                    <h2>Amplification</h2>
                    <div>
                        {this.props.state.systemComponents.map((item, index) => {
                            if (item.component_category === 2) {
                                return <div key={index} className="selectedComponent">
                                    <h3>{item.brand} {item.name}</h3>
                                    <p>Description: {item.description} </p>
                                    <p>Power Output: {item.power_output}</p>
                                    <p>Heat Output: {item.heat_output}</p>
                                    <p>Price: ${item.price}</p>
                                    <img src={item.image} alt={item.name}></img>
                                    <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                </div>
                            }
                        }
                        )}
                    </div>
                    <div className="selectButton">
                        <button onClick={this.goToAmplification}>Add Component</button>
                    </div>                </div>
                <div className="category">
                    <h2>Speakers</h2>
                    <div>
                        {this.props.state.systemComponents.map((item, index) => {
                            if (item.component_category === 3) {
                                return <div key={index} className="selectedComponent">
                                    <h3>{item.brand} {item.name}</h3>
                                    <p>Description: {item.description}</p>
                                    <p>Sensitivity: {item.sensitivity}</p>
                                    <p>Bass Output: {item.bass_output}</p>
                                    <p>Price: ${item.price}</p>
                                    <img src={item.image} alt={item.name}></img>
                                    <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                </div>
                            }
                        }
                        )}

                    </div>
                    <div className="selectButton">
                        <button onClick={this.goToSpeakers}>Add Component</button>
                    </div>                </div>
                <div className="category">
                    <h2>Cables</h2>
                    <div>
                        {this.props.state.systemComponents.map((item, index) => {
                            if (item.component_category === 4) {
                                return <div key={index} className="selectedComponent">
                                    <h3>{item.brand} {item.name}</h3>
                                    <p>Description: {item.description}</p>
                                    <p>Price: ${item.price}</p>
                                    <img src={item.image} alt={item.name}></img>
                                    <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                </div>
                            }
                        }
                        )}

                    </div>
                    <div className="selectButton">
                        <button onClick={this.goToCables}>Add Component</button>
                    </div>                </div>
                <div className="category">
                    <h2>Accessories</h2>
                    <div>
                        {this.props.state.systemComponents.map((item, index) => {
                            if (item.component_category === 5) {
                                return <div key={index} className="selectedComponent">
                                    <h3>{item.brand} {item.name}</h3>
                                    <p>Description: {item.description}</p>
                                    <p>Price: ${item.price}</p>
                                    <img src={item.image} alt={item.name}></img>
                                    <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                </div>
                            }
                        }
                        )}

                    </div>
                    <div className="selectButton">
                        <button onClick={this.goToAccessories}>Add Component</button>
                    </div>                
                    </div>

                <div className="systemInfo">
                    <h2>System Information</h2>
                    <h3>System Name: {this.props.state.newSystem.newSystem.name}</h3>
                    <p>Description: {this.props.state.newSystem.newSystem.description}</p>
                    <p>Recommendations: {this.props.state.newSystem.newSystem.recommendations}</p>
                    <p>Total Price: ${this.totalSystemPrice()}</p>
                    <p>Most Expensive Component: {this.mostExpensiveComponent()}</p>
                    <p>Appropriate for a room of size: {this.appropriateRoomSize()}</p>
                    <p>Analog/digital: {this.sourceType()}</p>
                    <p>Potential Component Mismatches: {this.potentialMismatches()}</p>
                    <br></br>
                    <br></br>
                    <button onClick={this.goToExistingSystems}>Save System</button>
                    <button onClick={this.goToChoose}>Delete System</button>
                </div>
                <div>
                    
                    
                </div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(SelectCategory);