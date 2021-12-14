export const setSubmittedNewsletterForm = (boolean) => {
    return {
        type: "HAS_SUBSCRIBED_NEWSLETTER",
        payload: boolean,
    };
};
