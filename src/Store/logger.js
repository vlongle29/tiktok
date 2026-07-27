function logger(reducer) {
    return (preState, action) => {
        const nextState = reducer(preState, action);
        return nextState;
    };
}

export default logger;
