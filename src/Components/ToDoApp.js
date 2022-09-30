import React, { useState } from "react";
import "./style.css"
import List from "./List";


const ToDoApp = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    const OnChangeEvent = (event) => {
        setText(event.target.value)
    }

    const OnClickButton = () => {
        setList((preValue) => {
            return [...preValue, text]
        })
        setText("");
    }


    const OnDeleteButton = (id) => {
        setList((preValue) => {
            return preValue.filter((element, index) => {
                return index !== id
            })
        })
    }
    

    return <>
        <div className="main_div">
            <div className="center_div">
                <h1 className="heading">welcome to ToDoApp</h1>
                <input type="text" placeholder="enter a text" value={text} onChange={OnChangeEvent} />
                <button className="btn1" onClick={OnClickButton}>+</button>
                <br />
                <ul>
                    {
                        list.map((element, index) => {
                            return <List
                                text={element}
                                key={index}
                                id={index}
                                onDelete={OnDeleteButton}
                            />
                        })
                    }
                </ul>
            </div>
        </div>
    </>
}


export default ToDoApp;