import React from "react";
import { motion } from "framer-motion";
import bannerImage from "../../assets/icons/banner.png"; // Adjust the path as necessary



export default function Banner() {
    return (
        <div className="overflow-hidden w-full  bg-primary py-2">
            <motion.div
                className="flex gap-10"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 12
                }}
            >
                {Array.from({ length: 20 }).map((_, i) => (
                    <img className="h-8 sm:h-12 md:h-12" key={i} src={bannerImage} alt="logo" />
                ))}
            </motion.div>
        </div>
    );
}
