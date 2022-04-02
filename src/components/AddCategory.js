import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
  
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = ( e ) => {
    setinputValue(e.target.value);
  }

  const submite = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2 ){

      setCategorias(cats => [inputValue,...cats]);  
      setinputValue('');
    
    }
  }

  return (
    <form onSubmit={submite}>
        <input type="text"
              value={inputValue}
              onChange={handleInputChange}  

              />
    </form>
  )
}

AddCategory.prototype = {
  setCategorias: PropTypes.func.isRequired

}
