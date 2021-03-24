import React from 'react';
import { Link } from 'react-router-dom';

const ToolItem = (props) => {
    const { _id, desc, brand, state, value, status } = props.tool

    return (
        <>
            <tr>
                <td scope="row"><a href={value} target="_blank" rel="noopener noreferrer" tooltip={value}><strong>{desc}</strong></a></td>
                <td scope="row"><span className={brand === "BetMGM" ? "badge badge-warning": brand === "Borgata" ? "badge badge-danger" : brand === "Party Casino" ? "badge badge-info" : brand === "Party Poker" ? "badge badge-success" : "badge badge-default"}>{brand}</span></td>                
                <td scope="row"><span className="badge badge-dark">{state}</span></td>                
                <td scope="row" align="center"><div className={status === "active" ? "status status-success" : "status status-danger"}>&nbsp;</div></td>
                <td scope="row">                    
                    <Link className="btn btn-outline-primary btn-sm" to={"/tools/edit/" + _id}>edit</Link>
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => props.deleteTool(_id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default ToolItem