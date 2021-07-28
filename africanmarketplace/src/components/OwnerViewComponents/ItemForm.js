import React, {useState} from 'react';
import './ItemForm.css';



const ItemForm = (props) => {
    const { setProductList, productList } = props;
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredPrice, setEnteredPrice] = useState('');
    const[enteredDescription, setEnteredDescription] = useState('');
    const[enteredImage, setEnteredImage] = useState('')

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event)=>{
        setEnteredPrice(event.target.value);
    };

    const descriptionChangeHandler = (event)=>{
        setEnteredDescription(event.target.value);
    };

    const imageChangeHandler = (event)=>{
        setEnteredImage(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const itemData = {
            title: enteredTitle,
            amount: enteredPrice,
            description: enteredDescription,
            image: enteredImage
        };

        setProductList([...productList,itemData]);
    };


    return(
        <form  className="sectionForm" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input 
                     type='text'
                     value={enteredTitle} 
                     onChange={titleChangeHandler} 
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Price</label>
                    <input 
                     type='number' 
                     min='0.01' 
                     step='0.01'
                     value={enteredPrice} 
                     onChange={priceChangeHandler}
                    />
                </div>
                <div className="new-expense__controls">
                    <label>Description</label>
                    <input 
                     type='text' 
                     value={enteredDescription}
                     onChange={descriptionChangeHandler}
                    />
                <div className="new-expense__controls">
                    <label>Image URL</label>
                    <input 
                     type='text'
                     value={enteredImage} 
                     onChange={imageChangeHandler} 
                    />
                </div>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Product</button>
            </div>
        </form>
    );
};


export default ItemForm;