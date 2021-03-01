
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import logo from '../Assets/beer.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './Navigation.css';

export function Navigation(props) {
    return (
        <Navbar bg='dark' variant='dark' className='fixed-top py-0' >
            <Navbar.Collapse className="justify-content-between" >

                <Navbar.Brand className='d-flex' href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        style={{ marginRight: 10 }}
                    /><span className='large-screen logo'>Beer Passion</span>
                </Navbar.Brand>

                <div className='d-flex'>
                    <Nav.Link href="/cart" className='p-2'><Button variant="secondary" size='xs' className='' >
                    <i className='fas fa-shopping-cart mr-2' /> <Badge pill variant="light">{props.itemNb}</Badge>
                        
                        <span className="sr-only">items in cart</span>
                    </Button> </Nav.Link>
                    <Badge onClick={props.clearCart} pill variant="secondary" size='xs' className='  ml-1 align-self-center p-2 clear' ><i class="fas fa-trash-alt"></i></Badge>
                   

                </div>

                <Nav className="" activeKey="/home">
                    <DropdownButton
                        menuAlign="right"
                        title="Menu"
                        id="dropdown-menu-align-right"
                        variant='secondary'
                        className='small-screen btn-menu'
                    >
                        <Dropdown.Item eventKey="1" href="/">Home</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="2" href="/shop">Shop</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4" href="/cart">Cart</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="3" href="/about">About</Dropdown.Item>


                    </DropdownButton>
                    <div className='large-screen'>
                    
                        <Nav.Link className='tabs' href="/">Home</Nav.Link>
                        <Nav.Link eventKey="link-2" href="/shop">Shop</Nav.Link>
                        <Nav.Link eventKey="link-4" href="/cart">Cart</Nav.Link>
                        <Nav.Link eventKey="link-3" href="/about">About</Nav.Link>

                    </div>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}

