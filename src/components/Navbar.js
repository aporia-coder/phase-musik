import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setOpen, open }) => {
  return (
    <Nav>
      <TitleContainer>
        <Title main>phase</Title>
        <Title>musik</Title>
      </TitleContainer>
      <LibraryButton onClick={() => setOpen(!open)}>
        {"Library "}
        <FontAwesomeIcon icon={faHeadphones} />
      </LibraryButton>
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 10vh;
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TitleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h5`
  font-family: ${(props) => props.main && `"Mr Dafoe", cursive`};
  font-size: ${(props) => (props.main ? "3rem" : "1rem")};
  color: ${(props) => (props.main ? "f2f2f2" : "#a8a8a8")};
  text-transform: ${(props) => (props.main ? "capitalize" : "uppercase")};
`;

const LibraryButton = styled.button`
  background-color: transparent;
  z-index: 10;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid #f2f2f2;
  height: 3rem;
  width: 7rem;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
    color: #141414;
  }
  &:focus {
    outline: none;
  }
`;

export default Navbar;
