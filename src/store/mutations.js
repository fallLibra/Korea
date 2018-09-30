export default {
	tabCountry (state, country) {
		state.country = country;
		
		try {
			localStorage.country = country;

			// console.log('localStorage.country',localStorage.country);

		} catch (e) {}

		var array = state.countryData;
		var defaultCountry = localStorage.country?localStorage.country:state.country
		for (var i = 0; i < array.length; i++) {
			if (array[i].name == defaultCountry) {
				state.selectedcountryData = array[i];
				// console.log('tabCountry',JSON.stringify(state.selectedcountryData));
			}
		}
	},
	initGlobalData(state, country) {
		var array = state.countryData;
		var defaultCountry = localStorage.country?localStorage.country:state.country

		for (var i = 0; i < array.length; i++) {
			if (array[i].name == defaultCountry) {
				state.selectedcountryData = array[i];
				// console.log('initGlobalData',JSON.stringify(state.selectedcountryData));
			}
		}
	}
}