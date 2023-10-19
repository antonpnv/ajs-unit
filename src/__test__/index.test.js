import { getHealthStatus } from '../index.js'

test('getHealthStatus returns "healthy" and "green" for health > 50', () => {
  const hero = { name: 'Маг', health: 90 };
  const { status, color } = getHealthStatus(hero);
  expect(status).toBe('healthy');
  expect(color).toBe('green');
});

test('getHealthStatus returns "wounded" and "yellow" for health between 50 and 15', () => {
  const hero = { name: 'Маг', health: 30 };
  const { status, color } = getHealthStatus(hero);
  expect(status).toBe('wounded');
  expect(color).toBe('yellow');
});

test('getHealthStatus returns "critical" and "red" for health < 15', () => {
  const hero = { name: 'Маг', health: 10 };
  const { status, color } = getHealthStatus(hero);
  expect(status).toBe('critical');
  expect(color).toBe('red');
});
