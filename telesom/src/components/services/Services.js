import './services.css'

function Services(){
    return(
        <div className="service-div">
            <h1 className="crs-heading">Our Services</h1>
          <div className="service-container">
              <div className="service-list">
                  <h2 className="crs-heading">VAS Services</h2>
                  <div className="service-paragraph">
                      <p>Our VAS Service will make your life a whole lot easier </p>
                  </div>
                  <div>
                      <img src="./images/vas-service.png" className="service-image"/>
                  </div>
                  <div>
                     <a href="#" >See More</a>

                      {/* <button className="service-btn">See More</button> */}
                  </div>
              </div>
              <div className="service-list">
                      <h2 className="crs-heading">Core Services</h2>
                  <div className="service-paragraph">
                      <p>Get online at home and on the go with high-speed internet</p>
                  </div>
                  <div>
                    <img src="./images/internet.png" className="service-image"/>
                  </div>
                  <div>
                     <a href="#" >See More</a>

                      {/* <button className="service-btn">See More</button> */}
                  </div>
              </div>
              <div className="service-list">
                      <h2  className="crs-heading">Roaming Service</h2>
                  <div className="service-paragraph">
                      <p>Get International Roaming Service (Mushaax)</p>
                  </div>
                  <div>
                     <img src="./images/roaming_service.png" className="service-image" /> 
                  </div>
                  <div>
                      <a href="#" >See More</a>
                      {/* <button className="service-btn">See More</button> */}
                  </div>
              </div>
              <div className="service-list">
                      <h2  className="crs-heading">Land line services</h2>
                  <div className="service-paragraph">
                      <p>Your trusted home and office phone services</p>
                  </div>
                  <div>
                     <img src="./images/Landline.png" className="service-image" />
                  </div>
                  <div>
                    <a href="#" >See More</a>

                      {/* <button className="service-btn">See More</button> */}
                  </div>
              </div>
              <div className="service-list">
                      <h2 className="crs-heading">Voice services</h2>
                  <div className="service-paragraph">
                      <p>Communication made easier with clear voice</p>
                  </div>
                  <div>
                      <img src="./images/voice_service.png" className="service-image"/>
                  </div>
                  <div>
                      <a href="#" >See More</a>

                      {/* <button className="service-btn">See More</button> */}
                  </div>
              </div>
              <div className="service-list">
                      <h2  className="crs-heading">Mobile Money Services</h2>
                  <div className="service-paragraph">
                      <p></p>
                      <p>Carry your bank account in your pocket</p>
                      <p></p>
                  </div>
                  <div>
                      <img src="./images/Mobile_money.png" className="service-image"/>    
                  </div>
                  <div>
                     <a href="#" >See More</a>

                      {/* <button className="service-btn">See More</button> */}
                  </div>
              </div>
          </div>
        </div>
    )
}


export default Services