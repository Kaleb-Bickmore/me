import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <section id="colorlib-hero" class="js-fullheight" data-section="home">
            <div class="flexslider js-fullheight">
                <ul class="slides">
                <li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                       <div class="overlay"></div>
                       <div class="container-fluid">
                           <div class="row">
                               <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                   <div style = {{float: 'right',marginTop: '10%'}} class="slider-text-inner js-fullheight">
                                       <div class="desc">
                                           <h1 style={{textShadow: '2px 2px black',color: '#ccd3dd'}}>Hello,<br style={{color: '#ccd3dd;'}}/>I'm Kaleb!</h1>

                                            <p>
                                                <a href="KalebBickmoreResume.pdf" download = "KalebBickmoreResume.pdf" style={{color: '#ccd3dd', textShadow: '2px 2px black',
                                                            borderColor:  '#ccd3dd'}} class="btn btn-primary btn-learn">Download Resume 
                                                            <i style={{color: '#ccd3dd'}} class="icon-download4"></i>
                                                </a>
                                            </p>
                                        </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                </li>
                   <li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
                       <div class="overlay"></div>
                       <div class="container-fluid">
                           <div class="row">
                               <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                   <div style = {{float: 'right',marginTop: '10%'}} class="slider-text-inner">
                                       <div class="desc">
                                           <h1>I am <br/>a Software Engineer!</h1>
                                            <p>
                                                <a href="KalebBickmoreResume.pdf" download = "KalebBickmoreResume.pdf" id="download1" style={{borderColor:  '#ccd3dd;'}} 
                                                class="download btn btn-primary btn-learn">Download Resume 
                                                <i class="icon-download4"></i></a>
                                            </p>
                                        </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </li>
                  </ul>
            </div>
    </section>
    
    );
  }
}