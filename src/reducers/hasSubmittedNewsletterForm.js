export default (state = false, action) => {
    if (action.type === "HAS_SUBSCRIBED_NEWSLETTER") {
        return action.payload;
    }
    return state;
};
