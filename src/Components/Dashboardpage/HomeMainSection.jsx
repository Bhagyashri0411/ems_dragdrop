import React, { useState } from "react";
import './Home.css';

const HomeMainSection = (props) => {

    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });


    const handleMouseMove = (e) => {
        if (dragging && props.selectedBox !== null) {
            const updatedBoxes = [...props.boxes];
            const index = updatedBoxes.findIndex((box) => box.id === props.selectedBox);
            updatedBoxes[index].position = {
                x: e.pageX - offset.x,
                y: e.pageY - offset.y,
            };
            props.setBoxes(updatedBoxes);
        }
    };




    const handleMouseUp = () => {
        setDragging(false);
        props.setSelectedBox(null);
    };

    const handleMouseDown = (e, id) => {
        e.preventDefault();
        props.setSelectedBox(id);
        setDragging(true);
        const selected = props.boxes.find((box) => box.id === id);
        setOffset({
            x: e.pageX - selected.position.x,
            y: e.pageY - selected.position.y,
        });
    };



    return (
        <div className='containerbox' id='code' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>

            <div className="col-md-12">
                <div className="card p-0">
                    <div className="card-body p-3">
                        {props.boxes.map((box, key) => (
                            <>
                                <div
                                    key={key}
                                    className={`boxcard ${props.selectedBox === box.id ? 'selected' : ''}`}
                                    style={{
                                        top: box.position.y,
                                        left: box.position.x,
                                        border: props.selectedBox === box.id ? '2px solid red' : '1px solid black',
                                        borderRadius: box.style.border_radius
                                    }}
                                    onClick={(e) => props.handleMouseClick(e, box.id)}
                                    onMouseDown={(e) => handleMouseDown(e, box.id)}
                                >
                                    <div className=""
                                        style={{
                                            padding: box.dimensions.padding,
                                            width: box.dimensions.width,
                                            height: box.dimensions.height,
                                        }}
                                    >

                                        {box.text} {key}
                                    </div>
                                </div >

                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default HomeMainSection;