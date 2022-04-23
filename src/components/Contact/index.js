import React from 'react'
import './contact.css'

const About = () => {
  return (
    <div>
        <div className="about_header">
            <h2>CONTACT US</h2>
            <p>We sincerly welcome feedback from our guests. To let us know how a recent experience went, to pat us on the back, or to tell us what we can do better</p>
        </div>

        <div className="about_add_form">
           <div className="">
              <h2>Contact Address</h2>
              <h3>Address</h3>
              <p>32 Muritala Eletu street, Osapa, Lekki Peninsula, <br />
              Lekki, Lagos, <br />
              Nigeria </p>

            <h3>Reservations</h3>
            <p>Call your chosen restaurant</p>

            <h2>Telephone</h2>
             <p>Enquiries: 09091490414 <br />
             Whatsapp: 08099991568 <br />
             Events: 08178775944</p>
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
                  

                <div className="form_name">
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

                <button className='contact_btn'>Submit Message</button>
              </form>
           </div>


        </div>
         
    </div>
  )
}

export default About