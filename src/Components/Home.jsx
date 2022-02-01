import "./Home.css";
import requests from "./Requests";
import Row from "./Row";
import Header from "./Header";
import Banner from "./Banner";

function Home() {
  return (
    <main className="home">
      <div className="header">
        <Header />
        <Banner />
      </div>
      <Row title="Originals" fetchImg={requests.fetchOriginals} />
      <Row title="Trending" fetchImg={requests.fetchTrending} />
      <Row title="Action" fetchImg={requests.fetchAction} />
      <Row title="Comedy" fetchImg={requests.fetchComedy} />
      <Row title="Horror" fetchImg={requests.fetchHorror} />
      <Row title="Documentries" fetchImg={requests.fetchDocumentaries} />
    </main>
  );
}

export default Home;
