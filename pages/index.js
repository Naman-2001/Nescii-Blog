import React, { useState, useEffect } from "react";
import MasonryCard from "../src/MasonryCard";

const index = () => {
  return (
    <div class="container">
      <div class="row">
        <div id="content" className="col-xs-12">
          <section id="masonry-container" className="masonry-blocks">
            <div className="masonry-holder">
              <MasonryCard />
              <MasonryCard />
              <MasonryCard />
              <MasonryCard />
              <MasonryCard />
              <MasonryCard />
              <MasonryCard />
              <MasonryCard />
            </div>
          </section>
          <nav role="navigation" className="navigation pagination">
            <div className="nav-links text-center">
              <a href="#" className="prev page-numbers">
                Prev post.
              </a>
              <a href="#" className="page-numbers">
                1
              </a>
              <span className="page-numbers current">2</span>
              <span className="page-numbers dots hidden">…</span>
              <a href="#" className="page-numbers">
                3
              </a>
              <a href="#" className="next page-numbers">
                NEXT post.
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default index;
