import React from "react";
import Card from "./Card.react";
import A from "./A.react";
import P from "./P.react";
import Page from "./Page.react";
import quasar from "../img/quasar-progress-pride-flag.png";

const cards = [
  {
    section: "Speaking",
    title: "Bassnectar",
    children: (
      <>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QYr1m8RI_GE?start=4436"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <P>
          I perform my comedy story, "Bassnectar", about a misguided college student's
          night out. See me at 1:14:00.
        </P>
      </>
    ),
  },
  {
    section: "Speaking",
    title: "Self Taught Programmers: Advice, Challenges, and Why We Need Them",
    children: (
      <>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/j38_oXALe4U"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
        <P>
          I have a couple of cameos giving advice on how to become a self-taught
          software developer.
        </P>
      </>
    ),
  },
  {
    section: "Writing",
    title: "3 Writing Exercises Guaranteed to Make You a Better Engineer",
    img: "https://miro.medium.com/max/1400/1*XD6pMWg0qPR2Nc5Q2XcxhQ.jpeg",
    alt: "A woman writing at a desk with a laptop near her",
    href: "https://medium.com/codex/3-writing-exercises-guaranteed-to-make-you-a-better-engineer-cf8e88f6af2b",
    children: <P>Get promoted by honing your written communiction skills.</P>,
  },
  {
    section: "Writing",
    title: "7 Tips for Networking Effectively as an Underrepresented Minority in Tech",
    img: "https://miro.medium.com/max/1400/1*aTyrTkSDQvUGmCadsbnL_A.png",
    alt: "A group of diverse people",
    href: "https://medium.com/codex/how-to-network-as-an-underrepresented-minority-in-tech-2da1bafa42d6",
    children: <P>Surround yourself with allies, step by step.</P>,
  },
  {
    section: "Writing",
    title:
      "Here's the study plan a self-taught engineer used to get two FAANG offers",
    img: "https://miro.medium.com/max/1400/1*yG8QVBEnTx3ebUh7pHLwWg.png",
    alt: "A sankey diagram of my job hunt experience",
    href: "https://medium.com/codex/heres-the-study-plan-a-self-taught-software-engineer-used-to-get-two-faang-offers-2e1b7c757e45",
    children: (
      <P>I wrote in detail about my study plan for my 2020 job hunt.</P>
    ),
  },
  {
    section: "Writing",
    title: "How I became a software engineer for under $200",
    img: "https://miro.medium.com/max/1400/1*c49YUEda5QMCwK16OANSyw.jpeg",
    alt: "A ceramic piggy bank wearing a tiara",
    href: "https://medium.com/codex/how-i-became-a-software-engineer-for-under-200-ea25238e63fd",
    children: <P>A memoir of my transition to tech.</P>,
  },
  {
    section: "Coding",
    title: "Slack Wayback Machine",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Wayback_Machine_logo_2010.svg",
    alt: "A sankey diagram of my job hunt experience",
    href: "https://github.com/kairstenfay/slack-wayback",
    children: (
      <P>
        A Slack bot that finds the latest{" "}
        <A href="https://web.archive.org">web.archive.org</A> copy of links in a
        message. Useful for getting around paywalls.
      </P>
    ),
  },
  {
    section: "Speaking",
    title: "Saving Lives with Data: The COVID-19 SCAN Study",
    img: "https://images.ctfassets.net/53ghv3la0oan/74LGmqZN4ZOCAW59P19Vu4/4c32d253339b8d85834a81ff7e11910e/SCAN_social.png",
    alt: "SCAN - Greater Seattle Coronavirus Assessment Network Study",
    href: "https://drive.google.com/file/d/1D2uJfcoY7HWBGbP2jlPdQNT4A3EMW6-x/view",
    children: (
      <>
        <P>
          A recording of the talk I gave with{" "}
          <A href="https://docs.google.com/presentation/d/1eecTlsasUBImyreb3d5THVNiJzTL8lY8Ord44f2P54g/edit#slide=id.p">
            accompanying slides
          </A>
          .
        </P>
        <hr />
        <P>
          @
          <A href="https://www.eventbrite.com/e/saving-lives-with-data-the-covid-19-scan-study-tickets-108916857252">
            Northeastern University - Seattle
          </A>
        </P>
        <hr />
        <P>
          @<A href="https://healthdata.org">IHME</A> Women in Tech affinity
          group
        </P>
      </>
    ),
  },
  {
    section: "Coding",
    title: "Single div Quasar pride flag",
    img: quasar,
    alt: 'The Quasar "progress" pride flag',
    href: "https://codepen.io/kairstenfay/pen/YzwWQMN",
    children: (
      <>A single div rendering of the Quasar progress pride flag with CSS.</>
    ),
  },
  {
    section: "Speaking",
    title: "Intro to React (with hooks!)",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "ReactJS logo",
    href: "https://github.com/kairstenfay/intro-react",
    children: (
      <>
        <P>
          A beginner-friendly tutorial I wrote to introduce people to React with
          hooks.
        </P>
        <hr />
        <P>
          @
          <A href="https://www.meetup.com/WSC-Seattle/events/266565073/">
            Write/Speak/Code
          </A>
          , Seattle
        </P>
        <hr />
        <P>
          @
          <A href="https://github.com/blab/wiki/wiki/Lab-meeting-Fall-2019">
            Bedford lab meeting
          </A>
        </P>
      </>
    ),
  },
  {
    section: "Speaking",
    title: "The Unix Shell",
    img: "https://files.software-carpentry.org/logo_circle.jpg",
    alt: "Software Carpentry logo",
    href: "https://swcarpentry.github.io/shell-novice/",
    children: (
      <>
        <P>A 3.5 hour lesson created by volunteers of Software Carpentry.</P>
        <hr />
        <P>
          @
          <A href="https://ti.to/write-speak-code/oye-2019-sea">
            Own Your Expertise - Write/Speak/Code
          </A>
          , Seattle
        </P>
        <hr />
        <P>
          @
          <A href="https://uwescience.github.io/2019-10-01-uw/">
            University of Washington eSciences Institute
          </A>
        </P>
      </>
    ),
  },
];

const HomePage = (props) => {
  const filters = props.filters;
  const isFilterActivated = filters.length === 1;

  return (
    <Page
      title={isFilterActivated ? filters[0] : "Portfolio"}
      isVisible={props.isVisible}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards
          .filter((v) => filters.includes(v.section))
          .map((v) => (
            <Card
              key={v.title}
              section={isFilterActivated ? null : v.section}
              title={v.title}
              img={v.img}
              alt={v.alt}
              href={v.href}
              children={v.children}
            />
          ))}
      </div>
    </Page>
  );
};

export default HomePage;
