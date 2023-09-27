import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css'
 import insta from '../img/instagram.png';
 import face from '../img/iconfb.png';


const Footer = () => {

  const phoneNumber = '+54 0810-666-3177';
  const address = 'Calle Falsa 123 , Argentina';

  return (
    <>
      <footer className="footerCont text-light p-4">
        <div className="containerFoot">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-start">
              <div>
                <h4>Contactanos</h4>
                <p>Teléfono: {phoneNumber}</p>
                <p>Dirección: {address}</p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div className='d-flex flex-column'>
                     <h4>Redes Sociales</h4>
                <a href="https://www.instagram.com/" className='nav-item' >
                  <img src={insta}  alt="Instagram" />
                  <p >Instagram</p>
                </a>
                <a href="https://www.facebook.com/" className='nav-item'>
                  <img src={face}  alt="Facebook" />
                  <p >Facebook</p>
                </a> 
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer