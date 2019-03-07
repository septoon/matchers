export const compare = () => {
  const person = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  person.sort(function (a, b) {
    return a.health - b.health;
  });
  return person;
};
