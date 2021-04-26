
const api_key="YSxXTCo847DYT6kYKbR9eKACXVsDqIkm";



export default function getTrendingGifs() {
  
  
  const apiURL=`https://api.giphy.com/v1/trending/searches?api_key=${api_key}`

    return fetch(apiURL)
    .then(res=> res.json())
    .then(respons =>{
      const {data=[]}= respons
      return data
      }  )
                       
      }
    