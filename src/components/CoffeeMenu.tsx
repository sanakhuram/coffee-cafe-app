"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";
import Image from "next/image";

type CoffeeItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
};

export default function CoffeeMenu() {
    const [coffees, setCoffees] = useState<CoffeeItem[]>([]);
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        async function fetchCoffee() {
            try {
                const res = await fetch("/api/coffee");
                if (!res.ok) {
                    throw new Error("Failed to fetch coffee data");
                }
                const data = await res.json();
                setCoffees(data);
            } catch (error) {
                console.error("Failed to fetch coffee menu:", error);
            }
        }
        fetchCoffee();
    }, []);

    const handleAdd = (coffee: CoffeeItem) => {
        addToCart(coffee);
        toast.success(`${coffee.name} added to cart! ☕`);
    };

    return (
        <section className="py-12 px-6 bg-background text-amber-600">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {coffees.map((coffee) => (
                    <div
                        key={coffee.id}
                        className="bg-coffee rounded-2xl overflow-hidden flex flex-col shadow-lg shadow-amber-500/30 transform transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative w-full h-64">
                            <Image
                                src={coffee.image}
                                alt={coffee.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold">{coffee.name}</h3>
                                <p className="text-sm mt-2">{coffee.description}</p>
                                <p className="text-amber-700 mt-4 text-lg font-semibold">${coffee.price.toFixed(2)}</p>
                            </div>
                            <button
                                onClick={() => handleAdd(coffee)}
                                className="mt-6 bg-amber-700 py-3 px-5 text-amber-50 rounded-xl hover:bg-amber-800 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
