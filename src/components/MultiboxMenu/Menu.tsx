import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
// import img from "next/img";
import { TweenMax, Quint, Quart } from "gsap";
// import { motion } from "framer-motion";
import cn from "classnames";

import { times } from "core/utils";
import { defaultMenuItems } from "core/constants";

import Button from "./Button";
import NavMenu from "./NavMenu";
import MenuItem from "./MenuItem";
import Icon from "components/Icon";

import styles from "./Menu.module.sass";
import Link from "next/link";
import { useBodyScroll } from "@geist-ui/react";

// function refsToArray(ctx, prefix) {
//   var results = [];
//   for (var i = 0; ; i++) {
//     var ref = ctx.refs[prefix + "-" + String(i)];
//     if (ref) results.push(ref);
//     else return results;
//   }
// }

const Menu = () => {
  const [isOpen, setIsOpen] = useBodyScroll();

  // Container state & hooks
  const router = useRouter();

  // User Interaction Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
    isOpen ? toggle("close") : toggle("open");
  };

  const handleRouteChange = () => {
    if (isOpen) {
      setIsOpen(false);
      toggle("close");
    }
  };

  // Close Menu onRouteChange
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);

    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [isOpen]);

  // Create Refs for elements
  const menuItems = [];
  times(5)(() => menuItems.push({ inner: useRef(), outer: useRef() }));
  const navMenu = useRef();
  const navMenuItems = [];
  times(defaultMenuItems.length)(() => navMenuItems.push(useRef()));

  // Set Initial Animation
  let isAnimating = false;

  function toggle(action: "open" | "close") {
    if (isAnimating) return;

    isAnimating = true;

    // After all is animated..
    const animationEnd = (pos) => {
      if (pos === 5 - 1) {
        isAnimating = false;
      }
    };

    menuItems.forEach((el, pos) => {
      const { inner, outer } = el;
      // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
      const config: any = {};
      const configInner: any = {};

      // Direction defined in the HTML data-direction.
      // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
      const direction = outer.current.dataset.direction;
      // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
      if (direction === "bt") {
        config.y = "100%";
        configInner.y = "-100%";
        configInner.x = "0%";
      } else if (direction === "tb") {
        config.y = "-100%";
        configInner.y = "100%";
        configInner.x = "0%";
      } else if (direction === "lr") {
        config.x = "-100%";
        configInner.x = "100%";
      } else if (direction === "rl") {
        config.x = "100%";
        configInner.x = "-100%";
      } else {
        config.x = "100%";
        config.y = "100%";
        configInner.x = "-100%";
        configInner.y = "-100%";
      }

      if (action === "open") {
        // Setting the initial values.
        TweenMax.set(outer.current, config);
        TweenMax.set(inner.current, configInner);

        // Animate.
        TweenMax.to([outer.current, inner.current], 0.9, {
          ease: Quint.easeOut,
          x: "0%",
          y: "0%",
          onComplete: () => animationEnd(pos),
        });
      } else {
        TweenMax.to(outer.current, 0.6, {
          ease: Quart.easeInOut,
          x: config.x || 0,
          y: config.y || 0,
        });
        TweenMax.to(inner.current, 0.6, {
          ease: Quart.easeInOut,
          x: configInner.x || 0,
          y: configInner.y || 0,
          onComplete: () => animationEnd(pos),
        });
      }
    });

    // Show/Hide open and close ctrls.
    // TweenMax.to(this.DOM.closeCtrl, 0.6, {
    //   ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
    //   startAt: action === 'open' ? {rotation: 0} : null,
    //   opacity: action === 'open' ? 1 : 0,
    //   rotation: action === 'open' ? 180 : 270
    // });
    // TweenMax.to(this.DOM.openCtrl, action === 'open' ? 0.6 : 0.3, {
    //   delay: action === 'open' ? 0 : 0.3,
    //   ease: action === 'open' ? Quint.easeOut : Quad.easeOut,
    //   opacity: action === 'open' ? 0 : 1
    // });

    // Main links animation.
    //@ts-ignore
    TweenMax.staggerTo(
      navMenuItems.map(({ current }) => current),
      action === "open" ? 0.9 : 0.2,
      {
        ease: action === "open" ? Quint.easeOut : Quart.easeInOut,
        startAt: action === "open" ? { y: "50%", opacity: 0 } : null,
        y: action === "open" ? "0%" : "50%",
        opacity: action === "open" ? 1 : 0,
      },
      action === "open" ? 0.1 : -0.1
    );

    // Sidemenu links animation.
    // TweenMax.staggerTo(this.DOM.sidemenuLinks, action === 'open' ? 0.5 : 0.2, {
    //   ease: action === 'open' ? Quint.easeInOut : Quart.easeInOut,
    //   startAt: action === 'open' ? {y: '100%'} : null,
    //   y: action === 'open' ? '0%' : '100%'
    // }, action === 'open' ? 0.05 : -0.05);

    // The "Learn how to participate" menu link.
    // TweenMax.to(items[4].current, action === "open" ? 0.9 : 0.6, {
    //   ease: action === "open" ? Quint.easeOut : Quart.easeInOut,
    //   startAt: action === "open" ? { x: "10%" } : null,
    //   x: action === "open" ? "0%" : "10%",
    // });
  }

  const isDark = "_n";

  return (
    <div
      className={cn(styles.Menu, isOpen && styles.Menu__open)}
      // animate={isOpen ? "open" : "closed"}
      // transition={{ ease: "easeOut", duration: 1 }}
      // variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
    >
      <MenuItem className={styles.Item__1} refs={menuItems[0]} direction="bt">
        <NavMenu navMenu={defaultMenuItems} refs={{ navMenu, navMenuItems }} />
        <p
          className={cn(
            styles.Label,
            styles.Label__topLeft,
            styles.Label__vertMirror
          )}
        >
          menu
        </p>
        <p
          className={cn(
            styles.Label,
            styles.Label__botRight,
            styles.Label__vert
          )}
        >
          made by &nbsp;&nbsp;
          <a
            aria-label="Danilo JR3 Panaro - Web Developer"
            href="https://www.jr3.it"
          >
            Danilo JR3 Panaro
          </a>
        </p>
      </MenuItem>
      <MenuItem className={styles.Item__2} refs={menuItems[1]} direction="lr">
        <div className={styles.ItemMap} />
        <Link href="/" prefetch={false}>
          <a className={styles.ItemHoverLink}>
            Il Parco Metropolitano delle Colline di Napoli
          </a>
        </Link>
      </MenuItem>
      <MenuItem className={styles.Item__3} refs={menuItems[2]} direction="bt">
        <div>
          <img
            src={`/img/logo-t.png`}
            alt="Logo greeNEETwork"
            height={56}
            width={125}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
          <img
            src={`/img/cdm${isDark}.svg`}
            alt="Logo Consiglio dei Ministri"
            height={56}
            width={56}
          />
          <a
            aria-label="Associazione Nazionale Comuni Italiani"
            href="http://www.anci.it"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`/img/anci${isDark}.png`}
              alt="Logo ANCI"
              height={56}
              width={56}
            />
          </a>
          <a
            aria-label="Comune di Napol"
            href="https://www.comune.napoli.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/26080"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`/img/comune${isDark}.png`}
              alt="Logo Comune di Napoli"
              height={56}
              width={56}
            />
          </a>
        </div>
        <p>
          Iniziativa co-finanziata dalla Presidenza del Consiglio dei Ministri -
          Dipartimento della Gioventù e del Servizio Civile Nazionale e dal
          Comune di Napoli
        </p>
      </MenuItem>
      <MenuItem className={styles.Item__4} refs={menuItems[3]} direction="rl">
        <p className={cn(styles.Label, styles.Label__topLeft)}>Collabora</p>
        <a href="/esplora/aggiungi" className={styles.Item__Link}>
          Segnala un
          <br />
          luogo
        </a>
      </MenuItem>
      <MenuItem className={styles.Item__5} refs={menuItems[4]} direction="tb">
        <a href="/storie/scrivi" className={styles.Item__Link}>
          Scrivi una
          <br />
          storia
        </a>
        {/* <div className={styles.SideMenu}>
          <a href="#" className={styles.SideItem}>
            <span className={styles.SideItemInner}>The Gameplay</span>
          </a>
        </div> */}
      </MenuItem>

      {/* {props.children && items} */}
      <Button
        onClick={handleClick}
        className={styles.Button}
        aria-label="Apri Menu Navigazione"
      >
        <Icon name={isOpen ? "X" : "Menu"} color="#666" />
      </Button>
    </div>
  );
};

export default Menu;
