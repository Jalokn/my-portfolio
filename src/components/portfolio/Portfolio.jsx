import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/yelp-camp.png";
import IMG2 from "../../assets/shopping-cart.png";
import IMG3 from "../../assets/nextjs-blog.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// To dynacmically generate
//
// data.map(({id,image,title,github,demo})=>{
//   <article  key ={id} className="portfolio_item">
//           <div className="portfolio_item-image">
//             <img src={image} alt={title} />
//           </div>

//           <h3>{title}</h3>
//           <div className="portfolio_item-cta">
//             <a
//               href={github}
//               className="btn"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Github
//             </a>
//             <a
//               href={demo}
//               className="btn btn-primary"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Live Demo
//             </a>
//           </div>
//         </article>
// })
//

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Project" />
          </div>

          <h3>YelpCamp</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn/YelpCamp"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://fathomless-bayou-82978.herokuapp.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="Project" />
          </div>
          <h3>Shopping Cart</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn/react-ts-shoppingcart"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://jacobsshoppingcart.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="Project" />
          </div>
          <h3>Blog</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn/nextjs-blog"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://nextjs-blog-jalokn.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="Project" />
          </div>
          <h3>Protfolio Item Title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="Project" />
          </div>
          <h3>Protfolio Item Title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="Project" />
          </div>
          <h3>Protfolio Item Title</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
