import React, { useEffect } from 'react';
import insta from '../img/instagram.png';
import face from '../img/iconfb.png';
import '../style/footer.css';

const Footer = () => {
  const phoneNumber = '+54 0810-666-3177';
  const address = 'Calle Falsa 123 , Argentina';

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footerCont');
      if (window.scrollY > 0) {
        footer.classList.add('show-footer');
      } else {
        footer.classList.remove('show-footer');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="footerCont">
        <div className="containerFoot">
          <div className="contfoot">
            <h4>Contactanos:</h4>
            <p>Teléfono: {phoneNumber}</p>
            <p>Dirección: {address}</p>
          </div>
        </div>
        <div className="contfoot">
          <div>
            <a href="https://www.instagram.com/" className='nav-item' >
              <img src={insta}  alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/" className='nav-item'>
              <img src={face}  alt="Facebook" />
            </a> 
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
