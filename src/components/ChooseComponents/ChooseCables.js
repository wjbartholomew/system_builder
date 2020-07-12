import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChooseComponent.css'

class ChooseCables extends Component {

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

                        if (item.component_category === 4) {

                            return <div key={item.id} className="component">
                                <h3>{item.brand} {item.name}</h3>
                                <p>Description: {item.description}</p>
                                <p>Price: ${item.price}</p>
                                <img src={item.image} alt={item.name}></img>
                                <button value={item.id} onClick={(event) => this.addComponent(event)}>Insert Component</button>
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

            </div>
        )
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(ChooseCables);