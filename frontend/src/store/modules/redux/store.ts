import {combineReducers,} from 'redux'
import rootReducer from '../../rootReducer';
import productSaga from './productSaga'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store  = combineReducers({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(productSaga);

export default store;