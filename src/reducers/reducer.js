
const initialState = {
    apiData: null,
    msApiData: null,
  };
  
  const apiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_API_DATA':
        return {
          ...state,
          apiData: action.payload,
        };
      case 'SET_MS_API_DATA':
        return {
          ...state,
          msApiData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default apiReducer;
  