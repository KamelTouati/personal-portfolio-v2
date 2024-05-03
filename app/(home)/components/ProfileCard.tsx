import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="inline-flex animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <div className="p-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/me.jpg"
          width={370}
          height={970}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
