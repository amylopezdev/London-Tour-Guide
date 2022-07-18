const data = [
  {
    id: "tatemodern",
    title: "tate modern",
    subtitle: "museum",
    category: "Art",
    description:
      "Modern art gallery with international works on display, plus a cafe with panoramic river views",
    tags: ["art", "cafe", "contemporary"],
    budget: 0,
    website: "https://www.tate.org.uk/",
    address: "Tate Modern, Bankside, London SE1 9TG",
    images: [
      "./images/tatemodern1.jpeg",
    ],
  },
  {
    id: "bigben",
    title: "big ben",
    subtitle: "landmark",
    category: "Landmark",
    description: "",
    tags: [],
    budget: 0,
    website: "https://www.parliament.uk/bigben/",
    address: "Big Ben",
    images: [
      "./images/bigben1.jpeg",
    ],
  },
  {
    id: "sketch",
    title: "sketch",
    subtitle: "restaurant",
    category: "Restaurant",
    description: "",
    tags: ["cocktails", "high tea", "aesthetic"],
    budget: 4,
    website: "https://sketch.london/",
    address: "Sketch 9 Conduit St, London W1S 2XG",
    images: [
      "./images/sketch1.jpeg",
      "./images/sketch2.jpeg",
      "./images/sketch3.jpeg",
    ],
  },
  {
    id: "bricklanevintage",
    title: "the brick lane vintage market",
    subtitle: "market",
    category: "Shopping",
    description: "",
    tags: ["thirft stores", "vintage", "shopping"],
    budget: 2,
    website: "http://www.vintage-market.co.uk/",
    address: "The Brick Lane Vintage Market 85 Brick Ln, London E1 6QL",
    images: ["./images/bricklanemarket1.jpeg"],
  },
  {
    id: "regents",
    title: "regents park",
    subtitle: "park",
    category: "Nature",
    tags: ["nature", "garden", "cafe"],
    budget: 0,
    website: "https://www.royalparks.org.uk/parks/the-regents-park",
    address: "The Regents Park",
    images: [
      "./images/regentspark1.jpeg",
      "./images/regentspark2.jpeg"
    ],
  },
  {
    id: "shoreditch",
    title: "shoreditch",
    subtitle: "area",
    category: "Area",
    description: "",
    tags: ["street art", "nightlife", "restaurants", "cafes", "clubs", "bars"],
    budget: 3,
    address: "Shoreditch, London",
    images: [
      "./images/shoreditch1.jpeg",
      "./images/shoreditch2.jpeg"
    ],
  },
  {
    id: "",
    title: "orrery",
    subtitle: "restaurant",
    category: "Restaurant",
    description: "",
    tags: ["french"],
    budget: 3,
    website: "https://www.orrery-restaurant.co.uk/",
    address: "Orrery 55 Marylebone High Street, London W1U 5RB",
    images: ["./images/orrery1.jpeg",
      "./images/orrery2.jpeg"],
  },
  {
    id: "barbican",
    title: "barbican centre",
    subtitle: "performing arts centre",
    category: "Art",
    description: "",
    tags: ["art", "nature", "architecture", "cinema", "conservatory"],
    budget: 0,
    website: "https://www.barbican.org.uk/",
    address: "Barbican Centre, Silk Street, London, EC2Y 8DS",
    images: [
      "./images/barbican1.jpeg",
      "./images/barbican2.jpeg",
      "./images/barbican3.jpeg",
    ],
  },
  {
    id: "camden",
    title: "camden market",
    subtitle: "market",
    category: "Shopping",
    description: "",
    tags: ["shopping", "cafes", "street food", "street art"],
    budget: 2,
    website: "https://www.camdenmarket.com/",
    address: "54-56 Camden Lock Pl, London NW1 8AF",
    images: [
      "./images/camden1.jpeg",
      "./images/camden2.jpeg"
    ],
  },
  {
    id: "brixton",
    title: "brixton",
    subtitle: "area",
    category: "Area",
    description: "",
    tags: ["street food", "street art", "bars", "clubs", "nightlife", "cafes", "thrift stores"],
    budget: 2,
    images: ["./images/brixton1.jpeg"],
  },
  {
    id: "duckwaffle",
    title: "duck and waffle",
    subtitle: "restaurant",
    category: "Restaurant",
    description: "",
    tags: ["city views"],
    budget: 3,
    website: "https://duckandwaffle.com/",
    address: "Duck and Waffle 110 Bishopsgate, London EC2N 4AY",
    images: ["./images/duckandwaffle1.jpeg"],
  },
  {
    id: "junkyard",
    title: "God's own junkyard",
    subtitle: "museum",
    category: "Art",
    description:
      "Funky art gallery featuring colourful neon signs and other eclectic pieces",
    tags: ["art", "quirky"],
    budget: 0,
    website: "https://www.godsownjunkyard.co.uk/",
    address: "Unit 12, Ravenswood Industrial Estate, Shernhall St, London E17 9HQ",
    images: [
      "./images/junkyard1.jpeg",
    ],
  },
  {
    id: "hydepark",
    title: "hyde park",
    subtitle: "park",
    category: "Nature",
    description: "",
    tags: ["nature", "garden", "cafe"],
    budget: 0,
    website:
      "https://www.royalparks.org.uk/parks/hyde-park?utm_source=google&utm_medium=organic&utm_campaign=google-my-business&utm_content=hyde-park",
    address: "Hyde Park London",
    images: [
      "./images/hydepark1.jpeg",
    ],
  },
  {
    id: "chinat",
    title: "chinatown",
    subtitle: "area",
    category: "Area",
    description: "",
    tags: ["restaurants", "shopping"],
    budget: 2,
    website: "https://chinatown.co.uk/en/",
    address: "Chinatown London",
    images: [
      "./images/chinatown1.jpeg",
    ],
  },
  {
    id: "londoneye",
    title: "london eye",
    subtitle: "landmark",
    category: "Landmark",
    description: "",
    tags: ["city views"],
    budget: 2,
    website: "https://www.londoneye.com/",
    address: "London Eye",
    images: [
      "./images/londoneye1.jpeg",
    ],
  },
  {
    id: "portebello",
    title: "portebello road market",
    subtitle: "market",
    category: "Shopping",
    description: "",
    tags: ["shopping", "cafe", "thrift shops", "street food", "restaurants"],
    budget: 2,
    website: "https://visitportobello.com/",
    address: "Portbello Road Market Portobello Rd, London W10 5TY",
    images: [
      "./images/portebello1.jpeg",
    ],
  },
  {
    id: "harrods",
    title: "harrods",
    subtitle: "department store",
    category: "Shopping",
    description: "",
    tags: ["shopping"],
    budget: 5,
    website: "",
    address: "Harrods",
    images: [
      "./images/harrods1.jpeg",
    ],
  },
  {
    id: "buckingpal",
    title: "buckingham palace",
    subtitle: "landmark",
    category: "Landmark",
    description: "",
    tags: [],
    budget: 0,
    website: "https://www.royal.uk/search?tags%5B0%5D=Buckingham%20Palace",
    address: "Buckingham Palace London",
    images: ["./images/buckingham1.jpeg"],
  },
  {
    id: "richmond",
    title: "richmond park",
    subtitle: "park",
    category: "Nature",
    description: "",
    tags: ["nature", "garden"],
    budget: 0,
    website:
      "https://www.royalparks.org.uk/parks/richmond-park?gclid=EAIaIQobChMI0deXn5Sy-AIVDevtCh2rEQJJEAAYASAAEgKRJ_D_BwE",
    address: "Richmond Park",
    images: [
      "./images/richmond1.jpeg",
    ],
  },
  {
    id: "littlev",
    title: "little venice",
    subtitle: "area",
    category: "Area",
    description: "",
    tags: ["bars", "restaurants", "cafes"],
    budget: 2,
    address: "Little Venice London",
    images: ["./images/littlevenice1.jpeg"],
  },
  {
    id: "screencanal",
    title: "Screen on the Canal",
    subtitle: "cinema",
    category: "Art",
    description: "Open air film festival",
    tags: [],
    budget: 0,
    website: "https://www.kingscross.co.uk/event/screen-on-the-canal",
    address: "Screen on the Canal Granary Square, London",
    images: ["./images/screencanal1.jpeg"],
  },
  {
    id: "canopy",
    title: "Canopy Market",
    subtitle: "market",
    category: "Shopping",
    description: "",
    tags: ["shopping", "cafes", "street food"],
    budget: 2,
    website: "https://canopymarket.co.uk/",
    address: "West Handyside Canopy, London N1C 4BH",
    images: ["./images/canopy1.jpeg"],
  },
];

export default data;
