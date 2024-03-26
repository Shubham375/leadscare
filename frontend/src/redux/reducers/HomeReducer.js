const HomeReducer = (state,action) => {

    switch (action.type) {
        case "SET_PACK_DATA":
            return {
                ...state,
                packageCards:action.payload
            }
    
        default:
            break;
    }
};

export default HomeReducer;