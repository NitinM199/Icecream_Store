import React from 'react'

const Footer = () => {
  return (
   <>

  
  {/* footer section */}
<footer>
  <div className="content">
    <div className="box">
      <img src="assets/images/logo.png" />
      <p>We’re always in search for talented and motivated people. Don’t be shy introduce yourself! <br />We’re always in search for talented and motivated people.</p>
      <a href="contact.php" className="btn">contact with us</a>
    </div>
    <div className="box">
      <h3>useful links</h3>
      <a href>online coaching</a>
      <a href>marketplace</a>
      <a href>kindergarten</a>
      <a href>university</a>
      <a href>GYM coaching</a>
    </div>
    <div className="box">
      <h3>our company</h3>
      <a href="contact.php">contact us</a>
      <a href>become teacher</a>
      <a href>blog</a>
      <a href>instructor</a>
      <a href>events</a>
    </div>
    <div className="box">
      <h3>get contact</h3>
      <p>Phone: (406) 555-0120</p>
      <p>E-mail: rainbow@example.com</p>
      <p>Location: North America, USA</p>
      <div className="icons">
        <i className="bx bxl-facebook" />
        <i className="bx bxl-twitter" />
        <i className="bx bxl-instagram" />
        <i className="bx bxl-linkedin" />
      </div>
    </div>
  </div>
  <div className="bottom">
    <p>Copyright © 2023 code with selena. All Rights Reserved</p>
    <a href="admin/register.php">become a seller</a>
  </div>
</footer>

  </>
  )
}

export default Footer