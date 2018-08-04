import React, { Component } from 'react';
import logo from './assets/main-logo-breath.png';
import banner from './assets/banner-racehorse.png';
//import bannerTextbox from './assets/banner-textbox.png';
import './App.css';

class App extends Component {
    render() {
        return (
        <div id="site-page">
            <div id="top-bar"></div>
            <SiteHeader />
            <MenuBar />               
            <MainBanner />
        </div>);
    }
}

class SiteHeader extends Component {
    render() {
        return(
        <div id="site-header">
            <img className="header-logo" src={logo} alt="equine lung experts logo"></img>
        </div>);
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

class MainBanner extends Component {
    render() {
        return (
        <div id="main-banner">
            <img className="banner-image" src={banner} alt="racing horse banner" />
            <div id="banner-message">
                <div id="message-title">
                    <h1 id="title-breath">Breath Easier</h1>
                    <h1 id="title-move">Move Faster</h1>
                </div>
                <p id="content-summary">Respiratory diseases cause poor performance in racing, sport and recreational horses. Through testing and diagnostic services, the veterinary scientists at Equine Lung Experts will help you solve respiratory disease caused by health or environmental exposures.</p>
                <a id="message-more" href="#what-we-do">Learn More -></a>
            </div>
        </div>);
    }
}
/*            <img id="banner-textbox" src={bannerTextbox} alt="blue background for text in banner" />*/

/*
class HomeBanner extends Component {
    render() {
        return (
            <div className="home-banner">
            </div>
        );
    }
}

class HomeNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            linkItems: {
                "Home": "#",
                "What We Do": "#About",
                "Submit a Sample": "#Submit",
                "Resources and Articles": "#Resources",
                "Contact Us": "#Contact"
            }
        };
        this.renderNavItems = this.renderNavItems.bind(this);
    }

    render() {
        return (
            <nav className="home-nav">
                <div>
                    { this.renderNavItems() }
                </div>
            </nav>
        );
    }

    renderNavItems() {
        return Object.entries(this.state.linkItems)
            .map(item  => {
                let [name, url] = item;
                return <NavItem key={ name } name={ name } link={ url } />;
            });
    }
}

class NavItem extends Component {
    render() {
        return (
            <a href={ this.props.link }>
                { this.props.name }
            </a>
        );
    }
}

class MainContent extends Component {
    render() {
        return (
            <section className="main-content">
                <div className="card main-card">
                    <p>Respiratory diseases are a primary cause of poor performance in racing, sport and recreational horses. Through testing and diagnostic services, the veterinary scientists at Equine Lung Experts will help you solve respiratory disease caused by health or environmental exposures</p>
                    <h1>Our Services</h1>
                    <ul>
                        <li>Processing of bronchoalveolar lavage fluid (BALF) samples and cytology interpretation.</li>
                        <li>Specialized diagnostic reports.</li>
                        <li>Environmental Exposure Consulting.</li>
                    </ul>
                </div>
            </section>
        );
    }
}

class SideContent extends Component {
    render() {
        return (
            <section className="side-content">
                <div className="card">
                    <h1>Discuss Your Case With The Experts</h1>
                    <h2>Dr. Laurent Couetil, DVM, PhD, Diplomate ACVIM-LAIM</h2>
                    <p>Dr. Couetil is a Professor of Large Animal Medecine at Purdue University, Director of the Equine Sports Medicine Center, and Director of Equine Research. A former practicing equine veterinarian, he has published extensively on respiratory diseases. <a href="#">(see full bio)</a></p>
                    <h2>Dr. Katie Ivester, DVM, PhD, Diplomate XXXX</h2>
                    <p>Dr. Ivester is a equine research scientist at Purdue University. A boarded equine surgeon, she bridges research and practice with field research investigating the links between environmental factors, viruses, and bacteria to equine respiratory health and performance <a href="#">(see full bio)</a></p>
                </div>
            </section>
        );
    }
}
*/
export default App;
