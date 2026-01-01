"use client";

import React, { useState } from "react";

interface CampaignData {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    raised: string;
    goal: string;
    percentage: number;
    organization?: string;
    article?: string;
    category?: string;
    updatesCount?: number;
    donors?: number;
    lastDonation?: string;
}

interface Props {
    campaign: CampaignData;
}

export default function CampaignDetailsClient({ campaign }: Props) {
    const [activeTab, setActiveTab] = useState<"story" | "updates" | "comments">(
        "story"
    );

    const recentDonors = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAH17EDn-73_oS5GPcWTu-sXvAi52NJlISMQo_OCJlAaVuSQZKB7tcfVe7Sn_xVEbCbc1DjMoQY8bmDHyOd1s7caybGuacpbwgKoudFjsqvtbxv0-s-S18tajbKXaMPdGp0xP08J4OkWBtSe_3ixLITM9uLg5qfrXR2n4jHAOpkCyPBsli57y3_kDBH5eWzy5VhpoC0ww-yH5IMlIV3Hzo7MFJRnOCDUmNBEmbbNuJaKhgPwa5NV_eNb7QIW80bb2IHahsts0v7ZcNn",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0pATAMPtCKVb90YcFze3_Q3FFG3W3ZTrNGlfvVvzudivPwVnCgjGbJT7ctj33wRjuTXVjh0XeNP4P6cyjoY9ljgk8jGWs20D1DO9s50gEIk-9P5e0FxvznWmeRlutWwDoEJwacUv8yT7eds_RYhsbDUaVHtoQAAVFLO08lB4s7pITzaaRIRbKRbIQzTSewOrsSdfgM0-drZCcofx_7cw_nYcFT0x_cK45YOvFYVfou7mIMSvGRYnJXpTv_NTip3vffbuYR2GqPIog",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBaYtXXmojEevTZnuuKhiS8rgVlxsxEEej67bRqPCkGOnojSYDUhJQUwzDk7308DCA77b9MLaG77ETghdWW9dq6oizRYLda4liWzk__wpaLuGdNHliStP6J-2imiWM4OMyBO6ENLvvNH7m_LCmUfb1ih61rRpC3Kx2x0Ce9iBOzOmPT5EB0g23V4PsNH8mcrqAa7DK8OoUdkKl8ldsTAmgwLHy1M5zN7Ouza7K_qdXl07uI3XwdS2T_3JBrrIW1nmNpD2M8xf7LI3vi",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBTYyO2BtPwBqSBQjydF-4WxCSM9X9QGy3zDQiE6DdgYwWbxObUmRMPOQcbXnMtttDVmItn6ck_o7wffZ3mrjsFBMdig_HKwSUo3RjM98zJBxdl9PF3FAmLzgbrSP5soXoxbKr0LCyvJnBpArl9ocztPAIlGbQrinyOJ4u50pNx3KtHFSR-SUYP4NvEsU6HSm5VN2RHL3pnINtpEJm-7FeUvBe1BK_Z4JtoFMcFoJKxDaxpFkorfgq97KZEmgGESV9WeRx2U1vqXPiT",
    ];

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-surface-light">
            {/* Navigation Overlay */}
            <div className="absolute top-0 left-0 w-full z-20 p-4 pt-12 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
                <button
                    onClick={() => window.history.back()}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors">
                        <span className="material-symbols-outlined">share</span>
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full aspect-[4/3] relative bg-gray-200">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url("${campaign.imageUrl}")` }}
                />
            </div>

            {/* Main Content Area */}
            <div className="relative -mt-6 rounded-t-3xl bg-surface-light px-5 pt-8 pb-32 flex flex-col gap-6 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                {/* Header Section */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-primary/20 text-green-800 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                            <span
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                verified
                            </span>
                            Verified Charity
                        </span>
                        <span className="text-gray-500 text-xs font-medium">
                            • {campaign.category || 'General'}
                        </span>
                    </div>
                    <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
                        {campaign.title}
                    </h1>
                    {campaign.organization && (
                        <div className="flex items-center gap-3 mt-1">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                                {campaign.organization.charAt(0)}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Organized by</span>
                                <span className="text-sm font-bold text-[#111813]">
                                    {campaign.organization}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Progress Card */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col">
                                <span className="text-3xl font-extrabold text-[#111813] tracking-tight">
                                    {campaign.raised}
                                </span>
                                <span className="text-sm text-gray-500">
                                    raised of{" "}
                                    <span className="font-semibold text-[#111813]">
                                        {campaign.goal}
                                    </span>{" "}
                                    goal
                                </span>
                            </div>
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                                {campaign.percentage}%
                            </div>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-3">
                            <div
                                className="bg-primary h-3 rounded-full relative"
                                style={{ width: `${campaign.percentage}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 w-full h-full rounded-full animate-pulse" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-primary text-lg"
                                    style={{ fontVariationSettings: "'FILL' 1" }}
                                >
                                    group
                                </span>
                                <span className="font-semibold text-[#111813]">
                                    {campaign.donors || 0}
                                </span>
                                <span className="text-gray-500">donors</span>
                            </div>
                            <span className="text-gray-500 text-xs">
                                Last donation {campaign.lastDonation || 'recently'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Social Proof (Recent Donors) */}
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-[#111813]">
                        Recent Supporters
                    </p>
                    <div className="flex -space-x-2 overflow-hidden py-1">
                        {recentDonors.map((donor, index) => (
                            <div
                                key={index}
                                className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center"
                                style={{ backgroundImage: `url("${donor}")` }}
                            />
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">
                            +{(campaign.donors || 10) - 4}
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="sticky top-0 bg-surface-light z-10 pt-2 -mx-5 px-5 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => setActiveTab("story")}
                            className={`flex-1 pb-3 border-b-[3px] text-sm tracking-wide transition-colors ${activeTab === "story"
                                    ? "border-primary text-[#111813] font-bold"
                                    : "border-transparent text-gray-500 font-medium hover:text-[#111813]"
                                }`}
                        >
                            Story
                        </button>
                        <button
                            onClick={() => setActiveTab("updates")}
                            className={`flex-1 pb-3 border-b-[3px] text-sm tracking-wide transition-colors ${activeTab === "updates"
                                    ? "border-primary text-[#111813] font-bold"
                                    : "border-transparent text-gray-500 font-medium hover:text-[#111813]"
                                }`}
                        >
                            Updates{" "}
                            <span className="ml-1 bg-gray-100 text-xs px-1.5 py-0.5 rounded-full">
                                {campaign.updatesCount || 0}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab("comments")}
                            className={`flex-1 pb-3 border-b-[3px] text-sm tracking-wide transition-colors ${activeTab === "comments"
                                    ? "border-primary text-[#111813] font-bold"
                                    : "border-transparent text-gray-500 font-medium hover:text-[#111813]"
                                }`}
                        >
                            Comments
                        </button>
                    </div>
                </div>

                {/* Story Content */}
                {activeTab === "story" && (
                    <div className="flex flex-col gap-4 text-base leading-relaxed text-[#111813]">
                        <div
                            className="prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: campaign.article || campaign.description }}
                        />
                    </div>
                )}

                {activeTab === "updates" && (
                    <div className="text-center py-8 text-gray-500">
                        {campaign.updatesCount || 0} updates available
                    </div>
                )}

                {activeTab === "comments" && (
                    <div className="text-center py-8 text-gray-500">Comments section</div>
                )}
            </div>

            {/* Sticky Bottom CTA */}
            <div className="fixed bottom-0 left-0 w-full z-30 bg-white/80 backdrop-blur-lg border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                <div className="max-w-md mx-auto p-4 flex gap-4 items-center">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-medium">
                            Goal progress
                        </span>
                        <span className="text-lg font-bold text-[#111813]">
                            {campaign.percentage}%
                        </span>
                    </div>
                    <button className="flex-1 bg-primary hover:bg-green-500 active:scale-[0.98] transition-all h-14 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                        <span className="text-[#053816] text-lg font-extrabold tracking-wide">
                            Donate Now
                        </span>
                        <span
                            className="material-symbols-outlined text-[#053816]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            volunteer_activism
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
