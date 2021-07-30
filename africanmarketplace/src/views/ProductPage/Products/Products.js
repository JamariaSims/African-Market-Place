import "./Vegetables.scss";
import { styled } from "@material-ui/core/styles";
import React from "react";
import Eggs from '../../../assets/Images/eggs.jpg'
import Fruits from '../../../assets/Images/fruits.jpg'
import Grains from '../../../assets/Images/grains.webp'
import Honey from '../../../assets/Images/honey.webp'
import Milk from '../../../assets/Images/milk.jpg'
import Poultry from '../../../assets/Images/poultry.webp'
import Fish from '../../../assets/Images/salmon.jpg'
import Steak from '../../../assets/Images/steak.jpg'
import Vegetables from '../../../assets/Images/vegetables.jpg'
import Fruit from '../Fruits/Fruits.js'
import EggsJS from '../Eggs/Eggs.js'
import Meat from "../Meat/Meat";



function ProductCards() {
  const Link = styled("a")({
  textDecorationLine: "none",
  padding: "2%",
});
  return (
    // < className="wrapper">
    //   <Link>
    //   <ProductCard
    //     img={Eggs}
    //     title="Eggs"
    //     description=""
    //   />
    //   </Link>

    //   <ProductCard
    //     img={Milk}
    //     title="Milk"
    //     description=""
    //   />
    //   <ProductCard
    //     img={Fish}
    //     title="Fish"
    //     description=""
    //   />
    //   <ProductCard
    //     img={Honey}
    //     title="Honey"
    //     description=""
    //   />
    //   <ProductCard
    //     img={Steak}
    //     title="Meat"
    //     description=""
    //   />
    //   <ProductCard
    //     img={Poultry}
    //     title="Poultry"
    //     description=""
    //   />
    //   <ProductCard
    //     img={Vegetables}
    //     title="Vegetables"
    //     description=""
    //   />
    //   <ProductCard
    //     img={Fruits}
    //     title="Fruits"
    //     description=""
    //     onClick
    //   />

       <ProductCards className="card">
      <div className="cardBody">
        <img src={Grains} class="cardImage" alt="" />
        <h2 className="cardTitle">Cereals</h2>
        <p className="cardDescription">''</p>
      <button className="cardButton" href='#'>View Products</button>
      </div>
    

       
      <div className="cardBody">
        <img src={Fruits} class="cardImage" alt="" />
        <h2 className="cardTitle">Fruits</h2>
        <p className="cardDescription">''</p>
      <button className="cardButton" href='#'>View Products</button>
      </div>
   

       
      <div className="cardBody">
        <img src={Fish} class="cardImage" alt="" />
        <h2 className="cardTitle">Fish</h2>
        <p className="cardDescription">''</p>
      <button className="cardButton" href='#'>View Products</button>
      </div>
   

     
      <div className="cardBody">
        <img src={Milk} class="cardImage" alt="" />
        <h2 className="cardTitle">Milk</h2>
        <p className="cardDescription">''</p>
      <button className="cardButton" href='#'>View Products</button>
      </div>
   
       
      <div className="cardBody">
        <img src={Meat} class="cardImage" alt="" />
        <h2 className="cardTitle">Meat</h2>
        <p className="cardDescription">''</p>
      <button className="cardButton" href='#'>View Products</button>
      </div>
   
       
      <div className="cardBody">
        <img src={Poultry} class="cardImage" alt="" />
        <h2 className="cardTitle">Poultry</h2>
        <p className="cardDescription">''</p>
        <button className="cardButton" href='#'>View Products</button>
      </div>
      
   
      
      <div className="cardBody">
        <img src={Honey} class="cardImage" alt="" />
        <h2 className="cardTitle">Honey</h2>
        <p className="cardDescription">''</p>
      <button className="cardButton" href='#'>View Products</button>
      </div>
    


<div className="cardBody">
  <img src={Eggs} class="cardImage" alt="" />
  <h2 className="cardTitle">Eggs</h2>
  <p className="cardDescription">''</p>
<button className="cardButton" href='#'>View Products</button>
</div>

</ProductCards>

    
  );
}






// function ProductCard(props) {
 
//   return (
//     <div className="card">
//       <div className="cardBody">
//         <img src={props.img} class="cardImage" alt="" />
//         <h2 className="cardTitle">{props.title}</h2>
//         <p className="cardDescription">{props.description}</p>
//       </div>
//       <button className="cardButton" href='#'>View Products</button>
//     </div>
//   );
// }

export default ProductCards;
