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
    <div className="absolute right-4 top-6 flex items-center gap-2">
      <Switch className="transition" onClick={toggleThemeMode} id="themeMode" />
      <label className="transition" htmlFor="themeMode">{theme}</label>
    </div>
  )
}