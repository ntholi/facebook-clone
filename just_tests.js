const people = [
  { name: "Thabo", yearOfBirth: 1999 },
  { name: "Lebese", yearOfBirth: 2016 },
  { name: "Neo", yearOfBirth: 2022 },
];

const messages = people.map((it) => {
  const age = 2023 - it.yearOfBirth;
  return `${it.name} is ${age} years old`;
});

console.log(messages);
