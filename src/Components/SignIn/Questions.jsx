import "./Questions.css";
import { useState } from "react";

function Questions() {
  const [ShowAns1, setShowAns1] = useState(false);
  const [ShowAns2, setShowAns2] = useState(false);
  const [ShowAns3, setShowAns3] = useState(false);
  const [ShowAns4, setShowAns4] = useState(false);
  const [ShowAns5, setShowAns5] = useState(false);
  const [ShowAns6, setShowAns6] = useState(false);

  return (
    <section className="questions">
      <div className="question-div">
        <div className="question-head" onClick={()=>{
            setShowAns1(!ShowAns1)
            setShowAns2(false)
            setShowAns3(false)
            setShowAns4(false)
            setShowAns5(false)
            setShowAns6(false)
        }}>
          <p>What is Netflix? </p>
          <i class={!ShowAns1 ? "ri-add-line" : "ri-close-fill"}></i>
        </div>
        <div className="answer" style={{display: ShowAns1 ? "block" : "none"}}>
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices.
          </p>
          <p>
            You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always something
            new to discover, and new TV shows and movies are added every week!
          </p>
        </div>
      </div>

      <div className="question-div">
        <div className="question-head" onClick={()=>{
            setShowAns2(!ShowAns2)
            setShowAns1(false)
            setShowAns3(false)
            setShowAns4(false)
            setShowAns5(false)
            setShowAns6(false)
        }}>
          <p>How much does Netflix cost?</p>
          <i class={!ShowAns2 ? "ri-add-line" : "ri-close-fill"}></i>
        </div>
        <div className="answer" style={{display: ShowAns2 ? "block" : "none"}}>
          <p>
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
          </p>
        </div>
      </div>

      <div className="question-div">
        <div className="question-head" onClick={()=>{
            setShowAns3(!ShowAns3)
            setShowAns1(false)
            setShowAns2(false)
            setShowAns4(false)
            setShowAns5(false)
            setShowAns6(false)
        }}>
          <p>Where can I watch?</p>
          <i class={!ShowAns3 ? "ri-add-line" : "ri-close-fill"}></i>
        </div>
        <div className="answer" style={{display: ShowAns3 ? "block" : "none"}}>
          <p>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
          </p>
          <p>
          You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </p>
        </div>
      </div>
      <div className="question-div">
        <div className="question-head" onClick={()=>{
            setShowAns4(!ShowAns4)
            setShowAns1(false)
            setShowAns2(false)
            setShowAns3(false)
            setShowAns5(false)
            setShowAns6(false)
        }}>
          <p>How do I cancel?</p>
          <i class={!ShowAns4 ? "ri-add-line" : "ri-close-fill"}></i>
        </div>
        <div className="answer" style={{display: ShowAns4 ? "block" : "none"}}>
          <p>
          Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
          </p>
        </div>
      </div>
      <div className="question-div">
        <div className="question-head" onClick={()=>{
            setShowAns5(!ShowAns5)
            setShowAns1(false)
            setShowAns2(false)
            setShowAns3(false)
            setShowAns4(false)
            setShowAns6(false)
        }}>
          <p>What can I watch on Netflix?</p>
          <i class={!ShowAns5 ? "ri-add-line" : "ri-close-fill"}></i>
        </div>
        <div className="answer" style={{display: ShowAns5 ? "block" : "none"}}>
          <p>
          Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
          </p>
        </div>
      </div>
      <div className="question-div">
        <div className="question-head" onClick={()=>{
            setShowAns6(!ShowAns6)
            setShowAns1(false)
            setShowAns2(false)
            setShowAns3(false)
            setShowAns4(false)
            setShowAns5(false)
        }}>
          <p>Is Netflix good for kids?</p>
          <i class={!ShowAns6 ? "ri-add-line" : "ri-close-fill"}></i>
        </div>
        <div className="answer" style={{display: ShowAns6 ? "block" : "none"}}>
          <p>
          The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
          </p>
          <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Questions;
