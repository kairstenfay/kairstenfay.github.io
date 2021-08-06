import React from 'react';
import Card from './Card.react';
import A from './A.react';
import P from './P.react';
import Page from './Page.react';

const cards = [
  {
    section: "Writing",
    title: "How I became a software engineer for under $200",
    img: "https://miro.medium.com/max/1400/1*Eq4RZTAhgn6Vw1cIqYQVPA.jpeg",
    alt: "A golden piggy bank",
    href: "https://medium.com/codex/how-i-became-a-software-engineer-for-under-200-ea25238e63fd",
    children:
      <P>
        A memoir of my transition to tech.
      </P>
  },
  {
    section: "Writing",
    title: "Here's the study plan a self-taught engineer used to get two FAANG offers",
    img: "https://miro.medium.com/max/1400/1*yG8QVBEnTx3ebUh7pHLwWg.png",
    alt: "A sankey diagram of my job hunt experience",
    href: "https://medium.com/codex/heres-the-study-plan-a-self-taught-software-engineer-used-to-get-two-faang-offers-2e1b7c757e45",
    children:
      <P>
        I wrote in detail about my study plan for my 2020 job hunt.
      </P>
  },
  {
    section: "Coding",
    title: "Slack Wayback Machine",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Wayback_Machine_logo_2010.svg",
    alt: "A sankey diagram of my job hunt experience",
    href: "https://github.com/kairstenfay/slack-wayback",
    children:
      <P>
        A Slack bot that finds the latest <A href="https://web.archive.org">web.archive.org</A> copy of links in a message.
        Useful for getting around paywalls.
      </P>
  },
  {
    section: "Speaking",
    title: "Saving Lives with Data: The COVID-19 SCAN Study",
    img: "https://images.ctfassets.net/53ghv3la0oan/74LGmqZN4ZOCAW59P19Vu4/4c32d253339b8d85834a81ff7e11910e/SCAN_social.png",
    alt: "SCAN - Greater Seattle Coronavirus Assessment Network Study",
    href: "https://drive.google.com/file/d/1D2uJfcoY7HWBGbP2jlPdQNT4A3EMW6-x/view",
    children:
      <P>A recording of the talk I gave at Northeastern University with{' '}
        <A href="https://docs.google.com/presentation/d/1eecTlsasUBImyreb3d5THVNiJzTL8lY8Ord44f2P54g/edit#slide=id.p">
          accompanying slides
        </A>.
      </P>,
  }
];

const HomePage = (props) => {
  const filters = props.filters;
  return (
    <Page
      title={filters.length === 1 ? filters[0] : 'Portfolio'}
      isVisible={props.isVisible}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards
          .filter(v => filters.includes(v.section))
          .map(v => (
            <Card
              key={v.title}
              section={v.section}
              title={v.title}
              img={v.img}
              alt={v.alt}
              href={v.href}
              children={v.children}
              />
          ))
        }
      </div>
  </Page>
  );
}

export default HomePage;
