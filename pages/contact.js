import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function contact() {
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
              padding: 5px 5px;
            }
          `}
        </style>
        <style jsx global>{`
      
           body {
    background: lightblue};
  }
  .contact {
   text-align: center;
   padding: 5%;
  }
  
`}</style>
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
      <div className="contact">
        <Image
          src="/static/contact.svg"
          alt="contact"
          width={500}
          height={500}
        />
      </div>

      <h2>Need a web developer ?</h2>
      <p>Let`s work together </p>

      <div class="contact-links">
        <a
          id="profile-link"
          href="https://www.github.com/whoiskekeanyway"
          target="_blank"
          class="btn contact-details"
        >
          <i class="fab fa-github"></i> GitHub
        </a>

        <a
          href="https://twitter.com/whoiskekeanyway"
          target="_blank"
          class="btn contact-details"
        >
          <i class="fab fa-twitter"></i> Twitter
        </a>

        <a
          href="mailto:whoiskekeanyway@outlook.com"
          class="btn contact-details"
        >
          <i class="fas fa-at"></i> Send a mail
        </a>
      </div>
    </div>
  );
}
