import axios from 'axios';
import { ActionTypes } from '../action-types';
import { useDispatch } from 'react-redux';
import { Action } from '../actions';
import { Dispatch } from 'react';


export const searchRepos = (term: string) =>  {

  return async (dispatch: Dispatch<Action>) => {

  dispatch({
    type: ActionTypes.SEARCH_REPO,
  })
  
    try {
      const { data } : any = await axios.get(`https://jsonplaceholder.typicode.com/posts/${term}`)

      dispatch({
        type: ActionTypes.SEARCH_REPO_SUCCESS,
        payload: data
      })
        
    } catch (error: any) {
        dispatch({
            type: ActionTypes.SEARCH_REPO_ERR,
            payload: error.message
        })
    }
  }
  };

  