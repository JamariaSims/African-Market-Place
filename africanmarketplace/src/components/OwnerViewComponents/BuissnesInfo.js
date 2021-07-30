import { Container } from '@material-ui/core'
import React from 'react'

 function BuissnesInfo (props) {
    return (
        <div>
            <Container>
                <div>
                    <img src='https://via.placeholder.com/300.png'/>
                </div>
                <div>
                    <p>Buissnes Name: {props.name}</p>
                </div>
                <div>
                    <p>Location: {props.location}</p>
                </div>
                <div>
                    <p>Contact: {props.contact}</p>
                </div>
            </Container>
        </div>
    )
}

export default BuissnesInfo;

