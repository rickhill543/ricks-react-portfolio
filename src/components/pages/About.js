import React from "react";
import profilePicture from '../../assets/profile/profile-image.jpg';

const About = () => (
  <div>
    <h1>About</h1>
    <div className="profile-image-container">
      <img src={profilePicture} alt="ricks profile" />
    </div>
    <p className="about_text">
    Graphic designer by day, web developer by evening, guitar enthusiast by night. That's me in a virtual nutshell. Beginning my career as a graphic designer, now with 10 years of experience, I've learned to really appreciate the captivation an aesthic design can deliver. Pictures really are worth a thousand words and the ability to share them with the world instantaneously is truly amazing. I believe graphic design and web development are particulary good skillsets to combine in order to deliver something of lasting value.
  <br /><br />
    Currently, I am building upon my web development knowledge to achieve a more comprehensive understanding for both front-end and back-end development. My main focus will be centered around all things javaScript, as that is where strong user interactivity and be deployed. I'm ultimately heading torward a strong fullstack skillset with a strong background in graphic design, allowing for "big-picture" creativity with the skills to put it on the web.
    </p>
  </div>
);

export default About;
