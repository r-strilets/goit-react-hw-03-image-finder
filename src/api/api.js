export function fetchData(name, page) {
  return fetch(
    `https://pixabay.com/api/?key=29896851-043ea774f51ffcbeeabff044d&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
