import React from 'react'
import './protfolio.css'
import IMG1 from "../../Assests/portfolio1.jpg"
import IMG2 from "../../Assests/portfolio2.jpg"
import IMG3 from "../../Assests/portfolio3.jpg"
import IMG4 from "../../Assests/portfolio4.jpg"
import IMG5 from "../../Assests/portfolio5.png"
import IMG6 from "../../Assests/portfolio6.jpg"

const Protfolio = () => {
  return (
    <section>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio title</h3>
          <small className='portofolio_margin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita dolore quas velit, suscipit unde. Culpa esse repellendus amet ratione porro, sunt ab maiores provident impedit? Laboriosam sunt officia culpa!</small>
          <p>TechStack : Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://github.com" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio title</h3>
          <small className='portofolio_margin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita dolore quas velit, suscipit unde. Culpa esse repellendus amet ratione porro, sunt ab maiores provident impedit? Laboriosam sunt officia culpa!</small>
          <p>TechStack : Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://github.com" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio title</h3>
          <small className='portofolio_margin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita dolore quas velit, suscipit unde. Culpa esse repellendus amet ratione porro, sunt ab maiores provident impedit? Laboriosam sunt officia culpa!</small>
          <p>TechStack : Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://github.com" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt="portfolio1" />
          </div>
          <h3>This is a portfolio title</h3>
          <small className='portofolio_margin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita dolore quas velit, suscipit unde. Culpa esse repellendus amet ratione porro, sunt ab maiores provident impedit? Laboriosam sunt officia culpa!</small>
          <p>TechStack : Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com" className='btn' target="_blank">Github</a>
          <a href="https://github.com" className='btn btn_primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Protfolio