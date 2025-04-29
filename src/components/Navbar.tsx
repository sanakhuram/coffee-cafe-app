"use client";

import Link from "next/link";
import { ShoppingCart, Info, PhoneCall } from "lucide-react";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore"; 
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useCartStore(); 
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0); 

    return (
        <nav className="sticky top-0 z-50 bg-coffee text-amber-600 shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
                    <Image
                        src="/logo.png"
                        alt="Brew & Bloom Logo"
                        width={50}
                        height={50}
                        className="rounded-full"
                        priority
                    />
                    <span>Brew & Bloom</span>
                </Link>

                <div className="hidden md:flex space-x-6 text-lg items-center">
                    <Link href="/cart" className="relative flex items-center gap-2 hover:underline">
                        <ShoppingCart className="w-5 h-5" />
                        Cart
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <Link href="/about" className="flex items-center gap-2 hover:underline">
                        <Info className="w-5 h-5" /> About
                    </Link>
                    <Link href="/contact" className="flex items-center gap-2 hover:underline">
                        <PhoneCall className="w-5 h-5" /> Contact
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block md:hidden focus:outline-none"
                >
                    {isOpen ? (
                        <SiCoffeescript className="text-3xl" />
                    ) : (
                        <PiCoffeeBeanFill className="text-3xl" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-coffee p-4 space-y-4 text-lg">
                    <Link href="/cart" className="relative flex items-center gap-2">
                        <ShoppingCart className="w-5 h-5" />
                        Cart
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <Link href="/about" className="flex items-center gap-2">
                        <Info className="w-5 h-5" /> About
                    </Link>
                    <Link href="/contact" className="flex items-center gap-2">
                        <PhoneCall className="w-5 h-5" /> Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
