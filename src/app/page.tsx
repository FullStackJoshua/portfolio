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
        <section className="bg-white rounded-xl mt-16 p-4 grid gap-5 grid-cols-2 grid-rows-2 ">
          <div>
            <Title> Hello</Title>
          </div>
          <div className="flex justify-end items align-bottom">Test </div>
          <div className="pt-10">
            <span className="italic font-['Noto_Serif']   text-5xl">
              Joshua Lim
            </span>
            <span className="italic text-2xl tracking-tightest">(noun) </span>
            <Header className="flex">
              - A Full Stack Developer. Someone that turns coffee into code. A
              person who loves
              <TypeWriter />
            </Header>
          </div>
          <div className="flex justify-end items align-bottom">
            <div className="mt-auto">
              <Button>Get in Touch</Button>
            </div>
          </div>
        </section>

        <section className="flex">
          <div className="bg-white rounded-xl p-5 mt-2 mr-2"> Hello</div>
          <div className="bg-white rounded-xl p-5 mt-2 "> Hello</div>
        </section>
      </Wrapper>
    </>
  );
};

export default Home;
