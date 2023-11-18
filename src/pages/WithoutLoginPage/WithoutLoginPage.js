import React, { Fragment } from "react";
import Accordian from "../../components/withoutlogincomponent/Accordian";

const WithoutLoginPage = () => {
  return (
    <Fragment>
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg')] h-screen">
        <div className="px-16">
          <div className="flex justify-between items-center">
            <div>
              <img
                src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
                className="w-36"
                alt="netflix logo"
              />
            </div>
            <div className="flex gap-4">
              <div>
                <select
                  name="languagesection"
                  id="englishhindi"
                  className="rounded-lg"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className="font-bold bg-red-600 text-white px-3 rounded-lg">
                sign in
              </div>
            </div>
          </div>
          <div className="text-center text-white mt-12">
            <h1 className="font-900 text-5xl w-3/4 mx-auto">
              The biggest Indian hits. The best Indian stories. All streaming
              here.
            </h1>
            <h2 className="text-xl mt-5">Watch anywhere. Cancel anytime.</h2>
            <p className="mt-4">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="flex gap-2  justify-center">
            <input
              className="email px-6 py-2 w-1/4"
              type="email"
              name=""
              id=""
              placeholder="Emailaddress"
            />
            <div className="px-6 py-2 bg-red-700 text-white">GET STARTED</div>
          </div>
        </div>
      </div>
      <div className="px-16 bg-black text-white">
        <div className="flex justify-between items-center">
          <div className="col-md-6">
            <h1 className="heading1">Enjoy on your TV.</h1>
            <p className="paragraph2">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              class="image"
            ></img>
          </div>
        </div>
        <hr className="border" />

        <div className="flex justify-between items-center">
          <div className="col-md-6">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              class="image"
            ></img>
          </div>
          <div className="col-md-6">
            <h1 className="heading1">Download your shows to watch offline.</h1>
            <p className="paragraph2">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <hr className="border" />

        <div className="flex justify-between items-center">
          <div className="col-md-6">
            <h1 className="heading1">Watch everywhere.</h1>
            <p className="paragraph2">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              class="image"
            ></img>
          </div>
        </div>
        <hr className="border" />

        <div className="flex justify-between items-center">
          <div className="col-md-6">
            <img
              src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
              class="image"
            ></img>
          </div>
          <div className="col-md-6">
            <h1 className="heading1">Create profiles for children.</h1>
            <p className="paragraph2">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
        <hr className="border" />

        <div className="text-center">
            <h1 className="heading1">Frequently Asked Questions</h1>
            <Accordian heading={"What is Netflix?"} description={"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"}/>
            <Accordian heading={"How much does Netflix cost?"} description={"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."}/>
            <Accordian heading={"Where can I watch?"} description={"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."}/>
            <Accordian heading={"How do I cancel?"} description={"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}/>
            <Accordian heading={"What can I watch on Netflix?"} description={"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}/>
            <Accordian heading={"Is Netflix good for kids"} description={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}/>
        </div>
        <p className="text-center">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="container1 flex justify-center gap-1">
          <input
            className="email px-8 py-3 w-1/4"
            type="email"
            name=""
            id=""
            placeholder="Emailaddress"
          />
          <div className="px-8 py-3 bg-red-700">GET STARTED</div>
        </div>
        <br></br>

        <hr class="border" />

        <footer className="container pb-5 pt-5 ml-10  mr-10" />
        <p className="paragraph4">Questions? Call 000-800-040-1843</p>
        <div className="container ml-5 mr-5">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li className="list">FAQ</li>
                  <li className="list">Investor Relations</li>
                  <li className="list">Privacy</li>
                  <li className="list">Speed Test</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li className="list">Help Centre</li>
                  <li className="list">Jobs</li>
                  <li className="list">Cookie Preferences</li>
                  <li className="list">Watch for Free</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li className="list">Account</li>
                  <li className="list">Ways to Watch</li>
                  <li className="list">Corporate Information</li>
                  <li className="list">Legal Notices</li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li className="list">Media Centre</li>
                  <li className="list">Terms of Use</li>
                  <li className="list">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WithoutLoginPage;
