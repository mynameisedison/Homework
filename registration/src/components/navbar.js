import React from 'react'

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Home</a></li>
              </ul>
            </div>
        );
    }
}
 export default Navbar
