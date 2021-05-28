import React from "react";
import About from "./About";
import "./css/style.css";
import "./css/utilities.css";
import python from "./images/logos/python.png";
import node from "./images/logos/node.png";
import ruby from "./images/logos/ruby.png";
import php from "./images/logos/php.png";
import scala from "./images/logos/scala.png";
import csharp from "./images/logos/csharp.png";
import Project from "./Project";

function Home() {
  return (
    <div>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>I'm Ibnat Iqbal</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium nostrum repudiandae voluptatibus tempore odit .
            </p>
            <a href="#" className="btn btn-outline">
              Download Resume
            </a>
          </div>
          <div className="nora__chora showcase-form card">
            <img
              src="https://www.terrainhopperusa.com/wp-content/uploads/2019/01/avatar-woman.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="cli">
        <div className="container grid ">
          <About />
        </div>
      </section>
      <section
        style={{ backgroundColor: "#5cb85c" }}
        className="languages pskill project"
      >
        <div className="container about extra">
          <h2 style={{ color: "white" }}>Skills:</h2>
          <div style={{ paddingTop: "5%" }} className="container flex">
            <div className="card">
              <h4>Node.js</h4>
              <img src={node} alt="" />
            </div>
            <div className="card">
              <h4>Python</h4>
              <img src={python} alt="" />
            </div>
            <div className="card">
              <h4>C#</h4>
              <img src={csharp} alt="" />
            </div>
            <div className="card">
              <h4>Ruby</h4>
              <img src={ruby} alt="" />
            </div>
            <div className="card">
              <h4>PHP</h4>
              <img src={php} alt="" />
            </div>
            <div className="card">
              <h4>Scala</h4>
              <img src={scala} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="language project">
        <div className="container about">
          <h2>Projects:</h2>
          <div className="prjct" style={{ paddingTop: "5%" }}>
            <Project
              project={"JavaScript Project"}
              img="https://wi.wallpapertip.com/wsimgs/83-838169_number.jpg"
              alt="Cool JavaScript Project"
            />
            <Project
              project={"ReactJs Project"}
              img="https://www.my-infotech.online/course_images/reactjs.png"
              alt="Pro React Project"
            />
            <Project
              project={"NodeJS Project"}
              img="https://www.webnexs.com/blog/wp-content/uploads/2020/02/What-are-the-basic-primitives-of-Nodejs-Webnexs-LLC.png"
              alt="Awesome Node Project"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
