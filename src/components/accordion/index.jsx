import React, { useState } from "react";
import accordionData from "./data.js"
import './style.css'

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)

    const [multiple, setMultiple] = useState([])


    function handleSingleSelection(getCurrentID) {
        if (getCurrentID === selected) {
            setSelected()
        }
        else {
            setSelected(getCurrentID)
        }
    }

    function handleMultiSelection(getCurrentID) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentID);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentID)
        }
        else {
            copyMultiple.splice(findIndexOfCurrentId, 1)
        }

        setMultiple(copyMultiple);
    }

    return (

        <div className="wrapper">
            {
                enableMultiSelection ?
                <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Disable Multi Selection</button>
                :                 <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>

            }
            
            <div className="accordian">
                {
                    accordionData && accordionData.length > 0 ?
                        accordionData.map(dataItem => <div className="item">
                            <div onClick=
                                {enableMultiSelection ?
                                    () => handleMultiSelection(dataItem.id) :
                                    () => handleSingleSelection(dataItem.id)
                                }
                                className="title">

                                <h3>{dataItem.title} </h3>
                                <span>{
                                    selected === dataItem.id ? <small>x</small> : "+"
                                }</span>

                            </div>
                            {
                                enableMultiSelection ?
                                    multiple.indexOf(dataItem.id) === -1 &&
                                    <div className="content">
                                        {dataItem.content}
                                    </div> :
                                    selected === dataItem.id && <div className="content">
                                        {dataItem.content}
                                    </div>
                            }

                            {/* {
                                selected === dataItem.id ?
                                    <div className="content">
                                        {dataItem.content}
                                    </div>
                                    : null
                            } */}
                        </div>)
                        : <div>No Data Found</div>
                }
            </div>
        </div>
    )
}

export default Accordian;