import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function projects() {
  return (
    <div className="container">
      <header>
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

            h4 {
              font-color: yellow;
            }
          `}
        </style>
        <style jsx global>
          {`
      
  body {
    background: lightblue};
  }

  .bugs {
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
    border-radius: 10px;   
    margin: 10px;   
  }

  .flex-item-left {
    background-color: lightblue;
    flex: 50%;
    width: 300px;
    padding: 25px;
    border: 2px solid black;
    border-radius: 10px;
    margin: 10px;   
  }

  .flex-item-right {
    background-color: lightblue;
    flex: 50%;
    width: 300px;  
    padding: 25px; 
    border: 2px solid black;
    border-radius: 10px;   
    margin: 10px;      
  }
  .button {
    margin: 15px;   
    border: 2px solid black;   
    padding: 10px;
    color: #279AF1;
    border-radius: 10px;  
    font-size: 20px;
    font-family: monospace;
  }

  .headerp {
    font-family: monospace;
  }

  .projectp {
    font-family: monospace;
  }
`}
        </style>
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
      <div className="bugs">
        <Image
          src="/static/aboutme.svg"
          alt=""
          width={500}
          height={500}
          className="bugs"
        />
      </div>
      <div className="flex-container">
        <div className="flex-item-left">
          <h4 className="headerp">Javascript Calculator</h4>
          <p className="projectp">
            I created this calculator with vanilla JavaScript, HTML and CSS for
            my task during my bootstrap with hyperionDev
          </p>
          <Link href="https://testcalculator.netlify.app/">
            <a className="button"  target="_blank" > Live Demo</a>
          </Link>
          <Link href="/">
            <a className="button" >Code</a>
          </Link>
        </div>
        <div className="flex-item-right">
          <h4 className="headerp" > Online Store</h4>
          <p className="projectp">
            This is a online store with add to cart functionality, you can add
            items to cart and remove it at will.
          </p>
          <Link href="https://testcalculator.netlify.app/">
          <a className="button"   href="https://testonlinestore.netlify.app/" target="blank">Live Demo</a>
          </Link>
          <Link href="/">
            <a className="button" >Code</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
