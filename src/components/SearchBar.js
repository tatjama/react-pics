import React from 'react';

class SearchBar extends React.Component{
    state = {term : "pocetno"};

    onInputChange = (event) =>{        
        console.log(event.target.value);
        this.setState({term:event.target.value});
    }
    onFormSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state.term);
    }

    render(){
    return(
        <div className = "ui segment">
            <form className = "ui form" onSubmit = {this.onFormSubmit}>
                <div className = "field">
                    <label>Search Image</label>
                    <input type ="text" value = {this.state.term} onChange = {this.onInputChange}/>
                </div>
            </form>            
        </div>
    );
    }
};

export default SearchBar;