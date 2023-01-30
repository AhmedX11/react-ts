
import { ActionTypes } from "../action-types";

interface SearchRepositoriesAction {
    type: ActionTypes.SEARCH_REPO,
}

interface SearchRepositoriesSuccessAction {
    type: ActionTypes.SEARCH_REPO_SUCCESS,
    payload: string[]
}

interface SearchRepositoriesErrAction {
    type: ActionTypes.SEARCH_REPO_ERR,
    payload: string,
}
 

export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrAction;
