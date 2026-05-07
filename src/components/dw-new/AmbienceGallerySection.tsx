import React from "react";

type FrameShellProps = {
    className?: string;
    outer: string;
    inner: string;
    children: React.ReactNode;
};

const FrameShell = ({ className = "", outer, inner, children }: FrameShellProps) => {
    return (
        <div
            className={`group relative overflow-hidden rounded-[28px] border-2 border-[#1A1A1A] p-3 shadow-[6px_6px_0_0_#1A1A1A] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#1A1A1A] ${className}`}
            style={{ backgroundColor: outer }}
        >
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(26,26,26,0.08) 1.2px, transparent 1.2px), linear-gradient(45deg, transparent 47%, rgba(26,26,26,0.04) 50%, transparent 53%)",
                    backgroundSize: "18px 18px, 28px 28px",
                }}
            />

            <div
                className="relative h-full overflow-hidden rounded-[20px] border-2 border-[#1A1A1A]/85"
                style={{
                    background: `linear-gradient(135deg, ${inner}, rgba(255,255,255,0.55))`,
                }}
            >
                {children}
            </div>
        </div>
    );
};

const MandalaStamp = ({
    className = "",
    color = "#1A1A1A",
}: {
    className?: string;
    color?: string;
}) => {
    return (
        <svg
            className={className}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="translate(40,40)" stroke={color} fill="none">
                <circle r="20" strokeWidth="1.5" />
                <circle r="14" strokeWidth="1.2" />
                <circle r="8" strokeWidth="1" />
                {Array.from({ length: 8 }).map((_, i) => (
                    <ellipse
                        key={i}
                        cx="0"
                        cy="-28"
                        rx="4.5"
                        ry="9"
                        transform={`rotate(${i * 45})`}
                        strokeWidth="1.2"
                    />
                ))}
                <circle r="2.5" fill={color} stroke="none" />
            </g>
        </svg>
    );
};

const BurstBadge = ({
    className = "",
    color = "#FFC300",
}: {
    className?: string;
    color?: string;
}) => {
    return (
        <div
            className={`border-2 border-[#1A1A1A] ${className}`}
            style={{
                backgroundColor: color,
                clipPath:
                    "polygon(50% 0%, 61% 16%, 79% 5%, 76% 25%, 95% 21%, 84% 39%, 100% 50%, 84% 61%, 95% 79%, 76% 75%, 79% 95%, 61% 84%, 50% 100%, 39% 84%, 21% 95%, 24% 75%, 5% 79%, 16% 61%, 0% 50%, 16% 39%, 5% 21%, 24% 25%, 21% 5%, 39% 16%)",
            }}
        />
    );
};

const SectionMotif = () => (
    <div className="flex items-center justify-center gap-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5500]" />
        <div className="h-[2px] w-12 bg-[#1A1A1A]/20" />
        <div className="h-3 w-3 rotate-45 bg-[#FFC300] border border-[#1A1A1A]" />
        <div className="h-[2px] w-12 bg-[#1A1A1A]/20" />
        <div className="h-3 w-3 rounded-full bg-[#067E85]" />
    </div>
);

const ArchGalleryCard = () => {
    return (
        <FrameShell
            outer="#FFC300"
            inner="#FFF4CC"
            className="min-h-[360px] sm:min-h-[460px] lg:min-h-[620px]"
        >
            <MandalaStamp className="absolute left-4 top-4 h-14 w-14 opacity-25 md:h-16 md:w-16" />
            <BurstBadge className="absolute right-4 top-4 h-10 w-10 rotate-[12deg]" color="#C40878" />

            <div className="relative flex h-full flex-col p-4 md:p-6">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/10" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/10" />
                    </div>
                    <div className="h-8 w-20 rounded-full border-2 border-[#1A1A1A] bg-white/60" />
                </div>

                <div className="relative flex-1 rounded-[22px] border-2 border-[#1A1A1A] bg-white/35 p-4">
                    <div
                        className="absolute inset-0 opacity-35"
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(26,26,26,0.1) 1.2px, transparent 1.2px)",
                            backgroundSize: "18px 18px",
                        }}
                    />

                    <div className="absolute left-[10%] right-[10%] top-4 flex justify-between">
                        <div className="h-10 w-[2px] bg-[#1A1A1A]/15" />
                        <div className="h-10 w-[2px] bg-[#1A1A1A]/15" />
                        <div className="h-10 w-[2px] bg-[#1A1A1A]/15" />
                    </div>

                    <div className="absolute left-[10%] right-[10%] top-12 flex justify-between">
                        <div className="h-4 w-4 rounded-full border border-[#1A1A1A]/30 bg-white/70" />
                        <div className="h-4 w-4 rounded-full border border-[#1A1A1A]/30 bg-white/70" />
                        <div className="h-4 w-4 rounded-full border border-[#1A1A1A]/30 bg-white/70" />
                    </div>

                    <div className="absolute inset-x-4 bottom-4 top-16 rounded-[22px] border-2 border-[#1A1A1A]/75 bg-white/35 p-4">
                        <div className="mx-auto h-full w-[88%] overflow-hidden rounded-t-[999px] rounded-b-[22px] border-2 border-[#1A1A1A] bg-white/55">
                            <div
                                className="relative h-full w-full"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(91,200,232,0.28) 0%, rgba(255,255,255,0.6) 45%, rgba(255,85,0,0.14) 100%)",
                                }}
                            >
                                <div className="absolute inset-0 opacity-30">
                                    <div
                                        className="h-full w-full"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(rgba(26,26,26,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.08) 1px, transparent 1px)",
                                            backgroundSize: "22px 22px",
                                        }}
                                    />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-16 border-t-2 border-[#1A1A1A]/25 bg-[#FF5500]/15" />
                                <div className="absolute left-[18%] top-[18%] h-16 w-16 rounded-full border-2 border-[#1A1A1A]/20 bg-white/35 md:h-20 md:w-20" />
                                <div className="absolute right-[18%] top-[24%] h-12 w-12 rounded-full border-2 border-[#1A1A1A]/20 bg-white/35 md:h-16 md:w-16" />
                                <div className="absolute left-1/2 top-[30%] h-10 w-20 -translate-x-1/2 rounded-full border-2 border-[#1A1A1A]/20 bg-white/40" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-3">
                    <div className="h-9 w-16 rounded-full border-2 border-[#1A1A1A] bg-[#067E85]" />
                    <div className="h-9 w-20 rounded-full border-2 border-[#1A1A1A] bg-white/70" />
                    <div className="h-9 w-14 rounded-full border-2 border-[#1A1A1A] bg-[#FF5500]" />
                </div>
            </div>
        </FrameShell>
    );
};

const WideWindowCard = ({
    outer,
    inner,
    accent,
}: {
    outer: string;
    inner: string;
    accent: string;
}) => {
    return (
        <FrameShell outer={outer} inner={inner} className="min-h-[190px] md:min-h-[220px]">
            <MandalaStamp className="absolute left-4 top-4 h-12 w-12 opacity-20" />
            <BurstBadge className="absolute right-4 top-4 h-9 w-9 rotate-[-10deg]" color={accent} />

            <div className="relative h-full p-4 md:p-5">
                <div className="mb-4 flex items-center justify-between">
                    <div className="h-8 w-24 rounded-full border-2 border-[#1A1A1A] bg-white/65" />
                    <div className="flex gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/10" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/10" />
                    </div>
                </div>

                <div className="grid h-[calc(100%-48px)] grid-cols-3 gap-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-t-[999px] rounded-b-[18px] border-2 border-[#1A1A1A] bg-white/55"
                        >
                            <div
                                className="absolute inset-0 opacity-35"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(26,26,26,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.08) 1px, transparent 1px)",
                                    backgroundSize: "16px 16px",
                                }}
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-7 border-t-2 border-[#1A1A1A]/20 bg-white/30" />
                            <div
                                className="absolute left-1/2 top-[20%] h-8 w-8 -translate-x-1/2 rounded-full"
                                style={{ backgroundColor: `${accent}55` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </FrameShell>
    );
};

const CourtyardCard = ({
    outer,
    inner,
    accent,
}: {
    outer: string;
    inner: string;
    accent: string;
}) => {
    return (
        <FrameShell outer={outer} inner={inner} className="min-h-[220px] md:min-h-[260px]">
            <div className="relative h-full p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="h-7 w-16 rounded-full border-2 border-[#1A1A1A] bg-white/65" />
                    <div className="h-7 w-7 rounded-full border-2 border-[#1A1A1A] bg-white/65" />
                </div>

                <div className="relative h-[calc(100%-44px)] overflow-hidden rounded-[18px] border-2 border-[#1A1A1A] bg-white/45">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(26,26,26,0.08) 1.1px, transparent 1.1px)",
                            backgroundSize: "16px 16px",
                        }}
                    />

                    <div className="absolute left-0 right-0 top-0 flex justify-around px-4 pt-2">
                        <div className="h-8 w-[2px] bg-[#1A1A1A]/15" />
                        <div className="h-8 w-[2px] bg-[#1A1A1A]/15" />
                    </div>

                    <div className="absolute left-0 right-0 top-8 flex justify-around px-4">
                        <div className="h-4 w-4 rounded-full border border-[#1A1A1A]/30 bg-white/70" />
                        <div className="h-4 w-4 rounded-full border border-[#1A1A1A]/30 bg-white/70" />
                    </div>

                    <div className="absolute inset-x-4 bottom-4 top-16 rounded-[16px] border-2 border-[#1A1A1A]/75 bg-white/40">
                        <div className="grid h-full grid-cols-2 gap-3 p-3">
                            <div className="rounded-t-[999px] rounded-b-[16px] border-2 border-[#1A1A1A] bg-white/55" />
                            <div className="rounded-t-[999px] rounded-b-[16px] border-2 border-[#1A1A1A] bg-white/55" />
                        </div>
                        <div
                            className="absolute bottom-0 left-0 right-0 h-10 border-t-2 border-[#1A1A1A]/20"
                            style={{ backgroundColor: `${accent}22` }}
                        />
                    </div>
                </div>
            </div>
        </FrameShell>
    );
};

const PortraitNicheCard = ({
    outer,
    inner,
    accent,
}: {
    outer: string;
    inner: string;
    accent: string;
}) => {
    return (
        <FrameShell outer={outer} inner={inner} className="min-h-[220px] md:min-h-[260px]">
            <div className="relative flex h-full flex-col p-4">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/20" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/10" />
                        <div className="h-2.5 w-2.5 rounded-full bg-[#1A1A1A]/10" />
                    </div>
                    <BurstBadge className="h-9 w-9 rotate-[10deg]" color={accent} />
                </div>

                <div className="relative flex-1 overflow-hidden rounded-[18px] border-2 border-[#1A1A1A] bg-white/45 p-3">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(26,26,26,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.08) 1px, transparent 1px)",
                            backgroundSize: "18px 18px",
                        }}
                    />

                    <div className="mx-auto h-full w-[78%] rounded-t-[999px] rounded-b-[18px] border-2 border-[#1A1A1A] bg-white/60">
                        <div
                            className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[16px]"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(255,255,255,0.75) 0%, rgba(91,200,232,0.18) 45%, rgba(255,85,0,0.12) 100%)",
                            }}
                        >
                            <div className="absolute bottom-0 left-0 right-0 h-10 border-t-2 border-[#1A1A1A]/20 bg-white/30" />
                            <div className="absolute left-1/2 top-[24%] h-10 w-10 -translate-x-1/2 rounded-full border-2 border-[#1A1A1A]/20 bg-white/35" />
                            <div className="absolute left-1/2 top-[48%] h-6 w-16 -translate-x-1/2 rounded-full border-2 border-[#1A1A1A]/20 bg-white/35" />
                        </div>
                    </div>
                </div>
            </div>
        </FrameShell>
    );
};

const AmbienceGallerySection = () => {
    return (
        <section className="relative overflow-hidden bg-[#F7F3EA] py-16 md:py-24">
            {/* background */}
            <div
                className="absolute inset-0 z-[0] opacity-50"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(26,26,26,0.055) 1.1px, transparent 1.1px)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* soft blobs */}
            <div className="absolute left-[-60px] top-[10%] h-40 w-40 rounded-full bg-[#FFC300]/20 blur-3xl" />
            <div className="absolute right-[-80px] top-[30%] h-44 w-44 rounded-full bg-[#C40878]/15 blur-3xl" />
            <div className="absolute left-[35%] bottom-[-70px] h-44 w-44 rounded-full bg-[#5BC8E8]/18 blur-3xl" />

            {/* corner mandalas */}
            <MandalaStamp className="absolute left-[-20px] top-12 h-28 w-28 opacity-10" />
            <MandalaStamp className="absolute bottom-10 right-[-20px] h-32 w-32 opacity-10" />

            <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
                {/* top skeleton */}
                <div className="mb-10 flex flex-col items-center md:mb-14">
                    <SectionMotif />
                    <div className="mt-5 h-4 w-24 rounded-full bg-[#1A1A1A]/10" />
                    <div className="mt-4 h-10 w-[240px] rounded-[18px] bg-[#1A1A1A]/10 sm:w-[320px] md:h-12 md:w-[420px]" />
                    <div className="mt-3 h-4 w-[180px] rounded-full bg-[#1A1A1A]/10 sm:w-[260px]" />
                </div>

                {/* gallery layout */}
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <ArchGalleryCard />

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <WideWindowCard outer="#DDF5FD" inner="#EFFBFF" accent="#067E85" />
                        </div>

                        <CourtyardCard outer="#F8D7EA" inner="#FDECF6" accent="#C40878" />
                        <PortraitNicheCard outer="#FFE2D2" inner="#FFF1EA" accent="#FF5500" />

                        <div className="sm:col-span-2">
                            <WideWindowCard outer="#DDF1EC" inner="#F0FAF7" accent="#FFC300" />
                        </div>
                    </div>
                </div>

                {/* bottom thumbnails / nav feel */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-12">
                    <div className="h-14 w-20 rounded-[18px] border-2 border-[#1A1A1A] bg-[#FFC300]" />
                    <div className="h-14 w-16 rounded-[18px] border-2 border-[#1A1A1A] bg-[#C40878]/25" />
                    <div className="h-14 w-20 rounded-[18px] border-2 border-[#1A1A1A] bg-[#5BC8E8]/35" />
                    <div className="h-14 w-16 rounded-[18px] border-2 border-[#1A1A1A] bg-[#FF5500]/25" />
                    <div className="h-14 w-20 rounded-[18px] border-2 border-[#1A1A1A] bg-[#067E85]/20" />
                </div>
            </div>
        </section>
    );
};

export default AmbienceGallerySection;