import React from 'react'
//import '../../App.css';

export default function Footer() {
  return (
    <footer style={footerStyle}>
     <div>
        <h3>Copyrights © Serendipity 2019 </h3>
        <h3>All rights reserved</h3>

        </div>
    </footer>
  )
}
const footerStyle = {
    background: '#193E43',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    position:'fixed', //janna
    bottom:0,
    left:0,
    right:0,
    flex: 3 //yara
 
  }
  

