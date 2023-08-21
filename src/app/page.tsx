"use client";

import { Title, Header } from "@/components/Typography";
import Wrapper from "@/components/Wrapper";
import Button from "@/components/Button";
import React, { useEffect } from "react";
import TypeWriter from "@/components/TypeWriter";
import List from "@/components/SkillList";

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
        <section className="bg-white rounded-xl mt-16 p-6 grid gap-5 grid-cols-2 grid-rows-2 ">
          <div>
            <Title>Hello</Title>
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

        <section className="flex gap-2">
          <div className="bg-white rounded-xl p-5 mt-2 grid gap-5 grid-rows-2">
            <div> Get to know me better!</div>
            <div>
              My name is Joshua. Living in New York City. Currently a senior at
              City Tech. Aiming for my Bachelor's Degree in Computer Software
              Development. When I'm not caught up in my busy schoolwork. I spend
              time reading, watching youtube, lifting weights, and creating
              projects. And of course, the occasional binge-watching on Netflix,
              napping, or video games.
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 mt-2 "></div>
        </section>
        <section className="grid gap-2 grid-cols-3">
          <div className="bg-white rounded-xl p-5 mt-2">
            <ul>
              Tech Stack
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                description="HTML"
              />
              <List
                imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
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
          <div className="bg-white rounded-xl p-5 mt-2  mr-2">
            <ul>
              Frameworks/Tools
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

          <div className="bg-white rounded-xl p-5 mt-2 mr-2">
            <ul>
              <List description="Communication" />
              <List description="Problem-Solving" />
              <List description="Adapatability" />
              <List description="Teamwork" />
              <List description="Time Management" />
              <List description="Critical Thinking" />
              <List description="Leadership" />
              <List description="Continuous Learning" />
            </ul>
          </div>
        </section>
        <section className="bg-white rounded-xl m-2 p-6">Hello</section>
      </Wrapper>
    </>
  );
};

export default Home;
