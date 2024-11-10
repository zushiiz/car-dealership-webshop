import React, { useEffect } from 'react';

export default function Hamburger(){

  useEffect(() => {
    const ham_menu = document.querySelector(".hamburger");
    const mob_menu = document.querySelector(".hamburger-menu");
    
    const handleClick = () => {
      ham_menu.classList.toggle("is-active");
      mob_menu.classList.toggle("is-active");      
    }

    if (ham_menu){
      ham_menu.addEventListener("click", handleClick);
    }

    return () => {
      if (ham_menu){
        ham_menu.removeEventListener("click", handleClick);
      }
    }

  }, []);

  return (

      <div className="hamburger-container">
      <button className="hamburger">
        <div className="hamburger-bar"></div>
      </button>
    </div>
  )

}
