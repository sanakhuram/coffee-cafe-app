"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-amber-800 px-4 md:px-10 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">About Brew & Bloom</h1>
        <p className="text-lg text-amber-600 italic mb-10">
          Crafted with care, brewed with soul.
        </p>
        <p className="text-md md:text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
          At Brew & Bloom, coffee is an art form. We are passionate about sourcing the finest beans and honoring every
          step of the brewing process — from grind to pour. Our mission is simple: deliver warm, intentional experiences,
          one handcrafted cup at a time.
        </p>
      </div>

      <section className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 h-96 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/gallery10.jpg"
            alt="Chemex Pour-Over Brewing"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">The Chemex Method</h2>
          <p className="text-md text-amber-700 leading-relaxed">
            The Chemex is our go-to for a clean, bright cup. Using a medium-coarse grind and a delicate pour-over
            technique, we draw out vibrant floral and citrus notes without bitterness. This method offers clarity,
            elegance, and a moment of calm in every brew.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row-reverse gap-10 items-center">
        <div className="w-full md:w-1/2 h-96 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/gallery6.jpg"
            alt="Barista Flavor Customization"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Flavor Customization</h2>
          <p className="text-md text-amber-700 leading-relaxed">
            Whether it is a touch of vanilla, cinnamon, or caramel drizzle — we believe your cup should be uniquely yours.
            Our baristas are trained in creating flavor profiles that elevate without overpowering. It’s creativity, in a cup.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 h-96 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/gallery9.jpg"
            alt="Espresso Machine in Action"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Espresso Excellence</h2>
          <p className="text-md text-amber-700 leading-relaxed">
            Our espresso shots are pulled with scientific precision — 9 bars of pressure, 25 seconds, and a whole lot of
            heart. Expect rich crema, bold body, and smooth intensity. It is where power and flavor meet.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row-reverse gap-10 items-center">
        <div className="w-full md:w-1/2 h-96 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/gallery7.jpg"
            alt="Latte Art Heart"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Latte Art Mastery</h2>
          <p className="text-md text-amber-700 leading-relaxed">
            Our lattes are not just delicious — they are designed. With a steady hand and years of practice, our baristas
            craft hearts, rosettas, and tulips that are as stunning as they are sippable. It is a love letter in foam.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2 h-96 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/gallery8.jpg"
            alt="Cold Brew Process"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Cold Brew Perfection</h2>
          <p className="text-md text-amber-700 leading-relaxed">
            Brewed over 16 hours, our cold brew is slow, smooth, and seductively low in acidity. Perfect for sunny
            afternoons or chill work sessions, it is coffee — cool, collected, and ultra-refreshing.
          </p>
        </div>
      </section>
    </main>
  );
}
