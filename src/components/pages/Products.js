import React from "react";
import "../Cards.css";
import CardItem from "../CardItem";

function Products(props) {
  console.log(props);
  return (
    <div className="cards">
      <h1> Our Team
      </h1>
      <h2>  We are a team of true professionals with specialisations ranging from legal, education, healthcare, business and Information Technology. "Dignos" in spanish means trustworthy and reliable. Guided by these values, we ensure all candidates are provided with the highest standard of service.</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ama.png"
              text="Amabelle is a qualified Education Agent Counsellor (QEAC #11621). She has vast experience enabling international students in getting a quality educational outcome in Australia." 
              label="Amabelle Dormer - Education Agent Counsellor"
              path="/products"
            />
            <CardItem
              src="images/mimi.png"
              text="An Educator by background. May had 10 years of experience on adult education and has designed curriculum for higher educations 
              and assisted Registered Training Organisations (RTO) to develop Training Plans. May also has a legal background and currently works as a legal adviser for a not-for-profit organisations."
              label="May Frances Raguine - Certified Trainer and Assessor"
              path="/products"
            />
   
          </ul>
          <ul className="cards__items"> 
            <CardItem
              src="images/hope.png"
              text="Hope has a healthcare background and owns her own practice. She provides her knowledge in the healthcare industry."
              label="Hope Parrocho - Practice Manager"
              path="/products"
            />
            <CardItem
              src="images/lorenz.png"
              text="Dale represents Dignos Consulting in the Philippines. He has a background in Business and provides his business acumen in promoting Dignos Consulting and its services."
              label="Dale Magtulis - Marketing Manager"
              path="/products"
            />
            
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
