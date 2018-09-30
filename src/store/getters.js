export default {
	currentCountry (state, getters) {
		return localStorage.country?localStorage.country:state.country
	}
}