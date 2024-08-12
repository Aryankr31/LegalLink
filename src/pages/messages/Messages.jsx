import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  };

function read () {
  document.getElementById("table").rows[1].classList.remove("active");
  document.getElementById("readBtn").style.display="none";

}
function read1 () {
  document.getElementById("table").rows[2].classList.remove("active");
  document.getElementById("readBtn1").style.display="none";

}
  const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ipsam libero quasi hic explicabo dignissimos quam! Eligendi, ut!'

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table id="table">
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        
          <tr className="active">
            <td>
              Ajay Pandey
            </td>
            <td><Link to = '/message/123'className='link'>   Thanks for the amazing counselling session, when can I meet....</Link></td>
            <td>1 day ago</td>
            <td>
              <button id="readBtn" onClick={read}>Mark as Read</button>
            </td>
          </tr>


          <tr className="active">
            <td>
              Dinesh Kanpuriya
            </td>
            <td><Link to = '/message/123'className='link'>Thanks for drawing contracts and agreements for my local business, really took ....</Link></td>
            <td>1 day ago</td>
            <td>
              <button id="readBtn1" onClick={read1}>Mark as Read</button>
            </td>
          </tr>
          
          <tr>
            <td>
              Aditya Paraser
            </td>
            <td><Link to = '/message/123'className='link'>I'm thinking about starting a new business. Can you advise me on the best legal structure?</Link></td>
            <td>1 day ago</td>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              Nitin Tomar
            </td>
            <td><Link to = '/message/123'className='link'>I'm having a dispute with a customer. Can you help me resolve it?</Link></td>
            <td>1 day ago</td>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              Jhanvi Dudeja
            </td>
            <td><Link to = '/message/123'className='link'>Hi A.R., I have a quick question about a contract I'm negotiating....</Link></td>
            <td>1 day ago</td>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              Kabir Singh
            </td>
            <td><Link to = '/message/123'className='link'>Hi A.R., can you review this contract for me before I sign it?...</Link></td>
            <td>1 day ago</td>
            <td>

            </td>
          </tr>
          <tr>
            <td>
              Lilavati
            </td>
            <td><Link to = '/message/123'className='link'>I received a letter from the government. Can you help me....</Link></td>
            <td>1 day ago</td>
            <td>

            </td>
          </tr>

        </table>
      </div>
    </div>
  );
}

export default Messages;