import unsplash from '../api/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = {images: []}
 onSearchSubmit = async (term)=>{
//console.log(term);
const response   = await unsplash.get('/search/photos',{
        params: {query : term},        
    });
    console.log(response.data.results);
    this.setState({images: response.data.results.map((image)=>{
        return(<img key = {image.id} src={image.urls.regular} alt={image.description}/>)
    })});
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