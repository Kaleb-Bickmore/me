import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>  
        <a href="/#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" 
        data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
        		<aside id="colorlib-aside" role="complementary" class="border js-fullheight">
        			<div class="text-center">
        				<div class="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}></div>
        				<h1 id="colorlib-logo"><a href="index.html">Kaleb Bickmore</a></h1>
        				<span class="position"><a href="https://www.computersciencedegreehub.com/faq/what-is-the-difference-between-software-engineering-and-software/">
                            Software Engineer</a> in Salt Lake City, Ut</span>
        			</div>
        			<nav id="colorlib-main-menu" role="navigation" class="navbar">
        				<div id="navbar" class="collapse">
        					<ul>
        						<li class="active"><a href="/#" data-nav-section="home">Home</a></li>
        						<li><a href="/#" data-nav-section="about">About</a></li>
        						<li><a href="/#" data-nav-section="skills">Skills</a></li>
        						<li><a href="/#" data-nav-section="education">Education</a></li>
        						<li><a href="/#" data-nav-section="experience">Experience</a></li>
        						<li><a href="/#" data-nav-section="work">Work</a></li>
        						<li><a href="/#" data-nav-section="contact">Contact</a></li>
        					</ul>
        				</div>
        			</nav>

        			<div class="colorlib-footer">
        			    <p><small>&copy;  
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | 
        This template is made with 
        <i class="icon-heart" aria-hidden="true"></i> by 
        <a href="https://colorlib.com" target="_blank">Colorlib</a> 
       <span>Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p> 
        				<ul>
        					<li><a href="/#"><i class="icon-facebook2"></i></a></li>
        					<li><a href="/#"><i class="icon-twitter2"></i></a></li>
        					<li><a href="/#"><i class="icon-instagram"></i></a></li>
        					<li><a href="/#"><i class="icon-linkedin2"></i></a></li>
        				</ul>
        			</div>

                </aside>
        </div>
    );
}
}