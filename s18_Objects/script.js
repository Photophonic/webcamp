const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

let fullAddress = `${restaurant.name} is at ${restaurant.address} ${restaurant.city}, ${restaurant.state}, ${restaurant.zipcode}`;

console.log(fullAddress);

const midterms = {
  Dan: 96,
  Tom: 78,
};

midterms.Tom = "C+";
midterms.Bill = "A";
midterms.Jan = "B-";

console.log(midterms);
