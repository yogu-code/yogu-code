import { IconType } from "react-icons";

export type SkillGroup = {
    title: string;
    skills: {
        name: string;
        icon: IconType;
    }[];
};

type SkillsProps = {
    skills: SkillGroup[];
};

export function Skills({ skills }: SkillsProps) {
    return (
        <section className="px-8 py-16 sm:px-16">
            <h2 className="font-serif text-5xl tracking-tight sm:text-6xl">
                What I work with.
            </h2>

            <div className="mt-10">
                {skills.map((group, index) => (
                    <div key={group.title}>
                        <div className="grid gap-4 py-6 md:grid-cols-[160px_1fr] md:gap-8">
                            {/* Category */}
                            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                                {group.title}
                            </h3>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-x-10 gap-y-4">
                                {group.skills.map(({ icon: Icon, name }) => (
                                    <div
                                        key={name}
                                        className="flex items-center gap-2 text-xl font-medium text-neutral-800 transition-colors hover:text-black"
                                    >
                                        <Icon className="h-4 w-4 shrink-0" />
                                        <span>{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {index !== skills.length - 1 && (
                            <div className="border-b border-neutral-200" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}