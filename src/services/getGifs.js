
const api_key="YSxXTCo847DYT6kYKbR9eKACXVsDqIkm";



export default function getGifs({limit=10,keyword='giphy',page=0}) {
  
  
  const apiURL=`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=en`

    return fetch(apiURL)
    .then(res=> res.json())
    .then(respons =>{
      const {data=[]}= respons
      if(Array.isArray(data))  {
        const gifs=data.map(e=> {
           const {images,title,id} = e
           const {url}= images.fixed_height_downsampled
           return {title,id,url}
        })
        
        return gifs
        
      }
    })
}