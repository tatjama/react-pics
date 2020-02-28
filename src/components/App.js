import unsplash from '../api/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = {images: []}
 
    onSearchSubmit = async (term)=>{
        const response   = await unsplash.get('/search/photos',{
                            params: {query : term},        
        });
 
    this.setState({images: response.data.results});
       

}
    
    render(){
        
    return(
        <div style = {{marginTop: "10px"}} className = "ui container">
        
            <SearchBar onSubmit = {this.onSearchSubmit} />
            Found {this.state.images.length} images
            <ImageList images = {this.state.images}/>
        </div>
    );
    }
}

export default App;