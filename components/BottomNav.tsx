"use client";

import React from "react";

type NavItem = "home" | "saved" | "history" | "profile";

interface BottomNavProps {
    activeItem?: NavItem;
}

export default function BottomNav({ activeItem = "home" }: BottomNavProps) {
    const navItems = [
        { id: "home" as NavItem, icon: "home", label: "Home" },
        { id: "saved" as NavItem, icon: "favorite", label: "Saved" },
        { id: "history" as NavItem, icon: "history", label: "History" },
        { id: "profile" as NavItem, icon: "person", label: "Profile" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe pt-2 px-6 shadow-[0_-4px_6px_rgba(0,0,0,0.02)] z-50">
            <div className="flex justify-between items-center h-16 max-w-lg mx-auto">
                {navItems.map((item) => {
                    const isActive = item.id === activeItem;
                    return (
                        <button
                            key={item.id}
                            className={`flex flex-col items-center justify-center gap-1 w-16 transition-colors ${isActive
                                    ? "text-primary"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <span
                                className={`material-symbols-outlined ${isActive ? "filled" : ""}`}
                                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}
                            >
                                {item.icon}
                            </span>
                            <span
                                className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}
                            >
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
            {/* Safe area spacing for modern phones */}
            <div className="h-6 w-full" />
        </div>
    );
}
