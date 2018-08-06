import React, { Component } from 'react';
import logo from './assets/main-logo-breath.png';
import smallLogo from './assets/small-logo-breath.png';
import banner from './assets/banner-racehorse.png';
import dividerHorse from './assets/divider-horse.png';
import './App.css';

class App extends Component {
    render() {
        return (
        <div id="site-page">
            <SiteHeader />
            <MenuBar />               
            <MainBanner />
            <ServicesSummary />
            <ActionItems />
            <SiteFooter />
        </div>);
    }
}

class SiteHeader extends Component {
    render() {
        return(
        <header id="site-header">
            <img className="header-logo" src={logo} alt="equine lung experts logo" />
        </header>);
    }
}

class MenuBar extends Component {
    render() {
        return(
        <nav id="menu-bar">
            <ul>
                <MenuItem text="What We Do" link="" />
                <MenuItem text="Submit a Sample" link="" />
                <MenuItem text="Resources and Articles" link="" />
                <MenuItem text="Contact Us" link="" />
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

    render () {
        return(
        <li>
            <a href={this.state.link}>{this.state.text}</a>
        </li>);
    }
}

/*<img className="banner-image" src={banner} alt="racing horse banner" />*/
class MainBanner extends Component {
    render() {
        return (
        <section id="main-banner">
            <div className="image-container"
                style={{backgroundImage: `url(${banner})`}}
            >
                <div id="banner-message">
                    <div id="message-title">
                        <h1 id="title-breath">Breath Easier</h1>
                        <h1 id="title-move">Move Faster</h1>
                    </div>
                    <p id="content-summary">Respiratory diseases cause poor performance in racing, sport and recreational horses. Through testing and diagnostic services, the veterinary scientists at Equine Lung Experts will help you solve respiratory disease caused by health or environmental exposures.</p>
                    <a id="message-more" href="#what-we-do">Learn More -></a>
                </div>
            </div>
        </section>);
    }
}

class ServicesSummary extends Component {
    render() {
        return (
        <section id="services-summary">
            <div id="section-divider-start"></div>
            <h1>What We Do</h1>
            <p>Local diagnostic labs (even referral practices) don’t have the specialized knowledge in equine pulmonology to do a proper diagnosis of respiratory diseases. As leading specialists in horse asthma (heaves, RAO, IAD, COPD, and chronic bronchitis), exercise-induced pulmonary hemorrhage (EIPH or epistaxis), and other respiratory diseases affection performance, we provide in-depth evaluations of pulmonary health and risk factors.</p>
            <div id="item-container">
                <div className="summary-item">
                    <h2>BALF Interpretation + Diagnostic Reporting</h2>
                    <p>Submit a sample and we will return a report describing the microscopic appearance of cytology including cellularity, differential cell count, mucus characteristics, and overall cytologic interpretation. When appropriate, comments regarding etiology will be provided.</p>
                    <a href="">More Information</a>
                </div>
                <img src={dividerHorse} />
                <div className="summary-item">
                    <h2>Environmental Exposure Counseling</h2>
                    <p>Our experts can examine your horse environment to identify potential causes of XXXXX and recommend potential interventions and treatments.</p>
                    <a href="#">More Information</a>
                </div>
            </div>
            <div id="section-divider-end" />
        </section>);
    }
}

class ActionItems extends Component {
    render() {
        return (
        <section id="action-items">
            <div id="services-action" className="action-item">
                <h1>OUR SERVICES</h1>
                <h2>Processing of bronchoalveolar lavage fluid (BALF) samples and cytology interpretation and Specialized Diagnostic Reports</h2>
                <a href="">Submit a Sample</a>
                <h2>Environmental Exposure Counseling</h2>
                <a href="">Schedule Evaluation</a>
            </div>
            <div id="discuss-action" className="action-item">
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
            </div>
        </section>);
    }
}

class SiteFooter extends Component {
    render() {
        return (
        <footer id="site-footer">
            <div>
                <a id="return-top" href="#">Return to Home</a>
                <img id="footer-logo" src={smallLogo} />
            </div>
            <ul>
                <li><h1>Navigation</h1></li>
                <li><a href="">What We Do</a></li>
                <li><a href="">Submit a Sample</a></li>
                <li><a href="">Resources and Articles</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Make a Payment</a></li>
            </ul>
        </footer>);
    }
}

export default App;
