import React from "react";

export function Footer() {
  return (
    <footer className="bg-black pt-[30px] pb-[48px] px-6 border-t border-[#333] pr-[24px] pl-[24px] mt-[50px] mr-[0px] mb-[0px] ml-[0px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-2xl font-serif font-bold text-white mb-6">
            SEOUL RHAPSODY
          </h2>
          <p className="text-white/40 text-sm max-w-lg leading-relaxed break-keep">
            The Show Must Go On — Now in Seoul.
            <br />
            프레디 머큐리의 예술혼을 통해 한국이 세계 예술과
            감성으로 연결되는 무대를 연다.
          </p>
        </div>

        <div className="flex gap-12 text-sm tracking-widest uppercase text-white/60">
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold">
              Project
            </span>
            <a href="#" className="hover:text-cyan-400">
              About
            </a>
            <a href="#" className="hover:text-cyan-400">
              Vision
            </a>
            <a href="#" className="hover:text-cyan-400">
              Team
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-bold">
              Connect
            </span>
            <a href="#" className="hover:text-cyan-400">
              Instagram
            </a>
            <a href="#" className="hover:text-cyan-400">
              Youtube
            </a>
            <a href="#" className="hover:text-cyan-400">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>
          © 2025 Seoul Rhapsody Project. All rights reserved.
        </p>
        <p>Designed by AI & Human Collaboration</p>
      </div>
    </footer>
  );
}