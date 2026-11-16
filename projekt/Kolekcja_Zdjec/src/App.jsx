import { useState } from "react";
import "./App.css";

function App() {
    const [czyZalogowany, setCzyZalogowany] = useState(false);
    const [loginUzytkownika, setLoginUzytkownika] = useState("");
    const [haslo, setHaslo] = useState("");
    const [aktywnyEkran, setAktywnyEkran] = useState("dodaj");

    const przykladoweZdjecia = [
        {
            id: 1,
            nazwa: "wakacje_01",
            opis: "Zachód słońca nad morzem",
            rozmiar: "4200",
            rozdzielczosc: "1920x1080",
            dataWykonania: "2026-07-15",
            format: ".png",
            miniatura: "/spring.png",
        },
        {
            id: 2,
            nazwa: "ptak",
            opis: "ptak na dworze tak o",
            rozmiar: "6700",
            rozdzielczosc: "1080x1080",
            dataWykonania: "2026-07-17",
            format: ".png",
            miniatura: "/wafle.png",
        },
    ];

    const obsluzLogowanie = (e) => {
        e.preventDefault();
        if (loginUzytkownika.trim() === "") {
            alert("Wpisz dowolny login, aby przetestować!");
            return;
        }
        setCzyZalogowany(true);
    };

    if (!czyZalogowany) {
        return (
            <div className="login-page">
                <form className="login-form" onSubmit={obsluzLogowanie}>
                    <h2>Logowanie do systemu</h2>

                    <label>Login:</label>
                    <input
                        type="text"
                        value={loginUzytkownika}
                        onChange={(e) => setLoginUzytkownika(e.target.value)}
                        placeholder="Wpisz login..."
                    />

                    <label>Hasło:</label>
                    <input
                        type="password"
                        value={haslo}
                        onChange={(e) => setHaslo(e.target.value)}
                        placeholder="Wpisz hasło..."
                    />

                    <button type="submit">Zaloguj się</button>
                </form>
            </div>
        );
    }

    return (
        <div className="app">
            <div className="header">
                <h1>System Zarządzania Kolekcją Zdjęć</h1>
                <div>
                    <span>
                        Zalogowany jako: <strong>{loginUzytkownika}</strong>
                    </span>
                    <button onClick={() => setCzyZalogowany(false)}>
                        Wyloguj
                    </button>
                </div>
            </div>

            {/* NAWIGACJA */}
            <nav className="menu">
                <button
                    className={aktywnyEkran === "dodaj" ? "active" : ""}
                    onClick={() => setAktywnyEkran("dodaj")}
                >
                    Dodaj / Opisz Zdjęcie
                </button>
                <button
                    className={aktywnyEkran === "nosniki" ? "active" : ""}
                    onClick={() => setAktywnyEkran("nosniki")}
                >
                    Nośniki i Archiwizacja
                </button>
                <button
                    className={aktywnyEkran === "raport" ? "active" : ""}
                    onClick={() => setAktywnyEkran("raport")}
                >
                    Generuj Raport
                </button>
            </nav>

            {/* GALERIA + WYSZUKIWARKA */}
            <div className="sekcja">
                <h2>Przeglądanie i wyszukiwanie zdjęć</h2>

                <div className="wyszukiwarka">
                    <input type="text" placeholder="Słowo kluczowe w opisie..." />
                    <input type="date" /> do <input type="date" />
                    <select>
                        <option>Wszystkie kategorie</option>
                    </select>
                    <button>Filtruj</button>
                </div>

                <div className="galeria">
                    {przykladoweZdjecia.map((zdj) => (
                        <div key={zdj.id} className="karta">
                            <img src={zdj.miniatura} alt={zdj.nazwa} />
                            <h4>
                                {zdj.nazwa}
                                {zdj.format}
                            </h4>
                            <p className="info">
                                {zdj.dataWykonania} | {zdj.rozdzielczosc} |{" "}
                                {zdj.rozmiar} KB
                            </p>
                            <p>{zdj.opis}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* WIDOK 1: DODAWANIE ZDJEC */}
            {aktywnyEkran === "dodaj" && (
                <div className="sekcja">
                    <h2>Dodaj nowe zdjęcie do archiwum</h2>
                    <form className="formularz" onSubmit={(e) => e.preventDefault()}>
                        <label>
                            Plik zdjęcia: <input type="file" />
                        </label>
                        <input type="text" placeholder="Opis słowny zdjęcia" />
                        <input type="date" />
                        <input
                            type="text"
                            placeholder="Rozdzielczość (np. 1920x1080)"
                        />
                        <select>
                            <option>Wybierz kategorię...</option>
                        </select>
                        <button type="submit">Zapisz zdjęcie</button>
                    </form>
                </div>
            )}

            {/* WIDOK 2: NOSNIK */}
            {aktywnyEkran === "nosniki" && (
                <div className="sekcja">
                    <h2>Zewnętrzny nośnik danych</h2>
                    <button>Zapisz zdjęcia na nośnik docelowy</button>
                </div>
            )}

            {/* WIDOK 3: RAPORT */}
            {aktywnyEkran === "raport" && (
                <div className="sekcja">
                    <h2>Raport z wybranych zdjęć</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nazwa pliku</th>
                                <th>Format</th>
                                <th>Rozdzielczość</th>
                                <th>Data wykonania</th>
                                <th>Rozmiar</th>
                                <th>Opis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {przykladoweZdjecia.map((zdj) => (
                                <tr key={zdj.id}>
                                    <td>{zdj.nazwa}</td>
                                    <td>{zdj.format}</td>
                                    <td>{zdj.rozdzielczosc}</td>
                                    <td>{zdj.dataWykonania}</td>
                                    <td>{zdj.rozmiar} KB</td>
                                    <td>{zdj.opis}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button className="przycisk-raport">Zapisz Raport</button>
                </div>
            )}
        </div>
    );
}

export default App;