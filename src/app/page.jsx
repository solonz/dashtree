import Image from "next/image";
import React from "react";

const links = [
  { label: "🤖 Dash Bots", href: "https://dashskins.com.br" },
  { label: "🕹️ Dash P2P", href: "https://dashskins.gg" },
  {
    label: "📱 APP IOS",
    href: "https://apps.apple.com/br/app/dashskins-compra-e-venda-skins/id6466506331?l=pt-BR",
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
        className="rounded-full mt-6"
      />
      <h2 className="font-inter mt-4 text-white text-center font-bold text-xl">
        @dashskinsp2p
      </h2>
      <h1 className="mt-7 font-semibold font-inter text-base px-3 py-1 text-center leading-relaxed mb-1 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-md duration-300 ...">
        Acesso ao BETA da DashSkins P2P
      </h1>
      {links.map((link, index) => (
        <div key={index} className="mb-5">
          <a
            className="btn sm:w-[620px]"
            href={link.href}
            target="_blank"
            rel="noopener"
          >
            <span className="mx-auto">{link.label}</span>
          </a>
        </div>
      ))}
      <div className="mt-8">
        <Image
          src="/banner-welcome-p2p.png"
          alt="Welcome to Dash P2P"
          width="1600"
          height="768"
        />
      </div>
    </div>
  );
};

export default Home;
