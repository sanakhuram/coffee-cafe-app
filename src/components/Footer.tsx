"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-coffee text-amber-700 pt-12 pb-8 px-6">
            <div className="container mx-auto grid md:grid-cols-4 gap-8">

                <div className="flex flex-col items-start">
                    <Image
                        src="/logo.png"
                        alt="Brew & Bloom Logo"
                        width={100}
                        height={100}
                        className="rounded-full mb-4"
                    />
                    <h2 className="text-2xl font-bold mb-2">Brew & Bloom</h2>
                    <p className="text-sm">
                        Sip, Relax, and Bloom. Crafted Brews for Soulful Moments.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className="hover:underline">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: hello@brewbloom.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Location: 123 Cozy Street, Coffee Town</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
                    <p className="text-sm mb-4">
                        Join our newsletter to get the latest brews and news!
                    </p>
                    <form className="flex flex-col space-y-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-2 rounded bg-white text-coffee focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="p-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center text-xs mt-12">
                © {new Date().getFullYear()} Brew & Bloom. All rights reserved.
            </div>
        </footer>
    );
}
