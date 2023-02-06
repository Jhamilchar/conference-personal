import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
// import LaxDiv from '../Shared/LaxDiv';
import "../../assets/css/conf-personal.css"

class Speakers extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()

        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)

        lax.update(window.scrollY)
    }

    render(){
        return (
          <>
            <section className="speakers-area ptb-120 pb-0" id="speakers">
              <div className="container">
                <div className="section-title">
                  <span>Listen to the Event Speakers</span>
                  <h2>Keynoutes</h2>
                  <div className="bar"></div>
                  {/* <Link to="#" className="btn btn-primary">
                  View More Speakers
                </Link> */}
                </div>
              </div>

              <div className="row m-0 justify-content-center gap-5 mb-lg-5">
                <div className="col-lg-3 col-sm-6 p-0">
                  <div className="single-speakers" style={{ height: "100%" }}>
                    <img
                      src={require("../../assets/images/jeff_barr.jpg")}
                      alt="Speaker"
                      style={{ width: "100%", height: "100%" }}
                    />

                    <div className="speakers-content">
                      <h3>
                        <Link to="#">Jeff Barr</Link>
                      </h3>
                      <span>Chief Evangelist at AWS</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/jeff.s.barr"
                          target="blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/jeffbarr"
                          target="blank"
                          className="twitter"
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/jeffbarr/"
                          target="blank"
                          className="linkedin"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 p-0">
                  <div className="single-speakers" style={{ height: "100%" }}>
                    <img
                      src={require("../../assets/images/danilo_poccia_highres.jpg")}
                      alt="Speaker"
                      style={{ width: "100%", height: "100%" }}
                    />

                    <div className="speakers-content">
                      <h3>
                        <Link to="#">Danilo Poccia</Link>
                      </h3>
                      <span>Chief Evangelist (EMEA) at AWS</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="blank"
                          className="twitter"
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="blank"
                          className="linkedin"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="speakers-area ptb-120 pb-0" id="speakers">
              <div className="container">
                <div className="section-title">
                  <h2>Speakers</h2>
                  <div className="bar"></div>
                  {/* <Link to="#" className="btn btn-primary">
                  View More Speakers
                </Link> */}
                </div>
              </div>

              <div className="row m-0 justify-content-center gap-5 mb-lg-5">
                <div className="col-lg-3 col-sm-6 p-0">
                  <div className="single-speakers" style={{ height: "100%" }}>
                    <img
                      src={require("../../assets/images/claudia_marquez.jpg")}
                      alt="Speaker"
                      style={{ width: "100%", height: "100%" }}
                    />

                    <div className="speakers-content">
                      <h3>
                        <Link to="#">Claudia Marquez</Link>
                      </h3>
                      <span>Chief Technology at Caleidos</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/jeff.s.barr"
                          target="blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/jeffbarr"
                          target="blank"
                          className="twitter"
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/jeffbarr/"
                          target="blank"
                          className="linkedin"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 p-0">
                  <div className="single-speakers" style={{ height: "100%" }}>
                    <img
                      src={require("../../assets/images/sebastien_stormacq.png")}
                      alt="Speaker"
                      style={{ width: "100%", height: "100%" }}
                    />

                    <div className="speakers-content">
                      <h3>
                        <Link to="#">Sébastien Stormacq</Link>
                      </h3>
                      <span>Principal Developer Advocate at AWS</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="blank"
                          className="twitter"
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="blank"
                          className="linkedin"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="speakers-area ptb-120 pb-0" id="speakers">
              <div className="container">
                <div className="section-title">
                  <h2>Organizers</h2>
                  <div className="bar"></div>
                  {/* <Link to="#" className="btn btn-primary">
                  View More Speakers
                </Link> */}
                </div>
              </div>

              <div className="row m-0 justify-content-center gap-5 mb-lg-5">
                <div className="col-lg-3 col-sm-6 p-0">
                  <div className="single-speakers" style={{ height: "100%" }}>
                    <img
                      src={require("../../assets/images/carlos_cortez.png")}
                      alt="Speaker"
                      style={{ width: "100%", height: "100%" }}
                    />

                    <div className="speakers-content">
                      <h3>
                        <Link to="#">Carlos Cortez</Link>
                      </h3>
                      <span>Senior Solutions Architect at DBsolution SpA</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/jeff.s.barr"
                          target="blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/jeffbarr"
                          target="blank"
                          className="twitter"
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/jeffbarr/"
                          target="blank"
                          className="linkedin"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 p-0">
                  <div className="single-speakers" style={{ height: "100%" }}>
                    <img
                      src={require("../../assets/images/andre_cervantes.jpg")}
                      alt="Speaker"
                      style={{ width: "100%", height: "100%" }}
                    />

                    <div className="speakers-content">
                      <h3>
                        <Link to="#">André Cervantes</Link>
                      </h3>
                      <span>Senior Solutions Architect at B89</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="blank"
                          className="twitter"
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="blank"
                          className="linkedin"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 p-0">
                  <div className="single-speakers" style={{ height: "100%" }}>
                    <img
                      src={require("../../assets/images/nefi_arroyo.jpg")}
                      alt="Speaker"
                      style={{ width: "100%", height: "100%" }}
                    />

                    <div className="speakers-content">
                      <h3>
                        <Link to="#">Nefi Arroyo</Link>
                      </h3>
                      <span>Cloud Resident Engineer at Orion</span>
                    </div>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="blank"
                          className="facebook"
                        >
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="blank"
                          className="twitter"
                        >
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/"
                          target="blank"
                          className="linkedin"
                        >
                          <i className="icofont-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
}

export default Speakers;