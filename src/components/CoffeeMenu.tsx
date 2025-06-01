'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';
import Image from 'next/image';

type CoffeeItem = {
    id: string;
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    image: string;
};

export default function CoffeeMenu() {
    const [coffees, setCoffees] = useState<CoffeeItem[]>([]);
    const [selectedCoffee, setSelectedCoffee] = useState<CoffeeItem | null>(null);
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        async function fetchCoffee() {
            try {
                const res = await fetch('/api/coffee');
                if (!res.ok) {
                    throw new Error('Failed to fetch coffee data');
                }
                const data = await res.json();
                setCoffees(data);
            } catch (error) {
                console.error('Failed to fetch coffee menu:', error);
            }
        }
        fetchCoffee();
    }, []);

    const handleAdd = (coffee: CoffeeItem) => {
        addToCart(coffee);
        toast.success(`${coffee.name} added to cart! ☕`);
    };

    return (
        <section className="py-12 px-6 bg-background text-amber-600 relative">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                {coffees.map((coffee) => (
                    <div
                        key={coffee.id}
                        onClick={() => setSelectedCoffee(coffee)}
                        className="cursor-pointer bg-coffee rounded-2xl overflow-hidden flex flex-col shadow-lg shadow-amber-500 transform transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative w-full h-80">
                            <Image
                                src={coffee.image}
                                alt={coffee.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className="p-4 flex flex-col gap-2">
                            <h3 className="text-xl font-bold text-amber-600">{coffee.name}</h3>
                            <p className="text-sm text-amber-400">${coffee.price.toFixed(2)}</p>
                            <p className="text-xs text-amber-600 line-clamp-2">{coffee.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedCoffee && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 overflow-y-auto px-4 py-12">
                    <div className="bg-coffee p-6 rounded-2xl max-w-5xl w-full shadow-lg relative flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto mx-auto">
                        <button
                            onClick={() => setSelectedCoffee(null)}
                            className="absolute top-2 right-4 text-yellow-500 text-3xl font-bold hover:text-amber-600 z-50"
                        >
                            &times;
                        </button>

                        <div className="w-full md:w-1/2 h-[500px] relative rounded-xl overflow-hidden">
                            <Image
                                src={selectedCoffee.image}
                                alt={selectedCoffee.name}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-amber-800 mb-2">{selectedCoffee.name}</h2>
                                <p className="mb-4">{selectedCoffee.description}</p>

                                <h4 className="text-lg font-semibold text-amber-700 mb-2">Ingredients:</h4>
                                <ul className="list-disc list-inside mb-4 text-sm">
                                    {selectedCoffee.ingredients.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <p className="text-xl font-bold text-amber-800 mb-4">
                                    ${selectedCoffee.price.toFixed(2)}
                                </p>
                                <button
                                    onClick={() => {
                                        handleAdd(selectedCoffee);
                                        setSelectedCoffee(null);
                                    }}
                                    className="bg-amber-700 w-full py-3 rounded-xl text-white hover:bg-amber-800 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
