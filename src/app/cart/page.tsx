'use client';

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CartPage() {
    const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCartStore();
    const router = useRouter();

    const handleProceedToCheckout = () => {
        router.push("/checkout");
    };

    return (
        <main className="min-h-screen py-12 px-6 bg-background text-amber-700">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

                {cart.length === 0 ? (
                    <p className="text-lg">Your cart is empty. Go grab some coffee! ☕</p>
                ) : (
                    <div className="grid gap-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-coffee rounded-lg p-6 flex justify-between items-center shadow-xl shadow-amber-600"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        height={100}
                                        width={100}
                                        className="object-cover rounded border border-amber-500"
                                    />
                                    <div>
                                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                                        <p className="text-sm text-amber-500">{item.description}</p>
                                        <p className="mt-2 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                        <p className="text-sm">Quantity: {item.quantity}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="bg-amber-700 text-white px-2  rounded hover:bg-amber-800"
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-amber-700 text-white px-2 rounded hover:bg-amber-800"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {cart.length > 0 && (
                    <div className="mt-8 flex justify-between items-center">
                        <button
                            onClick={clearCart}
                            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
                        >
                            Clear Cart
                        </button>

                        <button
                            onClick={handleProceedToCheckout}
                            className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
