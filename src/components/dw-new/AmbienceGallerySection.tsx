import React from "react";

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

const SidePaisley = ({ side = "left" }: { side?: "left" | "right" }) => {
    const pos = side === "left" ? "left-[-26px]" : "right-[-26px] scale-x-[-1]";

    return (
        <svg
            className={`absolute top-1/2 z-[1] hidden -translate-y-1/2 opacity-35 md:block ${pos}`}
            width="150"
            height="330"
            viewBox="0 0 150 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="translate(75,165)">
                <path
                    d="M0,-92 C36,-92 56,-62 56,-28 C56,2 35,26 6,35 C-8,40 -16,50 -16,63 C-16,77 -6,88 8,88 C20,88 30,81 36,72"
                    stroke="#C40878"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />
                <circle cx="0" cy="-12" r="38" stroke="#067E85" strokeWidth="2" fill="none" />
                <circle cx="0" cy="-12" r="25" stroke="#067E85" strokeWidth="1.5" fill="none" />
                {Array.from({ length: 8 }).map((_, i) => (
                    <ellipse
                        key={i}
                        cx="0"
                        cy="-62"
                        rx="8"
                        ry="18"
                        transform={`rotate(${i * 22.5})`}
                        stroke="#C40878"
                        strokeWidth="1.5"
                        fill="none"
                    />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                    <circle
                        key={`dot-${i}`}
                        cx="0"
                        cy="-46"
                        r="3"
                        transform={`rotate(${i * 18})`}
                        fill="#067E85"
                    />
                ))}
                <circle cx="0" cy="-12" r="5" fill="#FF5500" />
            </g>
        </svg>
    );
};

const Frame = ({
    outer,
    children,
    className = "",
}: {
    outer: string;
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`relative overflow-hidden rounded-[28px] border-2 border-[#1A1A1A] p-3 shadow-[6px_6px_0_0_rgba(0,0,0,0.22)] ${className}`}
            style={{ backgroundColor: outer }}
        >
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(26,26,26,0.08) 1.1px, transparent 1.1px), linear-gradient(45deg, transparent 47%, rgba(26,26,26,0.05) 50%, transparent 53%)",
                    backgroundSize: "18px 18px, 32px 32px",
                }}
            />
            {children}
        </div>
    );
};

const BigJharokha = () => {
    return (
        <Frame outer="#E79113" className="min-h-[360px] sm:min-h-[460px] lg:min-h-[620px]">
            <div className="relative flex h-full flex-col p-4 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-black/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-black/10" />
                        <div className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    </div>
                    <div className="h-8 w-20 rounded-full border-2 border-[#1A1A1A] bg-[#FFC300]/50" />
                </div>  

                <div className="relative flex-1 rounded-[22px] border-2 border-[#1A1A1A] bg-black/5 p-4">
                    <div className="absolute left-[10%] right-[10%] top-4 flex justify-between">
                        <div className="h-10 w-[2px] bg-black/15" />
                        <div className="h-10 w-[2px] bg-black/15" />
                        <div className="h-10 w-[2px] bg-black/15" />
                    </div>

                    <div className="absolute left-[10%] right-[10%] top-12 flex justify-between">
                        <div className="h-4 w-4 rounded-full border border-black/25 bg-[#C40878]/25" />
                        <div className="h-4 w-4 rounded-full border border-black/25 bg-[#067E85]/25" />
                        <div className="h-4 w-4 rounded-full border border-black/25 bg-[#FF5500]/25" />
                    </div>

                    <div className="absolute inset-x-4 bottom-4 top-16 rounded-[22px] border-2 border-[#1A1A1A]/80 bg-black/5 p-4">
                        <div className="mx-auto h-full w-[88%] overflow-hidden rounded-t-[999px] rounded-b-[22px] border-2 border-[#1A1A1A] bg-[#FFC300]/18">
                            <div
                                className="relative h-full w-full"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(91,200,232,0.20) 0%, rgba(255,195,0,0.16) 45%, rgba(255,85,0,0.12) 100%)",
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(26,26,26,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.09) 1px, transparent 1px)",
                                        backgroundSize: "22px 22px",
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-16 border-t-2 border-black/20 bg-[#FF5500]/15" />
                                <div className="absolute left-[18%] top-[18%] h-16 w-16 rounded-full border-2 border-black/20 bg-[#067E85]/18 md:h-20 md:w-20" />
                                <div className="absolute right-[18%] top-[24%] h-12 w-12 rounded-full border-2 border-black/20 bg-[#C40878]/18 md:h-16 md:w-16" />
                                <div className="absolute left-1/2 top-[30%] h-10 w-20 -translate-x-1/2 rounded-full border-2 border-black/20 bg-[#FFC300]/20" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-3">
                    <div className="h-9 w-16 rounded-full border-2 border-[#1A1A1A] bg-[#067E85]" />
                    <div className="h-9 w-20 rounded-full border-2 border-[#1A1A1A] bg-[#C40878]" />
                    <div className="h-9 w-14 rounded-full border-2 border-[#1A1A1A] bg-[#FF5500]" />
                </div>
            </div>
        </Frame>
    );
};

const TripleWindow = ({
    outer,
    accent,
}: {
    outer: string;
    accent: string;
}) => {
    return (
        <Frame outer={outer} className="min-h-[190px] md:min-h-[220px]">
            <div className="relative h-full p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between">
                    <div className="h-8 w-24 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                    <Burst color={accent} />
                </div>

                <div className="grid h-[calc(100%-48px)] grid-cols-3 gap-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-t-[999px] rounded-b-[18px] border-2 border-[#1A1A1A] bg-black/5"
                        >
                            <div
                                className="absolute inset-0 opacity-18"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(26,26,26,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.10) 1px, transparent 1px)",
                                    backgroundSize: "16px 16px",
                                }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-7 border-t-2 border-black/20 bg-black/5" />
                            <div
                                className="absolute left-1/2 top-[20%] h-8 w-8 -translate-x-1/2 rounded-full border border-black/20"
                                style={{ backgroundColor: `${accent}55` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Frame>
    );
};

const TwinArch = ({
    outer,
    accent,
}: {
    outer: string;
    accent: string;
}) => {
    return (
        <Frame outer={outer} className="min-h-[220px] md:min-h-[260px]">
            <div className="relative h-full p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="h-7 w-16 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                    <div className="h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-black/10" />
                </div>

                <div className="relative h-[calc(100%-44px)] overflow-hidden rounded-[18px] border-2 border-[#1A1A1A] bg-black/5">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(26,26,26,0.10) 1.1px, transparent 1.1px)",
                            backgroundSize: "16px 16px",
                        }}
                    />

                    <div className="absolute left-0 right-0 top-0 flex justify-around px-4 pt-2">
                        <div className="h-8 w-[2px] bg-black/15" />
                        <div className="h-8 w-[2px] bg-black/15" />
                    </div>

                    <div className="absolute inset-x-4 bottom-4 top-12 rounded-[16px] border-2 border-[#1A1A1A]/75 bg-black/5">
                        <div className="grid h-full grid-cols-2 gap-3 p-3">
                            <div className="rounded-t-[999px] rounded-b-[16px] border-2 border-[#1A1A1A] bg-[#FFC300]/15" />
                            <div className="rounded-t-[999px] rounded-b-[16px] border-2 border-[#1A1A1A] bg-[#C40878]/12" />
                        </div>
                        <div
                            className="absolute bottom-0 left-0 right-0 h-10 border-t-2 border-black/20"
                            style={{ backgroundColor: `${accent}22` }}
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

const TallNiche = ({
    outer,
    accent,
}: {
    outer: string;
    accent: string;
}) => {
    return (
        <Frame outer={outer} className="min-h-[220px] md:min-h-[260px]">
            <div className="relative flex h-full flex-col p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-black/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-black/10" />
                        <div className="h-2.5 w-2.5 rounded-full bg-black/10" />
                    </div>
                    <Burst color={accent} />
                </div>

                <div className="relative flex-1 overflow-hidden rounded-[18px] border-2 border-[#1A1A1A] bg-black/5 p-3">
                    <div
                        className="absolute inset-0 opacity-18"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(26,26,26,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.10) 1px, transparent 1px)",
                            backgroundSize: "18px 18px",
                        }}
                    />

                    <div className="mx-auto h-full w-[78%] rounded-t-[999px] rounded-b-[18px] border-2 border-[#1A1A1A] bg-[#067E85]/10">
                        <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[16px]">
                            <div className="absolute bottom-0 left-0 right-0 h-10 border-t-2 border-black/20 bg-black/5" />
                            <div className="absolute left-1/2 top-[24%] h-10 w-10 -translate-x-1/2 rounded-full border-2 border-black/20 bg-[#C40878]/12" />
                            <div className="absolute left-1/2 top-[48%] h-6 w-16 -translate-x-1/2 rounded-full border-2 border-black/20 bg-[#FFC300]/16" />
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

const AmbienceGallerySection = () => {
    return (
        <section className="relative overflow-hidden bg-[#FFC300] py-16 md:py-24">
            <div
                className="absolute inset-0 z-[0] opacity-30"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(26,26,26,0.09) 1.2px, transparent 1.2px), linear-gradient(45deg, transparent 47%, rgba(196,8,120,0.08) 50%, transparent 53%)",
                    backgroundSize: "22px 22px, 38px 38px",
                }}
            />
            <div className="absolute inset-0 z-[0] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.04))]" />

            <div className="absolute left-[-70px] top-[8%] h-40 w-40 rounded-full bg-[#C40878]/12 blur-3xl" />
            <div className="absolute right-[-80px] top-[32%] h-44 w-44 rounded-full bg-[#067E85]/12 blur-3xl" />
            <div className="absolute left-[35%] bottom-[-70px] h-44 w-44 rounded-full bg-[#FF5500]/12 blur-3xl" />

            <SidePaisley side="left" />
            <SidePaisley side="right" />

            <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="mb-10 flex flex-col items-center md:mb-14">
                    <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-[#FF5500]" />
                        <div className="h-[2px] w-12 bg-black/20" />
                        <div className="h-3 w-3 rotate-45 border border-[#1A1A1A] bg-[#C40878]" />
                        <div className="h-[2px] w-12 bg-black/20" />
                        <div className="h-3 w-3 rounded-full bg-[#067E85]" />
                    </div>

                    <div className="mt-5 h-4 w-24 rounded-full bg-black/12" />
                    <div className="mt-4 h-10 w-[240px] rounded-[18px] bg-black/12 sm:w-[320px] md:h-12 md:w-[420px]" />
                    <div className="mt-3 h-4 w-[180px] rounded-full bg-black/12 sm:w-[260px]" />
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <BigJharokha />

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <TripleWindow outer="#5BC8E8" accent="#067E85" />
                        </div>

                        <TwinArch outer="#E85C9E" accent="#C40878" />
                        <TallNiche outer="#FF8B4A" accent="#FF5500" />

                        <div className="sm:col-span-2">
                            <TripleWindow outer="#13A37B" accent="#FFC300" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-12">
                    <div className="h-14 w-20 rounded-[18px] border-2 border-[#1A1A1A] bg-[#067E85]" />
                    <div className="h-14 w-16 rounded-[18px] border-2 border-[#1A1A1A] bg-[#C40878]" />
                    <div className="h-14 w-20 rounded-[18px] border-2 border-[#1A1A1A] bg-[#5BC8E8]" />
                    <div className="h-14 w-16 rounded-[18px] border-2 border-[#1A1A1A] bg-[#FF5500]" />
                    <div className="h-14 w-20 rounded-[18px] border-2 border-[#1A1A1A] bg-[#FFC300]/40" />
                </div>
            </div>
        </section>
    );
};

export default AmbienceGallerySection;