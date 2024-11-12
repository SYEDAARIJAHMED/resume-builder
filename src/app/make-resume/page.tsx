"use client";

import React, { useState } from 'react';


const MakeResumePage: React.FC = () => {
  // State hooks for user inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [profilePic, setProfilePic] = useState<string | null>(null); // state to hold profile picture
  const [showResume, setShowResume] = useState(false);



  // Function to generate the resume
  const generateResume = () => {
    setShowResume(true);
  };

  // Function to go back to the input page
  const goBackToInputPage = () => {
    setShowResume(false);
    // Optionally clear inputs if desired
    setName('');
    setEmail('');
    setPhone('');
    setSummary('');
    setExperience('');
    setEducation('');
    setSkills('');
    setLinkedin('');
    setGithub('');
    setProfilePic(null); // Reset profile picture
  };

  // Handle profile picture upload
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <h1>Resume Builder</h1>

      {/* Input form for creating the resume */}
      {!showResume ? (
        <form>
          {/* Profile Picture Input */}
          <div id="profile-pic-container">
            <label htmlFor="profile-pic-upload" className="profile-pic-label">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile Picture"
                  id="profile-pic"
                />
              ) : (
                <span>Upload PFP</span>
              )}
            </label>
            <input
              type="file"
              id="profile-pic-upload"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={{ display: 'none' }}
            />
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
          />
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Professional Summary"
          ></textarea>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Experience"
          ></textarea>
          <textarea
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Education"
          ></textarea>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Skills"
          ></textarea>

          {/* Links Section */}
          <div className="links-container">
            <input
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="LinkedIn URL"
            />
            <input
              type="url"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              placeholder="GitHub URL"
            />
          </div>

          {/* Done Button */}
          <button type="button" onClick={generateResume}>
            Done
          </button>
        </form>
      ) : (
        // Display the generated resume
        <div id="resume-section" className="resume-output">
          <div id="profile-pic-display">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile Picture"
                id="profile-pic-display-img"
              />
            ) : (
              <div id="profile-pic-placeholder">No Profile Picture</div>
            )}
          </div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Summary:</strong> {summary}</p>
          <p><strong>Experience:</strong> {experience}</p>
          <p><strong>Education:</strong> {education}</p>
          <p><strong>Skills:</strong> {skills}</p>
          <p><strong>LinkedIn:</strong> {linkedin}</p>
          <p><strong>GitHub:</strong> {github}</p>

          {/* Go back to input page button */}
          <button className="nav-button" onClick={goBackToInputPage}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default MakeResumePage;
