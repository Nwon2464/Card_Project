import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import "./styles.css";
export default function App() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  const styleRef = useRef();
  const [direction, setDirection] = useState("");

  const [xPos, setXPos] = useState([
    {
      first: "-528.7px",
      second: "50%",
      third: "0.7",
      fourth: "1",

      width: "600px",
      fitfh: "calc(50% - 375px)",
      img:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      first: "-264.35px",
      second: "25%",
      third: "0.85",
      fourth: "2",

      width: "600px",
      fitfh: "calc(50% - 375px)",
      img:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      first: "0px",
      second: "0%",
      third: "1",
      fourth: "3",
      fitfh: "calc(50% - 375px)",
      img:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      width: "600px"
    },
    {
      first: "264.35px",
      second: "-25%",
      third: "0.85",
      fourth: "2",
      fifth: "none",
      width: "600px",
      img:
        "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      first: "528.7px",
      second: "-50%",
      third: "0.7",
      fourth: "1",
      fitfh: "none",
      width: "600px",
      img:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  ]);
  // const num = xPos[index];
  // transform: `translateX(${num}px)`,

  const moveLeft = () => {
    let xLeftPosition = xPos.slice();
    xLeftPosition.unshift(xLeftPosition.pop());
    setXPos(xLeftPosition);
    setDirection("left");
  };

  const moveRight = () => {
    let XRightPosition = xPos.slice();
    XRightPosition.push(XRightPosition.shift());
    setXPos(XRightPosition);
    setDirection("right");
  };

  // backgroundImage: `url('${num.img}')`,
  // position: "absolute",
  // top: "0",
  // zIndex: `${num.fourth}`,
  // left: `${num.fitfh}`,
  // width: `${num.width}`,

  // backgroundImage: `url('${num.img}')`,

  // position: "absolute",
  // top: "0",

  // width: `${num.width}`,
  // zIndex: `${num.fourth}`,

  const determineStyle = (index, showAnimation) => {
    const num = xPos[index];

    if (showAnimation) {
      return {
        transform: `translateX(${num.first}) translateX(${num.second}) scale(${num.third})`,
        zIndex: `${num.fourth}`,
        // backgroundImage: `url('${num.img}')`,

        // left: `${num.fitfh}`,
        WebkitTransition: "all 200ms linear",
        MozTransition: "all 200ms linear",
        msTransition: "all 200ms linear",
        OTransition: "all 200ms linear"
      };
    } else {
      return {
        zIndex: `${num.fourth}`,
        // left: `${num.fitfh}`,
        // backgroundImage: `url('${num.img}')`,

        transform: `translateX(${num.first}) translateX(${num.second}) scale(${num.third})`
      };
    }
  };
  return (
    <>
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>
      <button className="next-btn" onClick={() => dispatch({ type: "NEXT" })}>
        ›
      </button>

      <button className="btn" onClick={moveRight}>
        moveleft
      </button>
      <button className="btn" onClick={moveLeft}>
        moveright
      </button>

      <div ref={styleRef} className="slides">
        {datas.map((slide, i) => {
          const showAnimation = direction === "right" || direction === "left";
          const position = "animate absolute image";
          const imgStyle = determineStyle(i, showAnimation);
          console.log(imgStyle);
          return (
            <div style={imgStyle} key={i} className="slide">
              <img
                src={slide.image}
                style={{ width: 480, height: "inherit" }}
                alt="shit"
              />
              <div className="image__card">
                <div className="image__card__upper">
                  <div className="image__card__upper__image">A</div>
                  <div className="image__card__upper__info">
                    <p>Twitch Rivals</p>
                    <a href="#">Hyper Scales</a>
                    <p>13.4k views</p>
                  </div>
                </div>
                <div className="image__card__middle">
                  <a href="#">Drops Enabled</a>
                  <a href="#">English</a>
                </div>
                <div className="image__card__bottom">
                  It's time to Enter the Hyper Scape! Tune in to see who wins
                  the first ever APAC Hyper Scape competition
                </div>
              </div>
            </div>
          );
        })}{" "}
        {/* <div
          data-active={true}
          className="slide"
          style={{
            backgroundImage: `url('${datas[0].image}')`,
            transform: `translateX(-528.7px) translateX(50%) scale(0.7)`,
            position: "absolute",
            top: 0,
            left: "calc(50% - 375px)",
            zIndex: 1
          }}
        ></div>
        <div
          className="slide"
          style={{
            backgroundImage: `url('${datas[1].image}')`,
            transform: `translateX(-264.35px) translateX(25%) scale(0.85)`,
            position: "absolute",
            top: 0,
            left: "calc(50% - 375px)",
            zIndex: 2
          }}
        ></div>
        <div
          className="slide"
          style={{
            backgroundImage: `url('${datas[2].image}')`,
            transform: `scale(1)`,
            position: "absolute",
            top: 0,
            left: "calc(50% - 375px)",
            zIndex: 3
          }}
        ></div>
        <div
          data-active={true}
          className="slide"
          style={{
            backgroundImage: `url('${datas[3].image}')`,
            transform: `translateX(264.35px) translateX(-25%) scale(0.85)`,
            position: "absolute",
            top: 0,
            zIndex: 2
          }}
        ></div>
        <div
          data-active={true}
          className="slide"
          style={{
            backgroundImage: `url('${datas[4].image}')`,
            transform: `translateX(528.7px) translateX(-50%) scale(0.7)`,
            position: "absolute",
            top: 0,
            zIndex: 1
          }}
        ></div> */}
        {/* {datas.map((slide, i) => {
          console.log(state.slideIndex, i);
          return (
            <div
              key={i}
              className="slide"
              data-active={state.slideIndex - i === 0 ? true : null}
              style={{
                // "--offset": state.slideIndex - i,
                backgroundImage: `url('${slide.image}')`,
                transform: `translateX(calc(-100% * ${state.slideIndex - i}))`

                // transform: `translateX(-20% * ${state.slideIndex - i} )`
              }}
            >
              {slide.title}..{state.slideIndex - i}
            </div>
          );
        })} */}
        {/* <h1>Hello World {state.slideIndex}</h1> */}
        {/* <ul ref={styleRef} className="slides">
        {datas.map((el, i) => {
          return (
            <li style={{ left: `${slideWidth * i}px` }} className={`slide`}>
              <img src={el.image} alt="a" />
              <div>{el.title}</div>
            </li>
          );
        })} */}
        {/* {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })} */}
      </div>
    </>
  );
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % datas.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? datas.length - 1 : state.slideIndex - 1
    };
  }
};

const datas = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  }
];
