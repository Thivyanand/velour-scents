'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VelourScentsLanding() {
  const whatsappNumber = '918220680198'

  const products = [
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

          <button
            onClick={() => {
              document
                .getElementById('product-0')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="mt-12 px-10 py-4 border border-yellow-500/30 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            View Products
          </button>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      {products.map((product, index) => (
        <section
          key={index}
          id={`product-${index}`}
          className="relative min-h-screen flex items-center overflow-hidden border-t border-white/5"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,80,0.08),transparent_60%)]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full px-6 sm:px-10 lg:px-24 py-20 gap-12">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 text-yellow-500">
                <div className="h-px w-20 bg-yellow-500" />

                <p className="tracking-[0.3em] uppercase text-sm">
                  0{index + 1}
                </p>
              </div>

              <div>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-light leading-none text-yellow-100">
                  {product.name.split(' ')[0]}
                </h2>

                <h3 className="mt-3 text-xl sm:text-2xl tracking-[0.4em] uppercase text-yellow-500">
                  {product.name.split(' ').slice(1).join(' ')}
                </h3>
              </div>

              <p className="text-xl text-zinc-300">
                {product.tagline}
              </p>

              <p className="max-w-xl leading-loose text-zinc-500 text-base sm:text-lg">
                {product.description}
              </p>

              <div className="flex items-center gap-6 pt-4">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Hi Velour Scents, I am interested in ${product.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-yellow-500/30 px-8 py-4 text-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
                >
                  Order on WhatsApp
                </a>

                {products[index + 1] && (
                  <button
                    onClick={() => {
                      document
                        .getElementById(`product-${index + 1}`)
                        ?.scrollIntoView({
                          behavior: 'smooth',
                        })
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 hover:border-yellow-500/40 transition-all duration-300"
                  >
                    <span className="text-2xl text-yellow-400">
                      ↓
                    </span>
                  </button>
                )}
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              {/* GLOW */}
              <div className="absolute h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[80px]" />

              {/* RING */}
              <div className="absolute h-[500px] w-[500px] rounded-full border border-yellow-500/10" />

              {/* FLOATING IMAGE */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
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
                  width={500}
                  height={700}
                  priority
                  className="relative z-10 w-[240px] sm:w-[320px] md:w-[420px] lg:w-[460px] object-contain drop-shadow-[0_0_40px_rgba(255,190,90,0.25)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

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