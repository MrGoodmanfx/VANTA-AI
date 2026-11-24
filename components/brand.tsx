import { Orbit } from "lucide-react";
export function Brand({ small=false }: { small?: boolean }) {
  return <div className="flex items-center gap-2.5"><div className="grid h-9 w-9 place-items-center rounded-xl" style={{background:"linear-gradient(145deg,#a58fff,#7454e8)",color:"#100d1c"}}><Orbit size={20} strokeWidth={2.5}/></div>{!small&&<span className="font-display text-[17px] font-extrabold tracking-[.17em]">VANTA<span className="text-[#9275ff]">.</span></span>}</div>;
}
