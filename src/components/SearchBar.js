import React from 'react';

const SearchBar=()=>{
    return(
        <div className = "ui segment">
            <form className = "ui form">
                <div className = "field">
                    <label>Search Image</label>
                    <input type ="text"/>
                </div>

            </form>
            
        </div>
    );
};

export default SearchBar;