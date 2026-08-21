import { FaBullhorn, FaFileImage, FaDownload } from "react-icons/fa";

const MediaKit = () => {
  return (
    <section id="media-kit" className="py-20 sm:py-28 bg-white scroll-mt-20 border-t border-neutral-100">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-blef-gold-light block mb-2">
                Press & Communications
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Official Media Kit & Press Inquiries
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                Journalists, researchers, and media partners can download the official BLEF brand guidelines, executive bios, and high-resolution Grass Green & Gold logos.
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs text-neutral-400">
                <FaBullhorn className="text-blef-gold" size={14} />
                <span>Media Contact: Glory Okezie (Communications and Partnerships Manager)</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => alert("Downloading Official Media Assets...")}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-blef-green hover:bg-blef-green-dark text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer"
              >
                <FaDownload size={11} />
                <span>Download Media Kit (ZIP)</span>
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center py-3.5 px-6 rounded-full border border-white/20 hover:bg-white hover:text-blef-charcoal text-white font-bold text-xs uppercase tracking-wider transition"
              >
                <span>Request Press Interview</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;