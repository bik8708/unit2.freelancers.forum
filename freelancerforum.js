const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    startingPrice: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    startingPrice: 50,
  },
];

function render() {
  const freelancerList = document.querySelector("#tbody"); //select dom element #tbody and assign it to freelancerList

  const tableElements = freelancers.map((freelancer) => {
    //use map to iterate over the freelancers array into a new variable, tableElements
    const tableRow = document.createElement("tr"); //create rows within the table elements

    const tableName = document.createElement("td"); //create td *3 below the tr
    tableName.innerText = freelancer.name;

    const tableOccupation = document.createElement("td");
    tableOccupation.innerText = freelancer.occupation;

    const tableStartingPrice = document.createElement("td");
    tableStartingPrice.innerText = "$" + freelancer.startingPrice;

    tableRow.appendChild(tableName);
    tableRow.appendChild(tableOccupation);
    tableRow.appendChild(tableStartingPrice);

    return tableRow;
  });
  freelancerList.replaceChildren(...tableElements);

  const avgPriceElement = document.querySelector("#avgPrice");
  avgPriceElement.innerText = `$${avgStartingPrice(freelancers)}`;
}

render();

//update text of element to be the avgStarting Price - make sure to include $ dollarsign

function avgStartingPrice(freelancers) {
  console.log(freelancers);
  const totalStartingPrice = freelancers.reduce(
    (freelancerPriceTotal, currentFreelancer) =>
      freelancerPriceTotal + currentFreelancer.startingPrice,
    0
  );

  return totalStartingPrice / freelancers.length;
}

// function calculateTotalPrice(items) {
//   let itemTotal = items.reduce(
//     (itemTotal, currentItem) =>
//       (itemTotal += currentItem.price * currentItem.quantity),
//     0
//   );
//   return itemTotal;
// }

// const avgStartingPrice = freelancers.startingPrice / freelancers.length; loop or reduce

freelancers.push({
  name: "Carol",
  occupation: "Programmer",
  startingPrice: 70,
});

render();

freelancers.push({
  name: "Steve",
  occupation: "Programmer",
  startingPrice: 200,
});

render();

//   function render() {
//   // Render the squares
//   const squareList = document.querySelector("#squares");
//   const squareElements = shapes.map((shape) => {
//     const squareElement = document.createElement("li");
//     squareElement.classList.add(shape.color, shape.size);
//     return squareElement;
//   });

//   const squareElements = shapes.map((shape) => {
//     const squareElement = document.createElement("li");
//     // squareElement.innerText = `${shape.name} ${shape.occupation} ${shape.startingPrice}`
//     return squareElement;
//   });

//   squareList.replaceChildren(...squareElements);

/*
bikna to do:
  rename things - like "shapes" and "squares" should really be "people" or whatnot
  update the HTML to look correct (up until the list of names)
  add the logic:
    render (this adds the first 2 people)
    add carol to the array
    find the new average price
    update the DOM to have the new price
      have a span with an ID around the $30 in the UI
      querySelector that ID and update its innerText to have the new average
    render (this adds the third person)




*/
