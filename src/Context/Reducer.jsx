const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
                userInfo: action.payload.userInfo,
            };
        case "LANG":
            return {
                ...state,
                language: action.payload.language,
            };
        default:
            return state;
    } 
};

export default Reducer;