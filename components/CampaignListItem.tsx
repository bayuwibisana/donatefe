import React from "react";
import Link from "next/link";

interface CampaignListItemProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    raised: string;
    goal: string;
    percentage: number;
}

export default function CampaignListItem({
    id,
    title,
    description,
    imageUrl,
    raised,
    goal,
    percentage,
}: CampaignListItemProps) {
    return (
        <Link href={`/campaign/${id}`} className="flex flex-col sm:flex-row gap-4 p-3 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform hover:shadow-md cursor-pointer">
            <div
                className="sm:w-32 sm:h-32 w-full h-40 shrink-0 bg-center bg-cover rounded-xl"
                style={{ backgroundImage: `url("${imageUrl}")` }}
            />
            <div className="flex flex-col flex-1 justify-center gap-2">
                <div>
                    <h4 className="text-base font-bold text-[#111813] leading-tight">
                        {title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {description}
                    </p>
                </div>
                <div className="flex flex-col gap-1.5 mt-1">
                    <div className="flex justify-between items-end">
                        <span className="text-xs font-semibold text-primary">
                            {raised}{" "}
                            <span className="text-gray-400 font-normal">of {goal}</span>
                        </span>
                        <span className="text-xs font-bold text-gray-400">
                            {percentage}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div
                            className="bg-primary h-full rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                    </div>
                </div>
            </div>
        </Link>
    );
}
