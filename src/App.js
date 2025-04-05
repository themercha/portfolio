import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";

// === Header ===
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { path: "/about", label: "Hakkımda" },
    { path: "/projects", label: "Projelerim" },
    { path: "/skills", label: "Yetenekler" },
    { path: "/contact", label: "İletişim" },
  ];

  return (
    <header className="px-6 py-4 shadow backdrop-blur bg-white/70 sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-indigo-700 hover:text-indigo-800" aria-label="Ana Sayfa">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4.5 10.5V21h15v-10.5" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-indigo-700 tracking-tight">Ege Özten</h1>
        </div>
        <nav className="hidden md:flex gap-6 text-gray-600 font-medium text-sm">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-indigo-700 transition">
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={!menuOpen ? "M4.5 6.75h15m-15 5.25h15m-15 5.25h15" : "M6 18L18 6M6 6l12 12"} />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="fixed inset-y-0 right-0 w-64 h-screen bg-white shadow-xl flex flex-col px-6 pt-24 pb-10 gap-6 text-base font-medium z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <button
              className="absolute top-5 right-5 text-gray-600"
              onClick={() => setMenuOpen(false)}
              aria-label="Menüyü Kapat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

// === Home ===
function Home() {
  useEffect(() => {
    document.title = "Ege Özten | Anasayfa"; // Sayfa başlığını dinamik yapıyoruz
  }, []);

  return (
    <motion.section className="min-h-[85vh] flex items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-100 via-white to-indigo-50"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="max-w-2xl">
        <motion.img
          src={logo}
          alt="Ege Özten Logo"
          className="w-64 h-64 mx-auto rounded-full mb-6 shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">Ege Özten</h2>
        <p className="text-2xl text-gray-600 max-w-xl mx-auto">
          Yazılım geliştiricisi, ekip kurucusu ve teknoloji tutkunu. Estetikle kodu buluşturan sade işler üretirim.
        </p>
      </div>
    </motion.section>
  );
}

// === About ===
function About() {
  useEffect(() => {
    document.title = "Ege Özten | Hakkımda";
  }, []);

  return (
    <motion.section className="px-6 py-24 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">🧑‍💻 Hakkımda</h2>
      <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
        <p>Selam, ben <strong>Ege</strong>. Kodun sadece çalışan bir yapı değil, aynı zamanda kullanıcıyla iletişim kuran bir deneyim olduğunu düşünüyorum.</p>
        <p>React.js, C# ve Python alanlarında üretim yapıyor, teknolojiyi yalnızca tüketen değil, şekillendiren biri olmayı hedefliyorum.</p>
        <p>Modern tasarımlar, temiz kod ve güçlü altyapılarla projelerimi hem estetik hem işlevsel kılmaya çalışıyorum.</p>
      </div>
    </motion.section>
  );
}

// === Projects ===
function Projects() {
  useEffect(() => {
    document.title = "Ege Özten | Projelerim";
  }, []);

  return (
    <motion.section className="px-6 py-24 max-w-5xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">🚀 Projelerim</h2>
      <div className="rounded-3xl border border-gray-200 p-8 shadow-md bg-white hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">XTEND → Anysola</h3>
        <p className="text-gray-700 mb-2 text-lg">XTEND, eski sistemlere modern yaklaşım getiren bir topluluk projesiydi. Kurucu ortak olarak teknik geliştirme ve içerik üretiminde aktif rol aldım.</p>
        <p className="text-gray-700 mb-4 text-lg">Daha sonra proje Anysola markasıyla daha geniş bir vizyona kavuştu. Ben XTEND döneminde projeye tüm gücümle katkı sağladım, dönüşüm sürecinden önce ise ayrıldım.</p>
        <a href="https://discord.gg/anysola" className="inline-block text-indigo-600 font-medium hover:underline text-sm" target="_blank" rel="noreferrer">🔗 Anysola Discord Sunucusu</a>
      </div>
    </motion.section>
  );
}

// === Skills ===
function Skills() {
  useEffect(() => {
    document.title = "Ege Özten | Yetenekler";
  }, []);

  return (
    <motion.section className="px-6 py-24 max-w-6xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">🛠️ Yetenekler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          { title: "React.js", desc: "Modern ve performanslı arayüzler geliştiriyorum." },
          { title: "HTML / CSS", desc: "Piksel hassasiyetinde responsive tasarımlar." },
          { title: "C#", desc: "Backend, Windows uygulamaları ve oyun geliştirme." },
          { title: "Python", desc: "Veri işleme, scriptler ve hızlı çözümler." },
          { title: "İngilizce", desc: "C1 seviyesinde yazma, konuşma, okuma yetkinliği." }
        ].map((skill, i) => (
          <div key={i} className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition text-center">
            <h3 className="text-xl font-bold text-indigo-600 mb-2">{skill.title}</h3>
            <p className="text-gray-700 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

// === Contact ===
function Contact() {
  useEffect(() => {
    document.title = "Ege Özten | İletişim";
  }, []);

  return (
    <motion.section className="px-6 py-24 max-w-xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">📬 İletişim</h2>
      <form className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Adınız</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-800" placeholder="Ad Soyad" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-800" placeholder="ornek@mail.com" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mesaj</label>
          <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-800" placeholder="Mesajınızı buraya yazın..." required></textarea>
        </div>
        <button type="submit" className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow transition">Gönder</button>
      </form>
    </motion.section>
  );
}

function Footer() {
  return <footer className="text-center py-10 text-sm text-gray-500 border-t">© 2025 Ege Özten • All rights reserved</footer>;
}

export default function App() {
  return (
    <Router>
      <div className="bg-gray-50 text-black min-h-screen font-sans antialiased">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}