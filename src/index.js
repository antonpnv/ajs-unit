export function getHealthStatus(hero) {
  let status = '';
  let color = '';

  if (hero.health > 50) {
    status = 'healthy';
    color = 'green';
  } else if (hero.health >= 15) {
    status = 'wounded';
    color = 'yellow';
  } else {
    status = 'critical';
    color = 'red';
  }

  return { status, color };
}
