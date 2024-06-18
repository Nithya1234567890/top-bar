"use client"
import React, { FC } from 'react';

interface AnnouncementBarProps {
  message?: string;
  theme?: 'light' | 'dark';
}

const AnnouncementBar: FC<AnnouncementBarProps> = ({ message = "Introducing Pick and Partner: Dec 2024", theme = 'light' }) => {
  return (
    <div className={`announcement-bar flex gap-5 max-h-12 overflow-hidden items-center justify-center font-semibold text-lg ${theme==='light'?"text-white":"text-black"}`}>
      <img style={{width:"60px", color:"red"}} src="https://www.freeiconspng.com/thumbs/partnership-icon/partnership-icon-2.png" alt="logo" />
      {message}
      <style jsx>{`
        .announcement-bar {
          background: linear-gradient(270deg, #ffce5b, #ffb6b6, #ff7e5f, #c8dcff, #849998);
          background-size: 800% 800%;
          animation: gradient-bg-light 6s ease infinite;
        }

        @media (prefers-color-scheme: dark) {
          .announcement-bar {
            background: linear-gradient(270deg, #6366f1, #9333ea, #6366f1, #57c6e1, #a1ffce);
            background-size: 800% 800%;
            animation: gradient-bg-dark 6s ease infinite;
          }
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
