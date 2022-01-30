import "./Download.css";

function Download() {
  return (
    <section className="download">
      <div className="download-img">
        <img src="../images/download.jpg" alt="" />
        <div className="download-info">
          <img src="../images/download-2.png" alt="" />
          <div>
            <h4>Stranger Things</h4>
            <p>Downloading...</p>
          </div>
        </div>
        
      </div>
      <article className="download-text">
        <div className="download-head">
          <h2>Download your shows to watch offline.</h2>
        </div>
        <div className="download-sub">
          <h3>
          Save your favourites easily and always have something to watch.
          </h3>
        </div>
      </article>
    </section>
  );
}

export default Download;
