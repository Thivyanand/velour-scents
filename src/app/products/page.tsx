'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { describe } from 'node:test'

export default function ProductsPage() {
  const whatsappNumber = '918220680198'

  const products = [
    {
      name: 'Antartic',
      tagline: 'Icy. Pure. Unforgettable.',
      description:
        'Antarctic by Velour Scents is a premium luxury attar crafted to capture the pure freshness of icy mountains and crisp arctic air.',
      image: '/products/antartic.png',
    },
    {
      name: 'Musk',
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
    {
      name: 'CR7',
      tagline: 'Bold. Powerfull. Legendary.',
      description:
        'CR7 Attar is a bold luxury fragrance with a smooth premium blend and a long-lasting unforgettable scent.',
      image: '/products/cr7.png',
    },
    {
        name: 'Majuma ',
        tagline: 'Warm. Royal. Timeless.',
        description:
            'A rich premium attar with warm notes and a smooth fragrance made for everyday sophistication.',
        image: '/products/majuma.png',
    },
    {
        name: 'Lovely',
        tagline: 'Soft. Elegant. Charming.',
        description:
             'Lovely Attar blends fresh floral notes with a smooth luxurious scent that feels elegant and feminine.',
        image: '/products/lovely.png',
    },

    {
        name: 'Sabaya',
        tagline: 'Rich. Elegant. Captivating.',
        description:
             'Sabaya Attar blends warm luxurious notes with a bold long-lasting fragrance perfect for every occasion.',
        image: '/products/sabaya.png',
    },
    {
        name: 'Jawadhu',
        tagline: 'Deep. Mystical. Timeless.',
        description:
            'A traditional premium attar with warm woody notes and a soothing long-lasting scent experience.',
            image: '/products/jawadhu.png',
    },
    {
        name: 'White Musk',
        tagline: 'Clean. Soft. Timeless.',
        description: 'White Musk Attar delivers a smooth and elegant fragrance with soft musky notes and a fresh luxurious finish. Perfect for everyday sophistication and lasting freshness.',
        image: '/products/whitemusk.png',

    }
    
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-serif">
      
      {/* HEADER */}
      <section className="relative py-32 px-6 text-center border-b border-white/5">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,80,0.08),transparent_60%)]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          <p className="tracking-[0.5em] uppercase text-yellow-500 text-sm mb-6">
            Full Luxury Collection
          </p>

          <h1 className="text-5xl md:text-7xl text-yellow-100 font-light tracking-[0.15em]">
            PRODUCTS
          </h1>

          <Link
            href="/"
            className="mt-10 inline-block rounded-full border border-yellow-500/30 px-8 py-3 text-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
          >
            Back To Home
          </Link>
        </motion.div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {products.map((product, index) => (
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,80,0.08),transparent_70%)]" />

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

                  {index < 3 && (
                    <span className="rounded-full bg-yellow-500 px-4 py-1 text-xs text-black">
                      Best Seller
                    </span>
                  )}
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
                    `Hi Velour Scents, I am interested in ${product.name} Attar.Can I Get More Information on this ?`
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
      </section>
    </div>
  )
}