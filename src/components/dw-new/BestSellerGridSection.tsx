import React from "react";

const cards = [
    { panel: "#FFF1BF", accent: "#FFC300", dot: "#067E85" },
    { panel: "#F8D7EA", accent: "#C40878", dot: "#FF5500" },
    { panel: "#DDF5FD", accent: "#5BC8E8", dot: "#FFC300" },
    { panel: "#FFE0CF", accent: "#FF5500", dot: "#C40878" },
    { panel: "#D9F0EC", accent: "#067E85", dot: "#FFC300" },
    { panel: "#FFF0C9", accent: "#FFC300", dot: "#C40878" },
];

const Burst = ({ color }: { color: string }) => {
    return (
        <div
            className="h-11 w-11 border-2 border-[#1A1A1A]"
            style={{
                backgroundColor: color,
                clipPath:
                    "polygon(50% 0%, 61% 16%, 79% 5%, 76% 25%, 95% 21%, 84% 39%, 100% 50%, 84% 61%, 95% 79%, 76% 75%, 79% 95%, 61% 84%, 50% 100%, 39% 84%, 21% 95%, 24% 75%, 5% 79%, 16% 61%, 0% 50%, 16% 39%, 5% 21%, 24% 25%, 21% 5%, 39% 16%)",
            }}
        />
    );
};

const MandalaSide = ({ side = "left" }: { side?: "left" | "right" }) => {
    const sideClass = side === "left" ? "left-[-30px]" : "right-[-30px] scale-x-[-1]";

    return (
        <svg
            className={`pointer-events-none absolute top-1/2 z-[1] hidden -translate-y-1/2 opacity-20 md:block ${sideClass}`}
            width="140"
            height="280"
            viewBox="0 0 140 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="translate(70,140)" stroke="#1A1A1A" fill="none">
                <circle r="54" strokeWidth="1.5" />
                <circle r="42" strokeWidth="1.2" />
                <circle r="30" strokeWidth="1" />
                {Array.from({ length: 8 }).map((_, i) => (
                    <ellipse
                        key={i}
                        cx="0"
                        cy="-72"
                        rx="10"
                        ry="24"
                        transform={`rotate(${i * 22.5})`}
                        strokeWidth="1.2"
                    />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                    <circle
                        key={`dot-${i}`}
                        cx="0"
                        cy="-58"
                        r="3"
                        transform={`rotate(${i * 15})`}
                        fill="#1A1A1A"
                        stroke="none"
                    />
                ))}
            </g>
        </svg>
    );
};

const PlateVisual = ({ bg, accent, dot, index }: { bg: string; accent: string; dot: string; index: number }) => {
    const layouts = [
        "top-4 left-4",
        "top-5 right-5",
        "bottom-5 left-5",
        "bottom-4 right-4",
    ];

    return (
        <div
            className="scallop-card relative overflow-hidden rounded-[24px] border-2 border-[#1A1A1A] p-3"
            style={{ backgroundColor: bg }}
        >
            <div
                className="relative aspect-[4/3] overflow-hidden rounded-[18px] border-2 border-[#1A1A1A]/80"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,255,255,0.45), rgba(255,255,255,0.15))",
                }}
            >
                {/* pattern */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(26,26,26,0.12) 1.2px, transparent 1.2px)",
                        backgroundSize: "18px 18px",
                    }}
                />

                {/* decorative chip */}
                <div
                    className={`absolute ${layouts[index % layouts.length]} h-8 w-16 rounded-full border-2 border-[#1A1A1A]`}
                    style={{ backgroundColor: accent }}
                />

                {/* thali plate */}
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-white/75 bg-white/30 md:h-36 md:w-36">
                    <div className="absolute inset-[18%] rounded-full border-2 border-[#1A1A1A]/20" />
                    <div className="absolute inset-[34%] rounded-full border-2 border-[#1A1A1A]/15" />
                </div>

                {/* bowls */}
                <div className="absolute left-[23%] top-[28%] h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-white/70" />
                <div className="absolute right-[23%] top-[28%] h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-white/70" />
                <div className="absolute bottom-[22%] left-[28%] h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-white/70" />
                <div className="absolute bottom-[22%] right-[28%] h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-white/70" />

                {/* garnish dots */}
                <div className="absolute left-[16%] top-[60%] h-3 w-3 rounded-full" style={{ backgroundColor: dot }} />
                <div className="absolute right-[16%] top-[58%] h-3 w-3 rounded-full" style={{ backgroundColor: dot }} />
                <div className="absolute left-[50%] top-[18%] h-3 w-3 -translate-x-1/2 rounded-full" style={{ backgroundColor: dot }} />
            </div>
        </div>
    );
};

const BestSellerGridSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#F7F3EA] py-16 md:py-24">
            {/* background pattern */}
            <div
                className="absolute inset-0 z-[0] opacity-50"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(26,26,26,0.06) 1.1px, transparent 1.1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* color blobs */}
            <div className="absolute left-[-80px] top-[15%] z-[0] h-40 w-40 rounded-full bg-[#FFC300]/20 blur-3xl" />
            <div className="absolute right-[-80px] top-[35%] z-[0] h-44 w-44 rounded-full bg-[#C40878]/15 blur-3xl" />
            <div className="absolute left-[30%] bottom-[-60px] z-[0] h-44 w-44 rounded-full bg-[#5BC8E8]/20 blur-3xl" />

            <MandalaSide side="left" />
            <MandalaSide side="right" />

            <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
                {/* heading skeleton */}
                <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center">
                    <div className="mb-4 h-4 w-24 rounded-full bg-[#1A1A1A]/10" />
                    <div className="mb-3 h-10 w-[220px] rounded-[18px] bg-[#1A1A1A]/10 sm:w-[320px] md:h-12 md:w-[420px]" />
                    <div className="h-4 w-[180px] rounded-full bg-[#1A1A1A]/10 sm:w-[260px]" />

                    {/* category pills */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <div className="h-10 w-20 rounded-full border-2 border-[#1A1A1A] bg-[#FFC300]" />
                        <div className="h-10 w-24 rounded-full border-2 border-[#1A1A1A] bg-white/70" />
                        <div className="h-10 w-20 rounded-full border-2 border-[#1A1A1A] bg-white/70" />
                        <div className="h-10 w-24 rounded-full border-2 border-[#1A1A1A] bg-white/70" />
                        <div className="h-10 w-16 rounded-full border-2 border-[#1A1A1A] bg-white/70" />
                    </div>
                </div>

                {/* cards grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {cards.map((card, index) => (
                        <article
                            key={index}
                            className="group relative overflow-hidden rounded-[28px] border-2 border-[#1A1A1A] bg-white/70 p-4 shadow-[6px_6px_0_0_#1A1A1A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#1A1A1A] md:p-5"
                        >
                            {/* top row */}
                            <div className="mb-4 flex items-center justify-between">
                                <div className="h-8 w-8 rounded-full border-2 border-[#1A1A1A] bg-white/80" />
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: card.dot }} />
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/10" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/10" />
                                </div>
                            </div>

                            {/* burst sticker */}
                            <div className="absolute right-4 top-4 rotate-[12deg] md:right-5 md:top-5">
                                <Burst color={card.accent} />
                            </div>

                            {/* visual */}
                            <PlateVisual bg={card.panel} accent={card.accent} dot={card.dot} index={index} />

                            {/* content skeleton */}
                            <div className="mt-5">
                                <div className="mb-3 h-5 w-[72%] rounded-full bg-[#1A1A1A]/10" />
                                <div className="mb-4 h-4 w-[48%] rounded-full bg-[#1A1A1A]/10" />

                                <div className="mb-5 flex flex-wrap gap-2">
                                    <div className="h-7 w-16 rounded-full bg-[#1A1A1A]/8" />
                                    <div className="h-7 w-20 rounded-full bg-[#1A1A1A]/8" />
                                    <div className="h-7 w-12 rounded-full bg-[#1A1A1A]/8" />
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <div
                                        className="h-11 w-24 rounded-full border-2 border-[#1A1A1A]"
                                        style={{ backgroundColor: card.accent }}
                                    />
                                    <div className="flex items-center gap-2">
                                        <div className="h-11 w-11 rounded-full border-2 border-[#1A1A1A] bg-white" />
                                        <div className="h-11 w-16 rounded-full border-2 border-[#1A1A1A] bg-white" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* bottom decorative strip */}
                <div className="mt-10 flex items-center justify-center gap-3 md:mt-14">
                    <div className="h-3 w-3 rounded-full bg-[#FF5500]" />
                    <div className="h-3 w-24 rounded-full bg-[#1A1A1A]/10" />
                    <div className="h-3 w-3 rounded-full bg-[#C40878]" />
                    <div className="h-3 w-24 rounded-full bg-[#1A1A1A]/10" />
                    <div className="h-3 w-3 rounded-full bg-[#067E85]" />
                </div>
            </div>
        </section>
    );
};

export default BestSellerGridSection;