import React from 'react'
import {menu} from '../Data' 

const Menu = () => {
  return (
    <div>
        <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <div className="price">
                LKR {item.price.discounted.toFixed(2)}{' '} <span>{item.price.original.toFixed(2)}</span>
              </div>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Menu