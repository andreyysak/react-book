import React, { Dispatch, Fragment, SetStateAction } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { SORT_BY_ALPHABET, SORT_BY_LENGTH } from '../constants/constants';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  title: string;
  setReverse: Dispatch<SetStateAction<boolean>>;
  setSort: Dispatch<SetStateAction<string>>;
}

export const DropdownSort: React.FC<Props> = React.memo(({title, setReverse, setSort}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-light dark:bg-darkText px-3 py-2 text-sm font-semibold text-darkText dark:text-light shadow-sm ring-1 ring-darkText dark:ring-light ring-inset">
          {title}
          <ChevronDownIcon className="-mr-1 h-5 w-5 dark:text-light text-darkText" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-light dark:bg-darkText text-darkText dark:text-light shadow-lg ring-1 ring-darkText dark:ring-light ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSort(SORT_BY_ALPHABET)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Alphabet
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => setSort(SORT_BY_LENGTH)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Price
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setReverse(cur => !cur)}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Reverse
                </button>
              )}
            </Menu.Item>            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
})
