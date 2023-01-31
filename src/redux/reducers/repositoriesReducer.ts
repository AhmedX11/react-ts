import { ActionTypes } from "../action-types"
import { Action } from "../actions"

interface repositoriesState {
    loading: boolean,
    error: string | null,
    data: any[],
}

const initialState = {
    loading: false,
    error: null,
    data: [],
}


const repoReducer = (state: repositoriesState = initialState, action: Action): repositoriesState => {
    switch(action.type){

        case ActionTypes.SEARCH_REPO:
            return{ loading: true, error: null, data: [...state.data]}

        case ActionTypes.SEARCH_REPO_SUCCESS:
            return{ loading: false, error: null, data: [...state.data, action.payload]}

        case ActionTypes.SEARCH_REPO_ERR:
            return{ loading: false, error: action.payload, data: [...state.data]}

        default:
            return state;
    }
}

export default repoReducer;