import { useQuery } from 'react-query';

export function useRestaurants() {
  const key = "restaurants";
  return useQuery(key, async () => {
    const res = await fetch(`/api/${key}`);
    const json = await res.json();
    return json.restaurants;
  });
}

export function useAggregate() {
  const key = "aggregates";
  return useQuery(key, async () => {
    const res = await fetch(`/api/${key}`);
    const json = await res.json();
    return json.aggregates[0];
  });
}