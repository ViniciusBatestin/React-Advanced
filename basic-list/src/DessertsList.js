function DessertsList(props) {
  // Implement the component here.
  var lowCalories = props.data.filter(dessert => {
    return dessert.calories < 500
  })
  .sort((a, b) => {
    return a.calories - b.calories;
  })
  .map((dessert) => {
    return <li>{dessert.name} - {dessert.calories}</li>;
  })

  return<ul>{lowCalories}</ul>
}
export default DessertsList;
