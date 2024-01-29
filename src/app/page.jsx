import Image from "next/image";
import React from "react";

const links = [
  { label: "🤖 Dash Bots", href: "https://dashskins.com.br" },
  { label: "🕹️ Dash P2P", href: "https://dashskins.gg" },
  {
    label: "📱 APP IOS",
    href: "https://apps.apple.com/br/app/dashskins-compra-e-venda-skins/id6466506331?l=en-GB",
  },
  {
    label: "📱 APP Android",
    href: "https://play.google.com/store/apps/details?id=br.com.dashskins.dashskins",
  },
  ,
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen p-8 bg-gradient-to-tr from-black via-neutral-950 via-slate-900 to-rose-950">
      <img
        src="/dash-icon.jpg"
        alt="dash-icon"
        width="200px"
        className="rounded-full mt-8"
      />
      <h2 className="font-inter mt-4 text-white text-center font-bold text-xl">
        @dashskinsp2p
      </h2>
      <h1 className="mt-7 font-semibold font-inter text-base px-3 py-1 text-center leading-relaxed mb-1 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-md duration-300 ...">
        Acesso ao BETA da DashSkins P2P...
      </h1>
      {links.map((link, index) => (
        <div key={index} className="mb-5">
          <a className="btn" href={link.href} target="_blank" rel="noopener">
            <span className="mx-auto">{link.label}</span>
          </a>
        </div>
      ))}
      <div className="mt-12">
        <Image
          src="/banner-welcome-p2p.png"
          alt="Welcome to Dash P2P"
          width="100%"
          height="auto"
          className="h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default Home;
