


function Footer(){
    return(
        <div className="footer-div">
            <div className="top-footer">
                <div className="footer-logo">
                    <img src="./images/telesom_logo.png"/>
                    {/* <p>TELESOM COMPANY</p> */}
                </div>
                <div className="footer-services">
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
                    {/* <p>Download Waafi App</p> */}
                    {/* <img src="./images/waafi_app.webp" className="waafi-image"/>                 */}
                </div>      

            </div>
            <div className="bottom-footer">
                <h3>Follow Us</h3>
                <div className="social-links">

                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-twitter-square"></i></a>
                <a href="#"><i class="fab fa-youtube-square"></i></a>
                <a href="#"><i class="fab fa-instagram-square"></i></a>
                </div>
                <div>
                    <p>Copyright © 2021 Telesom. All Right Reserved</p>
                </div>

            </div>
        </div>
    )
}



export default Footer