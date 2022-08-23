import { spinnerActions } from "../action";

const initialState = {
    show: false,
    openPromises: 0,
};

const spinnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case spinnerActions.SHOW_SPINNER: {
            const { openPromises } = state;
            return {
                ...state,
                show: true,
                openPromises: openPromises + 1,
            };
        }
        case spinnerActions.HIDE_SPINNER: {
            const { openPromises } = state;
            const showSpinner = openPromises === 1 || openPromises === 0;
            return {
                ...state,
                show: !showSpinner,
                openPromises: showSpinner ? 0 : openPromises - 1,
            };
        }
        default:
            return state;
    }
};

export default spinnerReducer;
