import { toggleThemeMode } from "@/utils/DarkMode";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useState, useEffect } from 'react';

export function SwitchThemeMode() {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      return <Moon />;
    } else {
      return <Sun />;
    }
  });

  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const htmlClasses = document.documentElement.classList;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setTheme(<Moon />);
      setIsDarkTheme(true);
      htmlClasses.add('dark');
    } else {
      setTheme(<Sun />);
      setIsDarkTheme(false)
      htmlClasses.remove('dark');
    }

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'class') {
          if (htmlClasses.contains('dark')) {
            setTheme(<Moon />);
            setIsDarkTheme(true);
            localStorage.setItem('theme', 'dark');
          } else {
            setTheme(<Sun />);
            setIsDarkTheme(false);
            localStorage.setItem('theme', 'light');
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

  const handleToggleTheme = () => {
    if (isDarkTheme) {
      setTheme(<Sun />);
      setIsDarkTheme(false);
      localStorage.setItem('theme', 'light');
    } else {
      setTheme(<Moon />);
      setIsDarkTheme(true);
      localStorage.setItem('theme', 'dark');
    }
    toggleThemeMode();
  };

  return (
    <div className="absolute flex items-center gap-2 max-md:-top-8 right-5 top-1/2 -translate-y-1/2 max-md:right-5 max-alternateLg:top-2">
      <Switch className="dark:bg-foreground max-xl:hidden rotate-90" checked={isDarkTheme} onClick={handleToggleTheme} id="themeMode" />
      <label htmlFor="themeMode" className="transition">{theme}</label>
    </div>
  )
}