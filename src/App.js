import './App.css';
import './index.css';
import React from 'react';
import {useEffect, useState} from 'react';

import AboutPage from './components/AboutPage.react';
import CVPage from './components/CVPage.react';
import HomePage from './components/HomePage.react';
import Nav from './components/Nav.react';
import {AboutIcon, CodingIcon, CVIcon, HomeIcon, SpeakingIcon, WritingIcon} from './components/icons.react';
import Tooltip from './components/Tooltip.react';

/* Source for this tailwind theme:
 * https://tailwindcomponents.com/component/blogs-posts-card
 */
function App() {
  const allFilters = ['Coding', 'Speaking', 'Writing'];

  const [filters, setFilters] = useState(allFilters);
  const [aboutIsVisible, setAboutIsVisible] = useState(false);
  const [homeIsVisible, setHomeIsVisible] = useState(true);
  const [cvIsVisible, setCVIsVisible] = useState(false);
  const [tooltipIsShown, setTooltipIsShown] = useState(false);
  const [tooltipCoordinates, setTooltipCoordinates] = useState([0, 0]);
  const [tooltipText, setTooltipText] = useState('');
  const [selection, setSelection] = useState('Home');

  useEffect(() => {
    setTooltipIsShown(false);
    setTooltipText('');
  }, [selection]);

  return (
    <div>
    <div className="grid">
      <Tooltip
        isShown={tooltipIsShown}
        text={tooltipText}
        coordinates={tooltipCoordinates}
      >
        {filters[0]}
      </Tooltip>
      <Nav selection={selection}>
        <HomeIcon
          tooltipIsShown={tooltipIsShown}
          setTooltipIsShown={setTooltipIsShown}
          setTooltipCoordinates={setTooltipCoordinates}
          tooltipText={tooltipText}
          setTooltipText={setTooltipText}
          selection={selection}
          onClick={() => {
            setSelection('Home');
            setAboutIsVisible(false);
            setCVIsVisible(false);
            setFilters(allFilters);
            setHomeIsVisible(true);
      }}/>
        <AboutIcon
          tooltipIsShown={tooltipIsShown}
          setTooltipIsShown={setTooltipIsShown}
          setTooltipCoordinates={setTooltipCoordinates}
          tooltipText={tooltipText}
          setTooltipText={setTooltipText}
          selection={selection}
          onClick={() => {
            setSelection('About Me');
            setHomeIsVisible(false);
            setAboutIsVisible(true);
            setCVIsVisible(false);
        }} />
        <WritingIcon
          tooltipIsShown={tooltipIsShown}
          setTooltipIsShown={setTooltipIsShown}
          setTooltipCoordinates={setTooltipCoordinates}
          tooltipText={tooltipText}
          setTooltipText={setTooltipText}
          selection={selection}
          onClick={() => {
            setSelection('Writing');
            setAboutIsVisible(false);
            setCVIsVisible(false);
            setFilters(['Writing']);
            setHomeIsVisible(true);
        }} />
        <CodingIcon
          tooltipIsShown={tooltipIsShown}
          setTooltipIsShown={setTooltipIsShown}
          setTooltipCoordinates={setTooltipCoordinates}
          tooltipText={tooltipText}
          setTooltipText={setTooltipText}
          selection={selection}
          onClick={() => {
            setSelection('Coding');
            setAboutIsVisible(false);
            setCVIsVisible(false);
            setFilters(['Coding']);
            setHomeIsVisible(true);
        }} />
        <SpeakingIcon
          tooltipIsShown={tooltipIsShown}
          setTooltipIsShown={setTooltipIsShown}
          setTooltipCoordinates={setTooltipCoordinates}
          tooltipText={tooltipText}
          setTooltipText={setTooltipText}
          selection={selection}
          onClick={() => {
            setSelection('Speaking');
            setAboutIsVisible(false);
            setCVIsVisible(false);
            setFilters(['Speaking']);
            setHomeIsVisible(true);
        }} />
        <CVIcon
          tooltipIsShown={tooltipIsShown}
          setTooltipIsShown={setTooltipIsShown}
          setTooltipCoordinates={setTooltipCoordinates}
          tooltipText={tooltipText}
          setTooltipText={setTooltipText}
          selection={selection}
          onClick={() => {
            setSelection('CV');
            setHomeIsVisible(false);
            setAboutIsVisible(false);
            setCVIsVisible(true);
        }} />
      </Nav>
    <div className="grid ml-10">
      <header className="h-20 border-b border-gray-300 border-solid">
        <h1 className="text-4xl">Kairsten Fay</h1>
      </header>

      <HomePage
        filters={filters}
        isVisible={homeIsVisible} />
      <AboutPage isVisible={aboutIsVisible} />
      <CVPage isVisible={cvIsVisible} />
      </div>
    </div>
      <footer>test</footer>
      </div>
  );
}

export default App;
