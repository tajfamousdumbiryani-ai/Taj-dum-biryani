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
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1599487405270-873b5c77bd8d?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1626082895617-2c6b4122d4ce?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1599487405270-873b5c77bd8d?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=600&auto=format&fit=crop"
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
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=600&auto=format&fit=crop"
  }
];

export const categories = ["All", "Biryani", "Chicken & Gravy", "Kebabs & Starters"];
