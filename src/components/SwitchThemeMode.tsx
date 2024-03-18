import { toggleThemeMode } from "@/utils/DarkMode";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useState, useEffect } from 'react';

export function SwitchThemeMode() {

  const [theme, setTheme] = useState(<Sun />);

  useEffect(() => {
    const htmlClasses = document.documentElement.classList;
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          if (mutation.oldValue === '' && htmlClasses.contains('dark')) {
            setTheme(<Moon />);
          } else {
            setTheme(<Sun />);
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeOldValue: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute flex items-center gap-2 max-md:-top-8 right-5 top-1/2 -translate-y-1/2 max-md:right-5 max-alternateLg:top-2">
      <Switch className="dark:bg-foreground max-xl:hidden" onClick={toggleThemeMode} id="themeMode" />
      <label htmlFor="themeMode" className="transition">{theme}</label>
    </div>
  )
}