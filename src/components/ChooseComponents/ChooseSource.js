import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ChooseComponent.css'

class ChooseComponent extends Component {

    componentDidMount () {
        this.getComponents();
    }

    getComponents = () => {
        this.props.dispatch({
            type: 'GET_SOURCES'
        })
    }

    goToInsert = () => {
        this.props.history.push('/insert');
    }

    addSource = (event) => {
        console.log('in addSource to system')
        console.log('event value for adding source', event.target.value)
        this.props.dispatch({
            type: 'ADD_TO_SOURCE',
            payload: event.target.value
        })
        this.props.history.push('/select');
        this.getComponents();
    }

    render() {
        return (
            <div>

                <div> 
                    {this.props.state.components.map(item => (
                        <div key={item.id} className="component">
                            <p>Brand: {item.brand}</p>
                            <p>Name: {item.name}</p>
                            <img src={item.image} alt={item.name}></img>
                            <button value={item.id} onClick={(event) => this.addSource(event)}>Insert Component</button>
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

export default connect(mapStateToProps)(ChooseComponent);