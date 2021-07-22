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
                            <h1 className="price-title">ADDITIONAL OPTIONS</h1>
                        </>

                    )
                })
            }
        </div>
        // <div className="pricing">
        //     <h1 className="price-title">PRICELIST</h1>
        //     <Row xs="1" md="2" lg="2">
        //         <Col>
        //             <h4>SPOT REPAIR</h4>
        //             <p>$80.00</p>
        //         </Col>
        //         <Col>
        //             <h4>BUMPER REPAIR</h4>
        //             <p>$145.00</p>
        //         </Col>
        //     </Row >
        //     <Row xs="1" md="2" lg="2">
        //         <Col>
        //             <h4>BUFFING/SCRATCH REPAIR</h4>
        //             <p>$65.00</p>
        //         </Col>
        //         <Col>
        //             <h4>TOUCH UP</h4>
        //             <p>$35.00</p>
        //         </Col>
        //     </Row>
        //     <Row xs="1" md="2" lg="2">
        //         <Col>
        //             <h4>PAINT A PANEL</h4>
        //             <p>$175.00</p>
        //         </Col>
        //         <Col>
        //             <h4>WHEEL REPAIR</h4>
        //             <p>$40.00</p>
        //         </Col>
        //     </Row >
        //     <h1 className="price-title">ADDITIONAL OPTIONS</h1>
        //     <h5>(10.00 - 25.00)</h5>
        //     <Row xs="1" md="2" lg="2">

        //         <Col>
        //             <h4>BONDO</h4>
        //         </Col>
        //         <Col>
        //             <h4>PLASTIC REPAIR</h4>

        //         </Col>
        //     </Row>
        //     <Row xs="1" md="2" lg="2">
        //         <Col>
        //             <h4>EXCESSIVE REPAIR</h4>
        //         </Col>
        //         <Col>
        //             <h4>TRI-COAT COLORS</h4>
        //         </Col>
        //     </Row>
        //     <Row xs="1" md="2" lg="2">
        //         <Col>
        //             <h4>HYPER SILVER</h4>
        //         </Col>
        //         <Col>
        //             <h4>MACHINED</h4>
        //         </Col>
        //     </Row>

        // </div>
    )
}

export default Prices
