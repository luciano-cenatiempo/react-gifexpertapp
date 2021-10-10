import React,{useState} from 'react'

import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){

            setCategories(cats=>[inputValue ]); // aca borre el ..cats para que aparezca solamente la ultima busqueda
            setInputValue('');
        }

        // console.log('Submit hecho');
    }

    return (
        
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange= { handleInputChange }
                placeholder = "Search your gifs..."
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
