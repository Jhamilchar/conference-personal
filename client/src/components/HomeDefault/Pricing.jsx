import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
// import LaxDiv from '../Shared/LaxDiv';
import "../../assets/css/conf-personal.css"

class Pricing extends React.Component {

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
          <section className="pricing-area ptb-120 bg-image">
            <div className="container">
              <div className="section-title">
                <h2>
                  Become a <b>Sponsor</b>
                </h2>

                <div className="bar"></div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
                  <div className="pricing-table-box">
                    <div
                      style={{ backgroundColor: "#70d1f4" }}
                      className="pricingTable-header"
                    >
                      <h3 className="title">Sponsor <br /> Diamond</h3>
                    </div>

                    <ul className="pricing-content">
                      <li>Regular Seating</li>
                      {/* IGUAL TODOS  */}
                    </ul>

                    <Link to="#" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
                  <div className="pricing-table-box">
                    <div
                      style={{ backgroundColor: "#ebc803" }}
                      className="pricingTable-header"
                    >
                      <h3 className="title">Sponsor <br /> Gold</h3>
                    </div>

                    <ul className="pricing-content">
                      <li>Regular Seating</li>
                    </ul>

                    <Link to="#" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="pricing-table-box">
                    <div
                      style={{ backgroundColor: "#949494" }}
                      className="pricingTable-header"
                    >
                      <h3 className="title">Sponsor <br /> Platinium</h3>
                    </div>

                    <ul className="pricing-content">
                      <li>Regular Seating</li>
                    </ul>

                    <Link to="#" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="pricing-table-box">
                    <div className="pricingTable-header">
                      <h3 className="title">Sponsor <br /> Bronze</h3>
                    </div>

                    <ul className="pricing-content">
                      <li>Regular Seating</li>
                    </ul>

                    <Link to="#" className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Pricing;