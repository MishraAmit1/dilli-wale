import React from "react";

const items = [
    { ring: "#FFC300", chip: "#FF5500", tint: "rgba(255,195,0,0.12)" },
    { ring: "#C40878", chip: "#FFC300", tint: "rgba(196,8,120,0.12)" },
    { ring: "#5BC8E8", chip: "#FFC300", tint: "rgba(91,200,232,0.14)" },
    { ring: "#FF5500", chip: "#C40878", tint: "rgba(255,85,0,0.12)" },
    { ring: "#FFC300", chip: "#067E85", tint: "rgba(255,195,0,0.12)" },
    { ring: "#C40878", chip: "#5BC8E8", tint: "rgba(196,8,120,0.12)" },
];

const Burst = ({ color }: { color: string }) => (
    <div
        className="h-10 w-10 border-2 border-[#1A1A1A]"
        style={{
            backgroundColor: color,
            clipPath:
                "polygon(50% 0%, 61% 16%, 79% 5%, 76% 25%, 95% 21%, 84% 39%, 100% 50%, 84% 61%, 95% 79%, 76% 75%, 79% 95%, 61% 84%, 50% 100%, 39% 84%, 21% 95%, 24% 75%, 5% 79%, 16% 61%, 0% 50%, 16% 39%, 5% 21%, 24% 25%, 21% 5%, 39% 16%)",
        }}
    />
);

const SideMotif = ({ side = "left" }: { side?: "left" | "right" }) => {
    const pos = side === "left" ? "left-[-24px]" : "right-[-24px] scale-x-[-1]";

    return (
        <svg
            className={`absolute top-1/2 z-[1] hidden -translate-y-1/2 opacity-35 md:block ${pos}`}
            width="140"
            height="320"
            viewBox="0 0 140 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="translate(70,160)">
                <circle r="58" stroke="#FFC300" strokeWidth="2" fill="none" />
                <circle r="44" stroke="#FFC300" strokeWidth="1.4" fill="none" />
                <circle r="30" stroke="#FFC300" strokeWidth="1.2" fill="none" />
                {Array.from({ length: 10 }).map((_, i) => (
                    <ellipse
                        key={i}
                        cx="0"
                        cy="-82"
                        rx="10"
                        ry="24"
                        transform={`rotate(${i * 18})`}
                        stroke="#FFC300"
                        strokeWidth="1.5"
                        fill="none"
                    />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                    <circle
                        key={`dot-${i}`}
                        cx="0"
                        cy="-64"
                        r="3.5"
                        transform={`rotate(${i * 15})`}
                        fill="#FF5500"
                    />
                ))}
                <circle r="6" fill="#FFC300" />
            </g>
        </svg>
    );
};

const Plate = ({
    ring,
    chip,
    tint,
    index,
}: {
    ring: string;
    chip: string;
    tint: string;
    index: number;
}) => {
    const corners = [
        "top-4 left-4",
        "top-4 right-4",
        "bottom-4 left-4",
        "bottom-4 right-4",
    ];

    return (
        <div
            className="relative overflow-hidden rounded-[22px] border-2 border-[#1A1A1A] p-3"
            style={{ backgroundColor: tint }}
        >
            <div
                className="relative aspect-[4/3] overflow-hidden rounded-[18px] border-2 border-[#1A1A1A]/70"
                style={{ background: "rgba(0,0,0,0.08)" }}
            >
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.22) 1.2px, transparent 1.2px), linear-gradient(45deg, transparent 47%, rgba(255,255,255,0.06) 50%, transparent 53%)",
                        backgroundSize: "18px 18px, 28px 28px",
                    }}
                />

                <div
                    className={`absolute ${corners[index % corners.length]} h-8 w-16 rounded-full border-2 border-[#1A1A1A]`}
                    style={{ backgroundColor: chip }}
                />

                <div
                    className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] md:h-36 md:w-36"
                    style={{
                        borderColor: ring,
                        background: "rgba(255,255,255,0.06)",
                    }}
                >
                    <div className="absolute inset-[18%] rounded-full border-2 border-[#1A1A1A]/25" />
                    <div className="absolute inset-[34%] rounded-full border-2 border-[#1A1A1A]/15" />
                </div>

                <div className="absolute left-[23%] top-[28%] h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-[#F7F3EA]/20" />
                <div className="absolute right-[23%] top-[28%] h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-[#F7F3EA]/20" />
                <div className="absolute bottom-[22%] left-[28%] h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-[#F7F3EA]/20" />
                <div className="absolute bottom-[22%] right-[28%] h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-[#F7F3EA]/20" />

                <div className="absolute left-[16%] top-[62%] h-3 w-3 rounded-full" style={{ backgroundColor: ring }} />
                <div className="absolute right-[16%] top-[58%] h-3 w-3 rounded-full" style={{ backgroundColor: chip }} />
                <div className="absolute left-1/2 top-[18%] h-3 w-3 -translate-x-1/2 rounded-full" style={{ backgroundColor: ring }} />
            </div>
        </div>
    );
};

const BestSellerGridSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#067E85] py-16 md:py-24">
            <div
                className="absolute inset-0 z-[0] opacity-35"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.12) 1.2px, transparent 1.2px), linear-gradient(45deg, transparent 46%, rgba(255,195,0,0.10) 50%, transparent 54%)",
                    backgroundSize: "22px 22px, 38px 38px",
                }}
            />
            <div className="absolute inset-0 z-[0] bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.14))]" />

            <div className="absolute left-[-70px] top-[10%] h-40 w-40 rounded-full bg-[#FFC300]/15 blur-3xl" />
            <div className="absolute right-[-80px] top-[35%] h-44 w-44 rounded-full bg-[#C40878]/15 blur-3xl" />
            <div className="absolute left-[30%] bottom-[-70px] h-48 w-48 rounded-full bg-[#5BC8E8]/12 blur-3xl" />

            <SideMotif side="left" />
            <SideMotif side="right" />

            <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="mb-10 flex flex-col items-center md:mb-14">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-[#FF5500]" />
                        <div className="h-[2px] w-12 bg-[#FFC300]/50" />
                        <div className="h-3 w-3 rotate-45 border border-[#1A1A1A] bg-[#FFC300]" />
                        <div className="h-[2px] w-12 bg-[#FFC300]/50" />
                        <div className="h-3 w-3 rounded-full bg-[#C40878]" />
                    </div>

                    <div className="mb-3 h-4 w-24 rounded-full bg-black/15" />
                    <div className="mb-3 h-10 w-[220px] rounded-[18px] bg-black/15 sm:w-[320px] md:h-12 md:w-[430px]" />
                    <div className="h-4 w-[180px] rounded-full bg-black/15 sm:w-[260px]" />

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <div className="h-10 w-20 rounded-full border-2 border-[#1A1A1A] bg-[#FFC300]" />
                        <div className="h-10 w-24 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                        <div className="h-10 w-20 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                        <div className="h-10 w-24 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                        <div className="h-10 w-16 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item, index) => (
                        <article
                            key={index}
                            className="relative overflow-hidden rounded-[28px] border-2 border-[#1A1A1A] bg-black/10 p-4 shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] backdrop-blur-[1px] md:p-5"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <div className="h-8 w-8 rounded-full border-2 border-[#1A1A1A] bg-[#FFC300]/30" />
                                <div className="flex gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#FFC300]" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-black/15" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-black/15" />
                                </div>
                            </div>

                            <div className="absolute right-4 top-4 rotate-[10deg]">
                                <Burst color={item.chip} />
                            </div>

                            <Plate ring={item.ring} chip={item.chip} tint={item.tint} index={index} />

                            <div className="mt-5">
                                <div className="mb-3 h-5 w-[72%] rounded-full bg-black/15" />
                                <div className="mb-4 h-4 w-[48%] rounded-full bg-black/15" />

                                <div className="mb-5 flex flex-wrap gap-2">
                                    <div className="h-7 w-16 rounded-full bg-black/10" />
                                    <div className="h-7 w-20 rounded-full bg-black/10" />
                                    <div className="h-7 w-12 rounded-full bg-black/10" />
                                </div>

                                <div className="flex items-center justify-between gap-3">
                                    <div
                                        className="h-11 w-24 rounded-full border-2 border-[#1A1A1A]"
                                        style={{ backgroundColor: item.ring }}
                                    />
                                    <div className="flex gap-2">
                                        <div className="h-11 w-11 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                                        <div className="h-11 w-16 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex items-center justify-center gap-3 md:mt-14">
                    <div className="h-3 w-3 rounded-full bg-[#FF5500]" />
                    <div className="h-3 w-24 rounded-full bg-black/15" />
                    <div className="h-3 w-3 rounded-full bg-[#C40878]" />
                    <div className="h-3 w-24 rounded-full bg-black/15" />
                    <div className="h-3 w-3 rounded-full bg-[#FFC300]" />
                </div>
            </div>
        </section>
    );
};

export default BestSellerGridSection;