import Link from "next/link";

export const Navigation = () => {
const items1 = "Главная"
const items2 = "Автор"
const items3 = "Контакты"


  return (
    <ul className="nav" role="menu">
     <li className="nav-home" role="menu-item">
         <Link href="/">{items1}</Link>
     </li>
    <li className="nav-home" role="menu-item">
        <Link href="/">{items2}</Link>
    </li>
    <li className="nav-home" role="menu-item">
        <Link href="/">{items3}</Link>
    </li>
    </ul>
  )
}