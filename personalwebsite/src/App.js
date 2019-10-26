import React, { Component } from 'react';
import Sidebar from './components/sidebar'
import About from './components/about'
import Home from './components/home';
import Skills from './components/skills';
import Education from './components/education';
import Experience from './components/experience';
import Work from './components/work';
import Contact from './components/contact';

export default class App extends Component {
  render() {
    return (
        	<div id="colorlib-page">
        		<div class="container-wrap">
            <Sidebar></Sidebar>

        		    <div id="colorlib-main">
                  
                    <Home></Home>
                    <About></About>
                    <Skills></Skills>
                    <Education></Education>
                    <Experience></Experience>
                    <Work></Work>
                    <Contact></Contact>
        		    </div>
        	    </div>
        	</div>
    );
  }
}