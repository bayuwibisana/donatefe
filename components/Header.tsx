import React from "react";

interface HeaderProps {
    userName?: string;
    greeting?: string;
    userImageUrl?: string;
}

export default function Header({
    userName = "Alex",
    greeting = "Good Morning",
    userImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBa-k9dKZNuFx6GrY9UcfQ1-r74DcAjgUZqRKZpDRkUyGbiRBBELyo0ASwTpv9VzbZXuCyLL6j7Pe3MYTErtxwPK4AePFUKAlzApF85Z2I-o91Z4cfhdos1XAaRjEDU-PW-or77OpdXN4LSmotcoEQXNuUmChtnD3GDhJ1YIKBKdvXacLyJQis2SiHAvAO853cJfOtuiqb5AcyVbgI8ene8uqp8iiuM-LaMLc2mSKQ1PZK4k6zhPBZ3YUW5kA6Fb_N5xRxIEXojwDRx",
}: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm transition-colors duration-300">
            <div className="flex items-center p-4 justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white shadow-sm"
                            style={{ backgroundImage: `url("${userImageUrl}")` }}
                        />
                        <div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-gray-500">
                            {greeting}
                        </span>
                        <h2 className="text-lg font-bold leading-tight tracking-tight">
                            Hello, {userName} 👋
                        </h2>
                    </div>
                </div>
                <button className="flex items-center justify-center size-10 rounded-full bg-white shadow-sm active:scale-95 transition-transform text-[#111813]">
                    <span className="material-symbols-outlined text-[24px]">
                        notifications
                    </span>
                </button>
            </div>
        </header>
    );
}
