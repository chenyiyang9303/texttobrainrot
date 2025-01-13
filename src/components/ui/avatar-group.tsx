"use client";

import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
}

const Avatar = ({ src, alt = "", size = 40, className = "" }: AvatarProps) => {
  return (
    <div 
      className={`relative rounded-full overflow-hidden border-2 border-white ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
};

interface AvatarGroupProps {
  avatars: Array<{
    src: string;
    alt?: string;
  }>;
  size?: number;
  max?: number;
}

export const AvatarGroup = ({ avatars, size = 40, max = 5 }: AvatarGroupProps) => {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className="flex items-center -space-x-3">
      {visibleAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          size={size}
          className="ring-2 ring-background"
        />
      ))}
      {remainingCount > 0 && (
        <div 
          className="flex items-center justify-center rounded-full bg-gray-100 border-2 border-white text-sm font-medium text-gray-600"
          style={{ width: size, height: size }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
