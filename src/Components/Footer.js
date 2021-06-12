import React from "react";
import {Link} from "react-router-dom";

export default function Footer(){
  return (
    <div className="footer-copyright text-center py-3 fluid bg-dark text-white text-decoration-none">
      Made by <Link to="https://github.com/Manwinder4u" className="text-decoration-none text-white">Manwinder singh</Link>
    </div>
  )
}