import React, { Component } from 'react';
import axios from 'axios';

export default class EditTool extends Component {
    constructor(props) {
        super(props);

        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            desc: '',
            brand: '',
            state: '',
            value: '',
            status: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/tools/'+ this.props.match.params.id)
                .then(res => {

                    let { desc, brand, state, value, status } = res.data;
                    this.setState({
                        desc: desc,
                        brand: brand,
                        state: state,
                        value: value,
                        status: status
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
    }

    onChangeDesc(e) {
        this.setState({
            desc: e.target.value
        })
    }

    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        })
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        })
    }

    onChangeValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        let { desc, brand, state, value, status } = this.state;
        const tool = {
            desc: desc,
            brand: brand,
            state: state,
            value: value,
            status: status
        };
        
        console.log(tool);

        axios.post('http://localhost:5000/tools/edit/'+ this.props.match.params.id, tool)
                .then(res => console.log(res.data));

        window.location = "/tools/"
    }

    render() {
        return (
            <div>
                <h3>Edit Tool</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" required className="form-control" value={this.state.desc} onChange={this.onChangeDesc} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Brand: </label>
                            <select required className="form-control custom-select mr-sm-2" onChange={this.onChangeBrand}>
                            <option value="Select a value">Choose a brand</option>
                            <option value="BetMGM">BetMGM</option>
                                <option value="Borgata">Borgata</option>
                                <option value="Party Poker">Party Poker</option>
                                <option value="Party Casino">Party Casino</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label>State: </label>
                            <select required className="form-control custom-select mr-sm-2" onChange={this.onChangeState}>
                                <option value="Select a value">Choose a state</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Michigan">Michigan</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Ohio">Ohio</option>
                                <option value="DC">DC</option>
                                <option value="Illinois">Illinois</option>
                                <option value="Nevada">Nevada</option>
                            </select>
                        </div>
                        <div className="form-group col-md-8">
                            <label>Value: </label>
                            <input type="text" required className="form-control" value={this.state.value} onChange={this.onChangeValue} />
                        </div>
                    </div>    
                    <input type="submit" className="btn btn-primary" value="Edit Tool" />
                </form>
            </div>
        )
    }
}