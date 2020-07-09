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
    goToExistingSystems = () => {
        this.props.history.push('/existing')
    }

    saveSystem = () => {
        this.props.dispatch({
            type: 'SAVE_SYSTEM_TO_DATABASE'
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
            if(item.component_category_name === 'Amplification') {
                powerOutput = item.power_output
            }
        })
        this.props.state.systemComponents.map(item => {
            if(item.component_category_name === 'Speakers'){
            speakerSensitivity = item.Sensitivity
            }
        })

        this.props.state.systemComponents.map(item => {
            if (item.component_category_name === 'Speakers'){
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
        let potentialMismatches = '';
        let powerOutput = '';
        let speakerSensitivity = '';
        let bassOutput = '';
        let appropriateRoomSize = '';

        this.props.state.systemComponents.map(item => {
            if (item.component_category_name === 'Amplification') {
                powerOutput = item.power_output
            }
        })
        this.props.state.systemComponents.map(item => {
            if (item.component_category_name === 'Speakers') {
                speakerSensitivity = item.Sensitivity
            }
        })

        this.props.state.systemComponents.map(item => {
            if (item.component_category_name === 'Speakers') {
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

        
        if (appropriateRoomSize.includes(userRoom) && userListeningHabits === '1'){
            potentialMismatches = 'Everything looks good!'
        }
        else if (userRoom === 'small') {
            potentialMismatches = 'That speaker may overload your room with bass'
        }
        else if (userRoom === 'large' && bassOutput === 'low') {
            potentialMismatches = 'That speaker will have a hard time providing "room filling" sound due to its low bass output in your large room.'

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
        console.log('powerOutput', powerOutput)
        console.log('potentialMismatches', potentialMismatches)

        return potentialMismatches

        // this.props.dispatch({
        //     type: 'SET_POTENTIAL_MISMATCHES',   
        //     payload: potentialMismatches
        // })

    }

    


    render() {
        return (
            <div>
                <h1>Select a Category to Begin!</h1>

                <div className="category">
                    <h2>Source Components</h2>
                    <div>
                        {this.props.state.systemComponents.map((item,index) => {
                            if(item.component_category_name === 'Source') {
                               return   <div key={index} className="component">
                                            <p>Brand: {item.brand}</p>
                                            <p>Name: {item.name}</p>
                                            <img src={item.image} alt={item.name}></img>
                                            <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                        </div>
                            }
                        }
                        )}

                    </div>
                    <button onClick={this.goToSource}>Add Component</button>
                </div>
                <div>
                    <h2>Amplification</h2>
                    <div>
                        {this.props.state.systemComponents.map((item, index) => {
                            if (item.component_category_name === 'Amplification') {
                                return <div key={index} className="component">
                                    <p>Brand: {item.brand}</p>
                                    <p>Name: {item.name}</p>
                                    <img src={item.image} alt={item.name}></img>
                                    <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                </div>
                            }
                        }
                        )}
                    </div>
                    <button onClick={this.goToAmplification}>Add Component</button>
                </div>
                <div>
                    <h2>Speakers</h2>
                    <div>
                        {this.props.state.systemComponents.map((item, index) => {
                            if (item.component_category_name === 'Speakers') {
                                return <div key={index} className="component">
                                    <p>Brand: {item.brand}</p>
                                    <p>Name: {item.name}</p>
                                    <img src={item.image} alt={item.name}></img>
                                    <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                </div>
                            }
                        }
                        )}

                    </div>
                    <button onClick={this.goToSpeakers}>Add Component</button>
                </div>
                <div>
                    <h2>Cables</h2>
                    <div>
                        {this.props.state.systemComponents.map((item, index) => {
                            if (item.component_category_name === 'Cables') {
                                return <div key={index} className="component">
                                    <p>Brand: {item.brand}</p>
                                    <p>Name: {item.name}</p>
                                    <img src={item.image} alt={item.name}></img>
                                    <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                </div>
                            }
                        }
                        )}

                    </div>
                    <button onClick={this.goToCables}>Add Component</button>
                </div>
                <div>
                    <h2>Accessories</h2>
                    <div>
                        {this.props.state.systemComponents.map((item, index) => {
                            if (item.component_category_name === 'Accessories') {
                                return <div key={index} className="component">
                                    <p>Brand: {item.brand}</p>
                                    <p>Name: {item.name}</p>
                                    <img src={item.image} alt={item.name}></img>
                                    <button value={index} onClick={(event) => this.deleteComponent(event)}>Delete Component</button>
                                </div>
                            }
                        }
                        )}

                    </div>
                    <button onClick={this.goToAccessories}>Add Component</button>
                </div>

                <div>
                    <h2>System Information</h2>
                    <h3>System Name: {this.props.state.newSystem.newSystem.name}</h3>
                    <p>Description: {this.props.state.newSystem.newSystem.description}</p>
                    <p>Recommendations: {this.props.state.newSystem.newSystem.recommendations}</p>
                    <p>Total Price: ${this.totalSystemPrice()}</p>
                    <p>Most Expensive Component: {this.mostExpensiveComponent()}</p>
                    <p>Appropriate for a room of size: {this.appropriateRoomSize()}</p>
                    <p>Analog/digital: {this.sourceType()}</p>
                    <p>Potential Component Mismatches: {this.potentialMismatches()}</p>
                </div>
                <div>
                    
                    <button onClick={this.goToExistingSystems}>Save System</button>
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