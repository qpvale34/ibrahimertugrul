"use client";
import Image from "next/image";
import ImageMe from "../../../public/images/img.jpg";

export default function ProfileImage() {
    return (
        <div className="flex-shrink-0 flex justify-center items-center">
            <div className="relative w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 flex items-center justify-center">

                {/* Outer Ring - Colors 1 */}
                <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[var(--bg-accent)] border-l-[var(--bg-accent)] animate-[spin_3s_linear_infinite]"></div>

                {/* Inner Ring - Color 2 (Reverse Rotation) */}
                <div className="absolute inset-1.5 rounded-full border-[3px] border-transparent border-b-[var(--text-accent)] border-r-[var(--text-accent)] animate-[spin_4s_linear_infinite_reverse]"></div>

                {/* Profile Image Container with Neumorphic Border */}
                <div className="relative z-10 w-[85%] h-[85%] !rounded-full overflow-hidden nm-flat border-4 border-[var(--bg-secondary)] shadow-inner">
                    <Image
                        width={300}
                        height={300}
                        src={ImageMe}
                        alt="İbrahim ERTUĞRUL"
                        className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
}