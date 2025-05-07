import { Link } from "react-router-dom";
import "../Article/article.css"
import Footer from "../Footer/Footer";



function Article(){
    return(
     <>
   
     <div className="article">
        <h2 className="h2-article">Բաժիններ</h2>

       <div className="cont-article">

        <Link className="cub1-article">
           <img src="images/art_img1.jpg" alt="" className="article-img"/>
           <h3 className="h3-article">Լվացող միջոցներ</h3>
        </Link>


        <Link className="cub1-article">
          <img src="images/art_img2.jpg" alt="" className="article-img"/>
          <h3 className="h3-article">Գրենական պարագաներ</h3>
        </Link>

     

       </div>


       <div className="cont-article">

        <Link className="cub1-article">
           <img src="images/art_img4.jpg" alt="" className="article-img"/>
           <h3 className="h3-article">Կոսմետիկա</h3>
        </Link>


        <Link className="cub1-article">
          <img src="images/art_img5.jpg" alt="" className="article-img"/>
          <h3 className="h3-article">Հիգիենայի պարագաներ</h3>
        </Link>


       </div>

       <div className="cont-article">



<Link className="cub1-article">
  <img src="images/art_img6.jpg" alt="" className="article-img" />
  <h3 className="h3-article">Թղթյա արտադրանքներ</h3>
</Link>

        <Link className="cub1-article" to="/electronic">
          <img src="images/art_img3.jpg" alt="" className="article-img" />
          <h3 className="h3-article">Էլեկտրական ապրանքներ</h3>
        </Link>

</div>

<div className="cont-article">

<Link className="cub1-article">
   <img src="images/art_img7.jpg" alt="" className="article-img"/>
   <h3 className="h3-article">Մանկական պարագաներ</h3>
</Link>


<Link className="cub1-article">
  <img src="images/art_img8.jpg" alt="" className="article-img"/>
  <h3 className="h3-article">Սպասք</h3>
</Link>


</div>

     </div>

    <Footer/>
     </>
    );
}

export default Article;