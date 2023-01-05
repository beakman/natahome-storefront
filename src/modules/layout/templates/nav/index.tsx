import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import User from "@modules/common/icons/user"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Logo from "./logo"
import MegaMenu from "./mega-menu"
import Package from "@modules/common/icons/package"
import { size } from "lodash"

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  const mueblesMenu = {
    name: "Parent",
    link: "/store",
    queryParams: [{ "type_id": "pkid_typeXXXXXXXXXXXXX" }],
    children: [
      {
        name: "Almacenaje",
        description: "",
        icon: Package,
        queryParams: [],
        subsections: [
          { name: "Baules", queryParams: [] },
          { name: "Cestos", queryParams: [] },
          { name: "Cómodas y sinfonieres", queryParams: [] },
          { name: "Estanterias", queryParams: [] },
          { name: "Mesitas de noche", queryParams: [] },
          { name: "Plateros", queryParams: [] },
        ],
      },
      {
        name: "Mesas",
        description: "",
        queryParams: [],
        subsections: [
          { name: "Consolas", queryParams: [] },
          { name: "Mesas altas", queryParams: [] },
          { name: "Mesas bajas", queryParams: [] },
          { name: "Mesas de comedor", queryParams: [] },
          { name: "Mesas TV", queryParams: [] },
        ],
      },
      {
        name: "Asientos",
        description: "",
        queryParams: [],
        subsections: [
          { name: "Bancos", queryParams: [] },
          { name: "Banquetas", queryParams: [] },
          { name: "Mecedoras", queryParams: [] },
          { name: "Puffs", queryParams: [] },
          { name: "Sillas", queryParams: [] },
          { name: "Sillones", queryParams: [] },
          { name: "Taburetes y bancos", queryParams: [] },
        ],
      },
      {
        name: "Muebles dormitorio",
        description: "",
        queryParams: [],
        subsections: [
          { name: "Banquetas y zapateros", queryParams: [] },
          { name: "Cabeceros", queryParams: [] },
          { name: "Cómodas y sinfonieres", queryParams: [] },
          { name: "Galanes", queryParams: [] },
          { name: "Mesitas de noche", queryParams: [] },
        ],
      },
      {
        name: "Muebles de entrada",
        description: "",
        queryParams: [],
        subsections: [],
      },
    ],
  }

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
          {
            "!bg-white !border-gray-200": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx({
            "text-white group-hover:text-gray-900": isHome && !isScrolled,
          })}
        >
          <div
            className={clsx(
              "flex flex-wrap justify-between items-center mx-auto px-4 md:px-6 py-2.5"
            )}
          >
            <Logo />
            <button
              data-collapse-toggle="mega-menu-full"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="mega-menu-full"
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            >
              <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 md:hover:text-gray-700 md:p-0 dark:hover:text-gray-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <MegaMenu menu={mueblesMenu} />
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 md:hover:text-gray-700 md:p-0 dark:hover:text-gray-500"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 md:hover:text-gray-700 md:p-0 dark:hover:text-gray-500"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 md:hover:text-gray-700 md:p-0 dark:hover:text-gray-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
