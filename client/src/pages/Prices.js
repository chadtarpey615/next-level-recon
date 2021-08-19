import React, { useEffect } from 'react';
import Footer from "../components/footer/Footer"
import { Row, Col } from 'reactstrap';
import { options, additionalOptions } from "../API/Api"

const Prices = () => {

    useEffect(() => {
        console.log(options, additionalOptions)
    })
    return (
        <div className="pricing">
            <h1 className="price-title">PRICELIST</h1>
            {
                options.map(option => {
                    return (
                        <>
                            <Row xs="1" md="2" lg="2">
                                <Col>
                                    <h4>{option.name}</h4>
                                </Col>
                                <Col>
                                    <p>${option.price}</p>
                                </Col>
                            </Row >
                        </>

                    )

                })
            }
            <h1 h1 className="price-title" > ADDITIONAL OPTIONS</h1>

            {
                additionalOptions.map((option) => {
                    return (
                        <Row className="special-options d-flex justify-content-start
                         py-2" xs="1" md="2" lg="2">

                            <Col  >
                                <h4>{option.name}</h4>
                            </Col>
                            <Col  >
                                <h5>(10.00 - 25.00)</h5>
                            </Col>
                        </Row>
                    )

                })
            }

        </div>

    )
}

export default Prices
