import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './InsertCustom.css'

class InsertCustom extends Component {

    state = {
        brand: '',
        componentName: '',
        description: '',
        imageUrl: '',
        price: '',
        componentCategory: '',
        componentCategoryName: '',
        sourceType: '',
        sensitivity: '',
        bassOutput: '',
        powerOutput: '',
        heatOutput: '',


    }

    handleChange = (event, type) => {

        this.setState({
             
                ...this.state,
                [type]: event.target.value,
            
        })
        console.log(this.state)

    }

    insertDefaultComponent = () => {
        this.setState({
            brand: 'Audio Research',
            componentName: 'DAC 7',
            description: 'Digital to Analog Converter',
            imageUrl: 'http://www.soundstageultra.com/equipment/pics/200904_dac7b.jpg',
            price: '3495',
            componentCategory: '1',
            componentCategoryName: 'Source',
            sourceType: 'digital',
            sensitivity: '',
            bassOutput: '',
            powerOutput: '',
            heatOutput: '',
        })
    }

    


    addComponent = () => {
        if (this.state.componentCategory === '1') {
            this.setState({
                ...this.state,
                componentCategoryName: 'Source'
            })
        }
        else if (this.state.componentCategory === '2') {
            this.setState({
                ...this.state,
                componentCategoryName: 'Amplification'
            })
        }
        else if (this.state.componentCategory === '3') {
            this.setState({
                ...this.state,
                componentCategoryName: 'Speakers'
            })
        }
        else if (this.state.componentCategory === '4') {
            this.setState({
                ...this.state,
                componentCategoryName: 'Cables'
            })
        }
        else if (this.state.componentCategory === '4') {
            this.setState({
                ...this.state,
                componentCategoryName: 'Accessories'
            })
        }

        axios.post('/components', this.state)
        .catch((error) => 
        console.log('POST FAILED', error))

        this.props.history.goBack()
    }

    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <h2 onClick={this.insertDefaultComponent}>Insert Custom Component</h2>
             
                    <label>Brand:</label><input value={this.state.brand} className="input" type="text" onChange={(event) => this.handleChange(event, 'brand')}></input> 
                <br/>
                <label>Name:</label><input value={this.state.componentName} className="input" type="text" onChange={(event) => this.handleChange(event, 'componentName')}></input>
                <br />
                <label>Description:</label><input value={this.state.description} className="input" type="text" onChange={(event) => this.handleChange(event, 'description')}></input>
                <br />
                <label>Image URL:</label><input value={this.state.imageUrl} className="input" type="text" onChange={(event) => this.handleChange(event, 'imageUrl')}></input>
                <br />
                <label>Price:</label><input value={this.state.price} className="input" type="text" onChange={(event) => this.handleChange(event, 'price')}></input>
                <br />

                <label>Component Category:</label><select value={this.state.componentCategory} onChange={(event) => this.handleChange(event, 'componentCategory')}>
                
                    <option>Please select a category below</option>
                    <option value='1' >Source</option>
                    <option value='2' >Amplification</option>
                    <option value='3' >Speakers</option>
                    <option value='4' >Cables</option>
                    <option value='5' >Accessories</option>
                </select>
                <h3 className="categories" >For Sources:</h3>
                <label>Source Type:</label><select value={this.state.sourceType} onChange={(event) => this.handleChange(event, 'sourceType')}>
                    <option>Please select a type below</option>
                    <option value='analog' >Analog</option>
                    <option value='digital' >Digital</option>
                </select>
                <h3 className="categories" >For Speakers:</h3>
                <label>Sensitivity:</label><select value={this.state.sensitivity} onChange={(event) => this.handleChange(event, 'sensitivity')}>
                    <option>Please select a sensitivity below</option>
                    <option value='low' >Low</option>
                    <option value='high' >High</option>
                </select>
                <br />
                <label>Bass Output:</label><select value={this.state.bassOutput} onChange={(event) => this.handleChange(event, 'bassOutput')} value={this.state.bassOutput}>
                    <option>Please select an output below</option>
                    <option value='low' >Low</option>
                    <option value='medium' >Medium</option>
                    <option value='high' >High</option>
                </select>
                <h3 className="categories" >For Amplifiers:</h3>
                <label>Power Output:</label><select value={this.state.powerOutput} onChange={(event) => this.handleChange(event, 'powerOutput')}>
                    <option>Please select an output below</option>
                    <option value='low' >Low</option>
                    <option value='medium' >Medium</option>
                    <option value='high'>High</option>
                </select>
                <br />
                <label>Heat Output:</label><select value={this.state.heatOutput} onChange={(event) => this.handleChange(event, 'heatOutput')}>
                    <option>Please select an output below</option>
                    <option value='low' >Low</option>
                    <option value='high' >High</option>
                </select>
                
                <div className="insertCustomButtons">
                    <button onClick={this.addComponent}>Save Component</button> <button onClick={this.goBack}>Go Back</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    state
});

export default connect(mapStateToProps)(InsertCustom);