// src/app/api/coffee/route.ts

export async function GET() {
  const coffeeList = [
    {
      id: "1",
      name: "Americano",
      description: "A strong, classic black coffee made by diluting espresso with hot water.",
      ingredients: ["Espresso", "Hot Water"],
      price: 3.5,
      image: "/americano.jpg",
    },
    {
      id: "2",
      name: "Cappuccino",
      description: "A harmonious trio of rich espresso, steamed milk, and airy foam — the OG comfort cup.",
      ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
      price: 4.2,
      image: "/cappuccino.jpg",
    },
    {
      id: "3",
      name: "Signature Brew",
      description: "Our exclusive house blend, roasted to perfection with notes of chocolate, toasted nuts, and rebellion.",
      ingredients: ["House Blend Coffee Beans", "Filtered Water"],
      price: 5.0,
      image: "/signature-brew.jpg",
    },
    {
      id: "4",
      name: "Morning Blend",
      description: "A bright and balanced roast crafted to kick-start your day without a slap to the face.",
      ingredients: ["Arabica Coffee Beans", "Filtered Water"],
      price: 4.0,
      image: "/morning-blend.jpg",
    },
    {
      id: "5",
      name: "Iced Coffee",
      description: "Chill out with our smooth, cold-brewed coffee — less bite, more delight. Served on the rocks.",
      ingredients: ["Cold Brew Coffee", "Ice"],
      price: 4.5,
      image: "/iced-coffee.jpg",
    },
    {
      id: "6",
      name: "Flat White",
      description: "A creamy combo of velvety microfoam and intense espresso — smooth like jazz.",
      ingredients: ["Espresso", "Steamed Milk (Microfoam)"],
      price: 4.3,
      image: "/flat-white.jpg",
    },
    {
      id: "7",
      name: "Mocha",
      description: "Espresso meets chocolate in a steamy, dreamy cup of indulgence. Sweet tooths, rejoice!",
      ingredients: ["Espresso", "Steamed Milk", "Chocolate Syrup", "Whipped Cream (optional)"],
      price: 5.2,
      image: "/mocha.jpg",
    },
    {
      id: "8",
      name: "Espresso Shot",
      description: "Tiny but fierce. A concentrated jolt of rich, roasted coffee for those who mean business.",
      ingredients: ["Espresso"],
      price: 2.5,
      image: "/espresso-shot.jpg",
    },
    {
      id: "9",
      name: "Caramel Macchiato",
      description: "Espresso layered with vanilla, frothy milk, and topped with buttery caramel drizzle — fancy, but worth it.",
      ingredients: ["Espresso", "Vanilla Syrup", "Steamed Milk", "Caramel Sauce"],
      price: 5.5,
      image: "/caramel-macchiato.jpg",
    },
    {
      id: "10",
      name: "Affogato",
      description: "Hot espresso poured over cold vanilla ice cream. Dessert and coffee just shook hands.",
      ingredients: ["Espresso", "Vanilla Ice Cream"],
      price: 5.8,
      image: "/affogato.jpg",
    },
    {
      id: "11",
      name: "Matcha Latte",
      description: "Earthy green tea powder whisked into creamy milk — zen in a cup, no coffee required.",
      ingredients: ["Matcha Powder", "Steamed Milk", "Sweetener (optional)"],
      price: 4.8,
      image: "/matcha-latte.jpg",
    },
    {
      id: "12",
      name: "Pumpkin Spice Latte",
      description: "Espresso and milk blended with real pumpkin, cinnamon, nutmeg, and nostalgia. Fall never tasted so good.",
      ingredients: ["Espresso", "Steamed Milk", "Pumpkin Puree", "Pumpkin Spice Syrup", "Whipped Cream"],
      price: 5.7,
      image: "/pumpkin-spice-latte.jpg",
    },
  ];

  return Response.json(coffeeList);
}
