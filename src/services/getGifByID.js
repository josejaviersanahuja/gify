
const api_key="YSxXTCo847DYT6kYKbR9eKACXVsDqIkm";



export default function getGifByID({id}) {
  
  const apiURL=`https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`

    return fetch(apiURL)
    .then(res=> res.json())
    .then(respons =>{
      const {data={}}= respons
      
           const {images,title,id} = data
           const {url}= images.fixed_height_downsampled
           const gifByID={title,id,url}
      
        return gifByID
     })
}