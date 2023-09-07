import React from 'react'
import aboutImg from '../Assets/Images/about-img.jpeg'

const About = () => {
  return (
    <div>
        <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={aboutImg} alt="" />
          </div>

          <div className="content">
            <h3>what makes our food special?</h3>
            <p>
                There's nothing quite like starting your day with a fresh breakfast in the morning. 
                As the sun peeks over the horizon, the aroma of freshly brewed coffee or tea fills the air, 
                signaling the promise of a new day. Your plate is adorned with an array of delicious and nutritious options, 
                from fluffy scrambled eggs and crispy bacon to a colorful fruit salad bursting with vitamins. 
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About