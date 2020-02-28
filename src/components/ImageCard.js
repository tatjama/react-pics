import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
       // console.log(props.image);
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
        console.log(this.state.span)
        return(<div style={{gridRowEnd: `span ${this.state.span}`}}>              
                  <img 
                  style = {{width: '250px'}}
                  ref={this.imageRef}
                  src={this.props.image.urls.regular}
                  alt={this.props.image.description}
                  />
              </div>            
        )
    }
}

export default ImageCard;