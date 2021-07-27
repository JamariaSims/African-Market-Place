import CategoryFilter from "./CategoryDropDown";
//import ToggleSwitch from "./Switch";

const ProductList = ( ) => {

    return(
        <div>
            <img className='product-image' src='#'/>
            <input type='text'>Product Name</input>
            <CategoryFilter/>
            <input type='text'>Price</input>
            <input type='text'>Item Description</input>
        </div>
    );
};


export default ProductList;