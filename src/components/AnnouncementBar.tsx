"use client"
import React, { FC } from 'react';

interface AnnouncementBarProps {
  message?: string;
  theme?: 'light' | 'dark';
}

const AnnouncementBar: FC<AnnouncementBarProps> = ({ message = "Introducing Pick and Partner: Dec 2024", theme = 'light' }) => {
  const getBackgroundGradient = () => {
    if (theme === 'dark') {
      return 'linear-gradient(270deg, #6d8ec4, #bf83f6, #ff5698, #57c6e1, #ffd254)';
    } else {
      return 'linear-gradient(270deg, #ffff88, #ffb4b4, #bce7ff, #ff93a5, #caff9e)';
    }
  };

  const getAnimationName = () => {
    return `gradient-bg-${theme}`;
  };
  return (
    <div className={`announcement-bar flex gap-5 max-h-12 overflow-hidden items-center justify-center font-semibold text-lg ${theme==='light'?"text-black":"text-white"}`}>
      <img style={{width:"60px",color:"white"}} src="https://www.freeiconspng.com/thumbs/partnership-icon/partnership-icon-2.png" alt="logo" />
      {message}
      <style jsx>{`
        .announcement-bar {
          background: ${getBackgroundGradient()};
          background-size: 800% 800%;
          animation: ${getAnimationName()} 6s ease infinite;
        }

        @keyframes gradient-bg-light {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes gradient-bg-dark {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
