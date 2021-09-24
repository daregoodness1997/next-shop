import Head from 'next/head';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  MenuIcon,
  ShoppingCartIcon,
  XIcon,
} from '@heroicons/react/outline';

import { Scrollbar } from 'smooth-scrollbar-react';
import { getProducts, getProductsData } from '../utils';

export const getStaticProps = async () => {
  // const data = await getProductsData(process.env.PRODUCTS_URL);
  // const res = await fetch('https://fakestoreapi.com/products');
  const res = await fetch('https://fakestoreapi.com/products');
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home({ products }) {
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ];

  const staticProducts = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt:
        'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt:
        'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt:
        'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc:
        'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt:
        'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ];
  console.log(products);
  return (
    <Scrollbar
      damping='0.3'
      plugins={{
        overscroll: {
          effect: 'bounce',
        },
      }}
    >
      <Disclosure as='nav' className='bg-white '>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex-shrink-0 flex items-center'>
                    <img
                      className='block lg:hidden h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                      alt='Workflow'
                    />
                    <img
                      className='hidden lg:block h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      {navigation.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-800 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <button
                    type='button'
                    className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as='div' className='ml-3 relative z-40'>
                    <div>
                      <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href='#'
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Herobox */}
      <div className='relative bg-white overflow-hidden'>
        <div className='pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static'>
            <div className='sm:max-w-lg'>
              <h1 className='text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl'>
                Summer styles are finally here
              </h1>
              <p className='mt-4 text-xl text-gray-500'>
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div className='mt-10'>
                {/* Decorative image grid */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full'
                >
                  <div className='absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8'>
                    <div className='flex items-center space-x-6 lg:space-x-8'>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                      <div className='flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8'>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                        <div className='w-44 h-64 rounded-lg overflow-hidden'>
                          <img
                            src='https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'
                            alt=''
                            className='w-full h-full object-center object-cover'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href='#'
                  className='inline-block text-center bg-black border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700 divide-x divide-gray-300'
                >
                  <spa className='pr-6'> Shop Collection</spa>
                  <span className='pl-6'> Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Lisiting */}
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='mt-4 mb-12 text-2xl text-gray-800 font-medium'>
          Products
        </h2>

        <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map(product => (
            <a key={product.id} href={product.href} className='group'>
              <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                <img
                  src={product.image}
                  alt={product.deccription}
                  className='w-full h-96 object-center object-cover group-hover:opacity-75'
                />
              </div>
              <h3 className='mt-4 text-sm text-gray-700'>{product.title}</h3>
              <p className='mt-1 text-lg font-medium text-gray-900'>
                ₦{product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </Scrollbar>
  );
}
