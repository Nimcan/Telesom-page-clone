

function Header(){
    return(
        <header className = "header flex-column">
            <div className = "flex-row top-nav">
                <div className="header-padding type flex-row">
                    <div>
                    <ul className = "type-font">
                    <li><a>Personal</a></li>
                    {/* <li><a>Business</a></li> */}
                    </ul>
                    </div>
                    <div className = "arrow-down">
                    <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div className = "top-nav-middle ">
                   <ul className = "top-nav-list flex-row">
                       <li><a className = "header-padding">Portofolio</a></li>
                       <li><a className = "header-padding">Career</a></li>
                       <li><a className = "header-padding">Complaints</a></li>
                       <li><a className = "header-padding">Help</a></li>
                   </ul>                
                </div>
                <div className = "header-padding">
                    <h4><i class="fas fa-globe"></i> English</h4>
                </div>
                <div className = "header-padding">
                    <h4><i class="fas fa-user"></i> user</h4>
                </div>
            </div>
            <div className = "bottom-nav flex-row">
                <div>
                <img src = "./images/telesom_logo.png"/>
                </div>
                <div>
                    <ul className="top-nav-list flex-row bottom-nav-font">
                        <li><a className = "header-padding">Home</a></li>
                        <li><a className = "header-padding">Buy Now</a></li>
                        <li><a className = "header-padding">Services</a>
                            <ul>
                                {/* <li>ADSl</li>
                                <li>ADSl</li>
                                <li>ADSl</li> */}
                            </ul>
                        </li>
                        <li><a className = "header-padding">Contact</a></li>
                        <li><a className = "header-padding">Home</a></li>
                    </ul>
                    
                 </div>
                 <div>
                     <input type = "search" placeholder = "Search" />
                 </div>
            </div>
        </header>

    )
}


export default Header