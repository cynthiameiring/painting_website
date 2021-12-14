import React, { Component } from "react";
import IntroContentPage from "../components/IntroContentPage";
import data from "../data.js";
import NewsletterBanner from "../components/NewsletterBanner";
import lineArtDiamondPreview from "../media/LineArt/line_art_diamond_preview.jpg";
import lineArtDiamondDownload from "../media/LineArt/Line_art_diamond.pdf";
import lineArtBotanicalPreview from "../media/LineArt/line_art_botanical_preview.jpg";
import lineArtBotanicalDownload from "../media/LineArt/Line_art_botanical.pdf";
import lineArtTriangulartPreview from "../media/LineArt/line_art_triangulart_preview.jpg";
import lineArtTriangulartDownload from "../media/LineArt/Line_art_triangulart.pdf";
import {connect} from "react-redux";
import Cookies from 'js-cookie';
import {setSubmittedNewsletterForm} from "../actions/newsletterForm";

class Downloads extends Component {
    state = {
        downloads: data.pages.find((p) => p.title === "Downloads"),
        overlayIsOpen: false,
        fileToDownload: '',
        files: [
            [lineArtDiamondPreview, lineArtDiamondDownload],
            [lineArtTriangulartPreview, lineArtTriangulartDownload],
            [lineArtBotanicalPreview, lineArtBotanicalDownload],
        ]
    };

    constructor(props){
        super(props);
        // React references works a bit similar as for example getElementByClass
        this.newsletterRef = React.createRef();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.setSubmittedNewsletterForm(Cookies.get('subscribedForNewsletter') ?? false);
    }

    componentDidUpdate(prevProps) {
        const fileToDownload = this.state.fileToDownload
        // Always have a check to see if the state has changed
        if (this.props.hasSubmittedNewsletterForm !== prevProps.hasSubmittedNewsletterForm && fileToDownload) {
            this.download(fileToDownload);
        }
    }

    closeOverlay = (e) => {
        if (!this.newsletterRef.current.contains(e.target)) {
            this.setState({
                overlayIsOpen: false,
            });
        }
    }

    download(file) {
        const link = document.createElement('a');
        link.href = file;
        link.download = file;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    handleClick = (file) => {
        // Don't open overlay with subscription form if the user already downloaded an illustration before (check reduxState)
        if (this.props.hasSubmittedNewsletterForm) {
            this.download(file);
        } else {
            this.setState({
                overlayIsOpen: true,
                fileToDownload: file,
            })
        }
    }

    render() {
        return (
            <div>
                <div className="o-grid  o-grid--fixed  u-width--100  u-padding--t6  u-padding--t7@sm  u-padding--t8@lg">
                    <IntroContentPage
                        title={this.state.downloads.title}
                        intro={this.state.downloads.teaserText}
                    />
                </div>
                <div style={{ backgroundColor: "#f3f3f3" }}>
                    <div className="o-grid  o-grid--fixed  u-width--100  u-padding--y6  u-padding--y7@sm  u-padding--y8@lg">
                        <div className="o-grid__row  u-padding--y">
                            {this.state.files.map((files, index) =>
                                <div className="o-grid__col  o-grid__col--6@xs  o-grid__col--4@lg  u-pointer" key={index} onClick={(e) => this.handleClick(files[1])}>
                                    <img className="u-width--100  v-transform--grow" alt="preview of downloadable line art drawing of triangulart"
                                         src={files[0]}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={(this.state.overlayIsOpen ? "u-block  " : "u-hidden  ") + "v-overlay--downloads__newsletter"} onClick={(e) => this.closeOverlay(e)}>
                    <div className="_position--newsletter--center">
                        <div className="u-text--center  u-inline-block  u-bg--white  u-margin--4" ref={this.newsletterRef}>
                            <NewsletterBanner
                                title="Get your download!"
                                text="Subscribe to get free illustrations and updates"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => {
    return {
        hasSubmittedNewsletterForm: reduxState.hasSubmittedNewsletterForm,
    };
};

export default connect(mapStateToProps, {setSubmittedNewsletterForm})(Downloads);
