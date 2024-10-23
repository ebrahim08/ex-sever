// * Bring in via cli
// NODE_ENV=development node example.js

// * Bring in via file
// node --env-file=.env example.js

// console.log(process.env);
// console.log(process.env.NODE_ENV);
const url = process.env.API_URL;
const key = process.env.API_KEY;

if (process.env.NODE_ENV === "development") {
  console.log("running in test mone");
}
//// this is run once
(async () => {
  const response = await fetch(`${url}${key}`);
  const result = await response.json();
  console.log(result);
})();
