import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'
const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to='/messages' className='link'>MESSAGES</Link> {'>'} AJAY PANDEY {'>'}
        </span>
        <div className="messages">
          <div className="item">  
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
                Hi, Mr Reddy , Ajay This Side.
            </p>
          </div>
          <div className="item owner">  
            <img
              src="../../public/img/man3.jpeg"
              alt=""
            />
            <p>
                Hi, Ajay How Can I help you?
            </p>
          </div>
          <div className="item">  
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
               I'm thinking about starting a new business. Can you advise me on the best legal structure?
            </p>
          </div>
          <div className="item owner">  
            <img
              src="../../public/img/man3.jpeg"
              alt=""
            />
            <p>
            There are a few different legal structures that you can choose for your business, each with its own 
            advantages and disadvantages. The best legal structure for your business will depend on a number of 
            factors, such as the size and type of your business, your personal liability, and your tax liability.
            I would be able to explain all the details to you in the video call.
            </p>
          </div>
          <div className="item">  
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
            Thanks for the amazing counselling session, when can I meet you in person.
            </p>
          </div>
          {/* <div className="item owner">  
            <img
            src="../../public/img/man3.jpeg"
              alt=""
            />
            <p>

            </p>
          </div> */}
        </div>
        
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <img src="../../public/img/iconVideo.png" alt="" />
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message