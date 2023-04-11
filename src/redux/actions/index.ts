import { Game } from "../../models/games";
import { ActionType } from "../action-types";

interface LoadedGames {
  type: ActionType.SET_GAMES,
  payload: Game[]
};

interface LoadGamesFailed {
  type: ActionType.SET_GAMES_LOADING_FAILED
};

interface GamesLoadingFlag {
  type: ActionType.SET_GAMES_LOADING_FLAG
  payload: boolean;
};

interface ResetGames {
  type: ActionType.RESET_GAMES
};

export type GamesDispatchType =
  | LoadedGames
  | LoadGamesFailed
  | GamesLoadingFlag
  | ResetGames
