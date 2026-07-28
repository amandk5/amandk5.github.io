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
        minH={{ base: "auto", md: "80vh" }}
        margin="auto"
        padding={{ base: "40px 10px", md: "40px" }}
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={10}
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              lineHeight="1.2"
              fontWeight="800"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              mb={4}
            >
              Hi 👋,
              <br />
              I'm{" "}
              <Text
                as="span"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                bgClip="text"
              >
                Aman Deep Kujur
              </Text>
              ,
              <br />
              <Text as="span" fontSize={{ base: "2xl", md: "4xl" }} color="whiteAlpha.700">
                MERN Stack Web Developer
              </Text>
            </Heading>
            <Text fontSize="xl" color="whiteAlpha.600" mb={8} maxW="600px">
              Crafting modern, responsive, and high-performance web applications with a focus on seamless user experiences.
            </Text>
            <Flex gap={4} justifyContent={{ base: "center", md: "flex-start" }}>
              <LinkedInAndGithub />
            </Flex>
          </motion.div>
        </Box>
        
        <Box flex="1" display="flex" justifyContent="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Box
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                top: "-10px",
                left: "-10px",
                right: "-10px",
                bottom: "-10px",
                background: "linear-gradient(45deg, #0ea5e9, #3b82f6)",
                borderRadius: "full",
                filter: "blur(20px)",
                opacity: 0.5,
                zIndex: -1,
              }}
            >
              <Avatar
                w={{ base: "250px", md: "350px" }}
                h={{ base: "250px", md: "350px" }}
                name="Aman Deep Kujur"
                src={profile}
                border="4px solid rgba(255, 255, 255, 0.1)"
                boxShadow="xl"
              />
            </Box>
          </motion.div>
        </Box>
      </Flex>
      {/* about */}
      <Box p={{ base: "20px", md: "50px" }} id="about" bg="rgba(255, 255, 255, 0.02)" backdropFilter="blur(10px)" borderRadius="2xl" border="1px solid rgba(255, 255, 255, 0.05)" mt={10}>
        <Heading
          lineHeight="1.30"
          mb="6"
          fontWeight="700"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="brand.themeColor"
        >
          About Me
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} letterSpacing="0.5px" color="whiteAlpha.800" lineHeight="1.8">
          Full Stack Developer with 4+ years of experience building scalable web applications in the ecommerce and SaaS domains. Experienced in React, backend development, API integration, and end-to-end feature delivery. Currently leading a team of 4 engineers, driving code quality, performance optimization, and scalable application architecture. Skilled in feature development, code reviews, mentoring developers, and collaborating with cross-functional teams to deliver reliable, production-ready software. Strong expertise in React Hooks, Redux Toolkit, state management patterns, REST APIs, reusable component systems, and performance optimization techniques.
        </Text>
      </Box>

      {/* education */}
      <Box id="education" py={{ base: "40px", md: "60px" }}>
        <Heading
          lineHeight="1.30"
          mb="10"
          fontWeight="700"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="brand.themeColor"
          textAlign="center"
        >
          Experience & Education
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="flex-start"
          flexWrap="wrap"
          gap={10}
        >
          <Box flex="1" minW={{ base: "100%", md: "500px" }}>
            <Card
              image={
                "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-employee-customer-reviews-tanah-basah-glyph-tanah-basah.png"
              }
              duration={"November 2023 - Present"}
              course={"Frontend Developer ReactJs (Full Time)"}
              institute={"Twinleaves"}
              location={"Bangalore, India"}
            />
            <Card
              image={
                "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-employee-customer-reviews-tanah-basah-glyph-tanah-basah.png"
              }
              duration={"April 2023 - October 2023"}
              course={"Frontend Developer ReactJs Intern"}
              institute={"Twinleaves"}
              location={"Bangalore, India"}
            />
            <Card
              image={"https://cdn-icons-png.flaticon.com/512/1940/1940611.png"}
              duration={"April 2022 - March 2023"}
              course={"Full Stack Web Development"}
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
              location={"Ambikapur, Chhattisgarh"}
            />
          </Box>
          <Box flex="1" display={{ base: "none", lg: "flex" }} justifyContent="center" alignItems="center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src={graduationImage} 
                maxW="500px" 
                w="100%" 
                filter="drop-shadow(0px 10px 20px rgba(0,0,0,0.2))"
              />
            </motion.div>
          </Box>
        </Flex>
      </Box>

      {false && (
        <>
          {/* github stats */}
          <Box w="100%" mb={20}>
            <Heading
              lineHeight="1.30"
              mb="10"
              fontWeight="700"
              fontSize="3xl"
              color="brand.themeColor"
              textAlign="center"
            >
              Github Stats
            </Heading>
            <Flex justifyContent="space-around" flexWrap="wrap" gap={6}>
              <Box
                w={{ base: "100%", md: "48%" }}
                bg="rgba(255, 255, 255, 0.02)"
                p={4}
                borderRadius="2xl"
                border="1px solid rgba(255, 255, 255, 0.05)"
              >
                <Img
                  w="100%"
                  align="center"
                  src="https://github-readme-stats.vercel.app/api?username=amandk5&show_icons=true&locale=en&theme=tokyonight"
                  alt="amandk5"
                />
              </Box>
              <Box
                w={{ base: "100%", md: "48%" }}
                bg="rgba(255, 255, 255, 0.02)"
                p={4}
                borderRadius="2xl"
                border="1px solid rgba(255, 255, 255, 0.05)"
              >
                <Img
                  w="100%"
                  align="center"
                  src="https://github-readme-streak-stats.herokuapp.com/?user=amandk5&theme=tokyonight"
                  alt="amandk5"
                />
              </Box>
            </Flex>
            <Flex mt={6} justifyContent="center" w="100%">
              <Box
                w={{ base: "100%", md: "48%" }}
                bg="rgba(255, 255, 255, 0.02)"
                p={4}
                borderRadius="2xl"
                border="1px solid rgba(255, 255, 255, 0.05)"
              >
                <Img
                  w="100%"
                  align="center"
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=amandk5&show_icons=true&locale=en&layout=compact&theme=tokyonight"
                  alt="amandk5"
                />
              </Box>
            </Flex>
          </Box>

          {/* github calendar */}
          <Box mb={20} w="100%" overflowX="auto" bg="rgba(255, 255, 255, 0.02)" p={8} borderRadius="2xl" border="1px solid rgba(255, 255, 255, 0.05)">
            <Heading
              lineHeight="1.30"
              mb="10"
              fontWeight="700"
              fontSize="3xl"
              color="brand.themeColor"
              textAlign="center"
            >
              Github Calendar
            </Heading>
            <Flex justifyContent="center">
              <CalenderGithub />
            </Flex>
          </Box>
        </>
      )}

      {/* skills */}
      <Box
        id="skills"
        py={{ base: "40px", md: "60px" }}
      >
        <Heading
          lineHeight="1.30"
          mb="10"
          fontWeight="700"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="brand.themeColor"
          textAlign="center"
        >
          My Skills
        </Heading>
        <Flex direction="column" gap={8} maxW="900px" mx="auto">
          {[
            { category: "Frontend", items: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Next.js", "React Router", "Material-UI (MUI)"] },
            { category: "State Management & APIs", items: ["Redux Toolkit", "Context API", "REST APIs", "Axios", "JWT Authentication"] },
            { category: "Performance & Testing", items: ["Memoization", "Lazy Loading", "Code Splitting", "CDN", "Jest", "React Testing Library"] },
            { category: "Generative AI & Tools", items: ["Gemini API", "Prompt Engineering", "Claude Code", "Github Co-Pilot", "Figma MCP"] },
            { category: "Backend & Infrastructure", items: ["Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Postman", "GCP", "Agile/Scrum"] },
          ].map((skillSet, idx) => (
            <Box 
              key={idx}
              bg="rgba(255, 255, 255, 0.02)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.05)"
              borderRadius="xl"
              p={{ base: 4, md: 6 }}
            >
              <Heading size="md" color="whiteAlpha.900" mb={4} fontWeight="600">
                {skillSet.category}
              </Heading>
              <Flex flexWrap="wrap" gap={3}>
                {skillSet.items.map((item, itemIdx) => (
                  <Box
                    as={motion.div}
                    key={itemIdx}
                    whileHover={{ y: -3, scale: 1.05 }}
                    px={4}
                    py={2}
                    bg="rgba(14, 165, 233, 0.1)"
                    color="brand.themeColor"
                    border="1px solid rgba(14, 165, 233, 0.2)"
                    borderRadius="full"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    {item}
                  </Box>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* projects */}
      <Box id="projects" py={{ base: "40px", md: "60px" }}>
        <Heading
          lineHeight="1.30"
          mb="10"
          fontWeight="700"
          fontSize={{ base: "2xl", md: "3xl" }}
          color="brand.themeColor"
          textAlign="center"
        >
          Projects
        </Heading>
        <Flex
          justifyContent="center"
          alignItems="stretch"
          flexWrap="wrap"
          gap={8}
        >
          <ProjectCard
            projectName="Fithub"
            projectImage={fithub}
            projectDescription="Fithub Blender provides free full length workout videos, workout routines, healthy recipes etc."
            projectLink="https://fithub-mu.vercel.app/"
            projectGithubLink="https://github.com/nilamkhose2001/obsolete-battle-2339-fithub-"
            techStack="HTML | CSS | JavaScript | React | Redux | Express | MongoDB | Chakra UI"
          />
          <ProjectCard
            projectName="Nutrimeter"
            projectImage={nutrimeter}
            projectDescription="Nutrimeter is a one stop solution for all health related information and to track your daily calories."
            projectLink="https://nutrimeter.vercel.app/"
            projectGithubLink="https://github.com/harshu878/nutrimeter"
            techStack="HTML | CSS | JavaScript | React | Redux | Express | MongoDB | Chakra UI"
          />
          <ProjectCard
            projectName="Zoomcar Clone"
            projectImage={zoomcar}
            projectDescription="An online car rental platform where you can rent self drive cars from a wide range of cars collection."
            projectLink="https://rural-vessel-2538-flax.vercel.app/"
            projectGithubLink="https://github.com/amandk5/rural-vessel-2538"
            techStack="HTML | CSS | JavaScript | React | Chakra UI"
          />
          <ProjectCard
            projectName="Intern-Theory Clone"
            projectImage={interntheory}
            projectDescription="A platform where you can search for internships and apply for the same."
            projectLink="https://ubiquitous-wire-4930.vercel.app/"
            projectGithubLink="https://github.com/amandk5/ubiquitous-wire-4930"
            techStack="HTML | CSS | JavaScript | React | Chakra UI"
          />
          <ProjectCard
            projectName="MentiMeter Clone"
            projectImage={mentimeter}
            projectDescription="An online platform to create presentations, slides, quizzes, polls etc."
            projectLink="https://luxury-gnome-1827a2.netlify.app/"
            projectGithubLink="https://github.com/amandk5/grandiose-juice-9763"
            techStack="HTML | CSS | JavaScript | Bootstrap"
          />
          <ProjectCard
            projectName="Kindmeal Clone"
            projectImage={kindmeal}
            projectDescription="A restaurant coupon service provider where you can search restaurants and grab coupons."
            projectLink="https://kindmeal-unit-2-project.netlify.app/"
            projectGithubLink="https://github.com/SunilHooda/kindmeal.my-Clone"
            techStack="HTML | CSS | JavaScript | Bootstrap"
          />
        </Flex>
      </Box>
    </>
  );
}
