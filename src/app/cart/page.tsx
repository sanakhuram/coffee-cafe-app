'use client';

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft, FaPlus, FaMinus, FaTrashAlt, FaShoppingCart } from "react-icons/fa";

export default function CartPage() {
    const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCartStore();
    const router = useRouter();

    const handleProceedToCheckout = () => {
        router.push("/checkout");
    };

    const handleGoHome = () => {
        router.push("/");
    };

    return (
        <main className="min-h-screen py-12 px-4 md:px-6 bg-background text-amber-700">
            <div className="container mx-auto max-w-6xl">

                <div className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-5">Your Cart</h1>
                    <p className="text-md md:text-lg text-amber-900 italic">
                        Ooh, it is going to be great! — One step closer to your perfect brew at <span className="font-bold">Brew & Bloom</span>
                    </p>
                    <p className="mt-2 text-sm text-amber-900">
                        Crafted with care, delivered with love. Your cart’s got taste, literally.
                    </p>
                </div>

                <div className="mb-8 flex justify-center">
                    <button
                        onClick={handleGoHome}
                        className="flex items-center gap-2 text-amber-700 hover:text-amber-900 font-semibold"
                    >
                        <FaArrowLeft />
                        Back to Home
                    </button>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center mt-16">
                        <FaShoppingCart size={64} className="mx-auto mb-4 text-amber-400" />
                        <p className="text-lg">Your cart is empty. Go grab some coffee! ☕</p>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-coffee rounded-lg p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-xl shadow-amber-600"
                            >
                                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-2/3">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        height={100}
                                        width={100}
                                        className="object-cover rounded border border-amber-500"
                                    />
                                    <div className="text-center sm:text-left">
                                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                                        <p className="text-sm text-amber-500">{item.description}</p>
                                        <p className="mt-2 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                        <p className="text-sm">Quantity: {item.quantity}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2 justify-center">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="bg-amber-700 text-white p-2 rounded hover:bg-amber-800"
                                    >
                                        <FaMinus />
                                    </button>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-amber-700 text-white p-2 rounded hover:bg-amber-800"
                                    >
                                        <FaPlus />
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                                    >
                                        <FaTrashAlt className="inline-block mr-1" /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {cart.length > 0 && (
                    <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <button
                            onClick={clearCart}
                            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 w-full md:w-auto flex items-center gap-2"
                        >
                            <FaTrashAlt />
                            Clear Cart
                        </button>

                        <button
                            onClick={handleProceedToCheckout}
                            className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 w-full md:w-auto"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
