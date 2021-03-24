import React from 'react';
import { Link } from 'react-router-dom';

const BookmarkItem = (props) => {
    const { _id, desc, brand, state, url, status } = props.bookmark

    return (
        <>
            <tr>
                <td scope="row"><a href={url} target="_blank" rel="noopener noreferrer" tooltip={url}><strong>{desc}</strong></a></td>
                <td scope="row"><span className={brand === "BetMGM" ? "badge badge-warning": brand === "Borgata" ? "badge badge-danger" : brand === "Party Casino" ? "badge badge-info" : brand === "Party Poker" ? "badge badge-success" : "badge badge-default"}>{brand}</span></td>                
                <td scope="row"><span className="badge badge-dark">{state}</span></td>                
                <td scope="row" align="center"><div className={status === "active" ? "status status-success" : "status status-danger"}>&nbsp;</div></td>
                <td scope="row">                    
                    <Link className="btn btn-outline-primary btn-sm" to={"/bookmarks/edit/" + _id}>edit</Link>
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => props.deleteBookmark(_id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default BookmarkItem