import "./Faq.css";
import Questions from "./Questions";

function Faq() {
  return (
    <section className="faq">
      <div className="faq-head">
        <h1>Frequently Asked Question </h1>
      </div>

      <div>
        <Questions />
      </div>
      <div className="faq-start">
        <div className="faq-sub2">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="faq-sign">
          <input type="text" placeholder="Email address" />
          <button>
            Get Started <i class="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Faq;
