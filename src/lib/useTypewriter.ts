"use client";

import { useEffect, useRef, useState } from "react";
import { ChatScript } from "@/data/types";

type Phase = "q" | "think" | "a" | "hold";

const PHASE_DELAYS = {
  qChar: 34,
  qDone: 2000,
  think: 200,
  aChar: 18,
  aDone: 6000,
  hold: 1000,
} as const;

interface TypewriterState {
  qText: string;
  aText: string;
  phase: Phase;
  showCite: boolean;
  cites: string[];
}

export function useTypewriter(scripts: ChatScript[]): TypewriterState {
  const [state, setState] = useState<TypewriterState>({
    qText: "",
    aText: "",
    phase: "q",
    showCite: false,
    cites: scripts[0]?.cites ?? [],
  });

  const siRef = useRef(0);
  const qiRef = useRef(0);
  const aiRef = useRef(0);
  const phaseRef = useRef<Phase>("q");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    function step() {
      const s = scripts[siRef.current % scripts.length];
      let delay: number;
      let next: TypewriterState;

      if (phaseRef.current === "q") {
        if (qiRef.current < s.q.length) {
          qiRef.current++;
          delay = PHASE_DELAYS.qChar;
          next = { qText: s.q.slice(0, qiRef.current), aText: "", phase: "q", showCite: false, cites: s.cites };
        } else {
          phaseRef.current = "think";
          delay = PHASE_DELAYS.qDone;
          next = { qText: s.q, aText: "", phase: "think", showCite: false, cites: s.cites };
        }
      } else if (phaseRef.current === "think") {
        phaseRef.current = "a";
        delay = PHASE_DELAYS.think;
        next = { qText: s.q, aText: "", phase: "a", showCite: false, cites: s.cites };
      } else if (phaseRef.current === "a") {
        if (aiRef.current < s.a.length) {
          aiRef.current += 2;
          delay = PHASE_DELAYS.aChar;
          next = { qText: s.q, aText: s.a.slice(0, aiRef.current), phase: "a", showCite: false, cites: s.cites };
        } else {
          phaseRef.current = "hold";
          delay = PHASE_DELAYS.aDone;
          next = { qText: s.q, aText: s.a, phase: "hold", showCite: true, cites: s.cites };
        }
      } else {
        // hold -> advance to next script
        qiRef.current = 0;
        aiRef.current = 0;
        siRef.current += 1;
        phaseRef.current = "q";
        delay = PHASE_DELAYS.hold;
        const nextScript = scripts[siRef.current % scripts.length];
        next = { qText: "", aText: "", phase: "q", showCite: false, cites: nextScript.cites };
      }

      setState(next);
      timeoutRef.current = setTimeout(step, delay);
    }

    timeoutRef.current = setTimeout(step, PHASE_DELAYS.qChar);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
