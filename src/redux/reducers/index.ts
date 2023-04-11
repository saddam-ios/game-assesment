import { combineReducers } from 'redux';

import gameReducer from './gameReducer';

/**
 * Combining the reducers here and exporting it 
 */

const reducers = combineReducers({ games: gameReducer })
export default reducers