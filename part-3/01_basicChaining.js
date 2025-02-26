const newsURL = 'http://localhost:4999/data/latestNews';
const weatherURL = 'http://localhost:4999/data/weather';

function getNewsAndWeather() {
  // TODO: fetch을 이용해 작성합니다
  // TODO: 여러개의 Promise를 then으로 연결하여 작성합니다

  const result = fetch(newsURL).then((res) => console.log(res.json()));
  console.log(result);
  return result;

}

getNewsAndWeather();

if (typeof window === 'undefined') {
  module.exports = {
    getNewsAndWeather,
  };
}