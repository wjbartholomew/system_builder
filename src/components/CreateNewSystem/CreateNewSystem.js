import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateNewSystem extends Component {

    state = ({
        newSystem: {
            name: '',
            description: '',
            recommendations: 'fuck it all',
         },
        dimensions: {
            height: 1,
            width: 1,
            length: 1
        },
        systemAttributes: {
            volume: '',
            roomSize: '',
            idealOutput: 'dono',
            outputValue: ''
        }
    })

calculateRoomSize = () => {

    this.setState((state) => {
        if (state.systemAttributes.volume < 1100) {
            return { systemAttributes: { ...state.systemAttributes, roomSize: 'small' } }
        }
        else if (state.systemAttributes.volume > 1100 && state.systemAttributes.volume < 2500) {
            return { systemAttributes: { ...state.systemAttributes, roomSize: 'medium' } }
        }
        else if (state.systemAttributes.volume > 2500) {
            return { systemAttributes: { ...state.systemAttributes, roomSize: 'large' } }
        }
    })

}


calculateVolume = () => {

    this.setState((state) => {
        return {systemAttributes: {...state.systemAttributes, volume: state.dimensions.height * state.dimensions.width * state.dimensions.length}}
    })

    this.calculateRoomSize();
    
}
    

goToChoose = () => {
console.log('this.state.newSystem', this.state.newSystem)
    this.props.dispatch({
        type:'SET_NEW_SYSTEM',
        payload: this.state.newSystem
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

    this.setState ({
        dimensions: {
            ...this.state.dimensions,
            [type]: event.target.value
        }
    })

    this.calculateVolume();
    
}


handleIdealOutput = (event) => {

    this.setState({
        systemAttributes: {
            ...this.state.systemAttributes,
            outputValue: event.target.value
        }
    })

    this.setIdealOutput();

    // let value = event.target.value;

    //     this.setState((state) => {
    //         if (value === 1) {
    //             return {systemAttributes: {...state.systemAttributes, idealOutput: 'low' }}
    //         }
    //         else if (value === 2) {
    //             return {systemAttributes: {...state.systemAttributes, idealOutput: 'high'}}
    //         }
    // })

    // if(event.target.value === 1) {
    //     this.setState({
    //         systemAttributes: {...this.state.systemAttributes, idealOutput: 'low'}
    //     })
    // }
    // else if(event.target.value === 2) {
    //     this.setState({
    //         systemAttributes: { ...this.state.systemAttributes, idealOutput: 'high' }
    //     })
    // }   
    
    
    this.props.dispatch({
        type:'SET_USER_INPUT',
    })
}

setIdealOutput = () => {


    // this.setState((state) => {
    //         if (value === 1) {
    //             return {systemAttributes: {...state.systemAttributes, idealOutput: 'low' }}
    //         }
    //         else if (value === 2) {
    //             return {systemAttributes: {...state.systemAttributes, idealOutput: 'high'}}
    //         }
    // })

    this.setState((state) => {
        console.log('in set ideal output, outputValue:', state.systemAttributes.outputValue)
        if(state.systemAttributes.outputValue === 1){
            return {systemAttributes: { ...state.systemAttributes, idealOutput: 'low' }}
        }
        else if(state.systemAttributes.outputValue === 2) {
                return { systemAttributes: { ...state.systemAttributes, idealOutput: 'high' } }
            }
        
    })
    this.outputRecommendations();
}



// componentDidUpdate() {
//     this.outputRecommendations();
// }



outputRecommendations = () => {

    console.log('in outputRecommendations')
    this.setState((state) => {
        console.log('in set outputRec, roomSize:', state.systemAttributes.roomSize, 'outputValue:', state.systemAttributes.outputValue)

        if (state.systemAttributes.roomSize === 'small' && state.systemAttributes.outputValue === '1' ) {
            return { newSystem: {...state.newSystem, recommendations: 'Based on the size of your room it is suggested that you choose speakers with low and medium bass output. Speakers with a high bass output will likely overload your small room with bass pressure and compromise the sound. If medium or high output speakers are chosen it is suggested that you apply some bass absorbers in your room to mitigate any bass issues (see accessories).  Given your listening habits and small room, all amplifier output and speaker sensitivity combination may suit your needs.' }}
        }
        else if (state.systemAttributes.roomSize === 'small' && state.systemAttributes.outputValue === '2') {
            return { newSystem: { ...state.newSystem, recommendations: 'Based on the size of your room it is suggested that you choose speakers with low and medium bass output. Speakers with a high bass output will likely overload your small room with bass pressure and compromise the sound. If medium or high output speakers are chosen it is suggested that you apply some bass absorption in your room to mitigate any bass issues (see accessories).  Given your listening habits and small room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers. All other combination may suit your needs.' }}
        }
        else if (state.systemAttributes.roomSize === 'medium' && state.systemAttributes.outputValue === '1') {
            return {
                newSystem: {
                    ...state.newSystem,
                recommendations: 'Your room size may accomodate speakers with any bass output. If medium or high output speakers are chosen it is suggested that you apply some bass absorption in your room to mitigate any possible bass issues (see accessories).  Given your listening habits and medium sized room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers. All other combinations may suit your needs.' }}
        }
        else if (state.systemAttributes.roomSize === 'medium' && state.systemAttributes.outputValue === '2') {
            return {
                newSystem: {
                    ...state.newSystem,
                recommendations: 'Your room size may accomodate speakers with any bass output. If medium or high output speakers are chosen it is suggested that you apply some bass absorption in your room to mitigate any possible bass issues (see accessories).  Given your listening habits and medium sized room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers. All other combinations may suit your needs.' }}
        }
        else if (state.systemAttributes.roomSize === 'large' && state.systemAttributes.outputValue === '1') {
            return {
                newSystem: {
                    ...state.newSystem,
                recommendations: 'Based on the large size of your r it is suggested that you choose speakers with medium or high bass output to achieve a "room filling" sound. If speakers with high bass output are chosen it is suggested that you apply some bass absorption in your room to mitigate any possible bass issues (see accessories).  Given your listening habits and large sized room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers. All other combinations may suit your needs.' }}
        }
        else if (state.systemAttributes.roomSize === 'large' && state.systemAttributes.outputValue === '2') {
            return {
                newSystem: {
                    ...state.newSystem,
                recommendations: 'Based on the large size of your room it is suggested that you choose speakers with medium or high bass output to achieve a "room filling" sound. If speakers with high bass output are chosen it is suggested that you apply some bass absorption in your room to mitigate any possible bass issues (see accessories).  Given your listening habits and large sized room, it is suggested to only pair high-sensitivity speakers with low-output amplifiers and high-output amplifiers with low sensitivity speakers.' }}
        }
    })
}

 


    render() {
        return (
            <div>
                <h1>Create New System:</h1>

                <label>System Name:</label>
                <input onChange={(event) => this.handleChange(event, 'name')}></input>

                <label>Description:</label>
                <input onChange={(event) => this.handleChange(event, 'description')}></input>

                <h1>Recommendations:</h1>

                <p>What size is your listening room?</p>
               
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

                {this.state.dimensions.height === 1 || this.state.dimensions.width === 1 || this.state.dimensions.length === 1 ? <p>Please enter dimensions above to determine the 'acoustic size' of your room.</p> : <p>Your room is acoustically {this.state.systemAttributes.roomSize} in size. </p> }

                <h1>What volume levels do you tend to listen at?</h1>

                <select onChange={(event) => this.handleIdealOutput(event)}>
                    <option value='0'>Please select an option below</option>
                    <option value='1'>I listen at mostly lower volumes (70-80db at the listening position)</option>
                    <option value='2'>It's important for me the system to play loudly and with wide dynamics(90db+ at the listening position)</option>
                </select>


                {
                    
                    this.props.state.userInput === 2 && this.state.dimensions.height !== 1 && this.state.dimensions.width !== 1 && this.state.dimensions.length !== 1 ? this.state.newSystem.recommendations:<p>Please choose an answer from the dropdown above to recieve recommendations.</p>
                }

                <button onClick={this.goToChoose}>Choose Components</button>
                <button onClick={this.goToHome}>Cancel</button>
            
            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(CreateNewSystem);