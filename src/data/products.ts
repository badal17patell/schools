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

export const products: Product[] = [
  // Sample uniform products
  {
    id: "u1",
    name: "School Shirt - White",
    category: "uniform",
    schoolId: "mh1",
    price: 450,
    description: "Premium quality white school shirt with school logo",
    image: "/products/uniform-shirt.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 50,
  },
  {
    id: "u2",
    name: "School Trousers - Navy Blue",
    category: "uniform",
    schoolId: "mh1",
    price: 650,
    description: "Comfortable navy blue school trousers",
    image: "/products/uniform-trousers.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 50,
  },
  {
    id: "u3",
    name: "School Tie - Striped",
    category: "uniform",
    schoolId: "mh1",
    price: 150,
    description: "School tie with house colors",
    image: "/products/uniform-tie.jpg",
    quantity: 100,
  },
  {
    id: "u4",
    name: "School Blazer",
    category: "uniform",
    schoolId: "mh1",
    price: 1800,
    description: "Premium school blazer with embroidered logo",
    image: "/products/uniform-blazer.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    quantity: 30,
  },
  {
    id: "u5",
    name: "School Skirt - Pleated",
    category: "uniform",
    schoolId: "mh1",
    price: 550,
    description: "Pleated school skirt - navy blue",
    image: "/products/uniform-skirt.jpg",
    sizes: ["S", "M", "L", "XL"],
    quantity: 40,
  },
  // Sample book products
  {
    id: "b1",
    name: "Mathematics Textbook - Class 1",
    category: "book",
    schoolId: "mh1",
    price: 250,
    description: "NCERT Mathematics textbook for Class 1",
    image: "/products/maths-book.jpg",
    quantity: 100,
  },
  {
    id: "b2",
    name: "English Reader - Class 1",
    category: "book",
    schoolId: "mh1",
    price: 200,
    description: "English reader for Class 1",
    image: "/products/english-book.jpg",
    quantity: 100,
  },
  {
    id: "b3",
    name: "Science Textbook - Class 1",
    category: "book",
    schoolId: "mh1",
    price: 280,
    description: "NCERT Science textbook for Class 1",
    image: "/products/science-book.jpg",
    quantity: 100,
  },
  {
    id: "b4",
    name: "Hindi Textbook - Class 1",
    category: "book",
    schoolId: "mh1",
    price: 180,
    description: "Hindi textbook for Class 1",
    image: "/products/hindi-book.jpg",
    quantity: 100,
  },
  {
    id: "b5",
    name: "Social Studies - Class 1",
    category: "book",
    schoolId: "mh1",
    price: 220,
    description: "Social Studies textbook for Class 1",
    image: "/products/sst-book.jpg",
    quantity: 100,
  },
  // Accessories
  {
    id: "a1",
    name: "School Bag - Standard",
    category: "accessory",
    schoolId: "mh1",
    price: 850,
    description: "Durable school bag with multiple compartments",
    image: "/products/school-bag.jpg",
    quantity: 50,
  },
  {
    id: "a2",
    name: "Water Bottle",
    category: "accessory",
    schoolId: "mh1",
    price: 350,
    description: "Insulated water bottle - 500ml",
    image: "/products/water-bottle.jpg",
    quantity: 80,
  },
  {
    id: "a3",
    name: "Lunch Box",
    category: "accessory",
    schoolId: "mh1",
    price: 300,
    description: "BPA free lunch box with compartments",
    image: "/products/lunch-box.jpg",
    quantity: 80,
  },
];

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
