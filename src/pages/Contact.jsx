import React from 'react'

const Contact = () => {
  return (
   <>
   
    {/* contact section */}
  <section className="faq" id="faq">
    <h1 className="heading my-3">Frequently Asked Questions</h1>
    <div className="box-container">
      <div className="img-box">
        <div className="overlay" />
        <img src="assets/images/1.jpg" alt />
        <div className="detail">
          <i className="bx bx-headphone" /><br />
          <span>NEED MORE HELP?</span>
          <h2>888-4004-234</h2>
          <a href className="btn">call us</a>
        </div>
      </div>
      <div className="accordion">
        <div className="contentBox">
          <div className="label">How can I book an appointment?</div>
          <div className="content">
            <p>To book an appointment at any of our dental clinics, you can fill the form available at the top,
              and
              one
              of our
              representatives will get in touch with you. Alternatively, you can also give us a call on
              08800559112.
            </p>
          </div>
        </div>
        <div className="contentBox">
          <div className="label">What are your dental clinic timings?</div>
          <div className="content">
            <p>Clove Dental clinics remain open from 10 AM to 7 PM every day. However, in the case of unforeseen
              situations, the
              timing
              may differ on that particular day. Our Clinics are open on weekends.</p>
          </div>
        </div>
        <div className="contentBox">
          <div className="label">What modes of payment are acceptable at Clove Dental Clinics?</div>
          <div className="content">
            <p>We accept payments through Cash/Credit Card/ Debit Card/ Paytm/ PhonePe or via /Airtel Money or
              any
              other UPI Payment
              methods.
            </p>
          </div>
        </div>
        <div className="contentBox">
          <div className="label">How frequently should I visit a dentist?</div>
          <div className="content">
            <p>The frequency of a visit to a dentist depends on the condition of your oral health. It is advised
              that people must visit
              a dentist at least once in six months for regular dental check-ups. However, people with dental
              problems must visit once
              in three months or as directed by the dentists.
            </p>
          </div>
        </div>
        <div className="contentBox">
          <div className="label">What are the safety measures adopted by Clove?</div>
          <div className="content">
            <p>Clove Dental has adopted world-class measures to ensure the safety of patients. Our trademarked
              Stringent 4 step
              sterilisation process is a testimony to our commitment to high standards of safety &amp;
              sterilisation.
              We have enhanced our
              safety protocols under WHO Guidelines in response to the COVID crisis and are now operating
              with10X
              safety protocols.
              Each Clove Clinic is now deployed with new state of the art equipment- Aerosol Suction &amp;
              Decontamination Unit (ASDU) &amp;
              Constant Fumigation Device (CFD) to effectively manage any aerosols or contaminants in the
              clinic
              premises. We follow a
              zero-compromise policy when it comes to safety &amp; hygiene. This ensures a completely sterile &amp;
              hygienic environment.
            </p>
          </div>
        </div>
        <div className="contentBox">
          <div className="label">Is it possible to have a video/ tele consult before I visit the clinic?</div>
          <div className="content">
            <p>Yes, you can consult a dentist via a video or a phone call before visiting the clinic. For your
              convenience &amp; safety, we
              have decided to make our initial consultation easier for you to access. At Clove Dental, our
              dentists are now available
              on video/tele calls for giving professional opinion and advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  {/* contact section */}
   </>
  )
}

export default Contact