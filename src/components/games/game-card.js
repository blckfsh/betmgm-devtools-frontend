import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const GameCard = (props) => {

    const {sid, name, game, provider } = props.game
    const brand = props.brandValue;
    let squareRetina = '';
    const varientName = game;
    const varientNameMobile = game;

    if (brand === 'BetMGM - NJ') {
        squareRetina = `<img src='https://casinogames.nj.playmgm.com/htmllobby/images/newlmticons/square/${game}.jpg' />`
    } else if (brand === 'BetMGM - MI') {
        squareRetina = `<img src='https://casinogames.mi.playmgm.com/htmllobby/images/newlmticons/square/${game}.jpg' />`
    } else if (brand === 'BetMGM - WV') {
        squareRetina = `<img src='https://casinogames.wv.playmgm.com/htmllobby/images/newlmticons/square/${game}.jpg' />`
    } else if (brand === 'BetMGM - PA') {
        squareRetina = `<img src='https://casinogames.pa.playmgm.com/htmllobby/images/newlmticons/square/${game}.jpg' />`
    } else if (brand === 'Borgata - NJ') {
        squareRetina = `<img src='https://casinogames.borgataonline.com/htmllobby/images/newlmticons/square/${game}.jpg' />`
    } else if (brand === 'Borgata - PA') {
        squareRetina = `<img src='https://casinogames.pa.borgataonline.com/htmllobby/images/newlmticons/square/${game}.jpg' />`
    }
 
    // const squareRetina = "${val:" + sid.substring('/id/'.length) + ".SqaureRetina}"
    // const varientName = "${val:" + sid.substring('/id/'.length) + ".VarientName}"
    // const varientNameMobile = "${val:" + sid.substring('/id/'.length) +  ".VarientNameMobile}"

    return (
        <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
            <p className="card-text">Game: {game}</p>
            <p className="card-text">Provider: {provider}</p>
            <p className="card-text">Brand: {props.brandValue}</p>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <CopyToClipboard text={squareRetina}>
                        <a href="#" className="btn btn-outline-success btn-sm">COPY SQUARE RETINA</a>
                    </CopyToClipboard>
                </li>
                <li className="list-group-item">
                    <CopyToClipboard text={varientName}>
                        <a href="#" className="btn btn-outline-success btn-sm">COPY VARIENT NAME</a>
                    </CopyToClipboard>
                </li>
                <li className="list-group-item">
                    <CopyToClipboard text={varientNameMobile}>
                        <a href="#" className="btn btn-outline-success btn-sm">COPY VARIENT NAME (MOBILE)</a>
                    </CopyToClipboard>
                </li>
            </ul>
        </div>
    )
}

export default GameCard