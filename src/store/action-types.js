export const ACTION = {
    USER: {
        LOGIN: 'LOGIN',
        LOGOUT: 'LOGOUT',
        makeDispatch: (action) => 'user/' + action
    },
    PRODUCTS: {
        SET: 'SET_PRODUCTS',
        TOGGLE: 'TOGGLE_PRODUCT',
        SELECT_OPERATION: 'SELECT_OPERATION_PRODUCT',
        makeDispatch: (action) => 'products/' + action
    },
    QUESTIONS: {
        SET: 'SET_QUESTIONS',
        SELECT: 'SELECT_QUESTIONS',
        makeDispatch: (action) => 'questions/' + action
    },
    SETTINGS:{
        SET: 'SET_SETTINGS',
        makeDispatch: (action) => 'settings/' + action
    },
    APP:{
        SET_HTTP: 'SET_HTTP_APP',
        SET_HTTP_IGNORE: 'SET_HTTP_IGNORE_APP',
        makeDispatch: (action) => 'app/' + action
    }
}

