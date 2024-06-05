import React, { useState } from "react";
import styled from "styled-components";
export default function Login({ onSubmission }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name, "Email:", email);
    onSubmission(true);
  };

  return (
    <LogoDiv>
      <LogoName>Welcome To the Puzzle Solver</LogoName>
      <StyledFormik>
        <StyledForm>
          <StyledField
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleInputChange}
          />
          <StyledField
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleInputChange}
          />
          <StyledButton type="submit" onClick={handleSubmit}>
            Submit to start the Puzzle
          </StyledButton>
        </StyledForm>
      </StyledFormik>
    </LogoDiv>
  );
}
const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 30vh;
`;
const LogoName = styled.div`
  font-family: Puzzle_Solver;
  color: #111;
  font-size: 2rem;
  white-space: nowrap;
  overflow-x: hidden;
  /* box-shadow:0 10px 10px rgba(0,0,0,0.1); */
  /* filter: drop-shadow(0 0 0.75rem #FF0000); */
  filter: blur(0.3px);
`;
const StyledFormik = styled.div``;
const StyledForm = styled.form`
  width: 80vh;
  height: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  gap: 2rem;
  background-color: transparent;
`;

const StyledField = styled.input`
  width: 100%;
  height: 4rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  background-color: #ff9eaa;
  color: #111;
  transition: 0.4s scale ease-out;
  &:focus {
    outline: none;
    scale: 1.1;
    box-shadow: 0 0 5px #111;
  }
  &::placeholder {
    color: white;
  }
`;

const StyledButton = styled.button`
  background-color: #111;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.4s scale ease-in;

  &:hover {
    scale: 1.2;
    background-color: #373a40;
  }
`;
