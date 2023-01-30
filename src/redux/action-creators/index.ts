import axios from 'axios';
import { ActionTypes } from '../action-types';
import { useDispatch } from 'react-redux';
import { Action } from '../actions';
import { Dispatch } from 'react';
import { AppDispatch } from '../store';


export const searchRepos = (term: string) =>  {

  return async (dispatch: Dispatch<Action>) => {

  dispatch({
    type: ActionTypes.SEARCH_REPO,
  })
  
    try {
      const { data } : any =   axios.get('https://registry.npm.org/-/v1/search',{
        params: {
            text: term
        }
    });

    const names = data.objects.map( (result : any) => {
        return result.package.name
    })

      dispatch({
        type: ActionTypes.SEARCH_REPO_SUCCESS,
        payload: names
      })
        
    } catch (error: any) {
        dispatch({
            type: ActionTypes.SEARCH_REPO_ERR,
            payload: error.message
        })
    }

  }
  };

  