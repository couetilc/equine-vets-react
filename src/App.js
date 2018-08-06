import React, { Component } from 'react';
import logoMain from './assets/main-logo-breath.png';
import dividerHorse from './assets/divider-horse.png';
import './App.css';

class App extends Component {
    render() {
        return (
        <div id="site-page">
            <Header />
            <MenuBar />               
            <Banner />
            <Content />
            <Footer />
        </div>); }
}

class Header extends Component {
    render() {
        return(
        <header>
            <img className="header-logo" src={logoMain} alt="equine lung experts logo" />
        </header>);
    }
}

class MenuBar extends Component {
    render() {
        return(
        <nav className="menu-bar">
            <ul>
                <MenuItem text="Services" link="" />
                <MenuItem text="About Us" link="" />
                <MenuItem text="Submit a Sample" link="" />
                <MenuItem text="Contact Us" link="" />
                <MenuItem text="Resources and Articles" link="" />
            </ul>
        </nav>);
    }
}

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: props.text,
            link: props.link
        };
    }

    render() {
        return(
        <li>
            <a href={this.state.link}>{this.state.text}</a>
        </li>);
    }
}

class Banner extends Component {
    render() { return (
        <section id="main-banner">
            <div id="banner-message">
                <h1>
                    <span id="message-breath">BREATH EASIER</span>
                    <span id="message-move">MOVE FASTER</span>
                </h1>
                <p>Respiratory diseases cause poor performance in racing, sport and recreational horses. Through testing and diagnostic services, the veterinary scientists at Equine Lung Experts will help you solve respiratory disease caused by health or environmental exposures.</p>
                <a href="#what-we-do">Learn More -></a>
            </div>
        </section>);
    }
}

class Content extends Component {
    render() {
        return (
        <main id="content">
            <Tagline />
            <ServicesSummary />
            <PeopleSummary />
            <Contact />
        </main>);
    }
}

class Tagline extends Component {
    render() {
        return (
        <section id="tagline">
            <h1>Insert Tag Line Here.</h1>
            <p>Local diagnostic labs (even referral practices) don’t have the specialized knowledge in equine pulmonology to do a proper diagnosis of respiratory diseases. As leading specialists in horse asthma (heaves, RAO, IAD, COPD, and chronic bronchitis), exercise-induced pulmonary hemorrhage (EIPH or epistaxis), and other respiratory diseases affection performance, we provide in-depth evaluations of pulmonary health and risk factors.</p>
        </section>);
    }
}

class ServicesSummary extends Component {
    render() {
        return (
        <section id="services-summary">
            <div className="summary-item">
                <h2>BALF Interpretation + Diagnostic Reporting</h2>
                <p>Submit a sample and we will return a report describing the microscopic appearance of cytology including cellularity, differential cell count, mucus characteristics, and overall cytologic interpretation. When appropriate, comments regarding etiology will be provided.</p>
                <a className="link-learn" href="">Learn More</a>
                <a id="submit-sample" className="btn-action" href="">Submit a Sample</a>
            </div>
            <img src={dividerHorse} />
            <div className="summary-item">
                <h2>Environmental Exposure Counseling</h2>
                <p>Our experts can examine your horse environment to identify potential causes of XXXXX and recommend potential interventions and treatments.</p>
                <a className="link-learn" href="">Learn More</a>
                <a id="schedule-eval" className="btn-action" href="">Schedule an Evaluation</a>
            </div>
        </section>);
    }
}

class PeopleSummary extends Component {
    render() {
        return (
        <section id="people">
            <h1>DISCUSS YOUR CASE WITH THE EXPERTS</h1>
            <div className="bio">
                <h1>Dr. Laurent Couetil, DVM, PhD, Diplomate ACVIM-LAIM</h1>
                <p>Dr. Couetil is a Professor of Large Animal Medicine at Purdue University, Director of the Equine Sports Medicine Center, and Directory of Equine Research. A former practicing equine veterinarian, he has published extensively on respiratory diseases</p>
                <a href="">(see full bio)</a>
            </div>
            <div className="bio">
                <h1>Dr. Katie Ivester, DVM, PhD, Diplomate XXXX</h1>
                <p>Dr. Ivester is a equine research scientist at Purdue University. A boarded equine surgeon, she bridges research and practice with field research investigating the links between environmental factors, viruses, and bacteria to equine respiratory health and performance.</p>
                <a href="">(see full bio)</a>
            </div>
            <a href="">Contact Us</a>
        </section>);
    }
}

class Contact extends Component {
    render() {
        return (
        <section id="contact">
            <form className="form-contact">
                <button id="btn-contact" className="btn-action">Contact Us</button>
                <input></input>
            </form>
        </section>);
    }
}

class Footer extends Component {
    render() {
        return (
        <footer>
            <ul id="footer-services" className="footer-listing col-4">
                <li><h1>Services</h1></li>
                <li><a href="">Submit a Sample</a></li>
                <li><a href="">Instructions for shipping sample</a></li>
                <li><a href="">Make a Payment</a></li>
                <li><a href="">Tract Status</a></li>
                <li><a href="">Log in</a></li>
                <li><a href="">Create Account</a></li>
            </ul>
            <ul id="footer-learn" className="footer-listing col-4">
                <li><h1>Learn About</h1></li>
                <li><a href="">Our Experts</a></li>
                <li><a href="">Resources and Articles</a></li>
                <li><a href="">Bronchoalveolar Lavage Fluid (BALF) Interpretation</a></li>
                <li><a href="">Environmental Exposure Counseling</a></li>
                <li><a href="">Terminology Guide</a></li>
            </ul>
            <ul id="footer-contact" className="footer-listing col-4">
                <li><h1>Contact Us</h1></li>
                <li><a href="">Send us an email</a></li>
                <li><a href="">Request Phone Number/Schedule Evaluation</a></li>
            </ul>
        </footer>);
    }
}

export default App;
