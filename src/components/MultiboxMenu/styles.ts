import css from "styled-jsx/css";

const MenuStyle = css`
  body {
    --color-text: #fff;
    --color-bg: #252525;
    --color-link: #fff;
    --color-link-hover: #f20c40;
    --color-bg-item1: #15171b;
    --color-bg-item2: #2c35b7;
    --color-bg-item3: #0f1013;
    --color-bg-item4: #1d2027;
    --color-bg-item5: #0f1013;
    --color-item_alt: #494d54;
    --color-quote: #5b677a;
    --color-info: #57535a;
    --color-title: #e23434;
    --color-tagline: #e2e2e2;
  }

  .menu {
    text-align: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 33.33%);
    pointer-events: none;
  }

  .menu__open {
    pointer-events: auto;
  }

  .item {
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .item_inner {
    overflow: hidden;
    transform: translate3d(100%, 0, 0);
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .item_1 .item_inner {
    background: var(--color-bg-item1);
  }
  .item_2 .item_inner {
    background: var(--color-bg-item2);
  }
  .item_3 .item_inner {
    background: var(--color-bg-item3);
  }
  .item_4 .item_inner {
    background: var(--color-bg-item4);
  }
  .item_5 .item_inner {
    background: var(--color-bg-item5);
  }

  .item_4,
  .item_5 {
    display: none;
  }

  .label {
    display: none;
  }

  .mainitem {
    opacity: 0;
  }

  .mainitem,
  .sideitem {
    position: relative;
    overflow: hidden;
    transition: color 0.1s;
    margin: 0.25rem 0;
    display: block;
  }

  .sideitem_inner {
    display: block;
    transform: translate3d(0, 100%, 0);
  }

  .item_map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url(../img/2.jpg) no-repeat 50% 50%;
    background-size: cover;
    transition: transform 0.8s cubic-bezier(0.2, 1, 0.8, 1);
  }

  .item_inner:hover .item_map {
    transform: scale3d(1.1, 1.1, 1);
  }

  .item_hoverlink {
    font-weight: bold;
    text-transform: capitalize;
    position: relative;
    z-index: 1000;
    display: block;
  }

  .item_hoverlink:hover {
    color: var(--color-link);
  }

  .item_link {
    text-align: left;
    align-self: flex-start;
    justify-self: start;
    font-size: 1.5rem;
    width: 100%;
    line-height: 1;
    padding: 2rem;
    margin: 3rem 0 auto;
    display: flex;
    flex-direction: column;
    height: calc(100% - 3rem);
  }

  .item_link::after {
    content: "\27F6";
    display: block;
    margin-top: auto;
    font-size: 0.95rem;
  }

  @media screen and (min-width: 53em) {
    .menu {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      grid-template-columns: 20% 30% 50%;
      grid-template-rows: 60% 40%;
      grid-template-areas:
        "item3 item2 item1"
        "item4 item5 item1";
    }
    .item {
      height: 100%;
    }
    .item_1 {
      grid-area: item1;
    }
    .item_2 {
      grid-area: item2;
    }
    .item_3 {
      grid-area: item3;
    }
    .item_4 {
      grid-area: item4;
    }
    .item_5 {
      grid-area: item5;
    }
    .item_4,
    .item_5 {
      display: block;
    }
    .item_inner {
      align-items: center;
    }
    .label {
      display: block;
      color: var(--color-item_alt);
      position: absolute;
      z-index: 1000;
      font-size: 0.85rem;
      font-weight: bold;
      margin: 0;
      white-space: nowrap;
    }
    .label__topleft {
      top: 2rem;
      left: 2rem;
    }
    .label__vert,
    .label__vert-mirror {
      -webkit-writing-mode: vertical-rl;
      writing-mode: vertical-rl;
    }
    .label__vert-mirror {
      transform: rotate(180deg);
    }
    .label__bottomright {
      bottom: 2rem;
      right: 2rem;
    }
    .label::before {
      content: "------------- ";
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      letter-spacing: -1px;
      margin: 0 0.75rem 0 0;
    }
    .label__vert::before,
    .label__vert-mirror::before {
      margin: 0.75rem 0;
    }
    .mainmenu,
    .sidemenu {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .mainmenu {
      counter-reset: menuitem;
    }
    .mainitem {
      font-size: 5vw;
      text-transform: lowercase;
      overflow: visible;
      margin: 0.5rem 0;
      padding: 0 0.5rem;
      position: relative;
      transition: color 0.3s;
    }
    .mainitem:hover {
      color: var(--color-item_alt);
    }
    .mainitem::before {
      counter-increment: menuitem;
      content: counters(menuitem, "", decimal-leading-zero);
      position: absolute;
      font-size: 0.85rem;
      top: 25%;
      left: -1.25rem;
      color: var(--color-item_alt);
    }
    .mainitem::after {
      content: "";
      width: 100%;
      top: 58%;
      height: 6px;
      background: var(--color-link-hover);
      position: absolute;
      left: 0;
      opacity: 0;
      transform: scale3d(0, 1, 1);
      transition: transform 0.3s, opacity 0.3s;
      transform-origin: 100% 50%;
    }
    .mainitem:hover::after {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
    .sideitem {
      text-transform: uppercase;
      letter-spacing: 0.15rem;
      font-size: 0.85rem;
    }
    .item_hoverlink {
      font-size: 1.25rem;
      text-transform: lowercase;
      border-bottom: 2px solid #fff;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .item_inner:hover .item_hoverlink {
      opacity: 1;
    }
  }
`;
export default MenuStyle;
