// src/app/api/coffee/route.ts

export async function GET() {
  const coffeeList = [
    {
      id: "1",
      name: "Americano",
      description: "A strong, classic black coffee.",
      price: 3.5,
      image: "/americano.jpg",
    },
    {
      id: "2",
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam.",
      price: 4.2,
      image: "/cappuccino.jpg",
    },
    {
      id: "3",
      name: "Signature Brew",
      description: "Our exclusive in-house blend.",
      price: 5.0,
      image: "/signature-brew.jpg",
    },
    {
      id: "4",
      name: "Morning Blend",
      description: "Perfect for that early morning boost.",
      price: 4.0,
      image: "/morning-blend.jpg",
    },
    {
      id: "5",
      name: "Iced Coffee",
      description: "Cold brewed for smooth flavor, served over ice.",
      price: 4.5,
      image: "/iced-coffee.jpg",
    },
    {
      id: "6",
      name: "Flat White",
      description: "Rich espresso with silky microfoam.",
      price: 4.3,
      image: "/flat-white.jpg",
    },
    {
      id: "7",
      name: "Mocha",
      description: "Espresso, chocolate, and steamed milk — sweet indulgence.",
      price: 5.2,
      image: "/mocha.jpg",
    },
    {
      id: "8",
      name: "Espresso Shot",
      description: "Small but mighty. Pure, concentrated coffee flavor.",
      price: 2.5,
      image: "/espresso-shot.jpg",
    },
    {
      id: "9",
      name: "Caramel Macchiato",
      description: "Layered espresso, vanilla, milk and caramel drizzle.",
      price: 5.5,
      image: "/caramel-macchiato.jpg",
    },
    {
      id: "10",
      name: "Affogato",
      description: "Vanilla ice cream drowned in a shot of hot espresso.",
      price: 5.8,
      image: "/affogato.jpg",
    },
    {     
      id: "11",
      name: "Matcha Latte",
      description: "Earthy matcha blended with steamed milk.",
      price: 4.8,
      image: "/matcha-latte.jpg",
    },
    {
      id: "12",
      name: "Pumpkin Spice Latte",
      description: "Seasonal espresso with pumpkin, cinnamon, and nutmeg.",
      price: 5.7,
      image: "/pumpkin-spice-latte.jpg",
    },
  ];

  return Response.json(coffeeList);
}
