export const ACTION = {
    USER: {
        LOGIN: 'LOGIN',
        LOGOUT: 'LOGOUT',
        makeDispatch: (action) => 'user/' + action
    },
    PRODUCTS: {
        SET: 'SET_PRODUCTS',
        TOGGLE: 'TOGGLE_PRODUCT',
        CLEAR_CHECKED: 'CLEAR_CHECKED_PRODUCT',
        makeDispatch: (action) => 'products/' + action
    },
    QUESTIONS: {
        SET: 'SET_QUESTIONS',
        SELECT: 'SELECT_QUESTIONS',
        makeDispatch: (action) => 'questions/' + action
    }
}

