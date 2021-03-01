import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel';
import jumbo4 from '../Assets/carousel/jumbo4.jpg';
import jumbo5 from '../Assets/carousel/jumbo5.jpg';
import jumbo6 from '../Assets/carousel/jumbo6.jpg';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import logo from '../Assets/beer.svg';
import './Home.css';


export function Home() {


    const carouselImg = [
        {
            src: jumbo4,
            id: "img4"
        }, {
            src: jumbo5,
            id: "img5"
        },
        {
            src: jumbo6,
            id: "img6"
        },
    ];


    return (
        <Container className='mt-auto'>
           
          
            <Container style={Styles.container}>
                <Carousel style={Styles.carousel} className=' home-carousel home-shadow '>
                    {carouselImg.map((photo) => {
                        return (
                            
                            <Carousel.Item key={photo.id} interval={3000} style={Styles.image} >
                            <Carousel.Caption className='home-header' ><h3><span className='underline--magical'>Keep calm</span> and have a <span className='underline--magical'>beer</span>...</h3></Carousel.Caption>
                                <img
                                    className="d-block w-100"
                                    src={photo.src}
                                    alt="First slide"

                                />
                                <Carousel.Caption >
                                    <Nav.Link href="/shop"> <button className='home-btn home-btn-small' >
                                        <h5 className='home-btn-text'>Go to Shop</h5>
                                    </button></Nav.Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </Container>
            <Container style={Styles.p} className='home-shadow'>
            
                <h4>Leo ad adipiscing</h4>
                <p >Curabitur dis ornare netus. Dis taciti nunc nam suspendisse suscipit ipsum faucibus nulla nisi elit. Accumsan litora non auctor, penatibus erat nibh consectetur purus interdum primis. Convallis lacinia vehicula facilisis laoreet nulla. Sed nisl quam rutrum litora? Himenaeos malesuada fringilla montes id platea nascetur bibendum. Cum et luctus amet turpis sociis nibh lobortis tincidunt molestie tincidunt. In sollicitudin nisl vitae nam tristique nostra odio libero condimentum nascetur vitae. Praesent accumsan et lacus odio, lorem conubia risus dictum phasellus proin imperdiet. Class pellentesque hac?</p>
                Velit ligula cum quam hac phasellus risus accumsan. Et lorem porta hac eu consequat sagittis justo dictumst integer nec pretium. Metus ad facilisi mi. Pulvinar magna laoreet nostra mus? Faucibus vitae posuere aliquam lacus porta a odio cursus dictum mattis curae; sapien. Hac vitae facilisi justo magna lorem nibh, proin ornare feugiat tristique eu.

<p>
                    Senectus etiam, per nostra congue. Himenaeos in primis ultrices. Tempus faucibus ipsum lacus tellus mus. Tellus diam dignissim facilisis in nunc nec torquent felis lacinia diam etiam. Quam pharetra litora class vulputate dapibus ligula sagittis magna urna platea vestibulum aptent. Erat sodales torquent fringilla nascetur phasellus montes. Hendrerit consequat integer quis egestas lacus integer fermentum sodales mi lacinia. Curabitur scelerisque luctus donec mauris. Risus sagittis dictumst senectus risus vel class neque. Sagittis elit vivamus lectus adipiscing cras praesent consequat viverra litora inceptos sem! Aenean, duis sodales ante luctus parturient mattis nam elit blandit pharetra ut.
</p>

                <Nav.Link href="/shop"> <button className='home-btn' >
                    <h5 className='home-btn-text'>Go to Shop</h5>
                </button></Nav.Link>
            </Container>
        </Container>
    )
}

const Styles = {
    Card: { width: '16rem', margin: 10, opacity: 0.8 },
    CardImg: {
        width: '2.5rem',
        height: '7rem',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: -15,
    },
    Cardheader: { fontWeight: "bolder" },
    Cardtext: {
        maxHeight: '25vh',
        overflowY: 'scroll',
        fontSize: '0.8rem'
    },
    jumboStyle: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        marginTop: 10,
        padding: 10,
        color: 'white'
    },


    price: {
        fontSize: '0.8rem'
    },

    container: {
        display: 'flex',
        justifyContent: "center",
    },

    carousel: {
      
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'flex',
    },

    image: {
        borderRadius: '5px',
    },

    p: {
        padding: '1rem',
        background: 'linear-gradient(to left top, rgba(255, 255, 255, 0.88),rgba(255, 255, 255, 0.981))',
        marginTop: '2rem',
        marginBottom: '2rem',
        color: 'black',
        borderRadius: '1rem',
    }
}