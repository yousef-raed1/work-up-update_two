import React from "react";
import { NavLink } from "react-router-dom";
import logo_upwork from "../../assets/images/works/Work_up_logo.png";

import {
  FaHome,
  FaBriefcase,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

export default function Sidedash({ isOpen, onClose }) {
  const menuItems = [
    {
      title: "الرئيسية (مشاريع)",
      icon: <FaHome />,
      path: "/home_projjjject",
    },
    {
      title: "الأعمال (مشاريع)",
      icon: <FaBriefcase />,
      path: "/workkkkk_-proJect",
    },
    {
      title: "الخدمات",
      icon: <FaBriefcase />,
      path: "/serVvvviceS",
    },
    {
      title: "لماذا نحن",
      icon: <FaBriefcase />,
      path: "/WhyuuuSS",
    },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-40
            bg-black/50
            backdrop-blur-sm
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-72
          bg-[#111827]
          text-white
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div
          className="
            flex
            h-24
            items-center
            justify-between
            border-b
            border-white/10
            px-6
          "
        >
          <div
            className="
              flex
              h-20
              w-52
              items-center
              justify-center
              overflow-hidden
            "
          >
            <img
              src={logo_upwork}
              alt="Work-Up Logo"
              className="
                h-full
                w-full
                scale-125
                object-contain
              "
            />
          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              text-xl
              text-gray-400
              transition
              hover:bg-white/10
              hover:text-white
              lg:hidden
            "
          >
            <FaTimes />
          </button>
        </div>

        <nav className="space-y-3 p-5">
          <p
            className="
              mb-5
              px-4
              text-xs
              font-bold
              tracking-widest
              text-gray-500
            "
          >
            MAIN MENU
          </p>

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                `
                  group
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-4
                  py-3
                  text-base
                  font-medium
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? `
                        scale-[1.02]
                        bg-gradient-to-r
                        from-[#532AAA]
                        to-[#00C0A9]
                        text-white
                        shadow-xl
                        shadow-purple-900/30
                      `
                      : `
                        text-gray-400
                        hover:translate-x-1
                        hover:bg-white/5
                        hover:text-white
                      `
                  }
                `
              }
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/5
                  text-xl
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                {item.icon}
              </span>

              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-5
          "
        >
          <div
            className="
              space-y-3
              border-t
              border-white/10
              pt-5
            "
          >

            <button
              className="
                flex
                w-full
                items-center
                gap-4
                rounded-2xl
                px-4
                py-3
                text-base
                font-medium
                text-red-400
                transition-all
                duration-300
                hover:translate-x-1
                hover:bg-red-500/10
                hover:text-red-300
              "
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-red-500/5
                  text-xl
                "
              >
                <FaSignOutAlt />
              </span>

              <span>تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}