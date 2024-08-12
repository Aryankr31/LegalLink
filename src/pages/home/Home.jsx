import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import Slide from '../../components/Slide/Slide'
import { cards, projects } from "../../data";
import CatCard from '../../components/catCard/CarCard';
import ProjectCard from '../../components/projectCard/ProjectCard'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
      <Slide slidesToShow={5} arrowsScroll={2}>
      {cards.map(card=>(
            <CatCard item={card} key={card.id}/> 
          ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of legal professionals at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
            Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right professional to begin working on your case within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. 
            </p>
            
          </div>
          <div className="item">
            <video src="./img/video1.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1> WHY US <i>?</i></h1>
            <h1> A solution designed for <i>people</i></h1>
            <p>
              We are on a mission to make legal services more accessible to the each and every
              citizen of our country
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to professionals with proven industry experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched by a the best service provider for your case.
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />

              Solutions for all your legal needs culminated in a single platfom.
            </div>
            <Link to="/">

            <button>Let's Get You Started!!</button>
            </Link>
          </div>
          <div className="item" >
          <img id='fiverr_img'
              src="./img/scIMg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={2}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  )
}

export default Home
            