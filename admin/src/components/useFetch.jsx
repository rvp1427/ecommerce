function useFetch() {
  async function fetchData(url) {
    const res = await fetch(url);
    const data = res.json();
    return data;
  }

  // useEffect(
  //   function () {
  //     fetchData(url);
  //   },
  //   [url]
  // );

  return { fetchData };
}

export default useFetch;
