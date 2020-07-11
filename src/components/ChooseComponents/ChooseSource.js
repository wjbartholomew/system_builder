import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChooseComponent.css'

class ChooseSource extends Component {

    componentDidMount () {
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

                        if(item.component_category === 1){

                        return  <div key={item.id} className="component">
                                    <p>Brand: {item.brand}</p>
                                    <p>Name: {item.name}</p>
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

export default connect(mapStateToProps)(ChooseSource);