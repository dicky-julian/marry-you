import React, { useState, useCallback, useEffect } from "react";
import { database } from "../../config/firebase";
import { ref, push, onValue } from "firebase/database";
import { Spinner } from "../../layouts";

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
  const [isLoading, setIsLoading] = useState(false);
  const [dataPayload, setDataPayload] = useState({});
  const [dataChat, setDataChat] = useState(null);

  const handleGetDataChat = () => {
    onValue(ref(database, "chats/"), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const chats = Object.keys(data).map((id) => ({
          ...data[id],
          id,
        }));
        setDataChat(chats);
      }
    });
  };

  const handleChange = useCallback(
    (key, value) => {
      const newDataPayload = { ...dataPayload };
      newDataPayload[key] = value;
      setDataPayload(newDataPayload);
    },
    [dataPayload]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (Object.keys(dataPayload).length > 2) {
      await push(ref(database, "chats/"), dataPayload)
        .then(() => {
          setDataPayload({});
        })
        .catch((err) => {
          console.log(err, "error");
        });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetDataChat();
  }, []);

  return (
    <section id="wishes" className="wishes">
      <div className="wishes-content">
        <div className="wishes-lists">
          {dataChat?.map(({ name, relation, message }, index) => (
            <div className="chat-items" key={index}>
              <img className="avatar" src={`${avatarName}/${name}.svg`} />
              <div className="message-container">
                <small>
                  {name} ~ {relation}
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
            <form onSubmit={handleSubmit}>
              <input
                className="form-input"
                placeholder="Nama"
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <input
                className="form-input"
                placeholder="Relasi"
                onChange={(e) => handleChange("relation", e.target.value)}
              />
              <input
                className="form-input"
                placeholder="Pesan"
                onChange={(e) => handleChange("message", e.target.value)}
              />
              <div>
                <input
                  type="radio"
                  value="+"
                  onChange={(e) => handleChange("is_attend", e.target.value)}
                  checked={dataPayload.is_attend === "+"}
                />
                <label>Ya, saya akan hadir.</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="-"
                  onChange={(e) => handleChange("is_attend", e.target.value)}
                  checked={dataPayload.is_attend === "-"}
                />
                <label>Maaf, saya tidak bisa hadir.</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="?"
                  onChange={(e) => handleChange("is_attend", e.target.value)}
                  checked={dataPayload.is_attend === "?"}
                />
                <label>Sepertinya saya belum pasti bisa hadir.</label>
              </div>
              <button
                className="btn btn-primary font-cormorant"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <>
                    <Spinner />
                    &nbsp;&nbsp;
                  </>
                )}
                Kirim Ucapan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
