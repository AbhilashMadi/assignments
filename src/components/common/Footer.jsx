import React from 'react';

import "../../scss/css/footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <p> &#169; zintlr news {
        new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer