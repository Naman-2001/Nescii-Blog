import React from "react";

const MasonryCard = () => {
  return (
    <article className="block wow fadeInUp" data-wow-delay="0.6s">
      <div className="block-holder">
        <div className="img-holder">
          <a href="single-post.html">
            <img src="images/img42.jpg" alt="image description" />
          </a>
        </div>
        <time dateTime="2011-01-12">
          <a href="#">25th May - Travel</a>
        </time>
        <h2>
          <a href="single-post.html">
            Enjoy the beauty of the heaven in the world.
          </a>
        </h2>
        <div className="info">
          <strong className="count comment-count">
            <span className="icon ico-comment" />
            <a href="#">25 comments</a>
          </strong>
          <strong className="count share-count">
            <span className="icon ico-share" />
            <a href="#">138 shares</a>
          </strong>
        </div>
        <div className="descr">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt...
          </p>
          <a href="single-post.html" className="read-more">
            Read more
          </a>
        </div>
      </div>
    </article>
  );
};

export default MasonryCard;
