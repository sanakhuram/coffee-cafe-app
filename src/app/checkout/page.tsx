"use client";

import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";

type CheckoutFormData = {
    name: string;
    email: string;
    address: string;
    paymentMethod: string;
};

export default function CheckoutPage() {
    const { cart, clearCart } = useCartStore();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>();

    const onSubmit = (data: CheckoutFormData) => {
        console.log("Checkout Data:", data);
        clearCart();
        router.push("/success");
    };

    return (
        <main className="min-h-screen py-12 px-6 bg-background text-amber-700">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center">Checkout</h1>

                {cart.length === 0 ? (
                    <p className="text-center text-lg">Your cart is empty. Nothing to checkout!</p>
                ) : (
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* LEFT SIDE - CART ITEMS */}
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 p-4 bg-coffee rounded-lg shadow-md shadow-amber-500">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        height={100}
                                        width={100}
                                        className="object-cover rounded"
                                        priority
                                    />
                                    <div>
                                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                                        <p>Quantity: {item.quantity}</p>
                                        <p className="font-bold mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="bg-coffee p-8 rounded-lg shadow-xl shadow-amber-600 space-y-6">
                            <h2 className="text-2xl font-bold mb-4">Billing Details</h2>

                            <div>
                                <label className="block mb-2 text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full p-3 border rounded-lg"
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className="w-full p-3 border rounded-lg"
                                    placeholder="you@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">Address</label>
                                <textarea
                                    {...register("address", { required: "Address is required" })}
                                    className="w-full p-3 border rounded-lg"
                                    placeholder="123 Coffee Street, Brewtown"
                                ></textarea>
                                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">Payment Method</label>
                                <select
                                    {...register("paymentMethod", { required: "Select a payment method" })}
                                    className="w-full p-3 border rounded-lg"
                                >
                                    <option value="">Select...</option>
                                    <option value="card">Credit / Debit Card</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="applepay">Apple Pay</option>
                                </select>
                                {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-700 text-white py-3 rounded-lg hover:bg-amber-800 mt-6"
                            >
                                Complete Purchase
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </main>
    );
}
