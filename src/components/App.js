import axios from 'axios';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    
onSearchSubmit =(term)=>{
console.log(term);
    axios.get('https://api.unsplash.com/search/photos',{
        params: {query : term},
        headers:{
            Authorization : 'Client-ID a2cm37H8lav8s5pUWWgAJnjRuq4T816rPstXFbl6xsU'
        }
    }).then((response)=>{
        console.log(response)
    })
}
    
    render(){
    return(
        <div style = {{marginTop: "10px"}} className = "ui container">
        
            <SearchBar onSubmit = {this.onSearchSubmit} />
            Found images
            <ImageList/>
        </div>
    );
    }
}

export default App;