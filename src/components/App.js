import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = ()=>{
    return(
        <div style = {{marginTop: "10px"}} className = "ui container">
        
            <SearchBar/>
            <ImageList/>
        </div>
    );
}

export default App;