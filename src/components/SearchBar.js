import axios from 'axios';
import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ''}
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state.term);     
        this.props.onSubmit(this.state.term)        

      /* axios.get('https://api.unsplash.com/search/photos',{
            params:{query: this.state.term},
            headers:{
                Authorization : 'Client-ID a2cm37H8lav8s5pUWWgAJnjRuq4T816rPstXFbl6xsU'
            }

        }).then((response)=>{
            console.log(response);
        })*/

    }

    onInputChange = (event) =>{        
        console.log(event.target.value);
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