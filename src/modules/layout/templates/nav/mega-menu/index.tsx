import { Menu, Popover, Transition } from "@headlessui/react"
import {
  useFeaturedProductsQuery,
  useNavigationCollections,
} from "@lib/hooks/use-layout-data"
import repeat from "@lib/util/repeat"
import ChevronDown from "@modules/common/icons/chevron-down"
import Package from "@modules/common/icons/package"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import clsx from "clsx"
import { chunk } from "lodash"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { Fragment, useState } from "react"

type MenuItem = {
  name: string
  link?: string
  description?: string
  subsections?: MenuItem[]
  queryParams?: any
}

type MegaMenu = {
  name: string
  icon?: string
  link?: string
  children?: MenuItem[]
  description?: string
  queryParams?: any
}

type MegaMenuProps = {
  menu: MegaMenu
}

const MegaMenu: React.FC<MegaMenuProps> = ({ menu }) => {
  return (
    <div className="flex items-center h-full">      
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`${open ? "" : "text-opacity-90"} group inline-flex items-center `}
            >
              {menu.link ? (
                <Link href={menu.link} legacyBehavior>
                  {menu.name}
                </Link>
              ) : (
                <span>{menu.name}</span>
              )}
              {menu.children?.length && (
                <ChevronDown
                  className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200">
                <div className="relative bg-white py-8">
                  <div className="flex items-start content-container">
                    <div className="relative grid gap-8 bg-white p-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {menu.children?.map(({ name, description, link, subsections }) => (
                        <a
                            key={name}
                            href={link}
                            className="-m-3 flex items-center p-2 transition duration-150 ease-in-out focus:outline-none"
                        >                        
                            <div className="w-full">
                                <p className="py-4 font-bold text-gray-900">
                                    {name}
                                </p>
                                <p className="text-gray-500">{description}</p>
                                <ul>
                                    {subsections?.map(({name, link}) => (
                                        <li className="py-2 hover:text-gray-500">{name}</li>
                                    ))}                            
                                </ul>
                            </div>
                        </a>
                        ))}
                    </div>
                  </div>
                </div>


              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default MegaMenu
