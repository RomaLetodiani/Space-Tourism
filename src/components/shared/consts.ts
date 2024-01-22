import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';

import douglas from '../../assets/crew/image-douglas-hurley.png';
import mark from '../../assets/crew/image-mark-shuttleworth.png';
import victor from '../../assets/crew/image-victor-glover.png';
import anouesh from '../../assets/crew/image-anousheh-ansari.png';

import vehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import vehicleLand from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg';
import spaceportLand from '../../assets/technology/image-spaceport-landscape.jpg';
import capsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import capsuleLand from '../../assets/technology/image-space-capsule-landscape.jpg';

export const header = [
  {
    title: 'HOME',
    link: '/',
    index: '00',
  },
  {
    title: 'DESTINATION',
    link: '/destination',
    index: '01',
  },
  {
    title: 'CREW',
    link: '/crew',
    index: '02',
  },
  {
    title: 'TECHNOLOGY',
    link: '/technology',
    index: '03',
  },
];

export const destinationImages = [moon, mars, europa, titan];
export const crewImages = [douglas, mark, victor, anouesh];
export const technologyImages = [vehicle, spaceport, capsule];
export const technologyLandImages = [vehicleLand, spaceportLand, capsuleLand];
