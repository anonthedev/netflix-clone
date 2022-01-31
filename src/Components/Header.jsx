import "./Header.css";
import { useEffect } from "react";
import {
  auth,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
} from "../firebase";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate} from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/userSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home", { replace: true });
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(result.user);
        navigate("/home", { replace: true });
      });
    } else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/", { replace: true });
      });
    }
  };

  function setUser(user) {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  return (
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
          {!username ? (
            <button onClick={handleAuth}>Sign In</button>
          ) : (
            <>
              <img src={userPhoto} alt="" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
