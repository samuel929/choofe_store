import React from "react";
import {
  Badge,
  Button,
  Card,
  Dropdown,
  Indicator,
  Navbar,
} from "react-daisyui";
import { FaCircleUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
function Navigation() {
  return (
    <>
      <Navbar>
        <div className='flex-1'>
          <Link to='/'>The Woods 🌴</Link>
        </div>
        <div className='flex-none'>
          <Dropdown end>
            <Button tag='label' tabIndex={0} color='ghost' shape='circle'>
              <Indicator>
                <Badge size='sm' className={Indicator.Item.className()}>
                  8
                </Badge>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </Indicator>
            </Button>
            <Dropdown.Menu className='mt-3 z-[1] card card-compact w-52 !p-0'>
              <Card.Body>
                <span className='font-bold text-lg'>8 Items</span>
                <span className='text-light'>Subtotal: R999</span>
                <Card.Actions>
                  <Button fullWidth>View cart</Button>
                </Card.Actions>
              </Card.Body>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown end>
            <Button
              tag='label'
              tabIndex={0}
              color='ghost'
              className='avatar'
              shape='circle'
            >
              <div>
                <FaCircleUser className='w-10 rounded-full' size={40} />
              </div>
            </Button>
            <Dropdown.Menu className='mt-3 z-[1] w-52 menu-sm'>
              <li>
                <Link to={"/profile"} className='justify-between'>
                  Profile
                  <Badge className='badge'>New</Badge>
                </Link>
              </li>
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
