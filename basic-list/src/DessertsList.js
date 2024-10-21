function DessertsList(props) {
  // Implement the component here.
  var lowCalories = props.data.filter(dessert => {
    return dessert.calories < 500
  })
  .sort((a, b) => {
    return a.calories - b.calories;
  })
  .map((dessert) => {
    // Not the correct way but i just add the key in order to learn the process with keys, the correct would be to have an id per item.
    return <li key={dessert.createdAt}>{dessert.name} - {dessert.calories}</li>;
  })

  return<ul>{lowCalories}</ul>
}
export default DessertsList;
