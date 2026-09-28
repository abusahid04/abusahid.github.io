"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Timeout to allow DOM updates after navigation
    const timeout = setTimeout(() => {
      const items = document.querySelectorAll('.reveal:not(.in-view)');
      if (!('IntersectionObserver' in window)) {
        items.forEach(el => el.classList.add('in-view'));
        return;
      }
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      
      items.forEach(el => obs.observe(el));
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
