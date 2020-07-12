import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateNewSystem.css'

class CreateNewSystem extends Component {



    state = ({
        newSystem: {
            name: '',
            description: '',
            recommendations: '',
            userRoomSize: '',
            userListeningHabits: 0
        },
        dimensions: {
            height: 1,
            width: 1,
            length: 1
        },
        systemAttributes: {
            volume: '',
            idealOutput: '',
            outputValue: 0
        }
    })

componentDidMount() {
   this.setState({
       ...this.state,
       newSystem: {uniqueSystemId: Math.floor((Math.random() * 1000) + 1),
       userId: this.props.state.user.id}
   }) 
}


calculateVolume = () => {

    this.setState((state) => {
        return {systemAttributes: {...state.systemAttributes, volume: state.dimensions.height * state.dimensions.width * state.dimensions.length}}
    })

    this.calculateRoomSize();
    
}


calculateRoomSize = () => {
        this.setState((state) => {
            if (state.systemAttributes.volume < 1100) {
                return { newSystem: { ...state.newSystem, userRoomSize: 'small' } }
            }
            else if (state.systemAttributes.volume > 1100 && state.systemAttributes.volume < 2500) {
                return { newSystem: { ...state.newSystem, userRoomSize: 'medium' } }
            }
            else if (state.systemAttributes.volume > 2500) {
                return { newSystem: { ...state.newSystem, userRoomSize: 'large' } }
                
            }
        })

    this.outputRecommendations();

    }
    

goToChooseComponents = () => {
console.log('setting new system with this.state', this.state)
    this.props.dispatch({
        type:'SET_NEW_SYSTEM',
        payload: this.state
    })


    this.props.history.push('/select')
}


goToHome = () => {

    this.props.history.push('/home')

}


handleChange = (event, type) => {

    this.setState ({
        newSystem: {
        ...this.state.newSystem,
        [type]: event.target.value,
        }
    })
    
}


handleDimensions = (event, type) => {

    this.setState({
        dimensions: {
            ...this.state.dimensions,
            [type]: event.target.value
        }
        
})


    this.calculateVolume();
    
}


handleUserListeningHabits = (event) => {


    this.setState({
        newSystem: {
            ...this.state.newSystem,
            userListeningHabits: event.target.value
        }
    })
   
    this.outputRecommendations();

}


outputRecommendations = () => {

    console.log('in outputRecommendations')

    this.setState((state) => {

        console.log('in set outputRec, userRoomSize:', state.newSystem.userRoomSize, 'userListeningHabits:', state.newSystem.userListeningHabits)

        if (state.newSystem.userRoomSize === 'small' && state.newSystem.userListeningHabits === '1' ) {
            return { newSystem: {...state.newSystem, recommendations: 'Based on the size of your room it is suggested that you choose speakers with low and medium bass output. Speakers with a high bass output will likely overload your small room with bass pressure and compromise the sound. If medium or high output speakers are chosen it is suggested that you apply some bass absorbers in your room to mitigate any bass issues (see accessories).  Given your listening habits and small room, all amplifier output and speaker sensitivity combination may suit your needs.' }}
        }
        else if (state.newSystem.userRoomSize === 'small' && state.newSystem.userListeningHabits === '2') {
            return { newSystem: { ...state.newSystem, recommendations: 'Based on the size of your room it is suggested that you choose speakers with low and medium bass output. Speakers with a high bass output will likely overload your small room with bass pressure and compromise the sound. If medium or high output speakers are chosen it is suggested that you apply some bass absorption in your room to mitigate any bass issues (see accessories).  Given your listening habits and small room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers. All other combination may suit your needs.' }}
        }
        else if (state.newSystem.userRoomSize === 'medium' && state.newSystem.userListeningHabits === '1') {
            return {
                newSystem: {
                    ...state.newSystem,
                recommendations: 'Your room size may accomodate speakers with any bass output. If medium or high output speakers are chosen it is suggested that you apply some bass absorption in your room to mitigate any possible bass issues (see accessories).  Given your listening habits and medium sized room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers. All other combinations may suit your needs.' }}
        }
        else if (state.newSystem.userRoomSize === 'medium' && state.newSystem.userListeningHabits === '2') {
            return {
                newSystem: {
                    ...state.newSystem,
                recommendations: 'Your room size may accomodate speakers with any bass output. If medium or high output speakers are chosen it is suggested that you apply some bass absorption in your room to mitigate any possible bass issues (see accessories).  Given your listening habits and medium sized room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers. All other combinations may suit your needs.' }}
        }
        else if (state.newSystem.userRoomSize === 'large' && state.newSystem.userListeningHabits === '1') {
            return {
                newSystem: {
                    ...state.newSystem,
                recommendations: 'Based on the large size of your room it is suggested that you choose speakers with medium or high bass output to achieve a "room filling" sound. If speakers with high bass output are chosen it is suggested that you apply some bass absorption in your room to mitigate any possible bass issues (see accessories).  Given your listening habits and large sized room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers. All other combinations may suit your needs.' }}
        }
        else if (state.newSystem.userRoomSize === 'large' && state.newSystem.userListeningHabits === '2') {
            return {
                newSystem: {
                    ...state.newSystem,
                    recommendations: 'Based on the large size of your room it is suggested that you choose speakers with medium or high bass output to achieve a "room filling" sound. If speakers with high bass output are chosen it is suggested that you apply some bass absorption in your room to mitigate any possible bass issues (see accessories).  Given your listening habits and large sized room, it is suggested to only pair low-output amplifiers with high-sensitivity speakers and low sensitivity speakers with high-output amplifiers.' }}
        }      
    })
}

 


    render() {
        return (
            <div>
                <h1 className="createNewSystemTitle">Create New System:</h1>

                <label>System Name:</label>
                <input className="input" onChange={(event) => this.handleChange(event, 'name')}></input>

                <br></br>
                <label>Description:</label>
                <input className="input1" onChange={(event) => this.handleChange(event, 'description')}></input>

                <h2>Recommendations:</h2>
                <br></br>
               
                <h3 className="question1">What size is your listening room?</h3>

                <br></br>
               
                <label>Height:</label> 

                <select onChange={(event) => this.handleDimensions(event, 'height')}>
                    <option value='0' >Please select a measurement below</option>
                    <option value='7'  >7</option>
                    <option value='8'  >8</option>
                    <option value='9'  >9</option>
                    <option value='10' >10</option>
                    <option value='11' >11</option>
                    <option value='12' >12</option>
                    <option value='13' >13</option>
                    <option value='14' >14</option>
                    <option value='15' >15</option>
                    <option value='16' >16</option>
                </select>

                <br></br>

                <label>Width:</label> 
                <select onChange={(event) => this.handleDimensions(event, 'width')}>
                    <option value='0' >Please select a measurement below</option>
                    <option value='8' >8</option>
                    <option value='9' >9</option>
                    <option value='10' >10</option>
                    <option value='11' >11</option>
                    <option value='12' >12</option>
                    <option value='13' >13</option>
                    <option value='14' >14</option>
                    <option value='15' >15</option>
                    <option value='16' >16</option>
                    <option value='17' >17</option>
                    <option value='18' >18</option>
                    <option value='19' >19</option>
                    <option value='20' >20</option>
                    <option value='21' >21</option>
                    <option value='22' >22</option>
                    <option value='23' >23</option>
                    <option value='24' >24</option>
                    <option value='25' >25</option>
                    <option value='26' >26</option>
                    <option value='27' >27</option>
                    <option value='28' >28</option>
                    <option value='29' >29</option>
                    <option value='30' >30</option>
                </select>
                
                <br></br>

                <label>Length:</label> 
                <select onChange={(event) => this.handleDimensions(event, 'length')}>
                    <option value='0' >Please select a measurement below</option>
                    <option value='8' >8</option>
                    <option value='9' >9</option>
                    <option value='10' >10</option>
                    <option value='11' >11</option>
                    <option value='12' >12</option>
                    <option value='13' >13</option>
                    <option value='14' >14</option>
                    <option value='15' >15</option>
                    <option value='16' >16</option>
                    <option value='17' >17</option>
                    <option value='18' >18</option>
                    <option value='19' >19</option>
                    <option value='20' >20</option>
                    <option value='21' >21</option>
                    <option value='22' >22</option>
                    <option value='23' >23</option>
                    <option value='24' >24</option>
                    <option value='25' >25</option>
                    <option value='26' >26</option>
                    <option value='27' >27</option>
                    <option value='28' >28</option>
                    <option value='29' >29</option>
                    <option value='30' >30</option>
                </select>

                <br></br>

                {this.state.dimensions.height === 1 || this.state.dimensions.width === 1 || this.state.dimensions.length === 1 ? <p className="p">Please enter dimensions above to determine the 'acoustic size' of your room.</p> : <p className="p">Your room is acoustically '{this.state.newSystem.userRoomSize}' in size. </p> }
                <br></br>
                <br></br>
                <h3 className="question1">What volume levels do you tend to listen at?</h3>
                
                <select className ="selectUserListeningHabits" onChange={(event) => this.handleUserListeningHabits(event)}>
                    <option value='0'>Please select an option below</option>
                    <option value='1'>I listen at mostly lower volumes (70-80db at the listening position)</option>
                    <option value='2'>It's important for me the system to play loudly and with wide dynamics(90db+ at the listening position)</option>
                </select>


                {
                    this.state.newSystem.userListeningHabits && this.state.dimensions.height !== 1 && this.state.dimensions.width !== 1 && this.state.dimensions.length !== 1 ? <p className="p">{this.state.newSystem.recommendations}</p> : <p className="p">Please choose an answer from the dropdown above to recieve recommendations.</p>
                }
                <br></br>
                <br></br>
<div className="createPageButtons">
                <button onClick={this.goToChooseComponents}>Choose Components</button>
                <button onClick={this.goToHome}>Cancel</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(CreateNewSystem);