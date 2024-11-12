// pages/index.tsx
import React from "react";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to the Resume Builder</h1>
      <p>
        Our resume builder offers a quick, seamless process with an elegant,
        dark-themed, professional design. It’s easy to use, featuring intuitive
        navigation and polished details that make creating a standout resume
        simple and efficient. Customize with ease and let subtle animations and
        a clean layout showcase your achievements with style.
      </p>
      <div className="button-container">
        <Link href="/make-resume" passHref>
          <button className="welcome-button">Make My Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
