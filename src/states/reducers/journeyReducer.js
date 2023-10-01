import {
    CREATE_JOURNEY_REQUEST,
    CREATE_JOURNEY_SUCCESS,
    CREATE_JOURNEY_FAIL,
    FETCH_USER_JOURNEY_REQUEST,
    FETCH_USER_JOURNEY_SUCCESS,
    FETCH_USER_JOURNEY_FAIL,
    RESET_DETAILS,
    RESET_NEW,
    CLEAR_ERROR,
    PLACE_USER_JOURNEY_REQUEST,
    PLACE_USER_JOURNEY_SUCCESS,
    PLACE_USER_JOURNEY_FAIL,
    SUBMIT_USER_JOURNEY_REQUEST,
    SUBMIT_USER_JOURNEY_SUCCESS,
    SUBMIT_USER_JOURNEY_FAIL,
    USER_JOURNEY_BY_ID_SUCCESS,
    USER_JOURNEY_BY_ID_FAIL,
    USER_JOURNEY_BY_ID_REQUEST,
    USER_JOURNEY_HISTORY_BY_ID_REQUEST,
    USER_JOURNEY_HISTORY_BY_ID_SUCCESS,
    USER_JOURNEY_HISTORY_BY_ID_FAIL,
    GET_JOURNEY_HISTORY_REQUEST,
    GET_JOURNEY_HISTORY_SUCCESS,
    GET_JOURNEY_HISTORY_FAIL,
    CREATE_CUSTOM_JOURNEY_REQUEST,
    CREATE_CUSTOM_JOURNEY_SUCCESS,
    CREATE_CUSTOM_JOURNEY_FAIL,
    GET_ALL_CUSTOM_JOURNEY_REQUEST,
    GET_ALL_CUSTOM_JOURNEY_SUCCESS,
    GET_ALL_CUSTOM_JOURNEY_FAIL,
    RESET_JOURNEY_REQUEST,
    RESET_JOURNEY_SUCCESS,
    RESET_JOURNEY_FAIL,
} from "../constraints/journeyConstraint";

export const newJourneyReducer = (state = { journey: {} }, action) => {
    switch (action.type) {
        case CREATE_JOURNEY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_JOURNEY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                journey: action.payload.journey
            };
        case CREATE_JOURNEY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case RESET_NEW:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const userJourneyReducer = (state = { userJourney: {} }, action) => {
    switch (action.type) {
        case FETCH_USER_JOURNEY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USER_JOURNEY_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                userJourney: action.payload.journey
            };
        case FETCH_USER_JOURNEY_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const userPlacedJourneyReducer = (state = { userPlacedJourney: {} }, action) => {
    switch (action.type) {
        case PLACE_USER_JOURNEY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PLACE_USER_JOURNEY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                userPlacedJourney: action.payload
            };
        case PLACE_USER_JOURNEY_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const userSubmitJourneyReducer = (state = { userSubmitJourney: {} }, action) => {
    switch (action.type) {
        case SUBMIT_USER_JOURNEY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SUBMIT_USER_JOURNEY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                userSubmitJourney: action.payload
            };
        case SUBMIT_USER_JOURNEY_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const userJourneyByIdReducer = (state = { userJourneyById: [] }, action) => {
    switch (action.type) {
        case USER_JOURNEY_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER_JOURNEY_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                userJourneyById: action.payload.user
            };
        case USER_JOURNEY_BY_ID_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const userAllJourneyReducer = (state = { userAllJourney: [] }, action) => {
    switch (action.type) {
        case GET_JOURNEY_HISTORY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_JOURNEY_HISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                userAllJourney: action.payload.journey
            };
        case GET_JOURNEY_HISTORY_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const userJourneyHistoryByIdReducer = (state = { userJourneyHistoryById: [] }, action) => {
    switch (action.type) {
        case USER_JOURNEY_HISTORY_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case USER_JOURNEY_HISTORY_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                userJourneyHistoryById: action.payload.history
            };
        case USER_JOURNEY_HISTORY_BY_ID_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const newCustomJourneyReducer = (state = { journey: {} }, action) => {
    switch (action.type) {
        case CREATE_CUSTOM_JOURNEY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_CUSTOM_JOURNEY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
                journey: action.payload
            };
        case CREATE_CUSTOM_JOURNEY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case RESET_NEW:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const getCustomJourneyReducer = (state = { allCustomJournies: [] }, action) => {
    switch (action.type) {
        case GET_ALL_CUSTOM_JOURNEY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_CUSTOM_JOURNEY_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                allCustomJournies: action.payload.customJourney
            };
        case GET_ALL_CUSTOM_JOURNEY_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}

export const cancelJourney = (state = { cancelJourney: {} }, action) => {
    switch (action.type) {
        case RESET_JOURNEY_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case RESET_JOURNEY_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
            };
        case RESET_JOURNEY_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case RESET_DETAILS:
            return {
                ...state,
                success: false
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}
