"use client";
import { useEffect } from "react";
import anime from "animejs";
import { List } from "../../core/ui/list";

const easingNames = [
  "easeInQuad",
  "easeInCubic",
  "easeInQuart",
  "easeInQuint",
  "easeInSine",
  "easeInExpo",
  "easeInCirc",
  "easeInBack",
  "easeOutQuad",
  "easeOutCubic",
  "easeOutQuart",
  "easeOutQuint",
  "easeOutSine",
  "easeOutExpo",
  "easeOutCirc",
  "easeOutBack",
  "easeInBounce",
  "easeInOutQuad",
  "easeInOutCubic",
  "easeInOutQuart",
  "easeInOutQuint",
  "easeInOutSine",
  "easeInOutExpo",
  "easeInOutCirc",
  "easeInOutBack",
  "easeInOutBounce",
  "easeOutBounce",
  "easeOutInQuad",
  "easeOutInCubic",
  "easeOutInQuart",
  "easeOutInQuint",
  "easeOutInSine",
  "easeOutInExpo",
  "easeOutInCirc",
  "easeOutInBack",
  "easeOutInBounce",
];

export default function Bar() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="music">
        <List
          items={easingNames}
          renderItem={(name, index) => {
            anime({
              targets: `.bar easing-${name}`,
              translateY: [50, -50],
              direction: "alternate",
              loop: true,
              delay: 100,
              endDelay: 100,
              duration: 1000,
              easing: "easeOutInBounce",
            });
            return (
              <li key={name + index}>
                <div id={name + "div" + index} className="bar" />
              </li>
            );
          }}
        />
      </div>
    </>
  );
}
