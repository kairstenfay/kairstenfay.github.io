/*
 * These MIT license icons are from https://hericons.com
 */
import React from 'react';

import {useEffect, useState} from 'react';

const Icon = props => {
  const setTooltipCoordinates = props.setTooltipCoordinates;
  const setTooltipIsShown = props.setTooltipIsShown;
  const setTooltipText = props.setTooltipText;
  const isSelected = props.selection === props.hoverText;

  const defaultColor = isSelected ? 'bg-gray-500' : '';
  const defaultOutline = isSelected ? 'text-white' : 'text-indigo-600';

  const [color, setColor] = useState(defaultColor);
  const [outlineColor, setOutlineColor] = useState(defaultOutline);

  useEffect(() => {
    setColor(defaultColor);
    setOutlineColor(defaultOutline);
  },
    [defaultColor, defaultOutline]
  );

  return (
    <div
      className={`${color} ${outlineColor} grid bg-opacity-20 cursor-pointer \
        rounded-full p-2`}
      onClick={props.onClick}
      onMouseEnter={e => {
        if (!isSelected) {
          setColor('bg-gray-500');
          setOutlineColor('text-white');
        }
        setTooltipCoordinates([e.target.offsetWidth - 15, e.target.offsetTop]);
        setTooltipText(props.hoverText);
        setTooltipIsShown(true);
      }}
      onMouseLeave={e => {
        console.log(e);
        if (!isSelected) {
          setColor(defaultColor);
          setOutlineColor(defaultOutline);
        }
        setTooltipIsShown(false)
        setTooltipText(null);
      }}
      >
        {props.children}
    </div>
  );
};

const AboutIcon = props => (
  <Icon
    hoverText="About Me"
    setTooltipIsShown={props.setTooltipIsShown}
    setTooltipCoordinates={props.setTooltipCoordinates}
    setTooltipText={props.setTooltipText}
    selection={props.selection}
    onClick={props.onClick}
    >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Icon>
);

const CodingIcon = props => (
  <Icon
    hoverText="Coding"
    setTooltipIsShown={props.setTooltipIsShown}
    setTooltipCoordinates={props.setTooltipCoordinates}
    setTooltipText={props.setTooltipText}
    selection={props.selection}
    onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  </Icon>
);

const CVIcon = props => (
  <Icon
    hoverText="CV"
    setTooltipIsShown={props.setTooltipIsShown}
    setTooltipCoordinates={props.setTooltipCoordinates}
    setTooltipText={props.setTooltipText}
    selection={props.selection}
    onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  </Icon>
);

const HomeIcon = props => (
  <Icon
    hoverText="Home"
    setTooltipIsShown={props.setTooltipIsShown}
    setTooltipCoordinates={props.setTooltipCoordinates}
    setTooltipText={props.setTooltipText}
    selection={props.selection}
    onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </Icon>
);

const SpeakingIcon = props => (
  <Icon
    hoverText="Speaking"
    setTooltipIsShown={props.setTooltipIsShown}
    setTooltipCoordinates={props.setTooltipCoordinates}
    setTooltipText={props.setTooltipText}
    selection={props.selection}
    onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  </Icon>
);

const WritingIcon = props => (
  <Icon
    hoverText="Writing"
    setTooltipIsShown={props.setTooltipIsShown}
    setTooltipCoordinates={props.setTooltipCoordinates}
    setTooltipText={props.setTooltipText}
    selection={props.selection}
    onClick={props.onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  </Icon>
);


export {
  AboutIcon,
  CodingIcon,
  CVIcon,
  HomeIcon,
  SpeakingIcon,
  WritingIcon,
}
