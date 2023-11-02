export async function fetchCars() {
  const headers = {
		'X-RapidAPI-Key':'2778a88f8bmsh5a728a168a0daa7p168ee6jsnb4de2dd1d491',
		'X-RapidAPI-Host':'cars-by-api-ninjas.p.rapidapi.com'
	}

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
  headers: headers,
  });

  const result = await response.json();

  return result;
}
