import { HalftonePortrait } from "./card/HalftonePortrait";

type HeroProps = {
    stats: {
        label: string;
        value: string;
    }[];
};

export function Hero({ stats }: HeroProps) {
    return (
        <section className="grid grid-cols-1 gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16 lg:py-16">
            {/* Left */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                    Hi.
                    <br />
                    I&apos;m{" "}
                    <span className="italic [font-variation-settings:'opsz'_28]">
                        Yogesh
                    </span>
                </h1>

                <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                    Full-stack Software Engineer building end-to-end products — from
                    React/Next.js interfaces to backend systems powered by Node.js,
                    TypeScript, PostgreSQL, Redis, and Docker. Experienced with
                    real-time applications and fintech integrations, and comfortable
                    owning a feature from UI to infrastructure.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-5 border-t border-neutral-200 pt-5 sm:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <p className="text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
                                {s.label}
                            </p>
                            <p className="mt-1 text-sm font-semibold text-neutral-900 sm:text-base">
                                {s.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right */}
            <div className="mx-auto aspect-4/5 w-64 sm:w-72 md:w-80 lg:w-full lg:max-w-md">
                <HalftonePortrait />
            </div>
        </section>
    );
}