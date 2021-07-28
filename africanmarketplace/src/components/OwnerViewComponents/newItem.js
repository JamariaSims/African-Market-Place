import React, {useState} from 'react';
import ItemForm from './ItemForm';

const NewItem = (props) => {
    const saveItemDataHandler = (enteredItemData) => {

        const itemData = {  
            ...enteredItemData
        };
        props.onAddItem(itemData);
    };

    const [itemData,setItemData] = useState(saveItemDataHandler);

    return( 
        <div className ="new-expense">
            <ItemForm onSaveItemData = {itemData} />

        </div>
    );
};

export default NewItem;