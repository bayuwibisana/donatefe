import React from "react";

interface ProgressBarProps {
    percentage: number;
    raised: string;
    goal?: string;
    showDonateButton?: boolean;
}

export default function ProgressBar({
    percentage,
    raised,
    goal,
    showDonateButton = true,
}: ProgressBarProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                    className="bg-primary h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                />
            </div>
            <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-500">
                    <span className="text-[#111813] font-bold">
                        {raised}
                    </span>{" "}
                    raised{goal && ` of ${goal}`}
                </span>
                <span className="text-gray-400">{percentage}%</span>
            </div>
            {showDonateButton && (
                <button className="w-full py-3 rounded-xl bg-primary text-[#111813] font-bold text-sm hover:bg-green-400 transition-colors active:scale-[0.98]">
                    Donate Now
                </button>
            )}
        </div>
    );
}
