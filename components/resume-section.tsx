"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export interface ResumeSectionProps {
  photoUrl?: string;
  name?: string;
  handle?: string;
  role?: string;
  location?: string;
  tools?: { name: string; color?: string; initials?: string }[];
  resumeUrl?: string;
}

export default function ResumeSectionFragmented({
  photoUrl,
  name = "Neha Singh",
  handle = "handle",
  role = "Full Stack Developer",
  location = "Delhi, India",
  tools = [],
  resumeUrl = "/pdf/NehaResumeOct.pdf",
}: ResumeSectionProps) {
  const fallbackImages = [
    "/images/photo1.jpg",
    "/images/photo2.png",
    "/images/photo3.png",
  ];
  const images = photoUrl
    ? [photoUrl, ...fallbackImages.filter((p) => p !== photoUrl)]
    : fallbackImages;

  const [index, setIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState(images[0] || fallbackImages[0]);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(t);
  }, [images.length]);

  useEffect(() => {
    setImgSrc(images[index] || fallbackImages[0]);
  }, [index, images]);

  function handleImgError() {
    if (imgSrc !== fallbackImages[0]) setImgSrc(fallbackImages[0]);
  }

  const defaultTools = [
    { name: "Xd", color: "#FF6FD8", initials: "Xd" },
    { name: "Ai", color: "#FFB84D", initials: "Ai" },
    { name: "Ps", color: "#4AB3FF", initials: "Ps" },
    { name: "Figma", color: "#0ACF83", initials: "Fg" },
    { name: "Framer", color: "#0055FF", initials: "Fr" },
  ];
  const itemList = tools && tools.length ? tools : defaultTools;

  const imageHover = { scale: 1.02, transition: { duration: 0.45 } };
  const ctaTap = { scale: 0.98 };

  return (
    // remove custom bg so it matches main layout background
    <section id="resume" className="min-h-screen px-6 py-16 text-white">
      <div className="max-w-[1240px] mx-auto">
        {/* ===== HERO: ME, MYSELF + arrow + copy ===== */}
        <div className="mb-14 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] gap-10 items-start">
            {/* LEFT: big heading + animated arrow (similar to reference) */}
            <div className="flex lg:block">
              <div className="inline-flex items-center lg:items-start gap-6">
                {/* <h1
                  aria-hidden
                  className="font-black uppercase tracking-tight text-white"
                  style={{
                    fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.04em",
                    fontFamily:
                      '"SF Pro Display","Poppins","Inter","system-ui",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
                  }}
                >
                  <span className="block">ME,</span>
                  <span className="block">MYSELF</span>
                </h1> */}
                <h1
                  aria-hidden
                  className="font-black uppercase tracking-tight text-white"
                  style={{
                    fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                 
                    lineHeight: 0.9,
                    letterSpacing: "-0.04em",
                    fontFamily:
                      '"Instrument Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  }}
                >
                  <span className="block">ME,</span>
                  <span className="block">MYSELF</span>
                </h1>

                {/* animated arrow nudging towards the paragraph */}
                <motion.div
                  aria-hidden
                  className="hidden lg:flex items-center mt-10"
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="80"
                    height="26"
                    viewBox="0 0 120 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 20h92"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M110 20l-8-7v14l8-7z"
                      fill="rgba(255,255,255,0.8)"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: about text, same structure as reference */}
            <div className="relative z-10">
              <div
                className="max-w-[640px] text-gray-300"
                // style={{ fontSize: 18, lineHeight: "32px" }}
                style={{
                  fontSize: 18,
                  lineHeight: "32px",
                  fontFamily:
                    '"Instrument Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                }}
              >
                <p className="mb-4">
                  My design journey started back in school not with wireframes,
                  but by renaming flights to “Sanjay Airlines” and Photoshopping
                  Obama watching me give interviews on TV 😄. It was all fun and
                  delusion. But somewhere between that and making posters for
                  college events,&nbsp;
                  <strong className="text-white">
                    I realized I genuinely loved designing things.
                  </strong>
                </p>

                <p>
                  That curiosity took off. I got my first job (not in design
                  plot twist), but kept sneaking design into everything until it
                  became my real role. Then <strong>Gowtham</strong> introduced
                  me to UI/UX, and <strong>Arun</strong> rewired how I saw
                  design from pretty screens to problem-solving. Now I craft
                  products, fix UX messes, and still have fun — just with fewer
                  world leaders involved 😬.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MAIN 3-COLUMN AREA ===== */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-[1fr_460px_330px] items-start">
          {/* Portrait */}
          <main className="order-1">
            <figure className="rounded-2xl bg-[#0b0b0b] border border-gray-800 p-4 shadow-sm">
              <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#111111]">
                <motion.img
                  whileHover={imageHover}
                  src={imgSrc}
                  onError={handleImgError}
                  alt={`${name} portrait`}
                  className="w-full h-[520px] object-cover block"
                />
              </div>

              <figcaption className="mt-4 text-center">
                <div className="text-gray-300 font-medium">
                  The accidental model 😅
                </div>
              </figcaption>
            </figure>
          </main>

          {/* Role + location + tools */}
          <div className="space-y-6 order-2">
            <div className="rounded-2xl bg-[#0b0b0b] border border-gray-800 p-6">
              <p className="text-sm text-gray-400">Surviving as</p>
              <h3 className="text-3xl font-extrabold mt-2">{role}</h3>

              <div className="mt-4 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111] border border-gray-800 rounded-full text-sm">
                  Behance
                </a>
                <a className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111] border border-gray-800 rounded-full text-sm">
                  Dribbble
                </a>
                <a className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#111111] border border-gray-800 rounded-full text-sm">
                  Instagram
                </a>
              </div>
            </div>

            <section className="rounded-2xl bg-[#0b0b0b] border border-gray-800 p-6">
              <h4 className="text-sm text-gray-400">Buffering in</h4>
              <p className="mt-2 font-semibold text-lg">{location}</p>
              <p className="mt-2 text-sm text-gray-400">
                Open to remote internships &amp; grad roles
              </p>
            </section>

            {/* Tools marquee */}
            <div className="rounded-2xl bg-[#0b0b0b] w-3xl border border-gray-800 p-6">
              <p className="text-center text-sm text-gray-400 uppercase tracking-widest">
                Tools I swear by
              </p>

              <div className="mt-4 overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none bg-gradient-to-r from-[#0b0b0b] via-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none bg-gradient-to-l from-[#0b0b0b] via-transparent" />

                <div className="overflow-hidden">
                  <div className="marquee-track flex gap-4 py-3 will-change-transform">
                    {[...itemList, ...itemList].map((t, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-4 p-3 rounded-lg bg-[#151515] border border-gray-800"
                        whileHover={{ scale: 1.03 }}
                        style={{ minWidth: 120 }}
                        title={t.name}
                      >
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ background: t.color || "#ddd" }}
                        >
                          <span className="font-semibold text-black">
                            {t.initials || t.name.slice(0, 2)}
                          </span>
                        </div>
                        {/* <div className="hidden md:block text-sm text-gray-300">
                          {t.name}
                        </div> */}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* local marquee animation (stays inside component) */}
                <style>{`
                  .marquee-track {
                    animation: marquee 10s linear infinite;
                  }
                  .marquee-track:hover {
                    animation-play-state: paused;
                  }
                  @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                  }
                `}</style>
              </div>
            </div>
          </div>

          {/* CTA */}
          <aside className="order-3">
            <div
              className="rounded-2xl p-6 relative"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                border: "1px solid rgba(255,255,255,0.03)",
              }}
            >
              <div className="absolute right-10 text-4xl" aria-hidden>
                ⭐
              </div>

              <h4 className="text-2xl font-extrabold leading-tight">
                WANNA WORK
                <br />
                TOGETHER?
              </h4>
              <p className="mt-3 text-gray-300">My resume is one click away</p>

              <motion.a
                href={resumeUrl}
                download
                aria-label="Download resume PDF"
                whileTap={ctaTap}
                className="mt-6 inline-block w-full py-4 rounded-lg text-center font-semibold"
                style={{
                  background: "#7B2CFF",
                  boxShadow: "8px 8px 0 rgba(88,18,180,0.18)",
                  color: "#fff",
                }}
              >
                Download for free 😅
              </motion.a>

              <div className="mt-4 text-sm text-gray-400">
                Available for contract and full-time roles.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
