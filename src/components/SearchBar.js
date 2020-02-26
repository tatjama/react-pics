import React from 'react';

class SearchBar extends React.Component{
    

    onInputChange = (event) =>{        
        console.log(event.target.value);
    }
    onFormSubmit = (event)=>{
        event.preventDefault();
    }

    render(){
    return(
        <div className = "ui segment">
            <form className = "ui form" onSubmit = {this.onFormSubmit}>
                <div className = "field">
                    <label>Search Image</label>
                    <input type ="text" onChange = {this.onInputChange}/>
                </div>
            </form>            
        </div>
    );
    }
};

export default SearchBar;