const defaultState={
	theme:'#f00'
}
export default (state=defaultState,action)=>{
	if (action.type === 'changeActiveTintColor') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.theme = action.theme;
		return newState;
	}
	return state
}