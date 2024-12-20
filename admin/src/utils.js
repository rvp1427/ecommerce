export async function fetchData(url, method, dataObj) {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataObj),
  });
  const data = await res.json();
  return data;
}
