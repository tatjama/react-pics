import axios from 'axios';

export default axios.create({
    baseURL :'https://api.unsplash.com',
    headers:{
        Authorization : 'Client-ID a2cm37H8lav8s5pUWWgAJnjRuq4T816rPstXFbl6xsU'
    }
});
