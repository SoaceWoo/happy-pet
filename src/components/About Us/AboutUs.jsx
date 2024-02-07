import React from "react";
import classes from "./AboutUs.module.css";

import AboutUsCardImage1 from "../../assets/About Us card image1.png";
import AboutUsCardImage2 from "../../assets/About Us card image2.png";
import AboutUsCardImage3 from "../../assets/About Us card image3.png";

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={`${classes.flex} ${classes.container}`}>
        <div>
          <h1 className={classes.line}>О питомнике Happy Pet</h1>
          <h2>Мы - команда мечтателей! bottom line</h2>
          <p>
            Happy Pet - единственный в России специализированный питомник
            эксклюзивных авторских растений. Морозостойкий и зимостойкий
            ассортимент для российского климата: бонсаи и топиары из лиственных
            и хвойных деревьев и кустарников, блоки живых изгородей и
            высококачественные декоративные кустарники в контейнерах. <br />
            <div className={classes.onlyHappyPet}>
              Только в Happy Pet - уникальные растения, существующие в
              единственном экземпляре, созданные ведущими российскими и
              зарубежными мастерами топиарного искусства. Площадь питомника 33,2
              га.
            </div>
          </p>
        </div>
        <div>
          <div className={`${classes.flex} ${classes.card}`}>
            <img src={AboutUsCardImage1} alt="" />
            <div>
              <img src={AboutUsCardImage2} alt="" />
              <img src={AboutUsCardImage3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <button></button>
      </div>
    </React.Fragment>
  );
};
export default AboutUs;
//rgb(150,242,255)
// rgb(102,182,255)
