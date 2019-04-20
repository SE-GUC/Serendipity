import React from 'react'
import '../../App.css';

export default function Footer() {
  return (
    <footer className="footer">
     <div>
        <h3>Copyrights © Serendipity 2019 </h3>
        <h3>All rights reserved</h3>

        </div>
    </footer>
  )
}
const footerStyle = {
    background: '#00000',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    bottom:0,
    left:0,
    right:0,
    flex: 3 ,//yara
    //position:'fixed', //janna
    display:'block'
  }
// const footerStyle={
 
//   width: '100%', 
//   // height: 50, 
//   color: '#fff',
//   backgroundColor: '#193E43', 
//   textAlign: 'center',
//   justifyContent: 'center', 
//   alignItems: 'center',
//   position: 'absolute',
//   bottom: 0
// }
  

