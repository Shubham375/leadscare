const UerReducer = (state,action) => {

    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                user:action.payload
            }
    
        default:
            break;
    }
};

export default UerReducer;