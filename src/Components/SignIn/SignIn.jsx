import "./SignIn.css";
import Header from "../Header";
import Enjoy from "./Enjoy";
import Download from "./Download";
import Everywhere from "./Everywhere";
import Children from "./Children";
import Faq from "./Faq";
import Summary from "./Summary";

function SignIn() {
  return (
    <main className="sign-in">
      <Header />
      <section className="hero">
        <div className="hero-head">
          <h1>Unlimited movies, TV shows and more.</h1>
        </div>
        <div className="hero-sub">
          <p>Watch anywhere. Cancel anytime.</p>
        </div>
        <div className="hero-sub2">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="hero-sign">
          <input type="text" placeholder="Email address" />
          <button>
            Get Started <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </section>

      <div className="divider"></div>
      <Enjoy />
      <div className="divider"></div>
      <Download />
      <div className="divider"></div>
      <Everywhere />
      <div className="divider"></div>
      <Children />
      <div className="divider"></div>
      <Faq />
      <div className="divider"></div>
      <Summary />
    </main>
  );
}

export default SignIn;
