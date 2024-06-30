import React from "react";
import { NavLink } from "react-router-dom";
function Admin() {
  return (
    <div>
      <aside className='h-screen sticky top-0 overflow-y-auto w-60 py-6 px-4 bg-base-200'>
        <a className='btn btn-ghost'>The Woods 🌴</a>

        <ul className='menu px-0'>
          <li className='menu-title'>Product</li>
          <li>
            <a>
              <i className='fa-solid fa-table-columns fa-fw'></i>
              Product List
            </a>
          </li>
          <li>
            <a>
              <i className='fa-solid fa-gauge-high fa-fw'></i>
              Create
            </a>
          </li>
        </ul>
      </aside>
      <div></div>
    </div>
  );
}

export default Admin;
