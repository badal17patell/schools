export interface Product {
  id: string;
  name: string;
  category: "uniform" | "book" | "accessory";
  schoolId: string;
  price: number;
  description: string;
  image: string;
  sizes?: string[];
  quantity: number;
}

// Product templates to generate for each school
const uniformProducts = [
  { name: "School Shirt - White", price: 450, desc: "Premium quality white school shirt with school logo", sizes: ["S", "M", "L", "XL", "XXL"] },
  { name: "School Trousers - Navy Blue", price: 650, desc: "Comfortable navy blue school trousers", sizes: ["S", "M", "L", "XL", "XXL"] },
  { name: "School Tie - Striped", price: 150, desc: "School tie with house colors", sizes: undefined },
  { name: "School Blazer", price: 1800, desc: "Premium school blazer with embroidered logo", sizes: ["S", "M", "L", "XL", "XXL"] },
  { name: "School Skirt - Pleated", price: 550, desc: "Pleated school skirt - navy blue", sizes: ["S", "M", "L", "XL"] },
  { name: "School Shorts - Navy", price: 450, desc: "Comfortable navy blue school shorts", sizes: ["S", "M", "L", "XL"] },
  { name: "House T-Shirt", price: 350, desc: "House color t-shirt for sports activities", sizes: ["S", "M", "L", "XL", "XXL"] },
  { name: "School Sweater", price: 750, desc: "Warm school sweater for winter", sizes: ["S", "M", "L", "XL", "XXL"] },
  { name: "School Socks - White", price: 80, desc: "White school socks (pack of 3)", sizes: undefined },
  { name: "School Belt", price: 120, desc: "Official school belt with buckle", sizes: undefined },
];

const bookProducts = [
  { name: "Mathematics Textbook - Class 1", price: 250, desc: "NCERT Mathematics textbook for Class 1" },
  { name: "English Reader - Class 1", price: 200, desc: "English reader for Class 1" },
  { name: "Science Textbook - Class 1", price: 280, desc: "NCERT Science textbook for Class 1" },
  { name: "Hindi Textbook - Class 1", price: 180, desc: "Hindi textbook for Class 1" },
  { name: "Social Studies - Class 1", price: 220, desc: "Social Studies textbook for Class 1" },
  { name: "Mathematics Textbook - Class 2", price: 260, desc: "NCERT Mathematics textbook for Class 2" },
  { name: "English Reader - Class 2", price: 210, desc: "English reader for Class 2" },
  { name: "Science Textbook - Class 2", price: 290, desc: "NCERT Science textbook for Class 2" },
  { name: "Computer Science - Class 1", price: 300, desc: "Computer science basics for Class 1" },
  { name: "General Knowledge - Class 1", price: 150, desc: "GK book for Class 1" },
];

const accessoryProducts = [
  { name: "School Bag - Standard", price: 850, desc: "Durable school bag with multiple compartments" },
  { name: "Water Bottle", price: 350, desc: "Insulated water bottle - 500ml" },
  { name: "Lunch Box", price: 300, desc: "BPA free lunch box with compartments" },
  { name: "Pencil Box", price: 150, desc: "Plastic pencil box with compartments" },
  { name: "Geometry Box", price: 200, desc: "Complete geometry set for mathematics" },
  { name: "School Diary", price: 120, desc: "School diary for daily notes" },
  { name: "ID Card Holder", price: 80, desc: "Plastic ID card holder with lanyard" },
  { name: "Raincoat", price: 450, desc: "Waterproof raincoat for monsoon" },
  { name: "Umbrella - Small", price: 250, desc: "Compact umbrella for students" },
  { name: "Shoe Polish Kit", price: 100, desc: "Shoe polish with brush" },
];

// Generate products for all schools
export const products: Product[] = [];

// Product images mapping
export const productImages: { [key: string]: string } = {
  "shirt": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
  "trousers": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
  "tie": "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
  "blazer": "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=400&h=400&fit=crop",
  "skirt": "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop",
  "shorts": "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
  "tshirt": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
  "sweater": "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
  "socks": "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop",
  "belt": "https://images.unsplash.com/photo-1556906781-2f0527f54d1d?w=400&h=400&fit=crop",
  "maths": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=400&fit=crop",
  "english": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
  "science": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop",
  "hindi": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop",
  "sst": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  "computer": "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?w=400&h=400&fit=crop",
  "gk": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=400&fit=crop",
  "bag": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
  "bottle": "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop",
  "lunch": "https://images.unsplash.com/photo-1534351590666-13e3e96b5571?w=400&h=400&fit=crop",
  "pencil": "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=400&h=400&fit=crop",
  "geometry": "https://images.unsplash.com/photo-1509225770129-c29e26cb846b?w=400&h=400&fit=crop",
  "diary": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
  "idcard": "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop",
  "raincoat": "https://images.unsplash.com/photo-1556906781-2f0527f54d1d?w=400&h=400&fit=crop",
  "umbrella": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop",
  "shoepolish": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop",
};

function getImageForProduct(name: string): string {
  const lowerName = name.toLowerCase();
  for (const [key, url] of Object.entries(productImages)) {
    if (lowerName.includes(key)) {
      return url;
    }
  }
  return "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&h=400&fit=crop";
}

// Generate 15 products for each school
let productIdCounter = 1;
const schools = ["ap1", "ap2", "ap3", "ap4", "ap5", "br1", "br2", "br3", "br4", "br5", "cg1", "cg2", "cg3", "cg4", "cg5", "dl1", "dl2", "dl3", "dl4", "dl5", "ga1", "ga2", "ga3", "ga4", "ga5", "gj1", "gj2", "gj3", "gj4", "gj5", "hr1", "hr2", "hr3", "hr4", "hr5", "hp1", "hp2", "hp3", "hp4", "hp5", "jh1", "jh2", "jh3", "jh4", "jh5", "kn1", "kn2", "kn3", "kn4", "kn5", "kl1", "kl2", "kl3", "kl4", "kl5", "mp1", "mp2", "mp3", "mp4", "mp5", "mh1", "mh2", "mh3", "mh4", "mh5", "pb1", "pb2", "pb3", "pb4", "pb5", "rj1", "rj2", "rj3", "rj4", "rj5", "tn1", "tn2", "tn3", "tn4", "tn5", "tg1", "tg2", "tg3", "tg4", "tg5", "up1", "up2", "up3", "up4", "up5", "uk1", "uk2", "uk3", "uk4", "uk5", "wb1", "wb2", "wb3", "wb4", "wb5"];

schools.forEach((schoolId) => {
  // Add 5 uniforms
  uniformProducts.slice(0, 5).forEach((prod, idx) => {
    products.push({
      id: `u${productIdCounter++}`,
      name: prod.name,
      category: "uniform",
      schoolId,
      price: prod.price,
      description: prod.desc,
      image: getImageForProduct(prod.name),
      sizes: prod.sizes,
      quantity: Math.floor(Math.random() * 50) + 20,
    });
  });

  // Add 5 books
  bookProducts.slice(0, 5).forEach((prod) => {
    products.push({
      id: `b${productIdCounter++}`,
      name: prod.name,
      category: "book",
      schoolId,
      price: prod.price,
      description: prod.desc,
      image: getImageForProduct(prod.name),
      quantity: Math.floor(Math.random() * 100) + 50,
    });
  });

  // Add 5 accessories
  accessoryProducts.slice(0, 5).forEach((prod) => {
    products.push({
      id: `a${productIdCounter++}`,
      name: prod.name,
      category: "accessory",
      schoolId,
      price: prod.price,
      description: prod.desc,
      image: getImageForProduct(prod.name),
      quantity: Math.floor(Math.random() * 80) + 30,
    });
  });
});

export function getProductsBySchool(schoolId: string): Product[] {
  return products.filter((product) => product.schoolId === schoolId);
}

export function getProductsByCategory(
  schoolId: string,
  category: Product["category"]
): Product[] {
  return products.filter(
    (product) => product.schoolId === schoolId && product.category === category
  );
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
