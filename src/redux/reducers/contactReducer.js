// Intialize an empty array.
const initialState = [];
// ContactReducer is a reducer that handles contact events from the server and sends them to the client for processing and processing again.
const contactReducer = (state = initialState, action) => {
    // here we use switch because we don't want to modify the state of the state object when creating a new state object.
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return action.payload;
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'UPDATE_CONTACT':
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case 'DELETE_CONTACT':
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
            return filterContacts;
        default:
            return state;
    }
}
// export default contactReducer function.
export default contactReducer;

