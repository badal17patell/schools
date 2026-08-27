export interface School {
  id: string;
  name: string;
  state: string;
  city: string;
  board: string;
}

export const states = [
  "Andhra Pradesh",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export const schools: School[] = [
  // Andhra Pradesh
  { id: "ap1", name: "Delhi Public School", state: "Andhra Pradesh", city: "Visakhapatnam", board: "CBSE" },
  { id: "ap2", name: "Kendriya Vidyalaya", state: "Andhra Pradesh", city: "Vijayawada", board: "CBSE" },
  { id: "ap3", name: "Sri Chaitanya School", state: "Andhra Pradesh", city: "Guntur", board: "CBSE" },
  { id: "ap4", name: "Narayana School", state: "Andhra Pradesh", city: "Tirupati", board: "CBSE" },
  { id: "ap5", name: "Bharatiya Vidya Bhavan", state: "Andhra Pradesh", city: "Hyderabad", board: "CBSE" },

  // Bihar
  { id: "br1", name: "DAV Public School", state: "Bihar", city: "Patna", board: "CBSE" },
  { id: "br2", name: "St. Michael's School", state: "Bihar", city: "Patna", board: "ICSE" },
  { id: "br3", name: "Notre Dame Academy", state: "Bihar", city: "Patna", board: "CBSE" },
  { id: "br4", name: "Delhi Public School", state: "Bihar", city: "Gaya", board: "CBSE" },
  { id: "br5", name: "Kendriya Vidyalaya", state: "Bihar", city: "Muzaffarpur", board: "CBSE" },

  // Chhattisgarh
  { id: "cg1", name: "Delhi Public School", state: "Chhattisgarh", city: "Raipur", board: "CBSE" },
  { id: "cg2", name: "Kendriya Vidyalaya", state: "Chhattisgarh", city: "Bhilai", board: "CBSE" },
  { id: "cg3", name: "DPS Bhilai", state: "Chhattisgarh", city: "Bhilai", board: "CBSE" },
  { id: "cg4", name: "Ryan International School", state: "Chhattisgarh", city: "Raipur", board: "CBSE" },
  { id: "cg5", name: "Holy Cross School", state: "Chhattisgarh", city: "Korba", board: "ICSE" },

  // Delhi
  { id: "dl1", name: "Delhi Public School", state: "Delhi", city: "New Delhi", board: "CBSE" },
  { id: "dl2", name: "Sardar Patel Vidyalaya", state: "Delhi", city: "New Delhi", board: "CBSE" },
  { id: "dl3", name: "Modern School", state: "Delhi", city: "New Delhi", board: "CBSE" },
  { id: "dl4", name: "St. Columba's School", state: "Delhi", city: "New Delhi", board: "ICSE" },
  { id: "dl5", name: "The Shri Ram School", state: "Delhi", city: "Gurgaon", board: "ICSE" },

  // Goa
  { id: "ga1", name: "The King's School", state: "Goa", city: "Panaji", board: "CBSE" },
  { id: "ga2", name: "St. Britto High School", state: "Goa", city: "Margao", board: "ICSE" },
  { id: "ga3", name: "Kendriya Vidyalaya", state: "Goa", city: "Vasco", board: "CBSE" },
  { id: "ga4", name: "Regina Mundi High School", state: "Goa", city: "Panaji", board: "ICSE" },
  { id: "ga5", name: "Sharada Mandir School", state: "Goa", city: "Miramar", board: "ICSE" },

  // Gujarat
  { id: "gj1", name: "Delhi Public School", state: "Gujarat", city: "Ahmedabad", board: "CBSE" },
  { id: "gj2", name: "Podar International School", state: "Gujarat", city: "Ahmedabad", board: "CBSE" },
  { id: "gj3", name: "St. Xavier's School", state: "Gujarat", city: "Ahmedabad", board: "ICSE" },
  { id: "gj4", name: "Kendriya Vidyalaya", state: "Gujarat", city: "Vadodara", board: "CBSE" },
  { id: "gj5", name: "Navrachana School", state: "Gujarat", city: "Vadodara", board: "CBSE" },

  // Haryana
  { id: "hr1", name: "Delhi Public School", state: "Haryana", city: "Gurgaon", board: "CBSE" },
  { id: "hr2", name: "Ryan International School", state: "Haryana", city: "Faridabad", board: "CBSE" },
  { id: "hr3", name: "The Heritage School", state: "Haryana", city: "Gurgaon", board: "CBSE" },
  { id: "hr4", name: "Kendriya Vidyalaya", state: "Haryana", city: "Ambala", board: "CBSE" },
  { id: "hr5", name: "DAV Public School", state: "Haryana", city: "Panipat", board: "CBSE" },

  // Himachal Pradesh
  { id: "hp1", name: "Bishop Cotton School", state: "Himachal Pradesh", city: "Shimla", board: "ICSE" },
  { id: "hp2", name: "St. Edward's School", state: "Himachal Pradesh", city: "Shimla", board: "ICSE" },
  { id: "hp3", name: "Kendriya Vidyalaya", state: "Himachal Pradesh", city: "Dharamshala", board: "CBSE" },
  { id: "hp4", name: "DAV Public School", state: "Himachal Pradesh", city: "Solan", board: "CBSE" },
  { id: "hp5", name: "Himalayan International School", state: "Himachal Pradesh", city: "Kullu", board: "CBSE" },

  // Jharkhand
  { id: "jh1", name: "Delhi Public School", state: "Jharkhand", city: "Ranchi", board: "CBSE" },
  { id: "jh2", name: "DAV Public School", state: "Jharkhand", city: "Jamshedpur", board: "CBSE" },
  { id: "jh3", name: "St. Xavier's School", state: "Jharkhand", city: "Ranchi", board: "ICSE" },
  { id: "jh4", name: "Kendriya Vidyalaya", state: "Jharkhand", city: "Bokaro", board: "CBSE" },
  { id: "jh5", name: "Loyola School", state: "Jharkhand", city: "Jamshedpur", board: "ICSE" },

  // Karnataka
  { id: "kn1", name: "National Public School", state: "Karnataka", city: "Bengaluru", board: "CBSE" },
  { id: "kn2", name: "Delhi Public School", state: "Karnataka", city: "Bengaluru", board: "CBSE" },
  { id: "kn3", name: "Bishop Cotton Boys School", state: "Karnataka", city: "Bengaluru", board: "ICSE" },
  { id: "kn4", name: "Kendriya Vidyalaya", state: "Karnataka", city: "Mysore", board: "CBSE" },
  { id: "kn5", name: "Sri Kumaran Children's Home", state: "Karnataka", city: "Bengaluru", board: "CBSE" },

  // Kerala
  { id: "kl1", name: "Kendriya Vidyalaya", state: "Kerala", city: "Thiruvananthapuram", board: "CBSE" },
  { id: "kl2", name: "St. Thomas School", state: "Kerala", city: "Kochi", board: "ICSE" },
  { id: "kl3", name: "Loyola School", state: "Kerala", city: "Thiruvananthapuram", board: "ICSE" },
  { id: "kl4", name: "Chinmaya Vidyalaya", state: "Kerala", city: "Kochi", board: "CBSE" },
  { id: "kl5", name: "Bharatiya Vidya Bhavan", state: "Kerala", city: "Kozhikode", board: "CBSE" },

  // Madhya Pradesh
  { id: "mp1", name: "Delhi Public School", state: "Madhya Pradesh", city: "Bhopal", board: "CBSE" },
  { id: "mp2", name: "Kendriya Vidyalaya", state: "Madhya Pradesh", city: "Indore", board: "CBSE" },
  { id: "mp3", name: "St. Joseph's Convent", state: "Madhya Pradesh", city: "Bhopal", board: "ICSE" },
  { id: "mp4", name: "The Sanskaar Valley School", state: "Madhya Pradesh", city: "Bhopal", board: "CBSE" },
  { id: "mp5", name: "Emerald Heights International", state: "Madhya Pradesh", city: "Indore", board: "CBSE" },

  // Maharashtra
  { id: "mh1", name: "Podar International School", state: "Maharashtra", city: "Mumbai", board: "CBSE" },
  { id: "mh2", name: "Delhi Public School", state: "Maharashtra", city: "Pune", board: "CBSE" },
  { id: "mh3", name: "St. Xavier's School", state: "Maharashtra", city: "Mumbai", board: "ICSE" },
  { id: "mh4", name: "Kendriya Vidyalaya", state: "Maharashtra", city: "Nagpur", board: "CBSE" },
  { id: "mh5", name: "Cathedral School", state: "Maharashtra", city: "Mumbai", board: "ICSE" },

  // Punjab
  { id: "pb1", name: "Delhi Public School", state: "Punjab", city: "Ludhiana", board: "CBSE" },
  { id: "pb2", name: "Yadavindra Public School", state: "Punjab", city: "Patiala", board: "ICSE" },
  { id: "pb3", name: "Kendriya Vidyalaya", state: "Punjab", city: "Amritsar", board: "CBSE" },
  { id: "pb4", name: "The British School", state: "Punjab", city: "Chandigarh", board: "CBSE" },
  { id: "pb5", name: "Sacred Heart School", state: "Punjab", city: "Ludhiana", board: "ICSE" },

  // Rajasthan
  { id: "rj1", name: "Delhi Public School", state: "Rajasthan", city: "Jaipur", board: "CBSE" },
  { id: "rj2", name: "Kendriya Vidyalaya", state: "Rajasthan", city: "Jodhpur", board: "CBSE" },
  { id: "rj3", name: "St. Xavier's School", state: "Rajasthan", city: "Jaipur", board: "ICSE" },
  { id: "rj4", name: "Mayo College", state: "Rajasthan", city: "Ajmer", board: "ICSE" },
  { id: "rj5", name: "Maharani Gayatri Devi School", state: "Rajasthan", city: "Jaipur", board: "CBSE" },

  // Tamil Nadu
  { id: "tn1", name: "Kendriya Vidyalaya", state: "Tamil Nadu", city: "Chennai", board: "CBSE" },
  { id: "tn2", name: "St. Thomas School", state: "Tamil Nadu", city: "Chennai", board: "ICSE" },
  { id: "tn3", name: "Padma Seshadri School", state: "Tamil Nadu", city: "Chennai", board: "CBSE" },
  { id: "tn4", name: "DAV Public School", state: "Tamil Nadu", city: "Coimbatore", board: "CBSE" },
  { id: "tn5", name: "SBOA School", state: "Tamil Nadu", city: "Chennai", board: "CBSE" },

  // Telangana
  { id: "tg1", name: "Kendriya Vidyalaya", state: "Telangana", city: "Hyderabad", board: "CBSE" },
  { id: "tg2", name: "Delhi Public School", state: "Telangana", city: "Hyderabad", board: "CBSE" },
  { id: "tg3", name: "Chirec International School", state: "Telangana", city: "Hyderabad", board: "CBSE" },
  { id: "tg4", name: "Nasr School", state: "Telangana", city: "Hyderabad", board: "ICSE" },
  { id: "tg5", name: "Meridian School", state: "Telangana", city: "Hyderabad", board: "CBSE" },

  // Uttar Pradesh
  { id: "up1", name: "Delhi Public School", state: "Uttar Pradesh", city: "Lucknow", board: "CBSE" },
  { id: "up2", name: "Kendriya Vidyalaya", state: "Uttar Pradesh", city: "Kanpur", board: "CBSE" },
  { id: "up3", name: "St. Francis School", state: "Uttar Pradesh", city: "Lucknow", board: "ICSE" },
  { id: "up4", name: "Cathedral School", state: "Uttar Pradesh", city: "Allahabad", board: "ICSE" },
  { id: "up5", name: "City Montessori School", state: "Uttar Pradesh", city: "Lucknow", board: "ICSE" },

  // Uttarakhand
  { id: "uk1", name: "Kendriya Vidyalaya", state: "Uttarakhand", city: "Dehradun", board: "CBSE" },
  { id: "uk2", name: "St. Joseph's Academy", state: "Uttarakhand", city: "Dehradun", board: "ICSE" },
  { id: "uk3", name: "The Doon School", state: "Uttarakhand", city: "Dehradun", board: "ICSE" },
  { id: "uk4", name: "Welham Girls School", state: "Uttarakhand", city: "Dehradun", board: "ICSE" },
  { id: "uk5", name: "DPS Dehradun", state: "Uttarakhand", city: "Dehradun", board: "CBSE" },

  // West Bengal
  { id: "wb1", name: "Kendriya Vidyalaya", state: "West Bengal", city: "Kolkata", board: "CBSE" },
  { id: "wb2", name: "St. Xavier's School", state: "West Bengal", city: "Kolkata", board: "ICSE" },
  { id: "wb3", name: "Delhi Public School", state: "West Bengal", city: "Kolkata", board: "CBSE" },
  { id: "wb4", name: "La Martiniere School", state: "West Bengal", city: "Kolkata", board: "ICSE" },
  { id: "wb5", name: "Don Bosco School", state: "West Bengal", city: "Kolkata", board: "ICSE" },
];

export function getSchoolById(id: string): School | undefined {
  return schools.find((school) => school.id === id);
}

export function getSchoolsByState(state: string): School[] {
  return schools.filter((school) => school.state === state);
}

export function getStatesWithSchools(): string[] {
  return [...new Set(schools.map((school) => school.state))];
}
