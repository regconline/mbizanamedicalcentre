import {
  Activity, Apple, Baby, ClipboardPlus, Droplet, HeartPulse, IdCard, Microscope,
  Pill, Scissors, Shield, ShieldCheck, Stethoscope, User, type LucideProps,
} from "lucide-react";

const map = {
  Activity, Apple, Baby, ClipboardPlus, Droplet, HeartPulse, IdCard, Microscope,
  Pill, Scissors, Shield, ShieldCheck, Stethoscope, User,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = map[name as keyof typeof map] ?? Stethoscope;
  return <C aria-hidden {...props} />;
}
