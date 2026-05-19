'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function VelourScentsLanding() {
  const whatsappNumber = '918220680198'

  const bestSellers = [
    {
      name: 'Antartic Attar',
      tagline: 'Icy. Pure. Unforgettable.',
      description:
        'Antarctic by Velour Scents is a premium luxury attar crafted to capture the pure freshness of icy mountains and crisp arctic air.',
      image: '/products/antartic.png',
    },
    {
      name: 'Musk Attar',
      tagline: 'Pure. Timeless. Unforgettable.',
      description:
        'Experience timeless sophistication with Musk Attar by Velour Scents. Crafted with a rich blend of warm musk notes.',
      image: '/products/musk.png',
    },
    {
      name: 'Aero Magnet',
      tagline: 'Fresh. Bold. Irresistible.',
      description:
        'Aero Magnet Attar by Velour Scents is a bold and refreshing fragrance crafted for those who leave a lasting impression.',
      image: '/products/aeromagnet.png',
    },
  ]

  return (
    <div className="bg-black text-white overflow-x-hidden font-serif">
      
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 text-center">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,80,0.10),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 max-w-5xl"
        >
          <p className="tracking-[0.5em] uppercase text-yellow-500 text-sm mb-6">
            Luxury Attar Collection
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-[9rem] leading-none tracking-[0.15em] text-yellow-100 font-light">
            VELOUR
          </h1>

          <p className="mt-4 uppercase tracking-[0.7em] text-zinc-500 text-lg">
            SCENTS
          </p>

          <Link
            href="/products"
            className="mt-12 inline-block px-10 py-4 border border-yellow-500/30 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </section>

      {/* BEST SELLERS */}
      <section className="relative border-t border-white/5 py-32 px-6">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,80,0.06),transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          
          <div className="text-center mb-24">
            <p className="tracking-[0.4em] uppercase text-yellow-500 text-sm mb-6">
              Featured Collection
            </p>

            <h2 className="text-5xl md:text-7xl text-yellow-100 font-light tracking-[0.15em]">
              BEST SELLERS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {bestSellers.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="relative rounded-[2rem] border border-white/5 bg-zinc-900/40 overflow-hidden backdrop-blur-sm"
              >
                
                {/* GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,80,0.10),transparent_70%)]" />

                {/* IMAGE */}
                <div className="relative flex items-center justify-center p-10">
                  
                  <div className="absolute h-56 w-56 rounded-full bg-yellow-500/10 blur-[70px]" />

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={500}
                      className="relative z-10 h-[320px] object-contain drop-shadow-[0_0_40px_rgba(255,190,90,0.25)]"
                    />
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 px-8 pb-10">
                  
                  <div className="flex items-center justify-between">
                    <p className="text-yellow-500 tracking-[0.3em] text-sm">
                      0{index + 1}
                    </p>

                    <span className="rounded-full bg-yellow-500 px-4 py-1 text-xs text-black">
                      Best Seller
                    </span>
                  </div>

                  <h3 className="mt-6 text-4xl text-yellow-100 font-light leading-tight">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-yellow-500">
                    {product.tagline}
                  </p>

                  <p className="mt-5 text-zinc-500 leading-loose">
                    {product.description}
                  </p>

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hi Velour Scents, I am interested in ${product.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block rounded-full border border-yellow-500/30 px-6 py-3 text-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
                  >
                    Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}

          </div>

          {/* VIEW ALL BUTTON */}
          <div className="mt-20 text-center">
            <Link
              href="/products"
              className="inline-block rounded-full border border-yellow-500/30 px-10 py-4 text-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
            >
              Explore Full Collection
            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <h3 className="text-2xl tracking-[0.3em] text-yellow-300">
          VELOUR SCENTS
        </h3>

        <p className="mt-4 text-zinc-500">
          Crafted for timeless impressions.
        </p>

        <div className="mt-6 flex justify-center gap-6 text-sm text-zinc-500">
          <a
            href="https://www.instagram.com/velour_x_scents/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <span>•</span>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <p className="mt-6 text-xs text-zinc-700">
          © 2026 Velour Scents. All rights reserved.
        </p>
      </footer>
    </div>
  )
}