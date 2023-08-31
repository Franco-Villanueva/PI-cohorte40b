
import {GET_ALL_GENRES,
   GET_VIDEOGAMES,
    GET_VIDEOGAMES_BY_NAME,
    SET_PAGE,
    FILTER_ORDER,
    FILTER_RATING,
    FILTER_GENRE,
    FILTER_PLACE} from "../actions/actions";

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
    
    case FILTER_ORDER:
      const gamesCopyOrder = state.allVideoGames.slice();
      gamesCopyOrder.sort((a, b) => {
        // Comparamos los nombres de los juegos en minúsculas
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        // Ordenamos de forma ascendente o descendente según el caso
        if (action.payload === "asc") {
            return nameA.localeCompare(nameB); // Orden ascendente
        } else {
            return nameB.localeCompare(nameA); // Orden descendente
        }
    });
      return {
        ...state,
        allVideoGames: gamesCopyOrder,
      };

    case FILTER_RATING:
      const gamesCopyRating = state.allVideoGames.slice();
      gamesCopyRating.sort((a, b) => {
        // Comparamos las calificaciones de los juegos
        const ratingA = a.rating;
        const ratingB = b.rating;

        // Ordenamos de forma ascendente o descendente según el caso
        if (action.payload === "rAsc") {
            return ratingA - ratingB; // Orden ascendente
        } else {
            return ratingB - ratingA; // Orden descendente
        }
    });
      return {
        ...state,
        allVideoGames: gamesCopyRating,
      };

      case FILTER_GENRE:
        const selectedGenre = action.payload;
      
        if (selectedGenre === "All") {
          return {
            ...state,
            allVideoGames: state.filterList,
          };
        }
      
        const filteredGamesByGenre = state.filterList.filter(game =>
          game.genres.includes(selectedGenre)
        );
      
        return {
          ...state,
          allVideoGames: filteredGamesByGenre,
        };

      
        case FILTER_PLACE:
            const selectPlace = action.payload;
          
            let filteredGamesByPlace = state.filterList;
          
            if (selectPlace === 'Created') {
              filteredGamesByPlace = filteredGamesByPlace.filter(game => game.id.toString().includes('-'));
            } else if (selectPlace === 'Api') {
              filteredGamesByPlace = filteredGamesByPlace.filter(game => !isNaN(game.id));
            }
        
        return {
            ...state,
            allVideoGames: filteredGamesByPlace,
        };

    default:
        return state;
  }
};

export default rootReducer;
