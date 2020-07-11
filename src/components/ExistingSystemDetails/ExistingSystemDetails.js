import React, { Component } from 'react';
import { connect } from 'react-redux';


class ExistingSystemDetails extends Component {

    render() {
        return (
            <div>
                <h1>Existing Systems:</h1>
                {/* {this.props.state.existingSystems.map(details => {
                    return <div key={details.system_id} className="systemDiv">
                        <h2>{details.name}</h2>
                    Description: {details.description}
                    Components: {this.props.state.existingSystemComponents.map(item => {
                            if (item.system_id === details.id) {
                                return <div key={item.table_id} className="component">
                                    <p>Brand: {item.brand}</p>
                                    <p>Name: {item.name}</p>
                                    <img src={item.image} alt={item.name}></img>
                                </div>
                            }
                        })}
                        <button>Delete System</button><button>Edit System</button>
                    </div>
                })} */}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(ExistingSystemDetails);