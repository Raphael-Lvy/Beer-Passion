import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import jumbo4 from '../Assets/carousel/jumbo4.jpg';
import './About.css';

export function About() {


    return (
        <Container className='mt-auto'>
           <div className='about-header' ><h3>A few words <span className='underline--magical'>about us</span></h3></div>
            <Container style={Styles.p} className='about-shadow'>
                    <h4>Tellus diam dignissim</h4>
                    <p>
Faucibus bibendum lacinia mus dignissim sociis molestie. Quisque nisl hac nascetur maecenas nisl lacinia et fames. Blandit per convallis purus consectetur varius adipiscing dapibus penatibus tincidunt consequat sit cum. Diam imperdiet lacus magnis dictum accumsan scelerisque ipsum sollicitudin tristique accumsan ipsum nulla. Sed tincidunt tristique nibh sed eleifend purus semper venenatis dui elit habitant sociis. Class, semper dapibus commodo feugiat nibh aptent maecenas vehicula varius. Dignissim sagittis aliquet nascetur purus posuere tellus eros dictumst sodales! Integer sollicitudin dolor lacinia in dictum integer arcu. Risus laoreet.
</p><img src={jumbo4} alt='bar' style={Styles.CardImg}></img>
<p>
Magna eget molestie vivamus pharetra curae; luctus morbi mattis lacinia pulvinar. Pharetra posuere leo nisl augue lobortis vehicula eget ridiculus nisl. Diam blandit porta bibendum, mi cras litora aenean convallis ante inceptos cubilia praesent. Nostra orci montes pretium venenatis ac. Enim maecenas mus vitae tempor lobortis tincidunt per. Faucibus, ut dictumst volutpat sodales augue. Suspendisse quam dui magnis urna curae;. Sagittis velit ullamcorper malesuada orci magna, pharetra natoque urna dis mollis. In lacus himenaeos erat volutpat. Eleifend; class torquent eget amet maecenas mattis sociosqu ligula libero nibh.
</p>
<p>
Hac sollicitudin dictum phasellus tempor neque quis aliquet ipsum adipiscing natoque nullam! Et ac malesuada ullamcorper. Bibendum vulputate iaculis morbi dolor netus. Libero ornare ultrices taciti pharetra urna netus montes donec nullam libero sapien! Quisque ut tempor per, tristique sit inceptos tempor duis libero! Arcu non phasellus scelerisque. Elit sed feugiat tempus himenaeos ipsum faucibus purus torquent felis. Himenaeos sodales torquent ad faucibus sit iaculis egestas bibendum habitasse diam praesent semper! Egestas torquent adipiscing, metus gravida et vel nisl sit varius feugiat imperdiet aptent. Imperdiet dis vestibulum.
</p>
<p>
Velit ligula cum quam hac phasellus risus accumsan. Et lorem porta hac eu consequat sagittis justo dictumst integer nec pretium. Metus ad facilisi mi. Pulvinar magna laoreet nostra mus? Faucibus vitae posuere aliquam lacus porta a odio cursus dictum mattis curae; sapien. Hac vitae facilisi justo magna lorem nibh, proin ornare feugiat tristique eu.
</p>
<p>
Senectus etiam, per nostra congue. Himenaeos in primis ultrices. Tempus faucibus ipsum lacus tellus mus. Tellus diam dignissim facilisis in nunc nec torquent felis lacinia diam etiam. Quam pharetra litora class vulputate dapibus ligula sagittis magna urna platea vestibulum aptent. Erat sodales torquent fringilla nascetur phasellus montes. Hendrerit consequat integer quis egestas lacus integer fermentum sodales mi lacinia. Curabitur scelerisque luctus donec mauris. Risus sagittis dictumst senectus risus vel class neque. Sagittis elit vivamus lectus adipiscing cras praesent consequat viverra litora inceptos sem! Aenean, duis sodales ante luctus parturient mattis nam elit blandit pharetra ut.
</p>
            </Container>
        </Container>
    )
}

const Styles = {
    Card: { width: '16rem', margin: 10, opacity: 0.8 },
    CardImg: {
        width: '60vw',
       borderRadius: '1rem',
       marginBottom: 15
       
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

    Button: {},

    price: {
        fontSize: '0.8rem'
    },

    p: {
        padding: '1rem',
        background: 'linear-gradient(to left top, rgba(255, 255, 255, 0.878),rgba(255, 255, 255, 0.981))',
        marginTop: '2rem',
        marginBottom: '2rem',
        color: 'black',
        borderRadius: '1rem',
    }
}