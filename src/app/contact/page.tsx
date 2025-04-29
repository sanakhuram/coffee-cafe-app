"use client";

import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent! We'll be in touch. ☕");
        setForm({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <main className="min-h-screen bg-background text-amber-700 py-16 px-4 ">
            <div className="bg-coffee rounded-xl shadow-xl container mx-auto px-6 py-12 md:py-16  shadow-amber-600">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-md text-amber-100 mb-8">
                            We would love to hear from you — whether it’s feedback, collaboration, or just to say hi!
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full p-3 rounded-lg border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-full h-[400px] relative">
                            <Image
                                src="/logo.png"
                                alt="Brew & Bloom Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center text-orange-300">
                    <h2 className="text-3xl font-bold mb-10">Where Are We Located?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
                        <div className="text-center">
                            <FaMapMarkerAlt className="mx-auto text-amber-500 mb-2 text-xl" />
                            <h3 className="text-xl font-semibold mb-1">Oslo</h3>
                            <p className="text-sm mb-1">123 Bean Street</p>
                            <p className="text-sm flex justify-center items-center gap-2"><FaEnvelope /> coffee@brewandbloom.no</p>
                            <p className="text-sm flex justify-center items-center gap-2"><FaPhone /> +47 400 00 001</p>
                        </div>
                        <div className="text-center">
                            <FaMapMarkerAlt className="mx-auto text-amber-500 mb-2 text-xl" />
                            <h3 className="text-xl font-semibold mb-1">Trondheim</h3>
                            <p className="text-sm mb-1">45 Roast Road</p>
                            <p className="text-sm flex justify-center items-center gap-2"><FaEnvelope /> hello.trd@brewandbloom.no</p>
                            <p className="text-sm flex justify-center items-center gap-2"><FaPhone /> +47 400 00 002</p>
                        </div>
                        <div className="text-center">
                            <FaMapMarkerAlt className="mx-auto text-amber-500 mb-2 text-xl" />
                            <h3 className="text-xl font-semibold mb-1">Bergen</h3>
                            <p className="text-sm mb-1">78 Steam Ave</p>
                            <p className="text-sm flex justify-center items-center gap-2"><FaEnvelope /> bergen@brewandbloom.no</p>
                            <p className="text-sm flex justify-center items-center gap-2"><FaPhone /> +47 400 00 003</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
