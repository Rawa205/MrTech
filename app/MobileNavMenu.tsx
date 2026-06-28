"use client";

import { useEffect, useState } from "react";
import { ArrowUpLeft, Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavMenuProps = {
  label: string;
  items: NavItem[];
};

export function MobileNavMenu({ label, items }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="mobile-menu">
      <button
        aria-expanded={open}
        aria-label={label}
        className="mobile-menu-trigger"
        type="button"
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        <span>{label}</span>
      </button>

      {open ? (
        <div className="mobile-menu-panel">
          {items.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpLeft size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
