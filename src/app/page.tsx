"use client";
import { Title, Header, SubTitle } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import TypeWriter from "@/components/TypeWriter";
import List from "@/components/SkillList";
import DynamicBoxes from "../components/DynamicBoxes";
import { ReadMoreLess } from "@/components/ReadMore";

const Home: React.FC = () => {
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    import("@/components/TypeWriter").then((TypeWriterModule) => {
      const TypeWriter = TypeWriterModule.default;
    });
  }, []);

  return (
    <>
      <Wrapper>
        <section className="bg-white rounded-xl mt-16 p-6 grid gap-5 grid-cols-2 grid-rows-2 ">
          <div>
            <Title>Hello</Title>
          </div>
          <div className="flex  text-black justify-end items align-bottom">
            Test{" "}
          </div>
          <div className="pt-10">
            <span className="italic font-['Noto_Serif'] text-black text-5xl">
              Joshua Lim
            </span>
            <span className="italic text-2xl  text-black  tracking-tightest">
              (noun){" "}
            </span>
            <Header className="flex">
              - A Full Stack Developer & Software Engineer. Someone that turns
              coffee into code. A person who loves
              <TypeWriter />
            </Header>
          </div>
          <div className="flex justify-end items align-bottom">
            <List imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" />
            <List imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
            <div className="mt-auto">
              <Button>Get in Touch</Button>
            </div>
          </div>
        </section>
        const [expand, setExpand] = useState(false); return (
        <section className="mt-2">
          <DynamicBoxes expand={expand} setExpand={setExpand} />
        </section>
      </Wrapper>
    </>
  );
};

export default Home;
