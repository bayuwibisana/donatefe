"use client";

export default function DonationConfirmation() {
    return (
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden bg-background-light">
            {/* Header */}
            <div className="flex items-center justify-end p-4 pb-2">
                <button className="flex size-10 items-center justify-center rounded-full bg-transparent hover:bg-black/5 transition-colors">
                    <span
                        className="material-symbols-outlined text-[#111813]"
                        style={{ fontSize: "24px" }}
                    >
                        close
                    </span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center flex-1 px-6 pt-4 pb-8">
                {/* Success Animation / Icon */}
                <div className="mb-6 relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-110" />
                    <div className="relative flex size-24 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "48px", fontWeight: "700" }}
                        >
                            check
                        </span>
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-[#111813] tracking-tight text-3xl font-bold leading-tight text-center mb-2">
                    Donation Successful!
                </h1>
                <p className="text-[#111813]/60 text-base font-normal leading-normal text-center max-w-xs mx-auto mb-8">
                    Thank you for your generous support. Your contribution makes a real
                    difference.
                </p>

                {/* Donation Amount */}
                <div className="mb-8 text-center">
                    <span className="block text-sm font-medium text-[#111813]/50 mb-1 uppercase tracking-wider">
                        Total Amount
                    </span>
                    <h2 className="text-primary text-5xl font-extrabold tracking-tight">
                        $50.00
                    </h2>
                </div>

                {/* Summary Card */}
                <div className="w-full bg-white] rounded-xl p-5 shadow-sm border border-black/5 mb-8">
                    {/* Campaign */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="size-12 shrink-0 rounded-lg bg-gray-200 overflow-hidden relative">
                            <div
                                className="w-full h-full bg-center bg-cover"
                                style={{
                                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-LQLxdGi7wOX2b6HDb7_whRlziJC3sh03-QTmJk3zqRShKv6-GjSMK9pQrmZ1jsf51HIYVT8vKHi5oEbCaZ4xZZYd2hn7TctBP2ofpW2BDy-lVX210jLpqP8YLv9LeY-UHMcmzbodTLTgnxGgtVrS4vFRiTyjLgzOR0XPtObgXNk4_33wH6LJE4dkfrkrrgQi1hpDzn7PcFA5xcFcEQ0eFxZSHZFcAORq-MEY0FA9e2scogAEuOxW7MSuiHlh3TIkmDItoSG4f7S8")`,
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-[#111813]/50 font-medium">
                                Campaign
                            </span>
                            <span className="text-[#111813] font-bold text-lg leading-tight">
                                Clean Water Initiative
                            </span>
                        </div>
                    </div>
                    <div className="h-px bg-black/5 w-full my-4" />
                    {/* Payment Details */}
                    <div className="grid gap-3">
                        <div className="flex items-center justify-between">
                            <span className="text-[#111813]/60 text-sm">
                                Date
                            </span>
                            <span className="text-[#111813] text-sm font-medium">
                                Oct 24, 2023, 10:42 AM
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[#111813]/60 text-sm">
                                Payment Method
                            </span>
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-[#111813]"
                                    style={{ fontSize: "16px" }}
                                >
                                    credit_card
                                </span>
                                <span className="text-[#111813] text-sm font-medium">
                                    Apple Pay
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[#111813]/60 text-sm">
                                Reference ID
                            </span>
                            <span className="text-[#111813] text-sm font-medium font-mono text-xs opacity-70">
                                #DON-8291-AB
                            </span>
                        </div>
                    </div>
                </div>

                {/* Share Section */}
                <div className="flex flex-col items-center gap-4 w-full mb-8">
                    <p className="text-[#111813]/70 text-sm font-medium">
                        Inspire others to give
                    </p>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center justify-center size-12 rounded-full bg-white] text-[#111813] shadow-sm border border-black/5 hover:scale-105 transition-transform">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "20px" }}
                            >
                                share
                            </span>
                        </button>
                        <button className="flex items-center justify-center size-12 rounded-full bg-white] text-[#111813] shadow-sm border border-black/5 hover:scale-105 transition-transform">
                            <span className="font-bold text-lg">𝕏</span>
                        </button>
                        <button className="flex items-center justify-center size-12 rounded-full bg-white] text-[#111813] shadow-sm border border-black/5 hover:scale-105 transition-transform">
                            <span className="font-bold text-lg">f</span>
                        </button>
                        <button className="flex items-center justify-center size-12 rounded-full bg-white] text-[#111813] shadow-sm border border-black/5 hover:scale-105 transition-transform">
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "20px" }}
                            >
                                mail
                            </span>
                        </button>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="w-full mt-auto flex flex-col gap-3">
                    <button className="w-full h-14 bg-primary hover:bg-opacity-90 active:scale-[0.98] transition-all rounded-full flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(25,230,94,0.39)]">
                        <span className="text-[#112116] text-lg font-bold">
                            Return to Home
                        </span>
                    </button>
                    <button className="w-full h-12 bg-transparent hover:bg-black/5 rounded-full flex items-center justify-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-lg">
                            receipt_long
                        </span>
                        <span className="text-sm font-bold">Download Receipt</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
