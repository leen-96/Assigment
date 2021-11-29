import { combineReducers } from "redux";
import { countryReducer,COUNTRY_KEY } from '../slices/countryRedux/reducer';
 
const rootReducer = combineReducers({
  countryReducer 
 
});

export default rootReducer;
