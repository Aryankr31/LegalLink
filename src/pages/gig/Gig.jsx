import React from 'react'
import "./Gig.scss"
import { Slider } from "infinite-react-carousel/lib";
const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <span className='breadCrumbs'>legalLink {'>'} Business Legal Advisor</span>
          <h1>Business formation and structuring counselling</h1>

          <div className="user">
            <img src="" alt="" />
            <span>A.R Reddy</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
          <img
              src="../../public/img/What.png"
              alt=""
            />
            
            <img
              src="../../public/img/nlu_Delhi.jpg"
              alt=""
            />

            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Business Legal Advisor

            I am a business legal advisor with over 10 years of experience in helping businesses of all sizes grow and succeed. I can help you with a wide range of legal matters, including:

            Business formation and structuring
            Contracts and agreements
            Intellectual property
            Employment law
            Regulatory compliance
            Litigation

            I will work closely with you to understand your business goals and legal needs, and I will develop tailored solutions to help you achieve your goals and protect your business. I am committed to providing my clients with the highest quality legal services and support.
          </p>
          <p>
            Here are some specific ways I can help your business grow: <br />

            1) Protect your intellectual property: Your intellectual property, such as trademarks, copyrights, and patents, are valuable assets that can help you differentiate your business from the competition and generate revenue. I can help you protect your intellectual property rights and prevent others from using your intellectual property without your permission. <br />
            2) Negotiate contracts that are in your best interests: Contracts are essential for any business, but they can also be complex and difficult to understand. I can help you review and negotiate contracts to ensure that you are protected and that your interests are represented. <br />
            3) Comply with all applicable laws and regulations: Businesses must comply with a wide range of laws and regulations, and failure to comply can result in serious penalties. I can help you identify the laws and regulations that apply to your business and develop a compliance plan to ensure that your business is in compliance. <br />
            4) Resolve legal disputes quickly and efficiently: Legal disputes can be costly and time-consuming, and they can distract you from running your business. I can help you resolve legal disputes quickly and efficiently so that you can focus on running your business. <br />

          </p>
          <div className="seller">
            <h2>About The Lawyer</h2>
            <div className="user">
              <img
                src="../../public/img/man3.jpeg"
                alt=""
              />
              <div className="info">
                <span>A.R Reddy</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Delhi</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">University</span>
                  <span className="desc">National Law University, Delhi</span>
                </div>
                <div className="item">
                  <span className="title">Enrollement Number</span>
                  <span className="desc">MP/1394/2013</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English,Hindi,Kannada</span>
                </div>
              </div>
              <hr />
              <p>
                My name is A.R Reddy, I enjoy helping business navigate the complex
                world of business laws. I have 10 years experience in business consultancy
                field. I know it's hard being a business owner no matter its scale, I would
                love to take away the stress of legal complexities from you. Let's hop on a call.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lokesh Tiwari</span>
                  <div className="country">
                    <img
                      src="../../public/img/indoFlag.png"
                      alt=""
                    />
                    <span>Pune, India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I am a small business owner and I have been working with A.R. Reddy
                for over a year now. He has been an invaluable asset to my business.
                He has helped me with a variety of legal matters, including business
                formation, contracts, and intellectual property. He is always responsive
                to my questions and he provides me with clear and concise advice. I highly
                recommend A.R. Reddy to any business owner who needs legal assistance.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Prapti</span>
                  <div className="country">
                    <img
                      src="../../public/img/indoFlag.png"
                      alt=""
                    />
                    <span>Delhi, India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I have been working with A.R. Reddy for several years now. He is an experienced and knowledgeable
                business lawyer who has helped me with a variety of legal matters, including business formation,
                contracts, and litigation. He is always responsive to my needs and he provides me with sound
                legal advice. I highly recommend A.R. Reddy to any business owner who is looking for a
                qualified and experienced business lawyer.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Narayan Murthi </span>
                  <div className="country">
                    <img
                      src="../../public/img/indoFlag.png"
                      alt=""
                    />
                    <span>Karnataka, India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              ನಾನು ಕಳೆದ ಕೆಲವು ತಿಂಗಳಿಂದ ವ್ಯಾಪಾರ ಒಪ್ಪಂದದ ಮಾತುಕತೆ ಕುರಿತು A.R. Reddy ಅವರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇನೆ. ಅವರು 
              ಪ್ರಕ್ರಿಯೆಯುದ್ದಕ್ಕೂ ತುಂಬಾ ಸಹಕಾರಿ ಮತ್ತು ಜ್ಞಾನವನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಅವರು ನನಗೆ ಒಪ್ಪಂದವನ್ನು ವಿವರವಾಗಿ ವಿವರಿಸಲು ಸಮಯ 
              ತೆಗೆದುಕೊಂಡಿದ್ದಾರೆ ಮತ್ತು ನನ್ನ ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ತಾಳ್ಮೆಯಿಂದ ಮತ್ತು ಪರಿಪೂರ್ಣವಾಗಿ ಉತ್ತರಿಸಿದ್ದಾರೆ. ಅವರು ನನ್ನ ಹಿತಾಸಕ್ತಿಗಳನ್ನು 
              ಅತ್ಯುತ್ತಮವಾಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತಿದ್ದಾರೆ ಎಂದು ನಾನು ತುಂಬಾ ವಿಶ್ವಾಸ ಹೊಂದಿದ್ದೇನೆ. ಕಾನೂನು ನೆರವು ಬೇಕಾದ ಯಾವುದೇ ವ್ಯಾಪಾರ ಮಾಲೀಕರಿಗೆ 
              A.R. Reddy ಅವರನ್ನು ನಾನು ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1hr Consultation Call</h3>
            <h2>₹ 1200</h2>
          </div>
          <p>
            I will take the stress of legal complexities off of your shoulders, by helping you navigate
            through the complex world of Business laws
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>1 Day Response Time</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Business formation and structuring</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Contracts and agreements</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Employment law</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Regulatory compliance</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;