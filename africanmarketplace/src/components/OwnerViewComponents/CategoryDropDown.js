const CategoryFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
    
  return (
    <div>
        <label>Category</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='Animal Products'>Animal Products</option>
          <option value='Vegetable'>Vegetable</option>
          <option value='Beans'>Beans</option>
          <option value='Rice'>Rice</option>
          <option value='Roots'>Roots</option>
          <option value='Fruits'>Fruits</option>
          <option value='Nuts'>Nuts</option>
          <option value='Seeds'>Seeds</option>
          <option value='Other'>Other</option>
        </select>
    </div>
  );
};

export default CategoryFilter;