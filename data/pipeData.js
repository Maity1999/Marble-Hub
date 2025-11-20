// src/data/pipes.js
export const pipes = [
  {
    id: 1,
    name: "PVC Pressure Pipes",
    category: "PVC Pipes",
    description: "High-quality PVC pressure pipes designed for efficient water supply systems. Excellent corrosion resistance and long service life for both residential and commercial applications.",
    image: "/images/pipes/pvc-pressure.jpg",
    priceRange: "$",
    features: ["Corrosion Resistant", "Lightweight", "Easy Installation"],
    applications: ["Water Supply", "Irrigation", "Industrial Use"],
    sizes: ["1/2 inch", "3/4 inch", "1 inch", "2 inch"],
    standards: ["ISO 4422", "ASTM D1785"]
  },
  {
    id: 2,
    name: "CPVC Hot Water Pipes",
    category: "CPVC Pipes",
    description: "Chlorinated polyvinyl chloride pipes specifically designed for hot water distribution. Withstands high temperatures while maintaining structural integrity and safety.",
    image: "/images/pipes/cpvc-hot-water.jpg",
    priceRange: "$$",
    features: ["Heat Resistant", "Safe for Potable Water", "Durable"],
    applications: ["Hot Water Lines", "Residential Plumbing", "Commercial Buildings"],
    sizes: ["1/2 inch", "3/4 inch", "1 inch"],
    standards: ["ASTM F441", "NSF 61"]
  },
  {
    id: 3,
    name: "Copper Water Pipes",
    category: "Copper Pipes",
    description: "Premium copper pipes offering superior performance for plumbing systems. Natural antimicrobial properties and excellent heat conduction make them ideal for various applications.",
    image: "/images/pipes/copper-water.jpg",
    priceRange: "$$$",
    features: ["Antimicrobial", "Excellent Heat Conduction", "Long Lifespan"],
    applications: ["Drinking Water", "Heating Systems", "Medical Gas"],
    sizes: ["1/2 inch", "3/4 inch", "1 inch", "1.5 inch"],
    standards: ["ASTM B88", "EN 1057"]
  },
  {
    id: 4,
    name: "HDPE Corrugated Pipes",
    category: "HDPE Pipes",
    description: "High-density polyethylene corrugated pipes designed for drainage and sewage systems. Flexible, durable, and resistant to chemicals and environmental stress.",
    image: "/images/pipes/hdpe-corrugated.jpg",
    priceRange: "$$",
    features: ["Flexible", "Chemical Resistant", "Lightweight"],
    applications: ["Drainage Systems", "Sewage Lines", "Cable Protection"],
    sizes: ["4 inch", "6 inch", "8 inch", "12 inch"],
    standards: ["ASTM F667", "EN 13476"]
  },
  {
    id: 5,
    name: "GI Plumbing Pipes",
    category: "GI Pipes",
    description: "Galvanized iron pipes with zinc coating for enhanced corrosion resistance. Strong and reliable for water supply and structural applications in various environments.",
    image: "/images/pipes/gi-plumbing.jpg",
    priceRange: "$$",
    features: ["High Strength", "Corrosion Resistant", "Versatile"],
    applications: ["Water Supply", "Scaffolding", "Structural Use"],
    sizes: ["1/2 inch", "3/4 inch", "1 inch", "2 inch"],
    standards: ["IS 1239", "ASTM A53"]
  },
  {
    id: 6,
    name: "PPR Plumbing Pipes",
    category: "PPR Pipes",
    description: "Polypropylene random copolymer pipes known for excellent thermal resistance and joint reliability. Perfect for hot and cold water distribution systems.",
    image: "/images/pipes/ppr-plumbing.avif",
    priceRange: "$$",
    features: ["Thermal Resistant", "Leak-proof Joints", "Chemical Resistant"],
    applications: ["Domestic Water", "Heating Systems", "Industrial Plumbing"],
    sizes: ["20mm", "25mm", "32mm", "40mm"],
    standards: ["DIN 8077", "DIN 8078"]
  },
  {
    id: 7,
    name: "UPVC Sewer Pipes",
    category: "UPVC Pipes",
    description: "Unplasticized PVC pipes designed for sewer and drainage applications. Excellent flow characteristics and resistance to abrasion and chemicals.",
    image: "/images/pipes/upvc-sewer.jpg",
    priceRange: "$",
    features: ["Smooth Interior", "Abrasion Resistant", "Easy to Install"],
    applications: ["Sewer Lines", "Drainage", "Waste Systems"],
    sizes: ["4 inch", "6 inch", "8 inch", "10 inch"],
    standards: ["ASTM D2729", "IS 13592"]
  },
  {
    id: 8,
    name: "Stainless Steel Pipes",
    category: "Steel Pipes",
    description: "Premium stainless steel pipes offering exceptional corrosion resistance and strength. Ideal for demanding applications in chemical, food, and pharmaceutical industries.",
    image: "/images/pipes/stainless-steel.jpg",
    priceRange: "$$$$",
    features: ["High Corrosion Resistance", "Hygienic", "High Strength"],
    applications: ["Chemical Plants", "Food Industry", "Pharmaceutical"],
    sizes: ["1/2 inch", "3/4 inch", "1 inch", "2 inch"],
    standards: ["ASTM A312", "ASTM A269"]
  }
];

export const pipeCategories = [
  { id: 1, name: "PVC Pipes", count: 2 },
  { id: 2, name: "Metal Pipes", count: 3 },
  { id: 3, name: "Specialty Pipes", count: 3 },
  { id: 4, name: "Industrial Pipes", count: 2 }
];