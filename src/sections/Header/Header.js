import './Header.css'
import logo from '../../assets/imges/logo.png'
import Navfitem, {NavfitemDropDown} from '../../Components/Navfitem/Navfitem'
const Header = () =>{
    return( 
      <nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar">
      <div className="container">
        <a className="navbar-brand"  href="#" >
          <img src={logo} alt=""/>
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <Navfitem>
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </Navfitem>
            <Navfitem>
              <a className="nav-link" href="#">Link</a>
            </Navfitem>
            <NavfitemDropDown>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </NavfitemDropDown>
            <Navfitem>
              <a className="nav-link disabled">Disabled</a>
            </Navfitem>
            <Navfitem>
              <a className="nav-link disabled">Disabled</a>
            </Navfitem>
          </ul>

        </div>
      </div>
    </nav>

    )
}

export default Header