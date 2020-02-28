import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ''}
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        //console.log(this.state.term);     
        this.props.onSubmit(this.state.term);       

    }

    onInputChange = (event) =>{        
       // console.log(event.target.value);
        this.setState({term:event.target.value});
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