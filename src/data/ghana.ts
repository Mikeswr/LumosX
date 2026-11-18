import { GhanaFact } from '../types';
import { SRC } from './sources';

// Rule for this file: only add a claim that has been checked against a source, and attach the source.
// No quotations, no invented numbers.

export const GHANA_TIMELINE: { year: string; fact: GhanaFact }[] = [
  {
    year: '2012',
    fact: {
      text: 'The Ghana Space Science and Technology Institute (GSSTI) was officially launched on 2 May 2012.',
      sources: [SRC.gsstiLaunch, SRC.gsstiAbout],
    },
  },
  {
    year: '2017',
    fact: {
      text: 'GhanaSat-1, Ghana\'s first satellite, was carried to the International Space Station in June 2017 and released into orbit from the station on 7 July 2017.',
      sources: [SRC.anuGhanaSat, SRC.jaxaKibo],
    },
  },
  {
    year: '2017',
    fact: {
      text: 'The Ghana Radio Astronomy Observatory at Kuntunse was launched on 24 August 2017.',
      sources: [SRC.presidencyGrao, SRC.mestiGrao],
    },
  },
];

export const GSSTI_TODAY: GhanaFact = {
  text: 'GSSTI is a statutory body under the Ghana Atomic Energy Commission. It has three centres: Radio Astronomy and Astrophysics, Remote Sensing and Climate, and Satellite Communications and Engineering.',
  sources: [SRC.gsstiAbout],
};

export const GHANASAT_FACTS: GhanaFact[] = [
  {
    text: 'GhanaSat-1 was built by the Space Systems Technology Laboratory of All Nations University in Koforidua. It was developed by three Ghanaian engineers in partnership with the Kyushu Institute of Technology in Japan and JAXA.',
    sources: [SRC.anuGhanaSat],
  },
  {
    text: 'It is a CubeSat, built around a cube 10 centimetres wide, and it weighs about one kilogram.',
    sources: [SRC.anuGhanaSat],
  },
  {
    text: 'It carries low and high resolution cameras that were meant to take pictures of Ghana\'s coast.',
    sources: [SRC.anuGhanaSat],
  },
  {
    text: 'A SpaceX Falcon 9 rocket carried it to the International Space Station in June 2017, and it was released from the station on 7 July 2017.',
    sources: [SRC.anuGhanaSat, SRC.jaxaKibo],
  },
];

export const KUNTUNSE_FACTS: GhanaFact[] = [
  {
    text: 'The Ghana Radio Astronomy Observatory is at Kuntunse, near Accra.',
    sources: [SRC.mestiGrao],
  },
  {
    text: 'Its 32 metre dish was a former satellite communications antenna that was converted into a radio telescope.',
    sources: [SRC.mestiGrao, SRC.presidencyGrao],
  },
  {
    text: 'It is part of the African Very Long Baseline Interferometry (VLBI) Network.',
    sources: [SRC.gsstiAbout, SRC.govzaVlbi],
  },
  {
    text: 'Its first test observations included detections of methanol masers and observations of pulsars.',
    sources: [SRC.govzaVlbi],
  },
];
