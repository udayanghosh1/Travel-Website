import React,{useEffect} from 'react'
import './footer.css'
import sunset from "../../Assests/sunset.mp4"
import {FiSend} from "react-icons/fi"
import {MdOutlineTravelExplore} from "react-icons/md"
import {FiChevronRight} from "react-icons/fi"
import Aos from 'aos'
import "aos/dist/aos.css"
const Footer = () =>{
  useEffect(()=>{
    Aos.init({duration:2000})
 },[])
    return(
        <section className='footer'>
           <div className="videodiv">
             <video src={sunset} muted autoplay loop type="sunset/mp4"></video>
           </div>
           <div className="secContaint container">
              <div className="contactDiv flex">
                  <div data-aos="fade-up" className="text">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                  </div>
              

               <div data-aos="fade-up" className="inputDiv flex">
                <input type="text" placeholder='Enter Email..' />
                <button className="btn flex" type="submit">
                  SEND<FiSend className="icon"/>
                </button>
               </div>
              </div>
             <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                      <a href="#" className='logo flex'>
                        <MdOutlineTravelExplore  className="icon"/>Travel.
                      </a>
                    </div>

                    <div data-aos='fade-up' className="footerParagraph">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel dignissimos ipsa, animi voluptatem, nam unde quos tempore aliquid atque labore eaque totam asperiores iste, quibusdam qui commodi adipisci inventore.
                    </div>
                </div>

                <div className='footerLinks grid'>
                  <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
                    <span className='groupTitle'>
                     OUR AGENCY
                    </span>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Services
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Insurance
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Agency
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Tourism
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Payment
                    </li>
                  </div>

                  <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                    <span className='groupTitle'>
                     PARTNERS
                    </span>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Booking
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Rentcars
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Hostelworld
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Tripadvisor
                    </li>

                  </div>
                  <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                    <span className='groupTitle'>
                     LAST MINUTE
                    </span>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      London
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      California
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Dubai
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Indonesia
                    </li>

                    <li className="footerList flex">
                      <FiChevronRight className="icon"/>
                      Norway
                    </li>
                  </div>
                </div>
                <div className='footerDiv flex'>
                  <small>BEST TRAVEL WEBSITE THEME</small>
                  <small>@udayan</small>
                </div>
             </div>

           </div>
        </section>
    )
}
export default Footer 