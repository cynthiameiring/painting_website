import React, { Component } from "react";
import headerImageMedium from "../media/banner_website_large.jpg";
import headerImageSmall from "../media/banner_website_small.jpg";
import headerImageMobile from "../media/banner_website_small.jpg";
import { headerImageLoaded } from "../actions/menu";
import { connect } from "react-redux";

class Header extends Component {
    state = { loaded: true };

    componentDidMount() {}

    render() {
        return (
            <div className="u-relative  u-bg--black">
                <div className="u-absolute  _top--15  u-width--100  u-z--1  u-padding--l3  u-padding--l0@lg">
                    <div className="o-grid  o-grid--fixed  u-width--100">
                        <div className="o-grid__row">
                            <div className="o-grid__col  o-grid__col--6@xs">
                                {this.state.loaded ? (
                                    <div>
                                        <h1
                                            className="u-white  u-bc--white  u-bs--b-solid  u-bw--b2  u-bw--b3@md  u-padding--b2  u-padding--b4@sm  u-size--7  u-size--5@sm  u-size--4@md  u-size--3@lg  u-weight--600  _letter-spacing--title"
                                        >
                                            CYNTHIA MEIRING
                                        </h1>
                                        <h2
                                            className="u-white  u-padding--t2  u-padding--t4@sm  u-size--7  u-size--5@sm  u-size--4@md  u-size--3@lg  u-weight--400  _letter-spacing--title"
                                        >
                                            Photorealistic <br /> artworks
                                        </h2>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <picture>
                    <source media="(min-width: 990px)" srcSet={headerImageMedium} />
                    <source media="(min-width: 0px)" srcSet={headerImageMobile} />
                    <img
                        srcSet={headerImageSmall}
                        alt="header"
                        className="u-width--100  u-block  u-z--0  u-opacity--75"
                    />
                </picture>
            </div>
        );
    }
}

export default connect(null, {
    headerImageLoaded,
})(Header);
