//problem 2:
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const nodes = list.map((listItem) => {
  let li = document.createElement("li");
  li.textContent = listItem;
  return li;
});
ordered.append(...nodes);

const nodes1 = list.map((listItem) => {
  let li = document.createElement("li");
  li.textContent = listItem;
  return li;
});

unordered.append(...nodes1);

// problem1
const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];

let headers = ["studentName", "Age", "Phone", "Address"];
let insertHeader = headers.map((header) => {
  let th = document.createElement("th");
  th.textContent = header;
  return th;
});
const headRow = document.createElement("tr");
headRow.append(...insertHeader);
myTable.append(headRow);
tableInfo.forEach((table) => {
  const tableRow = document.createElement("tr");
  const ageCol = document.createElement("td");
  ageCol.textContent = table.Age;
  const nameCol = document.createElement("td");
  nameCol.textContent = table.studentName;
  const phoneCol = document.createElement("td");
  phoneCol.textContent = table.Phone;
  const addressCol = document.createElement("td");
  addressCol.textContent = table.Address;
  tableRow.append(nameCol, ageCol, phoneCol, addressCol);
  myTable.append(tableRow);
});

// problem 3

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

dropDownList.forEach((dropDownItem) => {
  const option = document.createElement("option");
  option.value = dropDownItem.value;
  option.textContent = dropDownItem.content;
  cities.append(option);
});
