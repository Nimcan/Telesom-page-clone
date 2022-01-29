import './Footer.css'


function Footer(){
    return(
       <div className='footer-div'>
           <div className="div-container">
               <div className="top-footer">
                    <div className="logo-app">
                        <div>
                            <img src="./images/telesom_logo.png"/>
                        </div>
                       <div className="social-icons">
                          <i class="fab fa-facebook-square"></i>
                          <i class="fab fa-twitter-square"></i>
                          <i class="fab fa-instagram-square"></i>
                          <i class="fab fa-linkedin"></i>
                          <i class="fab fa-youtube-square"></i>
                       </div>

                    </div>
                    <div className="footer-services services">
                        <p>Services</p>
                        <a href="#">Mobile Money Service</a>
                        <a href="#">Cloud Service</a>
                        <a href="#">Sms Service</a>
                        <a href="#">Internet Packages</a>

                </div>
                <div className="footer-services">
                    <p>Portofolio</p>
                        <a href="#">Kaabsan</a>
                        <a href="#">Modren Automative Technology</a>
                        <a href="#">Darasalam Bank</a>
                        <a href="#">Somgas</a>
                        <a href="#">TEC</a>
                        <a href="#">Taaj</a>
                </div>
                <div className="footer-services">
                     <p>Company</p>
                        <a href="#">About us</a>
                        <a href="#">Mission, Vision and Core Values</a>
                        <a href="#">Strategic Themes</a>
                        <a href="#">Career</a>
                        <a href="#">Contact us</a>
                        <a href="#">Complaints and Help</a>
                </div>

                <div className="waafi-app footer-services">
                     <p>Apps</p>
                        <a href="#">Waafi App</a>
                        <a href="#">Self-care App</a>
                                
                </div>  
          

                    
               </div>
              
               <div className="bottom-footer">
               
                   <p>Copyright © 2022 Telesom - Somaliland All right reserved</p>
                   
               </div>
           </div>

        </div>
    )
}



export default Footer