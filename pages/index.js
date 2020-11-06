import Head from "next/head";
import styles from "../styles/Home.module.css";
import styles2 from '../styles/RecentPost.module.css'

const Home = () => {
  return (
    <div style={{width:"30%",margin:"auto auto",marginTop:"50px"}}>
    <section className={styles2.widget} >
        <header className={styles2.widgethead}>
          <h3>Recent Posts</h3>
          <p >post those are very recent in Dot</p>
        </header>
        <ol>
          <li>
            <h4><a href="">I get up in the morning looking <br />for an adventure.</a></h4>
            <span className={styles2.posttag}>
              <time dateTime="2011-01-12"><a href="#">25th may</a></time>
              <strong className={styles2.hot}>HOT</strong>
            </span>
          </li>
          <li>
            <h4><a href="">Letter from the desk of an <br />unsuccessful designer.</a></h4>
            <span  className={styles2.posttag}>
              <time dateTime="2011-01-12"><a href="#">25th may</a></time>
              <strong className={styles2.trend}>trending</strong>
            </span>
          </li>
          <li>
            <h4><a href="">Exploring the unknow truth about myself - My Story.</a></h4>
            <span  className={styles2.posttag}>
              <time dateTime="2011-01-12"><a href="#">25th may</a></time>
            </span>
          </li>
        </ol>
      </section>
       <div className={styles2.widget2} >
       <header className={styles2.widgethead}>
         <h3>Category</h3>
         <p>browse all your favourite categories</p>
       </header>
       <div className={styles2.listholder}>
         <ul>
           <li><a href="#">Lifestyle </a> (23)</li>
           <li><a href="#">Movie </a> (02)</li>
           <li><a href="#">Travel </a> (11)</li>
           <li><a href="#">Sports </a> (05)</li>
           <li><a href="#">Music </a> (01)</li>
         </ul>
         <ul>
           <li><a href="#">Education </a> (15)</li>
           <li><a href="#">International </a> (09)</li>
           <li><a href="#">Design </a> (26)</li>
           <li><a href="#">News </a> (01)</li>
           <li><a href="#">Review </a> (14)</li>
         </ul>
       </div>
     </div>
     </div>
  );
};

export default Home;
