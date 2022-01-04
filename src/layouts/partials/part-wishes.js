import React from "react";

const avatarName = "https://avatars.dicebear.com/api/open-peeps";

const chatLists = [
  {
    name: "Dicky Julian",
    role: "Pelaksana",
    message: "Hallo bang, apa kabar?",
  },
  {
    name: "Erina Krisnawati",
    role: "Pelaksana",
    message: "Ga jadi jahit di encik? :( Met wedding ya Maafin encik.",
  },
  {
    name: "Prima",
    role: "Pelaksana",
    message: "Love you orieek. Aku gagal move on. Sukses terus mantanku.",
  },
  {
    name: "Dodiek Cahyadi",
    role: "Super Admin SSm Pengangkut",
    message: "Selamat Datang di Layanan SSm Pengangkut.",
  },
  {
    name: "Sulis",
    role: "Pelaksana",
    message: "Seluruh layanan perkapalan dari keberangkatan hingga kedatangan.",
  },
  {
    name: "Dicky Julian",
    role: "Pelaksana",
    message: "Hallo bang, apa kabar?",
  },
  {
    name: "Erina Krisnawati",
    role: "Pelaksana",
    message: "Ga jadi jahit di encik? :( Met wedding ya Maafin encik.",
  },
  {
    name: "Prima",
    role: "Pelaksana",
    message: "Love you orieek. Aku gagal move on. Sukses terus mantanku.",
  },
  {
    name: "Dodiek Cahyadi",
    role: "Super Admin SSm Pengangkut",
    message: "Selamat Datang di Layanan SSm Pengangkut.",
  },
  {
    name: "Sulis",
    role: "Pelaksana",
    message: "Seluruh layanan perkapalan dari keberangkatan hingga kedatangan.",
  },
];

export const PartWishes = () => {
  return (
    <section id="wishes" className="wishes">
      <div className="wishes-content">
        <div className="wishes-lists">
          {chatLists.map(({ name, role, message }, index) => (
            <div className="chat-items" key={index}>
              <img className="avatar" src={`${avatarName}/${name}.svg`} />
              <div className="message-container">
                <small>
                  {name} ~ {role}
                </small>
                <h6>{message}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="wishes-form">
          <div className="wishes-form-card">
            <img className="img-figure" src="img/section-3.webp" />
            <img className="img-figure" src="img/section-3.webp" />
            <span>Happy Marriage</span>
            <h3 className="font-great-vibes">Wishes</h3>
            <form>
              <input className="form-input" placeholder="Nama" />
              <input className="form-input" placeholder="Relasi" />
              <input className="form-input" placeholder="Pesan" />
              <div>
                <input type="radio" value="HTML" />
                <label>Ya, saya akan hadir.</label>
              </div>
              <div>
                <input type="radio" value="CSS" />
                <label>Maaf, saya tidak bisa hadir.</label>
              </div>
              <div>
                <input type="radio" value="JavaScript" />
                <label>Sepertinya saya belum pasti bisa hadir.</label>
              </div>
              <button className="btn btn-primary font-cormorant">
                Kirim Ucapan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
