import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assests/bokaboka.jpg'
import img1 from '../../Assests/australia.jpg'
import img2 from '../../Assests/dajeeling.jpg'
import img3 from '../../Assests/goa.jpg'
import img4 from '../../Assests/hill.jpg'
import img5 from '../../Assests/maldives.jpg'
import img6 from '../../Assests/stream.jpg'
import img7 from '../../Assests/mexico.jpg'
import img8 from '../../Assests/southafrica.jpg'
import img9 from '../../Assests/swezerland.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data=[
    {
        id:1,
        imgsrc: img,
        destTitle:'Bora Bora',
        location:'New Zealand',
        grade:'Cultural Relax',
        fees:'$500',
        descriptions:'The epitome of romance ,Bora Bora is one of the best travel destinations in the world.This place is known for its luxurious stays and adventurous activities.'
        },
        {
        id:2,
        imgsrc: img1,
        destTitle:'Byron Bay',
        location:'Australia',
        grade:'Cultural Relax',
        fees:'$600',
        descriptions:'The town is a resort popular with both domestic and international tourists, not the least backpackers. It has several beaches that are popular for surfing and the scenery attracts skydivers.'
        },
        {id:3,
        imgsrc:img2,
        destTitle:'Darjeeling',
        location:'India',
        grade:'Cultural Relax',
        fees:'$150',
        descriptions:'Darjeeling is famous throughout the world for the tea it grows and the great view of the Kanchenjunga range of mountains that it offers.'
        },
        {id:4,
        imgsrc:img3,
        destTitle:'Goa',
        location:'India',
        grade:'Cultural Relax',
        fees:'$200',
        descriptions:'One of the biggest tourist attractions in Goa is water sports. Beaches like Baga and Calangute offer jet-skiing, parasailing, banana boat rides, water scooter rides, and more.'
        },
        {id:5,
        imgsrc:img4,
        destTitle:'Nandi Hills',
        location:'India',
        grade:'Cultural Relax',
        fees:'$100',
        descriptions:'Nandi Hills is an ancient hill station built by Ganga Dynasty in the Chikkaballapur district of Karnataka state. It is 10 km from Chickballapur town and approximately 60 km from Bengaluru.'
        },
        {id:6,
        imgsrc:img5,
        destTitle:'Maldives',
        location:'Maldives',
        grade:'Cultural Relax',
        fees:'$400',
        descriptions:' The Maldives provide facilities and services, entertainment and telecommunication services, they also provide numerous resorts, hotels, guest houses, and liveboards.'
        },
        {
        id:7,
        imgsrc:img6,
        destTitle:'Angel Falls',
        location:'Venezuela',
        grade:'Cultural Relax',
        fees:'$650',
        descriptions:" It is the world's tallest uninterrupted waterfall, with a height of 979 metres and a plunge of 807 metres. The waterfall drops over the edge of the Auyán-tepui mountain in the Canaima National Park, a UNESCO World Heritage site in the Gran Sabana region of Bolívar State."
        },
        {id:8,
        imgsrc:img7,
        destTitle:'Oaxaca',
        location:'Mexico',
        grade:'Cultural Relax',
        fees:'$900',
        descriptions:' A UNESCO World Heritage Site, Oaxaca is home to the spectacular Macedonio Alcala theatre and a short drive from the inspiring rock formations at Hierve el Aqua.'
        },
        
        {
        id:9,
        imgsrc:img8,
        destTitle:'Stellenbosch',
        location:'South Africa',
        grade:'Cultural Relax',
        fees:'$1000',
        descriptions:'Stellenbosch is an ideal getaway year-round. Our historic town centre is a living museum with a vibrant street culture. Expect friendly locals, a host of lively events and natural scenery to rival even our finest grape.'
        },
        
        
       {
        id:10,
        imgsrc:img9,
        destTitle:'Zurich',
        location:'Switzerland',
        grade:'Cultural Relax',
        fees:'$1200',
        descriptions:'Zurich is a popular destination amongst tourists, especially from India. Tourism in Zurich offers variety of sightseeing and entertainment options'
        }
]
const Main = () =>{
useEffect(()=>{
   Aos.init({duration:2000})
},[])

    return(
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos='fade-right' className="title">
                    Most Visited Places
                </h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({id,imgsrc,destTitle,location,grade,fees,descriptions})=>{
                      return(
                        <div key={id} data-aos="fade-up" className="singledestination">
                           <div className="imageDiv">
                            <img src={imgsrc} alt={destTitle} />
                           </div>
                           
                           <div className="cardInfo">
                            <h4 className="destTitle">
                                {destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="name">{location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                    </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                                </div>
                                <div className="detail">
                                    <p>{descriptions}</p>
                                </div>
                                <button className="btn flex">
                                    Details <HiOutlineClipboardCheck className="icon"/>
                                </button>
                           </div>
                        </div>
                      )
                    }
                    )
                }
            </div>
        </section>
    )
}
export default Main