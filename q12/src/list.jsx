function List() {
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Watermelon",
    "Pineapple",
    "Strawberry",
    "Papaya",
    "Guava",
    "Pomegranate",
    "Kiwi",
    "Peach",
    "Pear",
    "Cherry"
  ];

  const listitems = fruits.map((fruit) => (
    <li key={fruit}>{fruit}</li>
  ));

  return <ol>{listitems}</ol>;
}

export default List;