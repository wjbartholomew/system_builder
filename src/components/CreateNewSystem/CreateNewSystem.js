import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateNewSystem extends Component {


goToChoose = () => {
    this.props.history.push('/select')
}

goToHome = () => {
    this.props.history.push('/home')
}


    render() {
        return (
            <div>
                <h1>Create New System:</h1>

                <label>System Name:</label>
                <input onChange={this.systemName}></input>

                <label>Description:</label>
                <input onChange={this.description}></input>

                <h1>Recommendations:</h1>

                <p>What size is your listening room?</p>
               
                <label>Height:</label> 

                <select>
                    <option value='7' >7</option>
                    <option value='8' >8</option>
                    <option value='9' >9</option>
                    <option value='10' >10</option>
                    <option value='11' >11</option>
                    <option value='12' >12</option>
                    <option value='13' >13</option>
                    <option value='14' >14</option>
                    <option value='15' >15</option>
                    <option value='16' >16</option>
                </select>

                <label>Width:</label> 
                <select>
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
                
                <label>Depth:</label> 
                <select>
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

                <h1>What volume levels do you tend to listen at?</h1>

                <select>
                    <option value='1'>I listen at mostly lower volumes (70-80db at the listening position)</option>
                    <option value='2'>It's important for me the system to play loudly and with wide dynamics(90db+ at the listening position)</option>
                </select>


                <p>Based on the above answers we recommend that you choose components that...</p>

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