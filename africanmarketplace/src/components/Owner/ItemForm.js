import { Button, TextField } from '@material-ui/core';
import React, {useState} from 'react';
import './ItemForm.css';



const ItemForm = (props) => {
    const { setProductList, productList } = props;
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredPrice, setEnteredPrice] = useState('');
    const[enteredDescription, setEnteredDescription] = useState('');
    const[enteredVendor, setEnteredVendor] = useState('')

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event)=>{
        setEnteredPrice(event.target.value);
    };

    const descriptionChangeHandler = (event)=>{
        setEnteredDescription(event.target.value);
    };

    const vendorChangeHandler = (event)=>{
        setEnteredVendor(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const itemData = {
            title: enteredTitle,
            price: enteredPrice,
            description: enteredDescription,
            vendor: enteredVendor
        };

        setProductList([...productList,itemData]);
    };


    return(
        <form  className="sectionForm" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                <TextField
                    id="filled-helperText"
                    label="Product Name"
                    defaultValue="Product Name"
                    variant="filled"
                    value={enteredTitle} 
                    onChange={titleChangeHandler} 
                />
                
                </div>
                <div className="new-expense__controls">
                <TextField
                    id="filled-helperText"
                    label="Price"
                    defaultValue="Price"
                    variant="filled"
                    value={enteredPrice} 
                    onChange={priceChangeHandler} 
                />
                </div>
                <div className="new-expense__controls">
                <TextField
                    id="filled-helperText"
                    label="Description"
                    defaultValue="Description"
                    variant="filled"
                    value={enteredDescription} 
                    onChange={descriptionChangeHandler} 
                />
                <div className="new-expense__controls">
                <TextField
                    id="filled-helperText"
                    label="Vendor"
                    defaultValue="Vendor"
                    variant="filled"
                    value={enteredVendor} 
                    onChange={vendorChangeHandler} 
                />
                </div>
                </div>
            </div>
            <div className="new-expense__actions">
                <Button variant="outlined" color="primary" type="submit">Add Product</Button>
            </div>
        </form>
    );
};


export default ItemForm;