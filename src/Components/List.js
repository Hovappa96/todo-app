import React from "react";

const List = (props) => {
    const { text, id, onDelete } = props
    return <>
        <div className="list_div">
            <button className="btn2" onClick={() => { onDelete(id) }}>-</button>
            <li>{text}</li>
        </div>
    </>
}

export default List;