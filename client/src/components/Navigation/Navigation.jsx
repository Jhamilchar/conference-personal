import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Link } from "react-scroll";


class Navigation extends React.Component {

    state = {
        collapsed: true,
        isOpen: false
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
                window.history.pushState("", document.title, window.location.pathname);
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }



    onRouteChanged = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
          <header id="header" className="header-area">
            <div id="navbar" className="elkevent-nav">
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                  <Link className="navbar-brand" to="/">
                    <img style={{ width: "140px" }} src={logo} alt="logo" />
                  </Link>

                  <button
                    onClick={this.toggleNavbar}
                    className={classTwo}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className={classOne} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link
                          to="head"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="speakers"
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                        >
                          Speakers
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="schedule"
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                        >
                          Schedule
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="sponsor"
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                        >
                          Sponsor
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="footer"
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
        );
    }
}

export default withRouter(Navigation);