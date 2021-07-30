import { Container } from '@material-ui/core'
import React from 'react'

 function BusinessInfo (props) {
    return (
        <div>
            <Container>
                <section>
                    <div>
                        <img src='https://via.placeholder.com/300.png'/>
                    </div>
                </section>
                <section>
                    <div>
                        <p>Business Name: {props.name}</p>
                    </div>
                    <div>
                        <p>Location: {props.location}</p>
                    </div>
                    <div>
                        <p>Contact: {props.contact}</p>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default BusinessInfo;

