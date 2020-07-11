import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ExistingSystemDetails.css'

class ExistingSystemDetails extends Component {


deleteSystem = () => {

this.props.dispatch({
    type:'DELETE_SYSTEM',
    payload: this.props.state.systemToView
})

    this.props.history.push('/existing')
}


systemName = () => {
    let name = '';
    this.props.state.existingSystems.map(item => {
        if (item.id == this.props.state.systemToView){
            name = item.name
        }
    })
    return name
}


    systemRecommendations = () => {
        let recommendations = '';
        this.props.state.existingSystems.map(item => {
            if (item.id == this.props.state.systemToView) {
                recommendations = item.recommendations
            }
        })
        return recommendations
    }


    systemDescription = () => {
        let description = '';
        this.props.state.existingSystems.map(item => {
            if (item.id == this.props.state.systemToView) {
                description = item.description
            }
        })
        return description
    }

    totalSystemPrice = () => {
        let systemPrice = 0;
        this.props.state.existingSystemComponents.map(item => {
            if(item.system_id == this.props.state.systemToView) {
            systemPrice = systemPrice + parseInt(item.price)
            }
        })
        console.log('totalSystemPrice is ', systemPrice)
        return systemPrice
    }



    mostExpensiveComponent = () => {

        let price = 0;
        let component = 'Please add a component'

        this.props.state.existingSystemComponents.map(item => {

            if (item.system_id == this.props.state.systemToView && parseInt(item.price) > price) {
                price = item.price
                component = item.brand + ' ' + item.name
            }
        })

        console.log('most expensive commponent is ', component)

        return component
    }


    sourceType = () => {

        let digital = false;
        let analog = false;
        let sourceType = '';

        this.props.state.existingSystemComponents.map(item => {
            if (item.system_id == this.props.state.systemToView && item.source_type === 'digital') {
                digital = true
            }
            else if (item.system_id == this.props.state.systemToView && item.source_type === 'analog') {
                analog = true
            }
        })

        if (digital === false && analog === false) {
            sourceType = 'Please add a source component'
        }
        else if (digital === true && analog === false) {
            sourceType = 'digital'
        }
        else if (digital === false && analog === true) {
            sourceType = 'analog'
        }
        else if (digital === true && analog === true) {
            sourceType = 'analog and digital'
        }

        return sourceType
    }

    appropriateRoomSize = () => {

        let powerOutput = '';
        let speakerSensitivity = '';
        let bassOutput = '';
        let appropriateRoomSize = '';

        this.props.state.existingSystemComponents.map(item => {
            if (item.system_id == this.props.state.systemToView && item.component_category === 2) {
                powerOutput = item.power_output
            }
        })
        this.props.state.existingSystemComponents.map(item => {
            if (item.system_id == this.props.state.systemToView && item.component_category === 3) {
                speakerSensitivity = item.sensitivity
            }
        })

        this.props.state.existingSystemComponents.map(item => {
            if (item.system_id == this.props.state.systemToView && item.component_category === 3) {
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


        console.log('appropriate room size', appropriateRoomSize)
            ;

        return appropriateRoomSize


    }

    potentialMismatches = () => {
        let userRoom = '';
        let userListeningHabits = '';
        let potentialMismatches = 'None Detected';
        let powerOutput = '';
        let speakerSensitivity = '';
        let bassOutput = '';
        let appropriateRoomSize = '';

        this.props.state.existingSystems.map(item => {
            if (item.id == this.props.state.systemToView) {
                userRoom = item.user_room
            }
        })

        this.props.state.existingSystems.map(item => {
            if (item.id == this.props.state.systemToView) {
                userListeningHabits = item.listening_habits
            }
        })

        this.props.state.existingSystemComponents.map(item => {
            if (item.system_id == this.props.state.systemToView && item.component_category === 2) {
                powerOutput = item.power_output
            }
        })
        this.props.state.existingSystemComponents.map(item => {
            if (item.system_id == this.props.state.systemToView && item.component_category === 3) {
                speakerSensitivity = item.sensitivity
            }
        })

        this.props.state.existingSystemComponents.map(item => {
            if (item.system_id == this.props.state.systemToView && item.component_category === 3) {
                bassOutput = item.bass_output
            }
        })


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

        if (appropriateRoomSize.includes(userRoom) && userListeningHabits === '1') {
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



                <div>
                    <h2>System Information</h2>
                    <h3>System Name: {this.systemName()}</h3>
                    <p>Description: {this.systemDescription()}</p>
                    <p>Recommendations: {this.systemRecommendations()}</p>
                    <p>Total Price: ${this.totalSystemPrice()}</p>
                    <p>Most Expensive Component: {this.mostExpensiveComponent()}</p>
                    <p>Appropriate for a room of size: {this.appropriateRoomSize()}</p>
                    <p>Analog/digital: {this.sourceType()}</p>
                    <p>Potential Component Mismatches: {this.potentialMismatches()}</p>
                </div>




                <button>Delete System</button> <button>Edit System</button>
            </div> 
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(ExistingSystemDetails);