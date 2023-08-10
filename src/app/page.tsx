"use client";

import { Title, Header } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import React, { useEffect } from "react";
import TypeWriter from "@/components/TypeWriter";

const Home: React.FC = () => {
  useEffect(() => {
    // Import the TypeWriter component dynamically
    import("@/components/TypeWriter").then((TypeWriterModule) => {
      const TypeWriter = TypeWriterModule.default;
      // Initialize any logic related to the TypeWriter component
    });
  }, []);

  return (
    <>
      <Wrapper>
        <div className="flex py-16">
          <div className="bg-white rounded-2xl grid gap-4 grid-cols-2 grid-rows-2 p-7 ">
            <div>
              <Title> Hello</Title>
            </div>
            <div> </div>
            <div>
              {" "}
              <span className="italic  font-['Noto_Serif']  text-8xl">
                Joshua Lim{" "}
              </span>{" "}
              <span className="italic text-3xl tracking-tightest">(noun) </span>{" "}
              <Header className="flex">
                - A Full Stack Developer. Someone that turns coffee into code. A
                person who loves
                <TypeWriter />
              </Header>{" "}
            </div>

            <div className="flex justify-end items align-bottom">
              <div className="mt-auto">
                <Button>Get in Touch</Button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Home;
