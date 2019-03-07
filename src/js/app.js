export const person = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export const compare = () => {
  person.sort((a, b) => a.health - b.health);
  return person;
};
