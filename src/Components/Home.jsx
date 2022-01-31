import "./Home.css";
import requests from "./Requests";
import Row from "./Row";

function Home() {
  return (
    <main>
      <Row title = "Trending" fetchImg={requests.fetchTrending}></Row>
    </main>
  );
}

export default Home;
