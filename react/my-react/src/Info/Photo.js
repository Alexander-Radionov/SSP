import React, { Component } from 'react';
import './Photo.css';
class Photo extends Component {
    render() {
      return (
        <div className="Photo">
        <div className="img">
            <img src = "./images/1.png" width="225" height="225" alt ="KOHTPOJIEP"></img>
        </div>
        </div>
      );
    }
  }
  
  export default Photo;