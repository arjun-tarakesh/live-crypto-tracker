import React, { useState } from 'react'
import"./Coin.css"
import {Container, Row, Col} from "reactstrap"
import { Collapse, Button, CardBody, Card } from 'reactstrap';
const Coin = ({name, image, symbol, price, volume, priceChange,marketCap,marketCapRank, circulateSupply, totalSupply, maxSupply, athvalue, athPercentage, athDate, lastUpdate}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Container className="coin-container">
            <Row className="coin-row">
                <Col xl="2" lg="2" md="12" sm="12"  className="coin-col1"><img src={image} alt="crypto" className="coin-img" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                    
                </Col>


                <Col xl="2" lg="2" md="12" sm="12"  className="coin-col">
                <p className="coin-price">Value ₹{price.toLocaleString('en-IN')}</p></Col>


                <Col xl="2" lg="2" md="12" sm="12" className="coin-col"><p className="coin-volume">Volume ₹{volume.toLocaleString('en-IN')}</p></Col>
                    {/* toLocaleString for the commas in the price */}
                
                <Col xl="2" lg="2" md="12" sm="12" className="coin-col">    
                    {priceChange < 0 ? (
                        <p className="coin-percent red">Change : {priceChange.toFixed(2)}% ⬇️</p>
                        //  to fixed for .2 decimal places
                    ) : (
                        <p className="coin-percent green">Change : {priceChange.toFixed(2)}% 
                        ⬆️ </p>
                        //  to fixed for .2 decimal places
                    ) }

                
                
                </Col>


                <Col xl="2" lg="2" md="12" sm="12" className="coin-col" >
                    <p className="coin-mktcap">MarketCap  ₹{marketCap.toLocaleString('en-IN')}</p>
                </Col>


                <Col xl="2" lg="2" md="12" sm="12" className="coin-col"><p className="coin-mktcaprank">Rank :  #{marketCapRank.toLocaleString()}</p></Col>
                <Col xl="12" lg="12" md="12" sm="12" className="stats-col">
                <div>
                        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }} className="stats">More stats</Button>
                        <Collapse isOpen={isOpen}>
                            <Card className="stats-details">
                            <CardBody className="stats-body">
                            
                            <p>Circulating Supply : {circulateSupply}</p>
                            <p>Total Supply : {totalSupply}</p>
                            <p>Maximum Supply : {maxSupply}</p>
                            <p>ATH : {athvalue}</p>
                            <p>ATH % : {athPercentage}%</p>
                            <p>ATH date : {athDate}</p>
                            <p>Last Updated : {lastUpdate}</p>
                            </CardBody>
                            </Card>
                        </Collapse>
                    </div></Col>

                
            </Row>
        </Container>
        
        
            
        
    )
}

export default Coin
