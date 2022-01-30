import "./SignIn.css";
import Enjoy from "./Enjoy";
import Download from "./Download";
import Everywhere from "./Everywhere";
import Children from "./Children";

function SignIn() {
  return (
    <main className="sign-in">
      <section className="sign-in-nav">
        <div className="logo-div">
          <picture className="logo">
            <img src="../images/logo.png" alt="" />
          </picture>
        </div>

        <div className="right-nav">
          <div className="lang">
            <select name="" id="">
              <option value="">English</option>
            </select>
          </div>

          <div className="signin-btn">
            <button>Sign In</button>
          </div>
        </div>
      </section>

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
            Get Started <i class="ri-arrow-right-s-line"></i>
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
      <Children/>
    </main>
  );
}

export default SignIn;
