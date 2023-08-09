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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Wrapper>
          <Title> Hello </Title>
          <Header className="italic px100">Joshua Lim </Header>{" "}
          <Header className="italic px30 tracking-tighter">(noun) - </Header>{" "}
          <Header className="flex">
            A Full-Stack Developer. Someone that turns coffee into code. A
            person who loves
            <TypeWriter />
          </Header>
        </Wrapper>
      </main>
    </>
  );
};

export default Home;
