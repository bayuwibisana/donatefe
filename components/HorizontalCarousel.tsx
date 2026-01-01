"use client";

import React, { useRef, useState, useEffect } from "react";

interface CarouselProps {
    children: React.ReactNode;
}

export default function HorizontalCarousel({ children }: CarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
            setTimeout(checkScroll, 100);
        }
    };

    return (
        <div className="relative group">
            {/* Left Arrow */}
            {canScrollLeft && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Scroll left"
                >
                    <span className="material-symbols-outlined text-gray-700">
                        chevron_left
                    </span>
                </button>
            )}

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar snap-x snap-mandatory"
                style={{ touchAction: "pan-x", WebkitOverflowScrolling: "touch" }}
                onScroll={checkScroll}
            >
                {children}
            </div>

            {/* Right Arrow */}
            {canScrollRight && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Scroll right"
                >
                    <span className="material-symbols-outlined text-gray-700">
                        chevron_right
                    </span>
                </button>
            )}

            {/* Scroll Indicators (Dots) - Always visible on mobile */}
            <div className="flex justify-center gap-1.5 pt-2 md:hidden">
                {Array.from({ length: React.Children.count(children) }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all ${index === 0 ? "w-6 bg-primary" : "w-1.5 bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
