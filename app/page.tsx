import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#212529] font-sans selection:bg-rose-500 selection:text-white overflow-x-hidden antialiased relative">
      
      {/* Aurora Ambient Background (Efek gradasi estetik di latar belakang) */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-rose-200/30 to-orange-100/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-violet-200/30 to-rose-100/30 blur-[140px] pointer-events-none" />

      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f8f9fa]/70 border-b border-gray-200/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
          {/* Sisi Kiri: Brand Identity */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-rose-500 via-purple-500 to-orange-400 shadow-sm transition-transform duration-500 group-hover:rotate-180">
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-[1px]">
                <img 
                  src="firdaus.png" 
                  alt="Profile Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-base tracking-[3px] text-gray-900 uppercase">
                TOMI FIRDAUS
              </span>
              <span className="text-[9px] text-rose-500 font-black tracking-widest uppercase -mt-0.5">Creative Thinker</span>
            </div>
          </div>
          
          {/* Sisi Kanan: Minimalist Menu Badge */}
          <div className="relative group cursor-pointer">
            <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative text-[10px] font-black tracking-[4px] text-gray-800 bg-white px-5 py-2.5 rounded-full border border-gray-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:text-rose-500 group-hover:border-rose-200">
              MY PROFILE
            </div>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Kiri: Deskripsi Naratif */}
        <div className="w-full lg:w-[55%] space-y-8 text-center lg:text-left">
          
          {/* Sub-header Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200/50 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 animate-pulse" />
            <span className="text-[10px] font-black tracking-[4px] text-gray-400 uppercase">
              Welcome to my portfolio
            </span>
          </div>

          {/* Heading Typografi Eksklusif */}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-gray-900 via-rose-600 to-orange-500 bg-clip-text text-transparent">Tomi Firdaus</span>
            <span className="block text-2xl md:text-3xl font-light text-gray-400 mt-3 tracking-normal">
              Designer, Listener & Visual Weaver.
            </span>
          </h1>

          {/* Paragraf Filosofi Utama */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
            Ada kalanya hidup terasa jenuh dan kehilangan arah, dan di momen-momen itulah saya selalu menemukan kembali ketenangan melalui <span className="font-normal text-gray-900 underline decoration-rose-400 decoration-2 underline-offset-4">membaca</span> dan <span className="font-normal text-gray-900 underline decoration-orange-400 decoration-2 underline-offset-4">mendengarkan musik</span>. Kedua hal ini menjadi bahan bakar emosional yang memulihkan fokus saya. Ketika kedamaian itu sudah terkumpul, saya menuangkannya ke dalam <span className="font-medium bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">desain, yang menjadi kelebihan utama saya</span>. Lewat desain, saya tidak hanya menciptakan visual yang estetik, tetapi juga menyalurkan proses pencarian solusi dan ketenangan hidup ke dalam bentuk yang nyata.
          </p>

          {/* --- GRID 3 KARTU HOBI / SKILL INTERAKTIF --- */}
          <div className="pt-8 border-t border-gray-200/60">
            <div className="space-y-6">
              <span className="text-[10px] font-black tracking-[4px] text-gray-400 uppercase block">
                CREATIVE REFUGE & SKILLS
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
                
                {/* Kartu 1: Membaca */}
                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-gray-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:bg-white hover:border-rose-200 hover:shadow-[0_10px_30px_rgba(244,63,94,0.06)] transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    📖
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mt-4 tracking-wide">Membaca</h3>
                  <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">Pintu masuk wawasan & ketenangan logika berpikir.</p>
                </div>

                {/* Kartu 2: Mendengarkan Musik */}
                <div className="group bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-gray-200/40 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:bg-white hover:border-purple-200 hover:shadow-[0_10px_30px_rgba(168,85,247,0.06)] transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform duration-300">
                    🎧
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mt-4 tracking-wide">Mendengar</h3>
                  <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">Menyelaraskan ritme fokus & menjernihkan emosi jenuh.</p>
                </div>

                {/* Kartu 3: Mendesain (DIHIGHLIGHT SEBAGAI KELEBIHAN) */}
                <div className="group bg-gradient-to-b from-white to-orange-50/20 backdrop-blur-sm p-5 rounded-2xl border-2 border-orange-200/60 shadow-[0_8px_25px_rgba(249,115,22,0.03)] hover:border-orange-400 hover:shadow-[0_12px_35px_rgba(249,115,22,0.1)] transition-all duration-300 flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden">
                  <span className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-rose-500 text-[8px] text-white font-black px-2 py-0.5 rounded-bl-xl tracking-wider uppercase">
                    Core
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    🎨
                  </div>
                  <h3 className="text-sm font-black bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mt-4 tracking-wide">Mendesain</h3>
                  <p className="text-xs text-gray-500 mt-1 font-normal leading-relaxed">Kelebihan utama saya merakit estetika fungsional.</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Kanan: Komposisi Foto Profil Galeri Seni */}
        <div className="w-full lg:w-[40%] flex justify-center relative">
          {/* Efek Bingkai Seni Abstrak di belakang foto */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-rose-300/60 pointer-events-none rounded-tl-xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-orange-300/60 pointer-events-none rounded-br-xl" />
          
          <div className="relative p-3 rounded-[2.5rem] bg-white border border-gray-200/40 shadow-[0_20px_50px_rgba(0,0,0,0.04)] w-full max-w-sm aspect-[4/5] overflow-hidden group">
            <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gray-100 relative">
              <img 
                src="tomi.png" 
                alt="Tomi firdaus" 
                className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              
              {/* Floating Quote Badge yang Elegan */}
              <div className="absolute bottom-5 left-5 right-5 bg-black/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 transform group-hover:translate-y-[-4px] transition-all duration-500">
                <div className="flex items-start gap-3">
                  <span className="flex h-2 w-2 mt-1.5 relative shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] font-black tracking-[2px] text-gray-400 uppercase">Filosofi Diri</span>
                    <p className="text-[11px] font-medium text-gray-200 leading-relaxed italic">
                      "Proses mengajarkan satu hal: tidak semua yang hancur harus hilang, kadang hanya sedang dibentuk ulang."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>
    </div>
  );
}