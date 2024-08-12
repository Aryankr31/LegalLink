import React from "react";
import { Link } from "react-router-dom";
import "./Orders.scss";

const Orders = () =>{
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
} ; 

  return (
    <div className="orders"> 
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Business formation and structuring counselling</td>
            <td>1500<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Contracts and agreements</td>
            <td>1200.<sup>99</sup></td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Intellectual property</td>
            <td>2000.<sup>99</sup></td>
            <td>55</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Regulatory compliance</td>
            <td>2500.<sup>99</sup></td>
            <td>29</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Employment law</td>
            <td>1600<sup>99</sup></td>
            <td>34</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Litigation</td>
            <td>2100.<sup>99</sup></td>
            <td>16</td>
            <td>
              <img className="delete" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders;