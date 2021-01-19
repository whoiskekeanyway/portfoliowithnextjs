import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div className="container">
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
      <h1>Hey I am Olalekan</h1>
      <p> Aspiring Full Stack Developer</p>
      <style jsx>
        {`
          .container {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
          }
          p {
            font-size: 3rem;
            font-weight: 200;
            font-style: italic;
          }
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
            padding: 5px 5px;
          }
        `}
      </style>
      <style jsx global>{`
      
           body {
    background: lightblue};
  }
  
`}</style>
    </div>
  );
}
