import { useState, useEffect } from "react";
import { GET } from "../../components/utils/http";
import { Link } from "react-router-dom";
import menubg from "../../../img/menubg.png";
import Home from "../home/Home";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";
import styles from "./index.module.scss";

function Menu() {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
    GET("/search.php?f=b").then((data) => setCocktailList(data.drinks));
  }, []);

  return (
    <div className={styles.menu} style={{ backgroundImage: `url(${menubg})` }}>
      <Navbar />
      <Hero />
      <Content data={cocktailList} />
      <Link
        to="/
      "
        element={<Home />}
        className={styles.backtomenu}
      >
        TORNA ALLA HOME
      </Link>
      <Footer />
    </div>
  );
}

export default Menu;
