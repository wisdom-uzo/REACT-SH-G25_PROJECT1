import React from 'react'
import './about.css'

const About = () => {
  return (
    <div>
        <div className="about_header">
            <h2>CONTACT US</h2>
            <p>We sincerly welcome feedback from our guests. To let us know how a recent experience went, to pat us on the back, or to tell us what we can do better</p>
        </div>

        <div className="about_add_form">
           <div className="">
              <h2>UK Head Office</h2>
              <h3>Address</h3>
              <p>60 <br /> old yaba road <br />
               Lagos nigrria</p>

            <h3>Reservations</h3>
            <p>Call your chosen restaurant</p>

            <h2>Telephone</h2>
           </div>

            
          
           <div className="contact_form_sec">
              <h2>Send Us A Massage</h2>
              <form action="contact_form">
                <div className="input-sec">
                  <label htmlFor="">Subject</label>
                  <select name="" id="">
                    <option value="">Select</option>
                  </select>
                </div>
                  

                <div className="">
                    <div className="input-sec">
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>

                    <div className="input-sec">
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
              </div>

              <div className="input-sec">
                  <label htmlFor="">Email Address</label>
                  <input type="email" name="" id="" />
              </div>
                 
              <div className="input-sec">
                <label htmlFor="">Telephone</label>
                <input type="tel" name="" id="" />
              </div>

              <div className="input-sec">
                  <label htmlFor="">Massage</label>
                  <textarea name="" id="" cols="30" rows="10"></textarea>

              </div>

                

                 
                  <button>Submit Message</button>
              </form>
           </div>


        </div>
         
    </div>
  )
}

export default About