import styled from "styled-components";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import "./FirstRenderPage.css";
function FirstRenderPage() {
  return (
    <section>
      <nav className="navbar_head">
        <div  className="navbar_title">Puzzle Solver</div>
        <ul className="navbar_options">
          <a href="/home" title="Settings"><IoSettingsOutline /></a>
          <a href="/about" title="LeaderBoard"><MdOutlineLeaderboard /></a>
          <a href="/contact" title="Profile "><CgProfile /></a>
        </ul>
      </nav>
    </section>
  );
}

export default FirstRenderPage;
