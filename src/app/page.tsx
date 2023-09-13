"use client";
import { Title, Header, SubTitle } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import TypeWriter from "@/components/TypeWriter";
import List from "@/components/SkillList";
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
              - A Full Stack Developer. Someone that turns coffee into code. A
              person who loves
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

        <section className="mt-2">
          <div
            className={`transition-all duration-500 grid gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ${
              expand ? "h-[1200px] grid-rows-3" : "h-[800px] grid-rows-2"
            }`}
          >
            <div
              className={`bg-white rounded-xl p-5 text-black lg:col-span-2 col-span-1
              
              ${expand ? "row-span-2" : "row-span-1"}`}
            >
              <div> Get to know me better!</div>
              <ReadMoreLess
                description=" My name is Joshua. Living in New York City. Currently a senior at
              City Tech. Aiming for my Bachelor's Degree in Computer Software
              Development. When I'm not caught up in ..."
                more="my busy schoolwork. I spend
              time reading, watching youtube, lifting weights, and creating
              projects. And of course, the occasional binge-watching on Netflix,
              napping, or video games."
              />
              <button
                onClick={() => {
                  setExpand(!expand);
                }}
                className=""
              >
                expand
              </button>
            </div>

            <div className="bg-white rounded-xl p-5 text-black col-span-1">
              box2
            </div>
            <div className="bg-white rounded-xl p-5 text-black">box3</div>
            <div className="bg-white rounded-xl p-5 text-black col-span-1">
              box4
            </div>
            <div className="bg-white rounded-xl p-5 text-black col-span-1">
              box5
            </div>
            <div className="bg-white rounded-xl p-5 text-black col-span-1">
              box6
            </div>
            <div className="bg-white rounded-xl p-5 text-black col-span-1">
              box7
            </div>
          </div>
        </section>

        <div className="bg-white rounded-xl text-black p-5 mt-2 grid gap-5 grid-rows-2"></div>
        <div className="bg-white  text-black rounded-xl p-5 mt-2 "></div>

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
