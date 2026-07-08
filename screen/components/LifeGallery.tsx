export function LifeGallery({ images }: { images: string[] }) {
  return (
    <section className="py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="group">
          <div className="flex w-max gap-6 animate-scroll group-hover:[animation-play-state:paused]">
            {[...images, ...images].map((src, i) => (
              <div
                key={i}
                className="shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <img
                  src={src}
                  alt=""
                  className="h-72 w-72 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}