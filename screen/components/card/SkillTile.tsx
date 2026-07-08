import { IconType } from "react-icons";

type SkillTileProps = {
  icon: IconType;
  name: string;
};

export function SkillTile({ icon: Icon, name }: SkillTileProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md">
      <Icon className="h-8 w-8 text-neutral-800" />
      <span className="text-sm font-medium text-neutral-800">{name}</span>
    </div>
  );
}