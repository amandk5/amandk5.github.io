import {
  Avatar,
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Img,
  keyframes,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import SkillCard from "./SkillCard";
import ProjectCard from "./ProjectCard";

import profile from "../Images/profile_2.jpeg";
import graduationImage from "../Images/graduation1.png";

import mongodb from "../Images/skills/mongodb.png";
import express from "../Images/skills/express.png";
import react from "../Images/skills/react.png";
import nodejs from "../Images/skills/nodejs.png";
import redux from "../Images/skills/redux.png";
import html5 from "../Images/skills/html.png";
import css from "../Images/skills/css.png";
import typescript from "../Images/skills/typescript.png";
import javascript from "../Images/skills/javascript.png";
import chakraUi from "../Images/skills/chakraUi.png";
import nextjs from "../Images/skills/nextjs.png";

import fithub from "../Images/apps/fithub.png";
import nutrimeter from "../Images/apps/nutrimeter.png";
import mentimeter from "../Images/apps/mentimeter.png";
import zoomcar from "../Images/apps/zoomcar.png";
import interntheory from "../Images/apps/interntheory.png";
import kindmeal from "../Images/apps/kindmeal.png";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import CalenderGithub from "./CalendarGithub";
import LinkedInAndGithub from "./LinkedInAndGithub";

export default function Content() {
  //   const animationKeyframes = keyframes`
  //   0% { transform: scale(1) rotate(0); border-radius: 20%; }
  //   25% { transform: scale(2) rotate(0); border-radius: 20%; }
  //   50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  //   75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  //   100% { transform: scale(1) rotate(0); border-radius: 20%; }
  // `;

  // .fadesample {
  // 	animation-name: fadeIn; 				// which named animation?
  // 	animation-duration: 3s;        			// how long?
  // 	animation-iteration-count:infinite;  	// keep going?
  // 	}
  const [isSmallerThan700] = useMediaQuery("(max-width: 450px)");

  return (
    <>
      <Flex
        margin="auto"
        padding="20px"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Heading lineHeight="1.30" fontWeight="800" fontSize="2.25rem">
            Hi 👋,
            <br />
            I'm{" "}
            <Text display="inline" color="brand.themeColor">
              Aman Deep Kujur
            </Text>
            ,
            <br />
            MERN Stack Web Developer
          </Heading>
        </Box>
        <Flex alignItems="center" justifyContent="center" wrap="wrap">
          <Avatar
            m="5"
            w="250px"
            h="250px"
            name="Aman Deep Kujur"
            src={profile}
            border="1px solid gainsboro"
            zIndex="-5"
          />
          {/* linkedIn and github icon  */}
          <LinkedInAndGithub />
        </Flex>
      </Flex>
      {/* about  */}
      <Box p="40px" id="about" bg="brand.backgroundColr" borderRadius="0.5rem">
        <Heading
          lineHeight="1.30"
          mb="5"
          fontWeight="700"
          // fontSize="2rem"
          color="brand.themeColor"
          textUnderlineOffset="0.5rem"
        >
          About
        </Heading>
        <br />
        {/* <Box> */}
        {/* <Heading size="lg">I'm Aman, Nice to meet you</Heading> */}
        {/* <Container> */}
        <Text fontSize="lg" letterSpacing="1px">
          I'm a Quick learner and an aspiring full-stack web developer
          proficient in MERN stack technology. Looking forward to applying and
          enhancing my skills and knowledge as a developer.
        </Text>
        {/* </Container> */}
        {/* </Box> */}
      </Box>
      {/* education */}
      <Box id="education" py="40px" px="10px">
        <Heading
          lineHeight="1.30"
          mb="5"
          fontWeight="700"
          // fontSize="2rem"
          color="brand.themeColor"
          textUnderlineOffset="0.5rem"
        >
          Education
        </Heading>
        <br />
        {/* <Box> */}
        {/* <Heading size="lg">I'm Aman, Nice to meet you</Heading> */}
        <Flex
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box>
            {/* <Box h="50px" border="1px solid black" p="5px">
                <Text>April 2022 - Present</Text>
                <Heading size="md">Full Stack Web Development (Full Time)</Heading>
              </Box> */}
            <Card
              image={"https://cdn-icons-png.flaticon.com/512/1940/1940611.png"}
              duration={"April 2022 - Present"}
              course={"Full Stack Web Development (Full Time)"}
              institute={"Masai School"}
              location={"Remote"}
            />
            <Card
              image={"https://cdn-icons-png.flaticon.com/512/1940/1940611.png"}
              duration={"August 2017 - June 2021"}
              course={"Bachelor Of Technology (C.S.E)"}
              institute={"St. Aloysius Institue Of Technology"}
              location={"Jabalpur, Madhya Pradesh"}
            />
            <Card
              image={"https://cdn-icons-png.flaticon.com/512/1940/1940611.png"}
              duration={"April 2015 - March 2017"}
              course={"Higher Secondary School"}
              institute={"Carmel School"}
              location={"Ambikapur,Chhattisgarh"}
            />
          </Box>
          <Box>
            {/* <Card
              image={"https://cdn-icons-png.flaticon.com/512/1940/1940611.png"}
              duration={"April 2015 - March 2017"}
              course={"Higher Secondary School"}
              institute={"Carmel School"}
              location={"Ambikapur,Chhattisgarh"}
            /> */}
            <Image src={graduationImage} maxW="400px" h="100%" />
          </Box>
        </Flex>
        {/* </Box> */}
      </Box>

      {/* github stats  */}
      <Box w="100%" mb="10">
        <Heading
          lineHeight="1.30"
          mb="5"
          fontWeight="700"
          // fontSize="2rem"
          color="brand.themeColor"
          textUnderlineOffset="0.5rem"
        >
          Github Stats
        </Heading>
        <br />
        <Flex justifyContent="space-around" flexWrap="wrap" rowGap="1">
          <Box
            w={!isSmallerThan700 ? "48%" : "100%"}
            minW={isSmallerThan700 ? "100%" : "48%"}
          >
            <Img
              w="100%"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=amandk5&show_icons=true&locale=en&theme=react"
              alt="amandk5"
            />
          </Box>
          <Box
            w={!isSmallerThan700 ? "48%" : "100%"}
            minW={isSmallerThan700 ? "100%" : "48%"}
          >
            <Img
              w="100%"
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=amandk5&theme=tokyonight"
              alt="amandk5"
            />
          </Box>
        </Flex>
        <Flex mt="1" justifyContent="center" w="100%">
          <Img
            w={isSmallerThan700 ? "100%" : "48%"}
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=amandk5&show_icons=true&locale=en&layout=compact&theme=react"
            alt="amandk5"
            backgroundColor="#20232A"
          />
        </Flex>
      </Box>

      {/* gihub calendar  */}
      <Heading
        lineHeight="1.30"
        mb="5"
        fontWeight="700"
        // fontSize="2rem"
        color="brand.themeColor"
        textUnderlineOffset="0.5rem"
      >
        Github Calendar
      </Heading>
      <br />
      <CalenderGithub />
      <br />
      <br />
      {/* skills  */}
      <Box
        id="skills"
        py="40px"
        px="10px"
        bg="brand.headerBg"
        borderRadius="0.5rem"
      >
        <Heading
          lineHeight="1.30"
          mb="5"
          fontWeight="700"
          // fontSize="2rem"
          color="brand.themeColor"
          textUnderlineOffset="0.5rem"
        >
          Skills
        </Heading>
        <br />
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(5, 1fr)" }}
          gap={6}
        >
          <SkillCard skill="Html" icon={html5} />
          <SkillCard skill="CSS" icon={css} />
          <SkillCard skill="Javascript" icon={javascript} />
          <SkillCard skill="NodeJs" icon={nodejs} />
          <SkillCard skill="Express" icon={express} />
          <SkillCard skill="MongoDb" icon={mongodb} />
          <SkillCard skill="React" icon={react} />
          <SkillCard skill="Redux" icon={redux} />
          <SkillCard skill="NextJs" icon={nextjs} />
          <SkillCard skill="TypeScript" icon={typescript} />
          {/* <GridItem w="100%" h="10" bg="blue.500" /> */}
        </Grid>
      </Box>
      {/* projects */}
      <Box id="projects" py="40px" px="10px">
        <Heading
          lineHeight="1.30"
          mb="5"
          fontWeight="700"
          // fontSize="2rem"
          color="brand.themeColor"
          textUnderlineOffset="0.5rem"
        >
          Projects
        </Heading>
        <br />
        <Flex
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap="6"
        >
          <ProjectCard
            projectName="Fithub"
            projectImage={fithub}
            projectDescription="Fithub Blender provides free full length workout videos, workout routines, healthy recipes etc."
            projectLink="https://fithub-mu.vercel.app/"
            projectGithubLink="https://github.com/nilamkhose2001/obsolete-battle-2339-fithub-"
            techStack="HTML | CSS | Javascript | React | Redux | Redux Thunk | Express | MongoDb | Chakra UI"
          />
          <ProjectCard
            projectName="Nutrimeter"
            projectImage={nutrimeter}
            projectDescription="Nutrimeter is a one stop solution for all health related information and to track your daily calories."
            projectLink="https://nutrimeter.vercel.app/"
            projectGithubLink="https://github.com/harshu878/nutrimeter"
            techStack="HTML | CSS | Javascript | React | Redux | Redux Thunk | Express | MongoDb | Chakra UI"
          />
          <ProjectCard
            projectName="Zoomcar Clone"
            projectImage={zoomcar}
            projectDescription="An online car rental platform where you can rent self drive cars from a wide range of cars collection."
            projectLink="https://rural-vessel-2538-flax.vercel.app/"
            projectGithubLink="https://github.com/amandk5/rural-vessel-2538"
            techStack="HTML | CSS | Javascript | React | Chakra UI "
          />
          <ProjectCard
            projectName="Intern-Theory Clone"
            projectImage={interntheory}
            projectDescription="A platform where you can search for internships and apply for the same. "
            projectLink="https://ubiquitous-wire-4930.vercel.app/"
            projectGithubLink="https://github.com/amandk5/ubiquitous-wire-4930"
            techStack="HTML | CSS | Javascript | React | Chakra UI "
          />
          <ProjectCard
            projectName="MentiMeter Clone"
            projectImage={mentimeter}
            projectDescription="An online platform to create presentations,slides,quizzes, polls etc."
            projectLink="https://luxury-gnome-1827a2.netlify.app/"
            projectGithubLink="https://github.com/amandk5/grandiose-juice-9763"
            techStack="HTML | CSS | Javascript | Bootstrap "
          />
          <ProjectCard
            projectName="Kindmeal Clone"
            projectImage={kindmeal}
            projectDescription="A restaurant coupon service provider where you can search restaurants and grab coupons."
            projectLink="https://kindmeal-unit-2-project.netlify.app/"
            projectGithubLink="https://github.com/SunilHooda/kindmeal.my-Clone"
            techStack="HTML | CSS | Javascript | Bootstrap "
          />
        </Flex>
      </Box>
      <br />
    </>
  );
}
