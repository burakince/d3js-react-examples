export const selectDate = (date) => {
	console.log("You clicked on date: ", date);
	return {
		type: "DATE_SELECTED",
		payload: date
	}
};