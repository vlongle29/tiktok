import StoreContext from "./Context2";
import { useReducer } from "react";
import reducer, { initState } from "./Reducer";
import logger from "./logger";

function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;
