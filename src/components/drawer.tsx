
import { Menu, X } from "react-feather";

export function DrawerCom() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer">
          <Menu size={24} color="grey" strokeWidth={3}></Menu>
        </label>
      </div>
      <div className="drawer-side z-30">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu h-full w-64 gap-1 bg-base-200  p-4 text-lg font-bold text-base-content">
          {/* Sidebar content here */}
          <label htmlFor="my-drawer">
            <X
              strokeWidth={3}
              size={22}
              className="mb-9 ml-2 text-greishDarkBlue"
            ></X>
          </label>
          <li>
            <a>Collection</a>
          </li>
          <li>
            <a>Men</a>
          </li>
          <li>
            <a>Woman</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
