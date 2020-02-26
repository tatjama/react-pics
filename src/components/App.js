import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    
onSearchSubmit =(term)=>{
console.log(term);
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