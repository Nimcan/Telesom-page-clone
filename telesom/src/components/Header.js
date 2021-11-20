

function Header(){
    return(
        <header className = "header flex-column">
            <div className = "flex-row top-nav">
                <div className="header-padding type flex-row">
                    <div>
                    <ul className = "type-font">
                    <li><a>Personal <i class="fas fa-chevron-down fa-header-top"></i></a></li>
                    {/* <li><a>Business</a></li> */}
                    </ul>
                    </div>
                    
                </div>
                <div className = "top-nav-middle ">
                   <ul className = "top-nav-list flex-row">
                       <li><a className = "header-padding list-hover-top">Portofolio</a></li>
                       <li><a className = "header-padding list-hover-top">Career</a></li>
                       <li><a className = "header-padding list-hover-top">Complaints</a></li>
                       <li><a className = "header-padding list-hover-top">Help</a></li>
                   </ul>                
                </div>
                <div className = "header-padding list-hover-top">
                    <h4><i class="fas fa-globe"></i> English <i class="fas fa-chevron-down fas-english"></i></h4>
                </div>
                <div className = "header-padding list-hover-top">
                    <h4><i class="fas fa-user"></i> user</h4>
                </div>
            </div>
            
            <div className = "bottom-nav flex-row">
                <div>
                <img src = "./images/telesom_logo.png"/>
                </div>
                <div className = "bottom-nav-middle navbar">
                    <ul className="top-nav-list flex-row  bottom-nav-font ">
                        <li><a className = " list-hover-bottom">Home</a></li>
                        <li><a className = " list-hover-bottom">Buy Now <i class="fas fa-chevron-down fa-header-top"></i></a></li>
                        <li><a className = " list-hover-bottom">Services <i class="fas fa-chevron-down fa-header-top"></i></a>
                        </li>
                        <li><a className = " list-hover-bottom">Company <i class="fas fa-chevron-down fa-header-top"></i></a></li>
                        <li><a className = " list-hover-bottom">Contact</a></li>
                    </ul>
                    
                 </div>
                 <div>
                     <input type = "search" placeholder = "Search..." className = "header-search" />
                 </div>
            </div>
        </header>

    )
}


export default Header