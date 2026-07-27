import { useContext } from "react";
import StoreContext from "./Context2";

export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext);

    return [state, dispatch]
}