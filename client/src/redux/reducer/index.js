
import {GET_ALL_GENRES, GET_VIDEOGAMES, GET_VIDEOGAMES_BY_NAME, SET_PAGE,} from "../actions/actions";

const initialState = {
  allVideoGames: [],
  filterList:[],
  searchResults:[],
  allGenres:[],
  page:1
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return { 
        ...state,
        allVideoGames: action.payload,
        filterList: action.payload };

    case SET_PAGE:
      return{
        ...state,
        page: action.payload
      }
    
    case GET_ALL_GENRES:
      return{
        ...state,
        allGenres:action.payload
      }

    case GET_VIDEOGAMES_BY_NAME:
      return{
        ...state,
        searchResults: action.payload
      }

    default:
        return state;
  }
};

export default rootReducer;
