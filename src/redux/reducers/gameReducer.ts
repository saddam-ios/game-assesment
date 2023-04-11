import { GameInitialState } from "../../models/games";
import { ActionType } from "../action-types";
import { GamesDispatchType } from '../actions/index'

const initialState: GameInitialState = {
    games: [],
    isLoading: false
}

const gameReducer = (state: GameInitialState = initialState, action: GamesDispatchType) => {
    switch (action.type) {
        case ActionType.SET_GAMES:
            return { ...state, isLoading: false, games: action.payload }
        case ActionType.SET_GAMES_LOADING_FAILED:
            return { ...state, isLoading: false }
        case ActionType.SET_GAMES_LOADING_FLAG:
            return { ...state, isLoading: action.payload }
        case ActionType.RESET_GAMES:
            return initialState;
        default: return initialState
    }
}

export default gameReducer;