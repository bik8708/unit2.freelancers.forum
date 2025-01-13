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

function avgStartingPrice(freelancers) {
  console.log(freelancers);
  const totalStartingPrice = freelancers.reduce(
    (freelancerPriceTotal, currentFreelancer) =>
      freelancerPriceTotal + currentFreelancer.startingPrice,
    0
  );

  return totalStartingPrice / freelancers.length;
}

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

/*
bikna to do:
  rename "shapes" and "squares" to reflect current assignment
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
