import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Cart.css';

export function Cart({ beers }) {

    const [total, setTotal] = useState(0);

    let price = 0;
    const computePrice = () => {
        for (let i = 0; i < beers.length; i++) {
            price += beers[i][0].abv;
        }
        return price;
    }


    useEffect(() => {
        computePrice();
        setTotal(price);

    }, [])

    return (
        <Container className='mt-auto'>
            <div className='cart-header' ><h3>See what's in your <span className='underline--magical'>Cart</span></h3></div>
            <div className="d-flex flex-column  justify-content-center align-content-center flex-wrap cart">

                <h4 className='cart-header'>
                    Check Out
                     </h4>
                <div className='items-in-cart-custom'>
                    {beers.map(beer => {
                        return (
                            <div className='cart-products'>
                                <div key={beer[0].id} className='cart-shadow '>

                                    <img className='cart-img' src={beer[0].image_url} alt='beer' />



                                </div>
                                <h5 className=''>{beer[0].name}</h5>

                                <div className='cart-product-price'>
                                    <h5> {beer[0].abv}0€</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='total'> <h5 className='' >Total:</h5> <h5>{total}0€ TTC</h5></div>
            </div>
            <div className="d-flex flex-column  justify-content-center align-content-center flex-wrap cart">

                <h4 className='cart-header'>
                    Check Out
                 </h4>
                <Form>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="dark" type="submit">
                        Submit
  </Button>
                </Form>
            </div>
        </Container>
    )
}


