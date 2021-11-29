import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE }  from "./types";
import { apiService } from "../../../Services/axios";

export const loadData = () => async (dispatch) => {
  dispatch({
    type: LOAD_DATA_REQUEST,
  });
  try {
    const response = await apiService({
      method: 'GET',
      
    });
    dispatch({
      type:LOAD_DATA_SUCCESS,
      payload: response.data 
    })
  } catch(error) {
    dispatch({ type: LOAD_DATA_FAILURE , payload: error.response.data })
  }
}

export const showData = (code) => async (dispatch) => {
  dispatch({
    type: LOAD_DATA_REQUEST,
  });
  try {
    const response = await apiService({
      method: 'GET',
      url: code
    });
    dispatch({
      type:LOAD_DATA_SUCCESS,
      payload: response.data 
    })
  } catch(error) {
    dispatch({ type: LOAD_DATA_FAILURE , payload: error.response.data })
  }
}