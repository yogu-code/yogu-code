import Image from "next/image";

export function HalftonePortrait() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-100">
      <Image
        src="/yogu-portrait.jpg" // replace with your photo in /public
        alt="Yogesh Rane"
        fill
        priority
        className="object-cover grayscale contrast-125"
      />
      {/* halftone dot overlay */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}