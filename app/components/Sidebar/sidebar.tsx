"use client";

import { showSidebar, useSelector } from "@/lib/redux";
import Link from "next/link";
import { FaLayerGroup, FaFolder, FaChartBar, FaSignOutAlt, FaImage } from 'react-icons/fa';
import "./sidebar.css"
import { usePathname } from "next/navigation";

export const Sidebar = () => {
    const showValue = useSelector(showSidebar)
    const router = usePathname();

    return (
        <div className={`l-navbar ${showValue ? '' : 'show'}`} id="nav-bar">
            <nav className="nav">
                <div>
                    <Link href="#" className="nav_logo">
                        <FaLayerGroup className="nav_logo-icon" />
                        <span className="nav_logo-name">My Galleria</span>
                    </Link>
                    <div className="nav_list">
                        <Link href="/foto" className={`nav_link ${router === '/foto' ? 'active' : ''}`}>
                            <FaImage className="nav_icon" />
                            <span className="nav_name">Dashboard</span>
                        </Link>
                        <Link href="/album" className={`nav_link ${router === '/album' ? 'active' : ''}`}>
                            <FaFolder className="nav_icon" />
                            <span className="nav_name">Album</span>
                        </Link>
                    </div>
                </div>
                <a href="#" className="nav_link">
                    <FaSignOutAlt className="nav_icon" />
                    <span className="nav_name">SignOut</span>
                </a>
            </nav>
        </div>
    );
};
