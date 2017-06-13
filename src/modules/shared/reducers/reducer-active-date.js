export default function (state={value: 'today',label: 'Bugun',className: 'State-Today'}, action) {
  //console.log("Action: ", action);
  switch(action.type) {
    case "DATE_SELECTED":
      //console.log("Action payload: ", action.payload);
      return action.payload;
    default:
      return state;
  }
}