"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

// http://localhost:3000/ru/authorization/

const Features = ({ setActivePage }: any) => {
  const pathname = usePathname();
  const locale = pathname;
  const locale1 = pathname.split("/")[1];
  const isKazakh = pathname === "/";
  const isEnglish = pathname === "/en";
  const isRussian = pathname === "/ru";
  const isKazakh1 = pathname === "/kz";
  const [featuresRef, inView] = useInView({
    threshold: 0.3,
  });
  const [ref1, inView1] = useInView({ threshold: 0.3 });
  const [ref2, inView2] = useInView({ threshold: 0.3 });
  const [ref3, inView3] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setActivePage("Features");
    }
  }, [inView, setActivePage]);

  // Animation hooks updated to trigger based on inView
  const animation1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? "translateX(0)" : "translateX(-100px)",
    config: { duration: 500 },
  });

  const animation11 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? "translateX(0)" : "translateX(100px)",
    config: { duration: 500 },
  });

  const animation2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translateX(0)" : "translateX(-100px)",
    config: { duration: 500 },
  });

  const animation22 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translateX(0)" : "translateX(100px)",
    config: { duration: 500 },
  });

  const animation3 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? "translateX(0)" : "translateX(-100px)",
    config: { duration: 500 },
  });

  const animation33 = useSpring({
    opacity: inView3 ? 1 : 0,
    transform: inView3 ? "translateX(0)" : "translateX(100px)",
    config: { duration: 500 },
  });

  return (
    <>
      <div
        ref={featuresRef}
        id="features"
        className={`features-background ${
          isRussian ? "features-background-ru" : ""
        } ${isKazakh ? "features-background-kz" : ""} ${
          isEnglish ? "features-background-en" : ""
        }`}
      >
        <div className="features-full-container ">
          <h1 className="team-title">Key features</h1>
          {/* <p className="footer-p">
            We help students to learn at their own pace with microcontent and AI
          </p> */}
          <div className="features__container">
            <div className={`features__row`} ref={ref1}>
              <animated.img
                style={animation1}
                src="/static/image/features1.png"
                alt="Logo"
                className={`features__img`}
              />
              <animated.div style={animation11} className={`features__right`}>
                <h1 className={`features__right-title`}>Unique content</h1>
                <p className={`features__right-p`}>
                  Diverse content formats, including audio, video, images, text,
                  and simulations, to accomodate all learning preferences
                </p>
              </animated.div>
            </div>
            <div className={`features__row`} ref={ref2}>
              <animated.div style={animation2} className={`features__right`}>
                <h1 className="features__right-title">Learning analytics</h1>
                <ul className="features-with-dots">
                  <li>AI analyzes student progress</li>
                  <li>AI creates intervention groups</li>
                  <li>AI recommends authors on how to improve the content</li>
                </ul>
              </animated.div>
              <animated.img
                style={animation22}
                src="/static/image/features2.png"
                alt="Logo"
                className="features__img"
              />
            </div>
            <div className={`features__row`} ref={ref3}>
              <animated.img
                style={animation3}
                src="/static/image/features3.png"
                alt="Logo"
                className="features__img"
              />
              <animated.div style={animation33} className={`features__right`}>
                <h1 className="features__right-title">
                  Personalized Learning Path
                </h1>
                <ul className="features-with-dots">
                  <li>Accelerate or slow down the learning process</li>
                  <li>
                    Utilize an AI Tutor for assistance or connect with real
                    teachers for guidance
                  </li>
                  <li>
                    Receive personalized learning activities designed using
                    Knowledge Space Theory for targeted skill development
                  </li>
                </ul>
              </animated.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
