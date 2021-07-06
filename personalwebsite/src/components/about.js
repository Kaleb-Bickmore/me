import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
    <section class="colorlib-about" data-section="about">
				<div class="colorlib-narrow-content">
					<div class="row">
						<div class="col-md-12">
							<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div class="col-md-12">
									<div class="about-desc">
										<h2 class="colorlib-heading">Who Am I?</h2>
										<p><strong>Hi I'm Kaleb Bickmore,</strong> I am a software engineer 
											and entrepreneur based out of Salt Lake City, Ut. I graduated from Utah State University
											with a Bachelor of Computer Science. I enjoy the outdoors by mountain biking, hiking, and backpacking. 
										</p>
										<div class="colorlib-about">
											<p>Current technologies I am using:</p>
											<ul style={{color: 'rgb(165, 170, 177)', columns: 2}}>
												<li>React</li>
												<li>Node</li>
												<li>Javascript</li>
												<li>Python</li>
												<li>ASP.NET Core</li>
												<li>Typescript</li>
												<li>Java w/ Spring Boot</li>


											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    );
}
}