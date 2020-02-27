import unsplash from '../api/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = {images: 0}
 onSearchSubmit = async (term)=>{
//console.log(term);
const response   = await unsplash.get('/search/photos',{
        params: {query : term},        
    });
    console.log(response.data.total);
    this.setState({images: response.data.total});
    console.log(this.state.images);

}
    
    render(){
        console.log(this)
    return(
        <div style = {{marginTop: "10px"}} className = "ui container">
        
            <SearchBar onSubmit = {this.onSearchSubmit} />
            Found {this.state.images} images
            <ImageList/>
        </div>
    );
    }
}

export default App;