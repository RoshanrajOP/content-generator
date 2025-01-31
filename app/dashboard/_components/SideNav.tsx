"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Import Link from next/link

function SideNav() {
    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: "/dashboard",
        },
        {
            name: "History",
            icon: FileClock,
            path: "/dashboard/history",
        },
        {
            name: "Billing",
            icon: WalletCards,
            path: "/dashboard/billing",
        },
        {
            name: "Setting",
            icon: Settings,
            path: "/dashboard/settings",
        },
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className="h-screen p-5 shadow-sm border bg-white">
            <div className="flex justify-center">
                <Image src={"/Untitled design.png"} alt="logo" width={120} height={100} />
            </div>
            <hr className="my-6 border" />
            <div className="mt-3">
                {MenuList.map((menu) => (
                    <Link key={menu.path} href={menu.path}> {/* Wrap each menu item with Link */}
                        <div
                            className={`flex gap-2 mb-2 p-3 hover:bg-orange-200 hover:text-black rounded-lg cursor-pointer items-center ${
                                path === menu.path ? "bg-primary text-white" : ""
                            }`}
                        >
                            <menu.icon className="h-6 w-6" />
                            <h2 className="text-lg">{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
