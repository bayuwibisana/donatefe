import React from "react";
import Link from "next/link";
import ProgressBar from "./ProgressBar";

interface CampaignCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    badge: string;
    badgeColor: string;
    raised: string;
    goal: string;
    percentage: number;
}

export default function CampaignCard({
    id,
    title,
    description,
    imageUrl,
    badge,
    badgeColor,
    raised,
    goal,
    percentage,
}: CampaignCardProps) {
    const badgeColorClass =
        badgeColor === "green"
            ? "text-green-800"
            : badgeColor === "blue"
                ? "text-blue-600"
                : "text-gray-800";

    return (
        <Link href={`/campaign/${id}`} className="snap-center shrink-0 w-[85vw] max-w-sm flex flex-col rounded-2xl bg-white shadow-sm overflow-hidden group relative hover:shadow-lg transition-shadow">
            <div
                className="h-48 w-full bg-center bg-cover relative"
                style={{ backgroundImage: `url("${imageUrl}")` }}
            >
                {badge && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                        <span className={`text-xs font-bold ${badgeColorClass}`}>
                            {badge}
                        </span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold leading-tight line-clamp-2">
                    {title}
                </h3>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2 min-h-[32px]">
                    {description}
                </p>
                <ProgressBar percentage={percentage} raised={raised} goal={goal} />
            </div>
        </Link>
    );
}
