import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBookmark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            desc: '',
            brand: '',
            state: '',
            url: '',
            status: 'active'
        }

        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {

    }

    onChangeDesc(e) {
        this.setState({ desc: e.target.value });
    }

    onChangeBrand(e) {
        this.setState({ brand: e.target.value });
    }

    onChangeState(e) {
        this.setState({ state: e.target.value });
    }


    onChangeUrl(e) {
        this.setState({ url: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let { desc, brand, state, url, status } = this.state;

        const newBookmark = {
            desc: desc,
            brand: brand,
            state: state,
            url: url,
            status: status
        }

        console.log(newBookmark);
        axios.post('http://localhost:5000/bookmarks/create', newBookmark)
                .then(res => console.log(res.data));

        window.location = '/bookmarks';
    }

    render() {
        return (
            <div>
                <h3>Create New Bookmark</h3>
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
                            <label>URL: </label>
                            <input type="text" required className="form-control" value={this.state.url} onChange={this.onChangeUrl} />
                        </div>
                    </div>    
                    <input type="submit" className="btn btn-primary" value="Create Bookmark" />
                </form>
            </div>
        )
    }
}