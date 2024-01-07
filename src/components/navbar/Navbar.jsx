import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import { Blog } from "../blog/Blog";
import {Routes, Route, Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Saffet Ramazan Kaban
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="social"
        >
            <Link className="blogButton" to="/blog">Blog</Link>

          <Routes>
            <Route path='path' element={<Blog/>}/>
          </Routes>

          <a href="https://github.com/Saffet01" target="_blank">
            <img src="/github.png" alt="Github Profile Link" />
          </a>
          <a href="https://www.instagram.com/saffetramazan/" target="_blank">
            <img src="/instagram.png" alt="Instagram Profile Link" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
