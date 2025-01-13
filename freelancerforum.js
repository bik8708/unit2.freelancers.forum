const addtlFreelancerNames = [
  "Steve",
  "Max",
  "Bingsoo",
  "Jasmine",
  "Terry",
  "Jane",
  "Maxina",
  "Buddy",
];
const addtlFreelancerOccupations = [
  "Accountant",
  "Musician",
  "Salesperson",
  "Chemist",
  "Lawyer",
  "Physical Therapist",
];
const addtlStartingPrices = [50, 60, 65, 70, 75, 80, 85, 90, 100, 110, 120];

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

const maxFreelancers = 15;

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

  return Math.round(totalStartingPrice / freelancers.length);
}

function addFreelancers() {
  const addtlFreelancerName =
    addtlFreelancerNames[
      Math.floor(Math.random() * addtlFreelancerNames.length)
    ];
  const addtlFreelancerOccupation =
    addtlFreelancerOccupations[
      Math.floor(Math.random() * addtlFreelancerOccupations.length)
    ];
  const addtlStartingPrice =
    addtlStartingPrices[Math.floor(Math.random() * addtlStartingPrices.length)];
  freelancers.push({
    name: addtlFreelancerName,
    occupation: addtlFreelancerOccupation,
    startingPrice: addtlStartingPrice,
  });
}
let insertCarol = true;
const addFreelancersInterval = setInterval(() => {
  if (insertCarol === true) {
    freelancers.push({
      name: "Carol",
      occupation: "Programmer",
      startingPrice: 70,
    });
    insertCarol = false;
    render();
  } else {
    if (freelancers.length >= maxFreelancers) {
      clearInterval(addFreelancersInterval);
    }
    addFreelancers();
    render();
    console.log(freelancers);
  }
}, 2000);

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
