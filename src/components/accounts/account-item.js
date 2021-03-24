import React from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const AccountItem = (props) => {
    const { _id, username, password, segment, brand, status } = props.account

    return (
        <>
            <tr>
                <td scope="row">
                    <CopyToClipboard text={username}>
                        <a href="#" className="btn btn-outline-primary btn-sm">{username}</a>
                    </CopyToClipboard>
                </td>
                <td scope="row">
                    <CopyToClipboard text={password}>
                        <a href="#" className="btn btn-outline-primary btn-sm">{password}</a>
                    </CopyToClipboard>
                </td>
                <td scope="row">{segment}</td>
                <td scope="row"><span className={brand === "BetMGM" ? "badge badge-warning": brand === "Borgata" ? "badge badge-danger" : brand === "Party Casino" ? "badge badge-info" : brand === "Party Poker" ? "badge badge-success" : "badge badge-default"}>{brand}</span></td>                
                <td scope="row" align="center"><div className={status === "active" ? "status status-success" : "status status-danger"}>&nbsp;</div></td>
                <td scope="row">                    
                    <Link className="btn btn-outline-primary btn-sm" to={"/accounts/edit/" + _id}>edit</Link>
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => props.deleteAccount(_id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default AccountItem