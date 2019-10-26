import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        
			<section class="colorlib-experience" data-section="experience">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 class="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                     <div class="timeline-centered">
                         <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div class="timeline-entry-inner">

                               <div class="timeline-icon color-1">
                                  <i class="icon-pen2"></i>
                               </div>

                               <div class="timeline-label">
                                  <h2><a href="/#">Software Developer</a> <span>2019</span><br/><span> <a href="https://www.utah.edu/">University of Utah</a></span></h2>
                                  <ul>
                                        <li> Developing web applications using Typescript frontend and Flask API</li>
                                        <li>Using D3.js libraries for useful diagrams and providing data analysis</li>
                                        <li>Designing code architecture for code readability and reuse</li> 
                                      </ul>
                               
                                </div>
                            </div>
                         </article>


                         <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                            <div class="timeline-entry-inner">
                               <div class="timeline-icon color-2">
                                  <i class="icon-pen2"></i>
                               </div>
                               <div class="timeline-label">
                                   <h2><a href="/#">Software Engineer</a> <span>2019</span><br/><span> <a href="https://www.vareximaging.com/">Varex Imaging</a></span></h2>
                                   <ul>
                                        <li>Designing intuitive user interface in native Python using PyQt5 framework</li>
                                        <li>Developing algorithms for automating x-ray tube tuning</li>
                                        <li>Maintaining SQL database integrity</li> 
                                      </ul>
                                </div>
                            </div>
                         </article>

                         <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                            <div class="timeline-entry-inner">
                               <div class="timeline-icon color-3">
                                  <i class="icon-pen2"></i>
                               </div>
                               <div class="timeline-label">
                                   <h2>Student Software Engineer <span>2018-2019</span><br/><span> <a href="https://www.sdl.usu.edu/">Space Dynamics Laboratory</a></span></h2>
                                  <ul>
                                    <li>Developing QT applications in C++ and Python</li>
                                    <li>Maintaining Legacy code</li>
                                    <li>Versioning software using Git and Subversion</li> 
                                  </ul>
                               </div>
                            </div>
                         </article>

                      </div>
                   </div>
               </div>
            </div>
        </section>

    );}}