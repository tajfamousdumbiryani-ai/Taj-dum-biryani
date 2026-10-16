export const menuItems = [
  {
    id: 1,
    name: "Chicken Dum Biryani",
    category: "Biryani",
    isVeg: false,
    priceText: "₹100 · Half (2 Pcs)",
    basePrice: 100,
    description: "Fragrant rice, tender chicken & whole spices, slow-cooked on dum.",
    isSignature: true,
    customisable: true,
    variants: [
      { id: "v1_half", name: "Half (2 Pcs)", price: 100 },
      { id: "v1_full", name: "Full (3 Pcs)", price: 150 }
    ],
    image: "/assets/IMG_20261009_195901-Bp8ttnq3.webp"
  },
  {
    id: 2,
    name: "Chicken Muradabadi Biryani",
    category: "Biryani",
    isVeg: false,
    priceText: "₹80 · Half (2 Pcs)",
    basePrice: 80,
    description: "Delicately spiced rice and juicy chicken. Simple, soulful, satisfying.",
    isSignature: false,
    customisable: true,
    variants: [
      { id: "v2_half", name: "Half (2 Pcs)", price: 80 },
      { id: "v2_full", name: "Full (4 Pcs)", price: 140 }
    ],
    image: "/assets/IMG_20261009_200143-Bcjs7eq9.webp"
  },
  {
    id: 3,
    name: "Chicken Korma",
    category: "Chicken & Gravy",
    isVeg: false,
    priceText: "₹70 · Half (2 Pcs)",
    basePrice: 70,
    description: "Tender chicken in a rich, aromatic gravy. Made for mopping up with roti.",
    isSignature: false,
    customisable: true,
    variants: [
      { id: "v3_half", name: "Half (2 Pcs)", price: 70 },
      { id: "v3_full", name: "Full (4 Pcs)", price: 120 }
    ],
    image: "/assets/IMG_20261009_200227-ByY8W97_.webp"
  },
  {
    id: 4,
    name: "Chicken Tikka Stick",
    category: "Kebabs & Starters",
    isVeg: false,
    priceText: "₹40 · 1 Stick",
    basePrice: 40,
    description: "Smoky, spice-marinated chicken bites, grilled on a stick.",
    isSignature: false,
    customisable: false,
    image: "/assets/IMG_20261009_200338-CD1S4ZXQ.webp"
  },
  {
    id: 5,
    name: "Chicken Lollipop",
    category: "Kebabs & Starters",
    isVeg: false,
    priceText: "₹120 · 5 Pcs",
    basePrice: 120,
    description: "Five crispy chicken lollipops with a deliciously spicy kick.",
    isSignature: false,
    customisable: false,
    image: "/assets/IMG_20261009_200447-B-orbiz9.webp"
  },
  {
    id: 6,
    name: "Chicken Drumstick",
    category: "Kebabs & Starters",
    isVeg: false,
    priceText: "₹50 · 1 Pc",
    basePrice: 50,
    description: "A juicy chicken drumstick, marinated with warming spices.",
    isSignature: false,
    customisable: false,
    image: "/assets/IMG_20261009_200708.png"
  },
  {
    id: 7,
    name: "Chicken Thigh Leg Piece",
    category: "Kebabs & Starters",
    isVeg: false,
    priceText: "₹100 · 1 Pc",
    basePrice: 100,
    description: "A generously sized, spice-marinated chicken thigh and leg.",
    isSignature: false,
    customisable: false,
    image: "/assets/IMG_20261009_200813.png"
  },
  {
    id: 8,
    name: "Russian Kebab",
    category: "Kebabs & Starters",
    isVeg: false,
    priceText: "₹40 · 1 Pc",
    basePrice: 40,
    description: "Golden and crisp outside, deliciously tender on the inside.",
    isSignature: false,
    customisable: false,
    image: "/assets/IMG_20261009_201054.jpg"
  },
  {
    id: 9,
    name: "Shahi Roll",
    category: "Kebabs & Starters",
    isVeg: false,
    priceText: "₹40 · 1 Roll (3 pcs)",
    basePrice: 40,
    description: "A golden, savoury roll — 3 pieces in every roll.",
    isSignature: false,
    customisable: false,
    image: "/assets/IMG_20261009_200934-DT-7d1yF.webp"
  },
  {
    id: 10,
    name: "Tawa Roti",
    category: "Chicken & Gravy",
    isVeg: true,
    priceText: "₹10 · 1 Pc",
    basePrice: 10,
    description: "Soft whole-wheat roti, freshly cooked on the tawa.",
    isSignature: false,
    customisable: false,
    image: "/assets/tawa-roti-evwv0MPI.jpg"
  }
];

export const categories = ["All", "Biryani", "Chicken & Gravy", "Kebabs & Starters"];
