import { person, compare } from '../src/js/app';

test('Проверка сортировки', () => {
  const received = compare(person);
  const expected = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  expect(received).toEqual(expected);
});
