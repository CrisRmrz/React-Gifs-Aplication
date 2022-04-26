import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory( { setCategories } ) {

    const [inputValue, setInputValue] = useState("Ingrese el nombre del gif:");
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit hecho");
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats] );
        }
    }

  return (
      
      <form onSubmit={ handleSubmit } >
          <input id='input' type="text" value={ inputValue }  onChange={ handleInputChange } />
      </form>
        
      
  );

};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory