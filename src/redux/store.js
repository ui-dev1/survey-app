import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from "redux-logger";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
    const isDev = process.env.NODE_ENV !== 'production';
    if (isDev) {
        middleware.push(
            createLogger({
                collapsed: true,
            })
        )
    }
    return composeWithDevTools(applyMiddleware(...middleware));
};

const configureStore = () => {
    let store = null;
    store = createStore(reducer, bindMiddleware([sagaMiddleware]));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
