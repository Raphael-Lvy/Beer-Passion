import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import './Shop.css';

export function Shop({ addItem }) {

    useEffect(() => {
        fetchBeers();
    }, []);

    const [beers, setBeers] = useState([]);

    const fetchBeers = async () => {
        const data = await fetch(`https://api.punkapi.com/v2/beers?per_page=9`);

        const items = await data.json();

        setBeers(items);
    }




    return (
        <Container className='mt-auto'>

            <div className='shop-header ' ><h3> Amazing<span className='underline--magical '> beers</span> <span className='sub'>(for amazing people)</span></h3></div>

            <div className="d-flex flex-row  justify-content-center flex-wrap">
                {beers.map(beer => {
                    return (
                        <Card key={beer.id} bg='light' style={Styles.Card} className='shop-shadow'>
                            <Card.Header style={Styles.Cardheader}>{beer.tagline}</Card.Header>
                            <Card.Img variant="top" src={beer.image_url} style={Styles.CardImg} />
                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>

                                <Card.Text className='text-justify' style={Styles.Cardtext}>
                                    <b>Description:</b> {beer.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Nav.Link href={`/shop/${beer.id}`}> <Button className='align-self-end' variant="dark" style={Styles.Button}>Discover</Button></Nav.Link>
                            </Card.Footer>

                        </Card>
                    )
                })}
            </div>



        </Container>
    )
}

const Styles = {
    Card: { width: '16rem', margin: 10, opacity: 0.93 },
    CardImg: {
        width: '3.6rem',
        height: '10rem',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: -15,
    },
    Cardheader: { fontWeight: "bolder" },
    Cardtext: {
        maxHeight: '23vh',
        overflowY: 'scroll',
        fontSize: '0.8rem'
    },
    jumboStyle: {
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginTop: 10,
        padding: 10,
        color: 'white'
    },

    Button: {
        margin: -15
    },

    price: {
        fontSize: '0.8rem'
    }
}