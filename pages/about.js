import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function about() {
  return (
    <div className="container">
      <style jsx>
        {`
          ul {
            list-style-type: none;
            margin-right: 2rem;
          }

          a {
            float: right;
            color: blue;
            text-align: center;
            padding: 10px;
            text-decoration: none;
            font-size: 20px;
            line-height: 35px;
            border-radius: 4px;
            display: block;
            font-family: "Roboto", sans-;
          }

          header {
            overflow: hidden;
            background-color: lightblue;
            position: fixed;
            top: 0;
            width: 100%;
            float: right;
            padding: 5px;
          }
        `}
      </style>
      <style jsx global>
        {`
      
            body {
    background: lightblue};
  }

  .projects {
    text-align: center;
    padding: 5%;
   }

     .flex-container {
          text-align: center;
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 100vh;
          font-size: 20px;
  }

      .flex-item-left {
       background-color: lightblue;
       flex: 50%;
       width: 300px;
       padding: 20px;
       border: 2px solid black;
       border-radius: 10px;
       margin: 20px;   
  }

      .flex-item-right {
        background-color: lightblue;
        flex: 50%;
        width: 300px;  
        padding: 20px; 
        border: 2px solid black;
        border-radius: 10px;   
        margin: 20px;      
  }
  `}
      </style>

      <header>
        <nav>
          <ul>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            <Link href="/about">
              <a>About Me</a>
            </Link>
            <Link href="/">
              <a>Home</a>
            </Link>
          </ul>
        </nav>
      </header>
      <div className="projects">
        <Image
          src="/static/projects.svg"
          alt="projects"
          width={500}
          height={500}
          className="bugs"
        />
      </div>

      <div className="flex-container">
        <div className="flex-item-left">
          <h1>Looking for a developer ?</h1>

          <p>
            Welcome to my Porfolio website. my name is OLALEKAN OGUNDELE I am a
            Small Business Owner,Photograher and aspiring Full Stack Web
            Developer. You can see some of the things i have worked on on my and
            also on my Github page
          </p>
        </div>
        <div class="flex-item-right">
          <h3>Skills and Tools</h3>
          <Image
            src="/static/css.svg"
            alt="contact"
            width={100}
            height={100}
            classname="css"
          />
          <Image
            src="/static/html.svg"
            alt="contact"
            width={100}
            height={100}
          />
          <Image
            src="/static/javascript.svg"
            alt="contact"
            width={100}
            height={100}
          />{" "}
          <br></br>
          <Image
            src="/static/nodejs.svg"
            alt="contact"
            width={100}
            height={100}
          />
          <Image
            src="/static/bootstrap.svg"
            alt="bootstrap"
            width={100}
            height={100}
          />
          <Image src="/static/react.svg" 
          alt="react" 
          width={100} 
          height={100}
           />
        </div>
      </div>
    </div>
  );
}
