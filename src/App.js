import React, { Component } from 'react';
import './App.css';

import logoMain from './assets/main-logo-breath.png';
import picLaurent from './assets/picture-laurent-green-ltr.png';
import picKathleen from './assets/picture-kathleen-blue-rtl.png';

class App extends Component {
    render() {
        return (
            <MainPage />
        );
    }
}

class MainPage extends Component {
    render() {
        return (
        <div id="site-page">
            <Header srcLogo={logoMain} />
            <MenuBar />               
            <MainBanner />
            <MainContent />
            <Footer />
        </div>);
    }
}

class MainBanner extends Component {
    render() {
        return <Banner {...{
            titleA: "BREATH EASIER",
            titleB: "MOVE FASTER",
            content: "Respiratory diseases cause poor performance in racing, sport and recreational horses. Through testing and diagnostic services, the veterinary scientists at Equine Lung Experts will help you solve respiratory disease caused by health or environmental exposures.",
            action: {
                link: "",
                text: "Learn More ->"
            }
        }} />;
    }
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        return(
        <header>
            <img 
                className="header-logo" 
                src={this.state.srcLogo} 
                alt="equine lung experts logo" 
            />
        </header>);
    }
}

class MenuBar extends Component {
    render() {
        return(
        <nav className="menu-bar">
            <ul>
                <ListLink text="Services" link="" />
                <ListLink text="About Us" link="" />
                <ListLink text="Submit a Sample" link="" />
                <ListLink text="Contact Us" link="" />
                <ListLink text="Resources and Articles" link="" />
            </ul>
        </nav>);
    }
}

class ListLink extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ...props
        };
    }

    render() {
        return(
        <li>
            <a href={this.state.link}>{this.state.text}</a>
        </li>);
    }
}

class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        return (
        <li>
            <h1>{this.state.text}</h1>
        </li>);
    }
}


class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() { 
        return (
        <section id="main-banner">
            <div id="banner-message">
                <h1>
                    <span id="title-a">{this.state.titleA}</span>
                    <span id="title-b">{this.state.titleB}</span>
                </h1>
                <p>{this.state.content}</p>
                <a href={this.state.action.link}>{this.state.action.text}</a>
            </div>
        </section>);
    }
}

class MainContent extends Component {
    render() {
        const tagprops = {
                title: "We solve respiratory problems.",
                content: "Local diagnostic labs (even referral practices) don’t have the specialized knowledge in equine pulmonology to do a proper diagnosis of respiratory diseases. As leading specialists in horse asthma (heaves, RAO, IAD, COPD, and chronic bronchitis), exercise-induced pulmonary hemorrhage (EIPH or epistaxis), and other respiratory diseases affection performance, we provide in-depth evaluations of pulmonary health and risk factors."
        };

        return (
        <main id="content">
            <Tagline {...tagprops} />
            <ServicesSummary />
            <PeopleSummary />
            <Contact />
        </main>);
    }
}

class Tagline extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }
    render() {
        return (
        <section id="tagline">
            <h1>{this.state.title}</h1>
            <h5>{this.state.content}</h5>
        </section>);
    }
}

class ServicesSummary extends Component {
    render() {
        const summaryBalf = {
            title: "BALF Interpretation + Diagnostic Reporting",
            content: "Submit a sample and we will return a report describing the microscopic appearance of cytology including cellularity, differential cell count, mucus characteristics, and overall cytologic interpretation. When appropriate, comments regarding etiology will be provided.",
            action: {
                link: "", 
                text: "Submit Sample"
            },
            more: {
                link: "",
                text: "Learn More"
        }};
        const summaryEval = {
            title: "Environmental Exposure Counseling",
            content: "Our experts can examine your horse environment to identify potential causes of XXXXX and recommend potential interventions and treatments.",
            action: {
                link: "",
                text: "Schedule Evaluation"
            },
            more: {
                link: "",
                text: "Learn More"
        }};

        return (
        <section id="services-summary">
            <SummaryItem {...summaryBalf} />
            <SummaryItem {...summaryEval} />
        </section>);
    }
}

class SummaryItem extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <div className="summary-item">
            <h3>{this.state.title}</h3>
            <LinkAction {...this.state.action} />
            <p>{this.state.content}</p>
            <LinkMore {...this.state.more} />
        </div>);
    }
}

class LinkAction extends Component {
    constructor(props) {
       super(props);
       this.state = { ...props };
    }

    render() {
        return (
        <a className="link-action" href={this.state.link}>
            {this.state.text}
        </a>);
    }
}

class LinkMore extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
        <a className="link-more" href={this.state.link}>
            <span>{this.state.text}</span>
        </a>);
    }
}

class PeopleSummary extends Component {
    render() {
        const propsLbio = {
            name: "Dr. Laurent Couetil",
            image: picLaurent,
            qualifications: "DVM, PhD, Diplomate ACVIM-LAIM",
            content: "Dr. Couetil is a Professor of Large Animal Medicine at Purdue University, Director of the Equine Sports Medicine Center, and Directory of Equine Research. A former practicing equine veterinarian, he has published extensively on respiratory diseases",
            link: ""
        };
        const propsKbio = {
            name: "Dr. Kathleen Ivester",
            image: picKathleen,
            qualifications: "DVM, PhD, Diplomate XXXX",
            content: "Dr. Ivester is a equine research scientist at Purdue University. A boarded equine surgeon, she bridges research and practice with field research investigating the links between environmental factors, viruses, and bacteria to equine respiratory health and performance.",
            link: "",
            rtl: true 
        };

        return (
        <section id="people">
            <h2>Our Experts</h2>
            <h6>Discuss your case with us</h6> <div className="bio-showcase">
                <Bio {...propsLbio} />
                <Bio {...propsKbio} />
            </div>
        </section>);
    }
}

class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.image,
            name: props.name,
            qualifications: props.qualifications,
            content: props.content,
            link: props.link,
            classes: "bio" + (props.rtl ? " bio-rtl" : " bio-ltr")
        };
    }

    render() {
        return (
        <div className={this.state.classes} >
            <img src={this.state.image} />
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.qualifications}</h2>
                <p>{this.state.content}</p>
                <a href={this.state.link}>(see full bio)</a>
            </div>
        </div>);
    }
}

class Contact extends Component {
    render() {
        return (
        <section id="contact">
            <form>
                <button id="btn-contact">Contact Us<span></span></button>
                <input />
            </form>
        </section>);
    }
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [
            {
                header: { text: "Services", },
                links: [
                    { text: "Submit a Sample", link: "#" },
                    { text: "Insructions for shipping sample", link: "#" },
                    { text: "Make a Payment", link: "#" },
                    { text: "Tract Status", link: "#" },
                    { text: "Log in", link: "#" },
                    { text: "Create Account", link: "#" }]
            },
            {
                header: { text: "Learn About" },
                links: [
                    { text: "Our Experts", link: "#" },
                    { text: "Resources and Articles", link: "#" },
                    { text: "Bronchoalveolar Lavage Fluid (BALF) Interpretation", link: "#" },
                    { text: "Environmental Exposure Counseling", link: "#" },
                    { text: "Terminology Guide", link: "#" }]
            },
            {
                header: { text: "Contact Us" },
                links: [
                    { text: "Send us an email", link: "#" },
                    { text: "Request Phone Number/Schedule Evaluation", link: "#" }]
            }
            ]
        }
    }

    renderAllListings() {
        return this.state.listings.map(listing => <Listing {...listing} />);
    }

    render() {
        return (
        <footer>
            {this.renderAllListings()}
        </footer>);
    }
}

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }

    renderAllLinks() {
        return this.state.links.map(link => <ListLink {...link} />);
    }

    render() {
        return (
        <ul className="footer-listing col-4">
            <ListHeader {...this.state.header} />
            {this.renderAllLinks()}
        </ul>);
    }
}

export default App;
