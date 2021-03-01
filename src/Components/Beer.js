import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import './Beer.css'

export const Beer = ({ addItem, match }) => {

    useEffect(() => {
        fetchBeer();
    }, []);

    const [beer, setBeer] = useState([]);

    const [showA, setShowA] = useState(false);

    const toggleShowA = (e) => {
        e.preventDefault();
        setShowA(true);
        
            addItem(beer);
        
    }

    const closeShowA = (e) => {
        e.preventDefault();
        setShowA(false);
    }

    const fetchBeer = async () => {
        const data = await fetch(`https://api.punkapi.com/v2/beers/${match.params.id}`);

        const item = await data.json();
        console.log(item);

        setBeer(item);
    }



    const CartAlert = () => {

        return (


            <Toast show={showA} onClose={closeShowA} className=' mx-auto my-1 px-0 w-auto' >
                <Toast.Header className='p-1 justify-content-center'>
                    <img
                        className="rounded"
                        alt=""
                    />
                    <strong >Added to Cart!</strong>

                </Toast.Header>

            </Toast>
        )
    }



    return (
        <Container className='mt-auto'>

<div className='beer-header' ><h3>Tasty <span className='underline--magical'>beer</span></h3></div>
            <div className="d-flex flex-row  justify-content-center flex-wrap">
                {beer.map(beer => {
                    return (
                        <Card key={beer.id} bg='light' style={Styles.Card} className='beer-shadow'>
                            <Card.Header style={Styles.Cardheader}>{beer.tagline} </Card.Header>
                            <div style={Styles.Flex}>
                                <Card.Img src={beer.image_url} style={Styles.CardImg} className='media-left' />
                                <Card.Body>
                                    <Card.Title style={Styles.CardTitle}>{beer.name}</Card.Title>
                                    <Card.Text className='text-justify' style={Styles.Cardtext}>
                                        <b>Description:</b> {beer.description}
                                    </Card.Text>
                                    <Card.Text className='text-justify' style={Styles.Cardtext}>
                                        <b>Brewers tips:</b> {beer.brewers_tips}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                            <Card.Footer>
                                <CartAlert></CartAlert>
                                <h3> {beer.abv}0€<span style={Styles.Cardtext}> /unit</span></h3>
                                <Button className='align-self-end' variant="dark" style={Styles.Button} onClick={toggleShowA}>Add to <i className='fas fa-shopping-cart mr-2 ml-1' /></Button>
                            </Card.Footer>

                        </Card>
                    )
                })}
            </div>

        </Container>
    )
}

const Styles = {
    Card: { width: '80%', margin: 10, opacity: 0.9 },
    CardImg: {
        flex: '1',
        width: '6rem',
        height: '16rem',
        alignSelf: 'center',
        margin: 10,
        marginBottom: -25,
        background: 'white',

    },
    Cardheader: {
        fontWeight: "bolder",
        fontSize: '1.5rem'
    },
    CardTitle: {
        fontWeight: "bolder",
        fontSize: '2.5rem'
    },
    Cardtext: {
        maxHeight: '35vh',
        overflowY: 'scroll',
        fontSize: '1rem'
    },
    jumboStyle: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginTop: 10,
        padding: 10,

        color: 'white'
    },

    Button: {
        fontSize: '1.2rem',
        fontWeight: "bolder",
        marginTop: 10,
        opacity: 1
    },

    price: {
        fontSize: '0.8rem'
    },


}