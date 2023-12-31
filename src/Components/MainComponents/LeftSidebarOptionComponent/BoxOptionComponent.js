import React from 'react';
import BlockSection from '../BoxStyleComponents/BlockSection';
import TextSection from '../BoxStyleComponents/TextSection';
import "../BoxStyleComponents/Section.css"

const BoxOptionCompoent = React.memo((props) => {

    return (
        <div className='stylecomponet'>

            <div className="subheading">

                <ul className="nav nav-tabs tabes" id="ex1" role="tablist" >
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="ex1-tab-1" data-bs-toggle="tab" href="#ex1-tabs-1" role="tab" aria-selected="true">
                            Block
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="ex1-tab-2" data-bs-toggle="tab" href="#ex1-tabs-2" role="tab" aria-selected="false">
                            Text
                        </a>
                    </li>
                </ul>

            </div>

            <div className="tab-content mt-2" id="ex1-content" >
                <div className="tab-pane fade show active" id="ex1-tabs-1" aria-labelledby="ex1-tab-1">
                    <BlockSection {...props} />
                </div>
                <div className="tab-pane fade" id="ex1-tabs-2" aria-labelledby="ex1-tab-2">
                    <TextSection {...props} />
                </div>
            </div>
        </div>
    )
})

export default BoxOptionCompoent
