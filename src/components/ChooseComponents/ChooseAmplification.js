import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChooseComponent.css'

class ChooseAmplification extends Component {

    componentDidMount() {
        this.getComponents();
    }

    getComponents = () => {
        this.props.dispatch({
            type: 'GET_COMPONENTS'
        })
    }

    goToInsert = () => {
        this.props.history.push('/insert');
    }

    goBack = () => {
        this.props.history.push('/select')
    }

    addComponent = (event) => {
        console.log('in addComponent to system')
        console.log('event value for adding component', event.target.value)
        this.props.dispatch({
            type: 'ADD_TO_SYSTEM_COMPONENTS',
            payload: event.target.value
        })
        this.props.history.push('/select');
    }

    render() {
        return (
            <div>
                <h1>Choose a Component!</h1>
                <div>
                    {this.props.state.availableComponents.map(item => {

                        if (item.component_category === 2) {

                            return <div key={item.id} className="component">
                                <div>
                                <h3>{item.brand} {item.name}</h3>
                                <p>Description: {item.description}</p>
                                <p>Power Output: {item.power_output}</p>
                                <p>Heat Output: {item.heat_output}</p>
                                <p>Price: ${item.price}</p>
                                <img src={item.image} alt={item.name}></img>
                                <button value={item.id} onClick={(event) => this.addComponent(event)}>Insert Component</button>
                           </div>
                            </div>
                        }
                        else {
                            return null
                        }
                    })}

                </div>

                <div className="component">
                    <h3>Insert Custom Component</h3>
                    <button onClick={this.goToInsert}>Insert Component</button>
                </div>

                <div className="chooseComponentsButton">
                    <button onClick={this.goBack} >Go Back</button>
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(ChooseAmplification);