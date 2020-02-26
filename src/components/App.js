import unsplash from '../api/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    
 onSearchSubmit = async (term)=>{
//console.log(term);
const response   = await unsplash.get('/search/photos',{
        params: {query : term},
        
    });
    console.log(response.data.results);
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