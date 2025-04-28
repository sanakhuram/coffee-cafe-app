"use client";

import Link from "next/link";

export default function SuccessPage() {
    return (
        <main className="min-h-screen py-12 px-6 bg-background text-amber-700 text-center flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-6">Thank You! ☕</h1>
            <p className="text-lg mb-8">Your order is on its way to brewing perfection!</p>
            <Link href="/buy" className="bg-amber-700 text-white py-3 px-6 rounded-lg hover:bg-amber-800">
                Back to Shop
            </Link>
        </main>
    );
}
