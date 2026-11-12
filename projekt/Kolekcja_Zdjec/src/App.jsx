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
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    fontFamily: "sans-serif",
                }}
            >
                <form
                    onSubmit={obsluzLogowanie}
                    style={{
                        border: "1px solid #ccc",
                        padding: "30px",
                        borderRadius: "8px",
                        width: "300px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                    }}
                >
                    <h2 style={{ margin: 0, textAlign: "center" }}>
                        Logowanie do systemu
                    </h2>

                    <div>
                        <label>Login:</label>
                        <input
                            type="text"
                            value={loginUzytkownika}
                            onChange={(e) =>
                                setLoginUzytkownika(e.target.value)
                            }
                            placeholder="Wpisz login..."
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    <div>
                        <label>Hasło:</label>
                        <input
                            type="password"
                            value={haslo}
                            onChange={(e) => setHaslo(e.target.value)}
                            placeholder="Wpisz hasło..."
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: "10px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        Zaloguj się
                    </button>
                </form>
            </div>
        );
    }

    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1>System Zarządzania Kolekcją Zdjęć</h1>
                <div>
                    <span style={{ marginRight: "15px" }}>
                        Zalogowany jako: <strong>{loginUzytkownika}</strong>
                    </span>
                    <button onClick={() => setCzyZalogowany(false)}>
                        Wyloguj
                    </button>
                </div>
            </div>

            {/* NAWIGACJA */}
            <nav style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                <button onClick={() => setAktywnyEkran("dodaj")}>
                    Dodaj / Opisz Zdjęcie
                </button>
                <button onClick={() => setAktywnyEkran("nosniki")}>
                    Nośniki i Archiwizacja
                </button>
                <button onClick={() => setAktywnyEkran("raport")}>
                    Generuj Raport
                </button>
            </nav>

            <hr />

            {/*GALERIA + WYSZUKIWARKA*/}
            {
                <div>
                    <h2>Przeglądanie i wyszukiwanie zdjęć</h2>
                    <div
                        style={{
                            marginBottom: "15px",
                            border: "1px solid #ccc",
                            padding: "10px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Słowo kluczowe w opisie..."
                        />{" "}
                        <input type="date" /> do <input type="date" />{" "}
                        <select>
                            <option>Wszystkie kategorie</option>
                        </select>{" "}
                        <button>Filtruj</button>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "20px",
                        }}
                    >
                        {przykladoweZdjecia.map((zdj) => (
                            <div
                                key={zdj.id}
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    width: "220px",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                }}
                            >
                                {}
                                <img
                                    src={zdj.miniatura}
                                    alt={zdj.nazwa}
                                    style={{
                                        width: "100%",
                                        height: "150px",
                                        objectFit: "cover",
                                        borderRadius: "4px",
                                    }}
                                />

                                {}
                                <h4 style={{ margin: "10px 0 5px 0" }}>
                                    {zdj.nazwa}
                                    {zdj.format}
                                </h4>
                                <p
                                    style={{
                                        fontSize: "12px",
                                        color: "#555",
                                        margin: "0 0 8px 0",
                                    }}
                                >
                                    {zdj.dataWykonania} | {zdj.rozdzielczosc} |{" "}
                                    {zdj.rozmiar} KB
                                </p>
                                <p style={{ fontSize: "14px", margin: 0 }}>
                                    {zdj.opis}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* <ul>
                        {przykladoweZdjecia.map((zdj) => (
                            <li key={zdj.id} style={{ marginBottom: "10px" }}>
                                <strong>
                                    {zdj.nazwa}
                                    {zdj.format}
                                </strong>{" "}
                                ({zdj.dataWykonania}, {zdj.rozmiar} KB) –{" "}
                                {zdj.opis}
                            </li>
                        ))}
                    </ul> */}
                </div>
            }

            {/* WIDOK 1: DODAWANIE ZDJEC */}
            {aktywnyEkran === "dodaj" && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "20px",
                    }}
                >
                    <h2>Dodaj nowe zdjęcie do archiwum</h2>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            width: "100%",
                            maxWidth: "400px",
                            border: "1px solid #ccc",
                            padding: "25px",
                            borderRadius: "8px",
                        }}
                    >
                        <label>
                            Plik zdjęcia: <input type="file" />
                        </label>
                        <input
                            type="text"
                            placeholder="Opis słowny zdjęcia"
                            style={{ padding: "8px" }}
                        />
                        <input type="date" style={{ padding: "8px" }} />
                        <input
                            type="text"
                            placeholder="Rozdzielczość (np. 1920x1080)"
                            style={{ padding: "8px" }}
                        />
                        <select style={{ padding: "8px" }}>
                            <option>Wybierz kategorię...</option>
                        </select>
                        <button
                            type="submit"
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            Zapisz zdjęcie
                        </button>
                    </form>
                </div>
            )}

            {/* WIDOK 2: NOSNIK */}
            {aktywnyEkran === "nosniki" && (
                <div>
                    <h2>Zewnętrzny nośnik danych</h2>
                    <button>Zapisz zdjęcia na nośnik docelowy</button>
                </div>
            )}

            {/* WIDOK 3: RAPORT */}
            {aktywnyEkran === "raport" && (
                <div>
                    <h2>Raport z wybranych zdjęć</h2>
                    <table
                        border="1"
                        cellPadding="8"
                        style={{ borderCollapse: "collapse", width: "100%" }}
                    >
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
                    <button
                        type="submit"
                        style={{
                            marginTop: 10,
                        }}
                    >
                        Zapisz Raport
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
