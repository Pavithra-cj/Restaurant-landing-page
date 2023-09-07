import menuImage1 from '../src/Assets/Images/menu-1.png'
import menuImage2 from '../src/Assets/Images/menu-2.png'
import menuImage3 from '../src/Assets/Images/menu-3.png'
import menuImage4 from '../src/Assets/Images/menu-4.png'
import menuImage5 from '../src/Assets/Images/menu-5.png'
import cartImage1 from '../src/Assets/Images/cart-item-1.png'
import cartImage2 from '../src/Assets/Images/cart-item-2.png'
import cartImage3 from '../src/Assets/Images/cart-item-3.png'
import cartImage4 from '../src/Assets/Images/cart-item-4.png'
import reviewImage1 from '../src/Assets/Images/pic-1.png'
import reviewImage2 from '../src/Assets/Images/pic-2.png'
import reviewImage3 from '../src/Assets/Images/pic-3.png'
import blogImage1 from '../src/Assets/Images/blog-1.jpeg'
import blogImage2 from '../src/Assets/Images/blog-2.jpeg'
import blogImage3 from '../src/Assets/Images/blog-3.jpeg'

const menu = [
  {
    img: menuImage1,
    name: 'Ozone Big Burger Pack',
    price: {
      original: 1500.00,
      discounted: 1350.00,
    },
  },
  {
    img: menuImage2,
    name: 'Ozone Wings and Fries',
    price: {
      original: 1200.00,
      discounted: 1000.00,
    },
  },
  {
    img: menuImage3,
    name: 'Ozone Chicken Nuggets',
    price: {
      original: 1000.00,
      discounted: 800.00,
    },
  },
  {
    img: menuImage4,
    name: 'Ozone Large Pizza',
    price: {
      original: 2000.00,
      discounted: 1850.00,
    },
  },
  {
    img: menuImage5,
    name: 'Ozone Coffee Special',
    price: {
      original: 500.00,
      discounted: 420.00,
    },
  },
];

const cart = [
  {
    img: cartImage1,
    name: 'Ozone Big Burger Pack',
    price: '1350.00',
  },
  {
    img: cartImage2,
    name: 'Ozone Chicken Nuggets',
    price: '800.00',
  },
  {
    img: cartImage3,
    name: 'Ozone Wings and Fries',
    price: '1000.00',
  },
];

const review = [
  {
    img: reviewImage1,
  },
  {
    img: reviewImage2,
  },
  {
    img: reviewImage3,
  },
];

const blog = [
  {
    img: blogImage1,
  },
  {
    img: blogImage2,
  },
  {
    img: blogImage3,
  },
];


export { menu, cart, review, blog };
