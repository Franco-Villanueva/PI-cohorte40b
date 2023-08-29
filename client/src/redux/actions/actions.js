import axios from 'axios'

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const SET_PAGE = 'SET_PAGE';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_ALL_GENRES = 'GET_ALL_GENRES'

export const FILTER_CREATED  = "FILTER_CREATED";
export const FILTER_ORDER    = "FILTER_ORDER";
export const FILTER_RATING   = "FILTER_RATING";
export const FILTER_GENRE    = "FILTER_GENRE";
export const FILTER_PLATFORM = "FILTER_PLATFORM";

export const ORDER ='ORDER'

export const getAllVideoGames = () => {
  const endpoint = 'http://localhost:3001/games/videogames';
  return (dispatch) => {
    axios.get(endpoint)
      .then(({ data }) => {
        return dispatch({
          type: GET_VIDEOGAMES, // Usa la constante en lugar del string
          payload: data,
        });
      });
    };
};

export const getAllGenres = () =>{
  const endpoint = 'http://localhost:3001/genres/'
  return (dispatch) => {
    axios.get(endpoint)
      .then(({ data }) => {
        return dispatch({
          type: GET_ALL_GENRES, // Usa la constante en lugar del string
          payload: data,
        });
      });
    };
}

export const setPage = (pageNumber) => {
    return {
        type: SET_PAGE,
        payload: pageNumber,
    };
};

export function getVideogamesByName(payload) {
  const endpoint = 'http://localhost:3001/games/onsearch';
  return function(dispatch) {
    axios.get(`${endpoint}?game=${payload}`)
      .then(({data}) => {
        return dispatch({
          type: GET_VIDEOGAMES_BY_NAME,
          payload: data,
        })
      })
  }
}




export function orderCards(order){
    return{
        type:'ORDER',
        payload: order,
    }

}


// Filters
export const filterCreated = ( payload ) => {
  return {
      type: FILTER_CREATED,
      payload
  }
};
export const filterOrdered = ( payload ) => {
  return {
      type: FILTER_ORDER,
      payload
  }
};
export const filterRating = ( payload ) => {
  return {
      type: FILTER_RATING,
      payload
  }
};
export const filterPlatform = ( payload ) => {
  return {
      type: FILTER_PLATFORM,
      payload
  }
};
export const filterGenre = ( payload ) => {
  return {
      type: FILTER_GENRE,
      payload
  }
};
