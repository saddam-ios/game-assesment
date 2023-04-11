import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { GamesDispatchType } from '../actions/index'

import gamesData from '../../../data.json'

export const getGames = () => {
    return (dispatch: Dispatch<GamesDispatchType>) => {
        if (gamesData) {
            dispatch({
                type: ActionType.SET_GAMES,
                payload: gamesData
            })
        } else {
            dispatch({
                type: ActionType.SET_GAMES_LOADING_FAILED,
            })
        }
    }

}

export const resetGames = () => {
    return (dispatch: Dispatch<GamesDispatchType>) => {
        dispatch({
            type: ActionType.RESET_GAMES,
        })
    }
}


