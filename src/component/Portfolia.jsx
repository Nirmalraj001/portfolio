import React from "react";
import HtmlImg from "../assets/tech/html5.svg";
import CssImg from "../assets/tech/css3.svg";
import GitImg from "../assets/tech/git.svg";
import JsImg from "../assets/tech/javascript.svg";
import MuiImg from "../assets/tech/materialui.svg";
import NpmImg from "../assets/tech/npm.svg";
import ReactImg from "../assets/tech/react.svg";
import ReduxImg from "../assets/tech/redux.png";
import TiImg from "../assets/tech/tailwind.png";
import VscodeImg from "../assets/tech/vscode.svg";


const Portfolia = () => {
  return (
    <div>
      <section class="portfolio section active" id="portfolio">
        <div class="container">
          <div class="row">
            <div class="section-title padd-15">
              <h2>Skill</h2>
            </div>
          </div>
          <div className="portAlign">
            <div class="row">
              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={HtmlImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>HTML</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={CssImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>CSS</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={JsImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>Javascript</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={ReactImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>React JS</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={ReduxImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>Redux</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={MuiImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>Material UI</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={TiImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>Tailwind</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={GitImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>Github</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={VscodeImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>Vs Code</h4>
                  </div>
                </div>
              </div>

              <div class="portfolio-item padd-15" data-category="web-design">
                <div class="portfolio-item-inner shadow-dark">
                  <div class="portfolio-img">
                    <img src={NpmImg} alt="portfolio" class="portImg" />
                  </div>
                  <div class="text-center">
                    <h4>NPM</h4>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolia;
