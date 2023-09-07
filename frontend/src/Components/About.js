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
                Welcome to Ozone, where we take pride in serving up mouthwatering delights that are the epitome of comfort food. 
                Our specialty lies in crafting the most delectable burgers that are a symphony of flavors and textures. 
                Each bite is an experience of juicy, perfectly seasoned patties nestled within fresh buns, topped with a medley of your favorite ingredients. 
            </p>
            <p>
              But we don't stop at burgers; our golden, crispy fries are the perfect companions, and our chicken nuggets are little bites of pure delight, 
              perfectly crispy on the outside and tender on the inside. To complete your meal, savor a cup of our rich and aromatic coffee, carefully brewed to perfection.
            </p>
            <p>
              At Ozone, we're not just a restaurant; we're a destination for those seeking the ultimate comfort food experience. 
              Join us for a culinary journey that celebrates the classics and elevates them to new heights of flavor and satisfaction.
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