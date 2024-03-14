const page = document.querySelector('html')

export function toggleThemeMode(){
  page?.classList.toggle('dark')
}