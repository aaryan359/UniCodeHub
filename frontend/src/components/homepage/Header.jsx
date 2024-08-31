import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Components', href: '/components'},
  { name: 'Contribute', href: '/contribute' },
  { name: 'Blogs', href: '/blogs' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {


                      const { token,settoken} = useState('null');









  return (


    <Disclosure as="nav" className=" w-full bg-richblack-900 border-b-[2px] border-b-richblack-600 ">

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center text-white rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only text-caribbeangreen-400">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />

            </DisclosureButton>


          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

            <div className="flex flex-shrink-0 items-center">

              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block">

              <div className="flex  space-x-4">

                {navigation.map((item,index) => (

                          
                  <Link   key={index} to={item?.href}>

                  <p

                    className=' text-white  transition-all duration-200 hover:bg-richblack-600 p-2 rounded-md '
                  >
                    {item.name}

                  </p>
        </Link>
                ))}
              </div>

            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">

              <div className=' flex flex-row justify-center items-center gap-5 '>

                <MenuButton className="relative gap-3 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />


                    <Link  to = "/login" >
                                          <button className=" text-white rounded-2xl border-richblack-300 bg-richblack-800 pt-2 pb-2 px-[12px] py-[8px]">
                                                  Log in
                                          </button>
                    </Link>

                     <Link to = "/signup">
                                               <button className=" text-white rounded-2xl border-richblack-300 bg-richblack-800 pt-2 pb-2 px-[12px] py-[8px]" >
                                                      Sign up
                                                 </button>
                      </Link>
                                          
               </MenuButton>

              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-richblack-900">
                    Your Profile
                  </a>
                </MenuItem>

                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>

                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>

              </MenuItems>

            </Menu>
          </div>

        </div>

      </div>

      <DisclosurePanel className="sm:hidden">
        <div className=" bg-richblack-900 space-y-1 px-2 pb-3 pt-2">

        {navigation.map((item) => (
      <Link
        key={item.name}
        to={item.href}
        className="text-white transition-all duration-200 hover:bg-richblack-600 p-2 rounded-md block"
      >
        {item.name}
      </Link>

    ))}

        </div>
      </DisclosurePanel>


    </Disclosure>
  )
}
