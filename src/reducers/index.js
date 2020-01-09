import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    FETCH_RESTAURANT_START,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_ERROR, 
  
    SET_CURRENT,
    CLEAR_CURRENT,
    ADD_RESTAURANT_START,
    ADD_RESTAURANT_SUCCESS,
    ADD_RESTAURANT_ERROR,
    UPDATE_RESTAURANT_START,
    UPDATE_RESTAURANT_SUCCESS,
    UPDATE_RESTAURANT_ERROR,
    DELETE_RESTAURANT_START,
    DELETE_RESTAURANT_SUCCESS,
    DELETE_RESTAURANT_ERROR

  } from '../actions/index'
  
  const initialState = {
    user: {},
    username: '',
    error: '',
    isFetching: false,
    restaurants: null,
    current: null

  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          isFetching: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isFetching: false,
          user: {...state.user, 
            id: action.payload}
        };
      case LOGIN_ERROR:
        return {
          ...state,
          isFetching: false,
          error: action.payload
          //TODO: error: action.payload
        };
  
      case SIGNUP_START:
        return {
          ...state,
          isFetching: true
        };
  
      case SIGNUP_SUCCESS:
        return {
          ...state,
          user: {
            id: action.payload.id,
            username: action.payload.username,
            name: action.payload.name,
            city: action.payload.city,
            email: action.payload.email
          },
          isFetching: false
       
        };
      //all of this above can change depending on how api/backend is structure just a base idea
  
      case SIGNUP_ERROR:
        return {
          ...state,
         isFetching: false,
          error: action.payload
        };
  
        case FETCH_RESTAURANT_START:
          return {
            ...state,
            isFetching: true
          }
          
          case FETCH_RESTAURANT_SUCCESS:
            return {
              ...state,
              restaurants: action.payload,
              isFetching: false
            }
            
            case FETCH_RESTAURANT_ERROR:
              return {
                ...state,
                isFetching: false,
                error: action.payload
              }
              
                    case SET_CURRENT:
                      return {
                        ...state,
                        current: action.payload
                  
                      }
                
                      case CLEAR_CURRENT:
                        return {
                          ...state,
                          current: null
                        }

              case ADD_RESTAURANT_START:
                return {
                  ...state,
                  isFetching: true
                }
              case ADD_RESTAURANT_SUCCESS:
                return {
                  ...state,
                  isFetching: false,
                  restaurants: [...state.restaurants, action.payload]
                }
                case ADD_RESTAURANT_ERROR:
                return {
                  ...state, 
                  isFetching: false,
                  error: action.payload
                }
                case UPDATE_RESTAURANT_START:
                  return {
                    ...state,
                    isFetching: true,
                  }
                case UPDATE_RESTAURANT_SUCCESS:
                  return {
                    ...state,
                    isFetching: false,
                    restaurants:[...state.restaurants.filter(rest => rest.id !== action.payload.id), action.payload]
                     
                  }
                  case UPDATE_RESTAURANT_ERROR:
                    return {
                      ...state,
                      isFetching: false,
                      error: action.payload
                    }

                  case DELETE_RESTAURANT_START:
                  return {
                    ...state,
                    isFetching: true,
                  }
                case DELETE_RESTAURANT_SUCCESS:
                  return {
                    ...state,
                    isFetching: false,
                    restaurants:state.restaurants.filter(rest => rest.id !== action.payload)
                  }
                  case DELETE_RESTAURANT_ERROR:
                    return {
                      ...state,
                      isFetching: false,
                      error: action.payload
                    }
      default:
        return state;
    }
  };