import React from "react";
import "components/portfolio/portfolio.css";
import IMG1 from "assets/yelp-camp.png";
import IMG2 from "assets/shopping-cart.png";
import IMG3 from "assets/nextjs-blog.png";
import IMG4 from "assets/Tic-Tac-Toe.png";
import IMG5 from "assets/CocktailDB.png";
import IMG6 from "assets/dashboard.png";

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
          <h3>Tic-Tac-Toe</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn/tic-tac-toe"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://tictactoe-azure.vercel.app/"
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
          <h3>Cocktail Database</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn/CocktailDB"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://cocktail-db-jalokn.vercel.app/"
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
          <h3>Admin Dashboard</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Jalokn/dashboard"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://admin-dashboard-jalokn.vercel.app/"
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
