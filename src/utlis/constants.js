export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTE3YWZiMmU0YTI0YWExNmQ4ZjFiNjUzZGY1YTg4NCIsInN1YiI6IjYyMTE2MGViYWE3ODk4MDA0MmZjMDZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QtnaoFJ9ZIytncqz_2bhYHskyTK3UqUlMh-nAeM6pa8'
    }
  };

  export const img_cdn = "https://image.tmdb.org/t/p/w500/"

  export const language = {
    english:{
      search:"Search",
      gptSearchPlaceholder:"what would you like to watch today",
    },
    hindi:{
      search:"खोज",
      gptSearchPlaceholder:"आज आप क्या देखना चाहेंगे?",
    },
    spanish:{
      search:"buscar",
      gptSearchPlaceholder:"¿Qué te gustaría ver hoy?",
    },
    
  }

  export const type_language = 
    [
      {identifier:"english", name:"english"},
      {identifier:"hindi", name:"hindi"},
      {identifier:"spanish", name:"spanish"},
      
    ]

  export  const open_api = process.env.process.env.REACT_APP_open_api   
  