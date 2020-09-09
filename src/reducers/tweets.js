const initialState = {
    recent : [],
    trends : [],
    selectedTrends : [],
    filteredTweets : []
};
export default function(state = initialState, action) {
	switch (action.type) {
        case "SET_RECENT_TWEETS":
            return {
                ...state,
                recent: action.payload
            };
        case "SET_RECENT_TRENDS":
            return {
                ...state,
                trends: action.payload
            };
        case "SET_SELECTED_TRENDS":
            return {
                ...state,
                selectedTrends: [...state.selectedTrends, action.payload]
            };
        case "SET_FILTERED_TWEETS":
            return {
                ...state,
                filteredTweets: action.payload
            };
        case "ADD_FILTERED_TWEETS":
            return {
                ...state,
                filteredTweets: [...state.filteredTweets, ...action.payload]
            };
		default:
			return state;
	}
}
