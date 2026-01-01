import React from "react";

interface CategoryFilterProps {
    categories: Array<{
        id: string;
        name: string;
        icon: string;
        color: string;
    }>;
    activeCategory?: string;
}

export default function CategoryFilter({
    categories,
    activeCategory = "all",
}: CategoryFilterProps) {
    return (
        <section className="flex flex-col gap-3 py-2">
            <h3 className="text-lg font-bold tracking-tight px-4 text-[#111813]">
                Browse by Category
            </h3>
            <div className="flex overflow-x-auto gap-3 px-4 pb-2 no-scrollbar">
                {categories.map((category) => {
                    const isActive = category.id === activeCategory;
                    return (
                        <button
                            key={category.id}
                            className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm whitespace-nowrap shadow-sm transition-all ${isActive
                                    ? "bg-primary text-[#111813]"
                                    : "bg-white border border-gray-100 text-[#111813] font-semibold"
                                }`}
                        >
                            <span
                                className={`material-symbols-outlined text-[20px] ${!isActive ? category.color : ""}`}
                            >
                                {category.icon}
                            </span>
                            {category.name}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
