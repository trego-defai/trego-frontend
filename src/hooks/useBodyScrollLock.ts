"use client";

import { useEffect, useRef } from "react";

let lockCount = 0;

export default function useBodyScrollLock(isOpen: boolean) {
  const wasOpen = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const body = document.body;

    if (isOpen && !wasOpen.current) {
      lockCount += 1;
      wasOpen.current = true;
      if (lockCount > 0) {
        body.style.overflow = "hidden";
      }
    } else if (!isOpen && wasOpen.current) {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        body.style.overflow = "";
      }
      wasOpen.current = false;
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && wasOpen.current) {
        lockCount = Math.max(0, lockCount - 1);
        if (lockCount === 0) {
          const body = document.body;
          body.style.overflow = "";
        }
      }
    };
  }, []);
}
