import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);       
       this.state = {span: 0};
       this.imageRef = React.createRef();
    }

    componentDidMount(){
       this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = ()=>{
        const height = this.imageRef.current.clientHeight;
        const spa = Math.ceil(height/10);
        this.setState({span: spa})
    }
    
    render(){
        
        const {urls, description} = this.props.image
        return(<div style={{gridRowEnd: `span ${this.state.span}`}}>              
                  <img 
                  style = {{width: '250px'}}
                  ref={this.imageRef}
                  src={urls.regular}
                  alt={description}
                  />
              </div>            
        )
    }
}

export default ImageCard;