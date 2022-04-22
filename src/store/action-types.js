export const ACTION = {
    USER: {
        LOGIN: 'LOGIN',
        LOGOUT: 'LOGOUT',
        makeDispatch: (action) => 'user/' + action
    },
    PRODUCTS: {
        SET: 'SET_PRODUCTS',
        SELECT_OPERATION: 'SELECT_OPERATION_PRODUCT',
        FETCH_CHECKALL: 'FEATCH_CHECKALL',
        makeDispatch: (action) => 'products/' + action
    },
    QUESTIONS: {
        SET: 'SET_QUESTIONS',
        SELECT: 'SELECT_QUESTIONS',
        makeDispatch: (action) => 'questions/' + action
    },
    SETTINGS: {
        SET: 'SET_SETTINGS',
        makeDispatch: (action) => 'settings/' + action
    },
    APP: {
        SET_HTTP: 'SET_HTTP_APP',
        SET_HTTP_IGNORE: 'SET_HTTP_IGNORE_APP',
        makeDispatch: (action) => 'app/' + action
    },
    BUFFER: {
        SET_SURVEYEE: 'SET_SURVEY_BUFFER',
        CLEAR_SURVEYEE: 'CLEAR_SURVEY_BUFFER',
        makeDispatch: (action) => 'buffer/' + action
    }
}

