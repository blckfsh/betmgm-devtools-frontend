import React, { Component } from 'react';
import GameList from '../components/games/game-list';
import GameViewer from '../components/games/game-viewer';

export default class GameContainer extends Component {
    
    state = {
        games: [],
        game: {},
        brandValue: 'BetMGM - NJ',
        sortValue: '',
        inputValue: '',
        isGameViewOn: false
    }

    loadBetNJ = () => {
        fetch('http://localhost:5000/games/betmgm/nj/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('BetMGM - NJ API');
            this.setState({
                games: gamesData,
                brandValue: 'BetMGM - NJ'
            })
        })
    }

    loadBetMI = () => {
        fetch('http://localhost:5000/games/betmgm/mi/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('BetMGM - MI API');
            this.setState({
                games: gamesData,
                brandValue: 'BetMGM - MI'
            })
        })
    }

    loadBetPA = () => {
        fetch('http://localhost:5000/games/betmgm/pa/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('BetMGM - PA API');
            this.setState({
                games: gamesData,
                brandValue: 'BetMGM - PA'
            })
        })
    }

    loadBetWV = () => {
        fetch('http://localhost:5000/games/betmgm/wv/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('BetMGM - WV API');
            this.setState({
                games: gamesData,
                brandValue: 'BetMGM - WV'
            })
        })
    }

    loadBorgataNJ = () => {
        fetch('http://localhost:5000/games/borgata/nj/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('Borgata - NJ API');
            this.setState({
                games: gamesData,
                brandValue: 'Borgata - NJ'
            })
        })
    }

    loadBorgataPA = () => {
        fetch('http://localhost:5000/games/borgata/pa/api')
        .then(res => res.json())
        .then(gamesData => {
            console.log('Borgata - PA API');
            this.setState({
                games: gamesData,
                brandValue: 'Borgata - PA'
            })
        })
    }

    componentDidMount() {
        if (this.state.brandValue === "BetMGM - NJ") {
            this.loadBetNJ()
        } else if (this.state.brandValue === "BetMGM - MI") {
            this.loadBetMI()
        } else if (this.state.brandValue === "BetMGM - PA") {
            this.loadBetPA()
        } else if (this.state.brandValue === "BetMGM - WV") {
            this.loadBetWV()
        } else if (this.state.brandValue === "Borgata - NJ") {
            this.loadBorgataNJ()
        } else if (this.state.brandValue === "Borgata - PA") {
            this.loadBorgataPA()
        }
        // console.log('Current brand: ' + this.state.brandValue);
    }

    handleBrandOnClick = (event) => {
        // console.log('Brand working', event.target.value)

        if (event.target.value === "BetMGM - NJ") {
            this.loadBetNJ()
        } else if (event.target.value === "BetMGM - MI") {
            this.loadBetMI()
        } else if (event.target.value === "BetMGM - PA") {
            this.loadBetPA()
        } else if (this.state.brandValue === "BetMGM - WV") {
            this.loadBetWV()
        } else if (this.state.brandValue === "Borgata - NJ") {
            this.loadBorgataNJ()
        } else if (this.state.brandValue === "Borgata - PA") {
            this.loadBorgataPA()
        }

        this.setState({
            brandValue: event.target.value
        })
        // console.log(this.state.games)
    }

    handleSortGames = (event) => {
        // console.log("sort button", this.state.sortValue)
        this.setState({
            sortValue: event.target.value
        })
    }

    sortGames = (games) => {
        if (this.state.sortValue === "Name") {
            return [...games].sort((a,b) => {
                if(a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Provider") {
            return [...games].sort((a,b) => {
                if(a.provider > b.provider) {
                    return 1
                } else if (a.provider < b.provider) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (this.state.sortValue === "Game") {
            return [...games].sort((a,b) => {
                if(a.game > b.game) {
                    return 1
                } else if (a.game < b.game) {
                    return -1
                } else {
                    return 0
                }
            })
        } else {
            return games
        }
    }

    handleGameView = (gameItem) => {
        console.log("click", gameItem)
        this.setState({
            game: gameItem,
            isGameViewOn: !this.state.isGameViewOn
        })
    }

    handleGameGoBack = () => {
        this.setState({
            game: {},
            isGameViewOn: false
        })
    }

    viewDetails = (gameItem) => {
        console.log("view details", gameItem)
        this.setState({
            game: gameItem
        })
    }

    gameFilterOnChange = (event) => {
        console.log("Hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {

        const filteredGames = this.state.games.filter(game => {
            return game.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })

        return (
            <div>
                <div className="add-space">
                    <p><strong>BETMGM</strong></p>
                    <div className="btn-group col-md-12" role="group" aria-label="brand buttons">
                        <button type="button" className="btn btn-outline-warning" onClick={this.handleBrandOnClick} value="BetMGM - NJ">New Jersey</button>
                        <button type="button" className="btn btn-outline-warning" onClick={this.handleBrandOnClick} value="BetMGM - MI">Michigan</button>
                        <button type="button" className="btn btn-outline-warning" onClick={this.handleBrandOnClick} value="BetMGM - PA">Pennsylvania</button>
                        <button type="button" className="btn btn-outline-warning" onClick={this.handleBrandOnClick} value="BetMGM - WV">West Virginia</button>
                    </div>
                </div>
                <div className="add-space">
                    <p><strong>BORGATA ONLINE</strong></p>
                    <div className="btn-group col-md-12" role="group" aria-label="brand buttons">
                        <button type="button" className="btn btn-outline-danger" onClick={this.handleBrandOnClick} value="Borgata - NJ">New Jersey</button>
                        <button type="button" className="btn btn-outline-danger" onClick={this.handleBrandOnClick} value="Borgata - PA">Pennsylvania</button>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label>Sort Games</label>
                        <select name="sortValue" className="form-control" onChange={this.handleSortGames}>
                            <option value="All">All</option>
                            <option value="Name">Name</option>
                            <option value="Game">Game</option>
                            <option value="Provider">Provider</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="search">Search Name</label>
                        <input type="text" className="form-control" value={this.inputValue} onChange={this.gameFilterOnChange} />
                    </div>
                </div>
                {
                    this.state.isGameViewOn ?
                    <GameViewer 
                        game={this.state.game}
                        handleGameGoBack={this.handleGameGoBack}
                        viewDetails={this.viewDetails}
                        brandValue={this.state.brandValue}
                    />
                    :
                    <GameList 
                        games={this.sortGames(filteredGames)}
                        handleGameView={this.handleGameView}
                        gameFilterOnChange={this.gameFilterOnChange} 
                        inputValue={this.state.inputValue} 
                    />
                }
            </div>
        )
    }
}