console.log("-----Question 1-----");

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

console.log("----1.1----");

const newObjects = itemsObject.map((obj) => {
  return { quantity: obj.quantity * 2, price: obj.price * 2 };
});
console.log(newObjects);

console.log("----1.2----");
const newArray = itemsObject.filter((obj) => {
  let ret = [];
  if (obj.quantity > 2 && obj.price > 300) {
    ret.push(obj.quantity, obj.price);
    return true;
  }
});
console.log(newArray);

//concise version
const newArray2 = itemsObject.filter(
  (obj) => obj.quantity > 2 && obj.price > 300
);

console.log(newArray2);

console.log("-----1.3------");

const value = itemsObject.reduce((acc, obj) => {
  acc += obj.quantity * obj.price;
  return acc;
}, 0);
console.log(value);

console.log("-------Question 2-------");
const str =
  "  Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return   The Sum Of  All The Elements In  An Array  ";

/*console.log(
  str
    .replace(/[^A-Z0-9]+/gi, " ")
    .toLowerCase()
    .trim()
);*/
const newStr = str
  .replaceAll("-", " ")
  .split(" ")
  .filter((n) => n)
  .join(" ")
  .toLowerCase()
  .trim();

console.log(newStr);
