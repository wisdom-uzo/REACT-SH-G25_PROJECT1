import React from 'react'
import './product.css'

const Product = () => {
  return (
    <div className="overall-product-container">
      <h1>Explore Our Best Menu</h1>
      <div className="product-btns">
        <button className='active-btn'>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>

      <div className="products-card-container">
        <div className="product-card">
          <div className="product-card-image-container">
            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="breakfast" />
          </div>
          <h2>$80</h2>
          <p>pizza</p>
        </div>
        <div className="product-card">
          <div className="product-card-image-container">
            <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=806&q=80" alt="breakfast" />
          </div>
          <h2>$80</h2>
          <p>pizza</p>
        </div>
        <div className="product-card">
          <div className="product-card-image-container">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="breakfast" />
          </div>
          <h2>$80</h2>
          <p>pizza</p>
        </div>
        <div className="product-card">
          <div className="product-card-image-container">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" alt="breakfast" />
          </div>
          <h2>$80</h2>
          <p>pizza</p>
        </div>
        <div className="product-card">
          <div className="product-card-image-container">
            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="breakfast" />
          </div>
          <h2>$80</h2>
          <p>pizza</p>
        </div>
        <div className="product-card">
          <div className="product-card-image-container">
            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="breakfast" />
          </div>
          <h2>$80</h2>
          <p>pizza</p>
        </div>
      </div>
      </div>
  )
}

export default Product