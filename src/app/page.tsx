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
    // Import the TypeWriter component dynamically
    import("@/components/TypeWriter").then((TypeWriterModule) => {
      const TypeWriter = TypeWriterModule.default;
      // Initialize any logic related to the TypeWriter component
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
              - A Full Stack Developer/Software Engineer. Someone that turns
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
        <section className="grid gap-2 grid-cols-2">
          <div className="bg-white  text-black rounded-xl p-5 mt-2">
            <ul>
              <SubTitle Tech Stack />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                description=" HTML"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                description="CSS"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                description="Javascript"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                description=" Java"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                description="Python"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                description="SQL"
              />
            </ul>
          </div>
          <div className="bg-white  text-black  rounded-xl p-5 mt-2  mr-2">
            <ul>
              <SubTitle Frameworks Tools />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                description="React.Js"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                description="Next.js"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                description="Tailwind CSS"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                description="Git"
              />
            </ul>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Home;
