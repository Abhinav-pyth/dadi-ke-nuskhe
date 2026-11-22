import {
  Archive,
  Baby,
  Bone,
  Brain,
  Brush,
  Cake,
  Coffee,
  Droplets,
  Flame,
  Flower2,
  Gift,
  HeartPulse,
  Home,
  Leaf,
  Moon,
  Scissors,
  Snowflake,
  Soup,
  Sparkles,
  Sun,
  Utensils,
  Wind,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  wind: Wind,
  soup: Soup,
  flame: Flame,
  droplets: Droplets,
  sun: Sun,
  brain: Brain,
  sparkles: Sparkles,
  leaf: Leaf,
  moon: Moon,
  bone: Bone,
  heart: HeartPulse,
  snowflake: Snowflake,
  flower: Flower2,
  baby: Baby,
  home: Home,
  broom: Brush,
  cake: Cake,
  coffee: Coffee,
  jar: Archive,
  gift: Gift,
  utensils: Utensils,
  scissors: Scissors,
};

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Leaf;
  return <Icon aria-hidden="true" className={cn("h-5 w-5", className)} />;
}
