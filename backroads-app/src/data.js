import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const PAGELINKS = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#featured',
    text: 'featured',
  },
];

export const SOCIALLINKS = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    icon: 'fab fa-squarespace',
  },
];

export const SERVICESSECTION = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const FEATUREDTOURS = [
  {
    id: 1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    price: 'from $2100',
    image: tour1,
  },
  {
    id: 2,
    date: 'october 11th, 2020',
    title: 'Best Of Java',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
    image: tour2,
  },
  {
    id: 3,
    date: 'september 15th, 2020',
    title: 'Explore Hong Kong',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: '8 days',
    price: 'from $5000',
    image: tour3,
  },
  {
    id: 4,
    date: 'december 5th, 2019',
    title: 'Kenya Highlights',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '20 days',
    price: 'from $3300',
    image: tour4,
  },
];
