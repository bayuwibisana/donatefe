import React from "react";

export default function SearchBar() {
    return (
        <div className="px-4 pb-4">
            <label className="flex flex-col w-full">
                <div className="relative flex w-full items-center rounded-2xl h-14 bg-white shadow-sm overflow-hidden transition-colors">
                    <div className="absolute left-4 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">
                            search
                        </span>
                    </div>
                    <input
                        className="w-full h-full bg-transparent border-none outline-none focus:ring-0 pl-12 pr-4 text-base font-medium placeholder:text-gray-400 text-[#111813]"
                        placeholder="Find a cause to support..."
                        type="text"
                    />
                </div>
            </label>
        </div>
    );
}
