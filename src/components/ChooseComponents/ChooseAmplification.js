import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChooseComponent.css'

class ChooseAmplification extends Component {

    componentDidMount() {
        this.getComponents();
    }

    getComponents = () => {
        this.props.dispatch({
            type: 'GET_AMPLIFICATION'
        })
    }

    goToInsert = () => {
        this.props.history.push('/insert');
    }

    addAmplification = (event) => {
        console.log('in addAmplification to system')
        console.log('event value(item id) for adding amplification', event.target.value)
        this.props.dispatch({
            type: 'ADD_TO_AMPLIFICATION',
            payload: event.target.value
        })
        this.props.history.push('/select');
    }

    render() {
        return (
            <div>
                <h1>Choose a Component!</h1>
                <div>
                    {this.props.state.components.map(item => (
                        <div key={item.id} className="component">
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <img src={item.image} alt={item.name}></img>
                            <button value={item.id} onClick={(event) => this.addAmplification(event)}>Insert Component</button>
                        </div>
                    ))}

                </div>

                <div className="component">
                    <p>Insert Custom Component</p>
                    <button onClick={this.goToInsert}>Insert Component</button>
                </div>

            </div>
        )
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(ChooseAmplification);