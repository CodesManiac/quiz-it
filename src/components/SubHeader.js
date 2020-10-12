import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../styles/Subheader.css'

function SubHeader() {
    return (
        <div className="grid-row">
           
                <h1>Learning Made Fun</h1>
                <h4>Learning new things while having fun at the same time</h4>
                <Button className="subheader-get-started"><NavLink to='/quiz' className='start'>Start Learning</NavLink></Button>

            
        </div>
    )
}

export default SubHeader
