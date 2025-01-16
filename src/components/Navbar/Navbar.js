import React from 'react';
import './Navbar.css';
import { IoGameController } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { BiSolidCategory } from 'react-icons/bi';
import { RiCommunityFill } from 'react-icons/ri';
import { FaUsersGear } from 'react-icons/fa6';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <IoGameController className="navicon" />
        <h1>Game Zone</h1>
      </div>
      <div className="right">
        <button>
          <p>
            <FaHome className="homeicon" />
            Home
          </p>
        </button>

        <div id="cat">
          <button id="test">
            <p>
              <BiSolidCategory className="categoryicon" />
              Category
              <IoMdArrowDropdown />
            </p>
          </button>
          <div className="dropdown">
            <ul>
              <li>Category 1</li>
              <li>Category 2</li>
              <li>Category 3</li>
            </ul>
          </div>
        </div>

        <button>
          <p>
            <RiCommunityFill className="communityicon" />
            Community
          </p>
        </button>

        <button>
          <p>
            <FaUsersGear className="aboutusicon" />
            About Us
          </p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
