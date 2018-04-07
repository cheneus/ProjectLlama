import React, { Component } from 'react';
import LondonLaidBack from '../TravelCards/LaidBack/LondonLaidBack';
import LondonAdventurous from '../TravelCards/Adventurous/LondonAdventurous';
import LondonTourist from '../TravelCards/Tourist/LondonTourist';

import ChicagoLaidBack from '../TravelCards/LaidBack/ChicagoLaidBack';
import ChicagoAdventurous from '../TravelCards/Adventurous/ChicagoAdventurous';
import ChicagoTourist from '../TravelCards/Tourist/ChicagoTourist';

import LALaidBack from '../TravelCards/LaidBack/LosAngelesLaidBack';
import LAAdventurous from '../TravelCards/Adventurous/LosAngelesAdventurous';
import LATourist from '../TravelCards/Tourist/LosAngelesTourist';

import MexLaidBack from '../TravelCards/LaidBack/MexicoLaidBack';
import MexAdventurous from '../TravelCards/Adventurous/MexicoAdventurous';
import MexTourist from '../TravelCards/Tourist/MexicoTourist';

import NYLaidBack from '../TravelCards/LaidBack/NewYorkLaidBack';
import NYAdventurous from '../TravelCards/Adventurous/NewYorkAdventurous';
import NYTourist from '../TravelCards/Tourist/NewYorkTourist';

import ThailandLaidBack from '../TravelCards/LaidBack/ThailandLaidBack';
import ThailandAdventurous from '../TravelCards/Adventurous/ThailandAdventurous';
import ThailandTourist from '../TravelCards/Tourist/ThailandTourist';
import './Wrapper.css';


// componentDidMount(){
const Wrapper = (props) => {
  if (props.personality === 'Adventurous') {
    if (props.destination === 'Chicago') {
      return <ChicagoAdventurous />;
    }
    if (props.destination === 'London') {
      return <LondonAdventurous />;
    }
    if (props.destination === 'Los Angeles') {
      return <LAAdventurous />;
    }
    if (props.destination === 'Mexico') {
      return <MexAdventurous />;
    }
    if (props.destination === 'New York') {
      return <NYAdventurous />;
    }
    if (props.destination === 'Thailand') {
      return <ThailandAdventurous />;
    }
  }
  if (props.personality === 'Tourist') {
    if (props.destination === 'Chicago') {
      return <ChicagoTourist />;
    }
    if (props.destination === 'London') {
      return <LondonTourist />;
    }
    if (props.destination === 'Los Angeles') {
      return <LATourist />;
    }
    if (props.destination === 'Mexico') {
      return <MexTourist />;
    }
    if (props.destination === 'New York') {
      return <NYTourist />;
    }
    if (props.destination === 'Thailand') {
      return <ThailandTourist />;
    }
  }
  if (props.personality === 'Laidback') {
    if (props.destination === 'Chicago') {
      return <ChicagoLaidBack />;
    }
    if (props.destination === 'London') {
      return <LondonLaidBack />;
    }
    if (props.destination === 'Los Angeles') {
      return <LALaidBack />;
    }
    if (props.destination === 'Mexico') {
      return <MexLaidBack />;
    }
    if (props.destination === 'New York') {
      return <NYLaidBack />;
    }
    if (props.destination === 'Thailand') {
      return <ThailandLaidBack />;
    }
  }
  // }
};

export default Wrapper;
