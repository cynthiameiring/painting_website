import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../media/Logo-black-bold.png";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toggleMenu } from "../actions/menu";
import instagram from "../media/instagram.png";
import youtube from "../media/youtube.png";
import facebook from "../media/facebook.png";

class Navigation extends Component {
    state = {
        menuItems: ["Artworks", "Process", "Contact", "About"],
        menuOpen: false,
        activePage: "",
        socials: [
            {
                name: "instagram",
                icon: instagram,
                url: "https://www.instagram.com/cynthia_meiring_art"
            },
            {
                name: "youtube",
                icon: youtube,
                url: "https://www.youtube.com/channel/UC7MrD_YgKrcwKgEYPHzOc-A"
            },
            {
                name: "facebook",
                icon: facebook,
                url: "https://www.facebook.com/CynthiaMeiringArts"
            },
        ]
    };

    handleClick() {
        this.props.toggleMenu(!this.state.menuOpen);
        this.setState({
            menuOpen: !this.state.menuOpen,
        });
    }

    render() {
        return (
            <header className="u-width--100  u-sticky  u-sticky--safari  u-top--0  u-bg--white--white-smoke  u-box-shadow--1  z-index--hamburger">
                <div style={{ letterSpacing: "1px", backgroundColor: "#dfdfdf" }} className="u-width--100  u-weight--300  u-size--9  u-padding--y4  u-text--center">
                    <a className="u-black" href="/#newsletter-banner">
                        Subscribe to the newsletter (no spam, I promise)
                    </a>
                </div>

                {/* Desktop view */}
                <div className="u-hidden  u-block@lg">
                    <div className="u-flex@lg  u-flex--justify--between  u-padding--y4  u-padding--x6">
                        <nav
                            className="u-width--33  u-flex  u-flex--items--center"
                            data-component="navigation--main"
                        >
                            <ol className="o-list-reset  u-flex  u-flex--row">
                                {this.state.menuItems.map((item, index) => (
                                    <li
                                        className="o-list-reset__item"
                                        data-component="navigation--main-item"
                                        key={index}
                                    >
                                        <NavLink
                                            activeClassName="v-border--nav--active"
                                            className={(index !== 0 ? "u-margin--l4  u-margin--l6@xl  " : "") + "u-inline-block  u-no-decoration  u-size--8  u-black  u-hover--grey--suva-grey  v-border--nav  u-weight--500"}
                                            to={"/" + item.toLowerCase()}
                                            onClick={() =>
                                                this.setState({ activePage: item.toLowerCase() })
                                            }
                                        >
                                            {item}
                                        </NavLink>
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        <Link className="u-flex  u-flex--justify--center  u-width--33" to="/"
                              onClick={() =>
                                  this.setState({ activePage: '' })
                              }>
                            <img src={logo} className="_height--logo" alt="logo" />
                        </Link>
                        <div className="u-width--33  u-flex  u-flex--items--center  u-flex--justify--end">
                            {this.state.socials.map((social, index) => (
                                <a
                                    className=""
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.name + "icon"}
                                        className="u-margin--l5"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile view */}
                <div className="u-hidden@lg  u-width--100  u-height--100  u-flex  u-padding--4">
                    <div
                        className="u-flex  u-width--33  u-flex--shrink--0  z-index--hamburger  u-flex--items--center  u-pointer  u-padding--x4@sm"
                        onClick={() => this.handleClick()}
                    >
                        <HamburgerMenu
                            isOpen={this.state.menuOpen}
                            menuClicked={() => {}}
                            width={18}
                            height={15}
                            strokeWidth={2}
                            rotate={0}
                            color="black"
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                        <span className="u-size--6  u-black  u-weight--700  u-margin--l3">
                            {this.state.menuOpen ? "Close" : "Menu"}
                        </span>
                    </div>

                    <nav
                        className={
                            "c-menu--mobile  u-absolute  u-right--0  u-top--0" +
                            (this.state.menuOpen ? "  open" : "")
                        }
                    >
                        <ol className="o-list-reset">
                            {this.state.menuItems.map((item, index) => (
                                <li
                                    className="o-list-reset__item"
                                    data-component="navigation--main-item"
                                    key={index}
                                >
                                    <Link
                                        to={"/" + item.toLocaleLowerCase()}
                                        className="u-padding--y2  u-inline-block  u-no-decoration  u-size--7  u-size--6@sm  u-size--5@md  u-black u-weight--700 has-hover-propagation"
                                        onClick={() => this.handleClick()}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <Link className="u-flex  u-flex--justify--center  u-width--33" to="/"
                          onClick={() =>
                              this.setState({ activePage: '' })
                          }>
                        <img src={logo} className="_height--logo" alt="logo" />
                    </Link>

                    <div className="u-width--33  u-flex  u-flex--items--center  u-flex--justify--end">
                        {this.state.socials.map((social, index) => (
                            <a
                                className=""
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                <img
                                    src={social.icon}
                                    alt={social.name + "icon"}
                                    className="u-margin--l4"
                                    width="22"
                                    height="22"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuOpen: state.menuOpen,
    };
};

export default connect(mapStateToProps, {
    toggleMenu,
})(Navigation);
