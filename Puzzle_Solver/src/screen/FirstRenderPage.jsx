import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./FirstRenderPage.css";

function FirstRenderPage() {
  return (
    <>
      {/* Navbar Section */}
      <section>
        <nav className="navbar_head shadow-md bg-white w-full">
          <div className="navbar_title text-2xl font-bold p-4">
            Puzzle Solver
          </div>
          <ul className="navbar_options flex justify-end gap-6 p-4">
            <li>
              <Link
                to="/settings"
                title="Settings"
                className="hover:scale-110 transition-transform"
              >
                <IoSettingsOutline size={30} />
              </Link>
            </li>
            <li>
              <Link
                to="/stats"
                title="Stats"
                className="hover:scale-110 transition-transform"
              >
                <MdOutlineLeaderboard size={30} />
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                title="Profile"
                className="hover:scale-110 transition-transform"
              >
                <CgProfile size={30} />
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      {/* Content Section (Optional for home content) */}
      <section className="flex flex-col gap-[70px] mt-10 text-6xl justify-center items-center font-semibold">
        <div className="w-fit h-fit">
          <Link
            to="/newgame"
            className="px-6 py-3 rounded-2xl shadow-lg border border-green-100 font-bold bg-transparent active:shadow-sm active:translate-y-1 transition-all duration-200"
          >
            New Game
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex flex-row justify-center items-center mt-[70px] text-2xl gap-4">
        <FaSquareGithub />
        <FaLinkedin />
      </footer>
    </>
  );
}

export default FirstRenderPage;
