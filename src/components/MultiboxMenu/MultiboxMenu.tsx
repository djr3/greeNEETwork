import React, { useState } from "react";
import { styled, withStyle } from "styletron-react";

import { Button } from "./Button";
import { HamburgerIcon } from "./Hamburger";
import { Menu, MenuItem } from "./Menu";

const MainItem = withStyle(MenuItem, {
  gridArea: "1 / 3 / span 2 / span 1",
});

export const MultiboxMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <Menu style={{ display: isOpen ? "grid" : "none" }}>
        <MainItem data-direction="bt">
          <div className="menu__item-inner">
            <div className="mainmenu">
              <a href="#" className="mainmenu__item">
                Story
              </a>
              <a href="#" className="mainmenu__item">
                Chronicles
              </a>
              <a href="#" className="mainmenu__item">
                Tour
              </a>
              <a href="#" className="mainmenu__item">
                Contact
              </a>
            </div>
            <p className="label label--topleft label--vert-mirror">
              the important stuff
            </p>
            <p className="label label--bottomright label--vert">
              made in bannockburn
            </p>
          </div>
        </MainItem>
        <MenuItem data-direction="lr">
          <div className="menu__item-inner">
            <div className="menu__item-map"></div>
            <a href="#" className="menu__item-hoverlink">
              The location
            </a>
          </div>
        </MenuItem>
        <MenuItem data-direction="bt">
          <div className="menu__item-inner">
            <div className="sidemenu">
              <a href="#" className="sidemenu__item">
                <span className="sidemenu__item-inner">The Gameplay</span>
              </a>
              <a href="#" className="sidemenu__item">
                <span className="sidemenu__item-inner">About LARP</span>
              </a>
              <a href="#" className="sidemenu__item">
                <span className="sidemenu__item-inner">The Rules</span>
              </a>
              <a href="#" className="sidemenu__item">
                <span className="sidemenu__item-inner">History</span>
              </a>
              <a href="#" className="sidemenu__item">
                <span className="sidemenu__item-inner">People</span>
              </a>
              <a href="#" className="sidemenu__item">
                <span className="sidemenu__item-inner">Join</span>
              </a>
              <a href="#" className="sidemenu__item">
                <span className="sidemenu__item-inner">...</span>
              </a>
            </div>
          </div>
        </MenuItem>
        <MenuItem data-direction="rl">
          <div className="menu__item-inner">
            <p className="label label--topleft label--line">Join us now</p>
            <a href="#" className="menu__item-link">
              Learn how to <br /> participate
            </a>
          </div>
        </MenuItem>
        <MenuItem data-direction="tb">
          <div className="menu__item-inner">
            <p className="quote">
              Hail to thee, our infantry, still brave, beyond the grave
            </p>
          </div>
        </MenuItem>
      </Menu>
      <Button isOpen={isOpen} onClick={handleClick}>
        Open/Close
      </Button>
    </>
  );
};
