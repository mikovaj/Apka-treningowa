# Moja masa na iPhonie

Folder `Moja-masa-iOS` to gotowa aplikacja webowa (PWA). Po dodaniu do ekranu początkowego działa jak zwykła apka: ma ikonę, otwiera się na pełnym ekranie, działa bez internetu i zapisuje pomiary w pamięci telefonu.

## Dlaczego trzeba ją raz wrzucić do internetu

iPhone nie pozwala zainstalować apki z pliku HTML z dysku. Safari musi raz otworzyć ją z adresu `https://`. Potem apka jest zapisana na telefonie i działa offline. **Pomiary zostają tylko na Twoim iPhonie i nigdy nie są wysyłane na serwer.**

## Krok 1: hosting (wystarczy raz, za darmo)

### Opcja A: GitHub Pages (polecana, adres jest stały)
1. Załóż konto na https://github.com i kliknij **New repository**, np. o nazwie `moja-masa`, z ustawieniem *Public*.
2. Kliknij **uploading an existing file** i przeciągnij **całą zawartość** folderu `Moja-masa-iOS` (`index.html`, `manifest.webmanifest`, `sw.js` oraz foldery `icons` i `fonts`). Następnie kliknij **Commit changes**.
3. Wejdź w **Settings → Pages**. W polu *Source* wybierz `Deploy from a branch`, potem branch `main` i folder `/ (root)`, a na końcu kliknij **Save**.
4. Po około minucie apka będzie pod adresem `https://TWOJA-NAZWA.github.io/moja-masa/`.

### Opcja B: Netlify Drop (szybciej)
1. Wejdź na https://app.netlify.com/drop i przeciągnij cały folder `Moja-masa-iOS`.
2. Załóż darmowe konto, żeby strona nie wygasła. Dostaniesz adres `https://….netlify.app`.

## Krok 2: instalacja na iPhonie
1. Otwórz ten adres w **Safari** (nie w Chrome).
2. Stuknij **Udostępnij** (kwadrat ze strzałką), potem **Do ekranu początkowego**, a na końcu **Dodaj**.
3. Od teraz otwieraj apkę **z ikony „Moja masa”** na ekranie głównym.

> Ważne: apka z ikony ma **osobną pamięć** niż ta sama strona otwarta w Safari. Pomiary wpisuj zawsze w apce otwartej z ikony.

## Przeniesienie pomiarów z komputera
1. Na komputerze otwórz `Moja-masa.html` i kliknij **Pobierz kopię danych**.
2. Wyślij sobie ten plik `.json` na iPhone'a, np. przez AirDrop, iCloud Drive albo maila. Zapisz go w aplikacji Pliki.
3. W apce na iPhonie kliknij **Wczytaj kopię danych** i wybierz ten plik.

## Plany treningowe
Zakładka **Moje plany treningowe** jest na dolnym pasku. Działa tak:
- Wybierasz tydzień i dzień, a potem wpisujesz kg i powtórzenia. Zapis jest automatyczny.
- Przycisk **+ Nowy tydzień** przepisuje ciężary z poprzedniego tygodnia, a powtórzenia wpisujesz od nowa.
- Pasek pod ćwiczeniem pokazuje, jak blisko jesteś górnego zakresu powtórzeń we wszystkich seriach. Przy 100% apka podpowie, żeby zwiększyć ciężar.
- **Eksport planu (CSV)** daje tabelę do Excela albo Arkuszy Google. **Kopia danych (JSON)** zawiera pomiary i wszystkie plany.

## Kopia zapasowa
Pomiary zostają w telefonie również po zamknięciu apki i restarcie. Znikną, jeśli usuniesz ikonę apki albo wyczyścisz dane Safari. Dlatego co jakiś czas stuknij **Pobierz kopię danych** i zapisz plik w Plikach lub na iCloud Drive.

## Aktualizacja apki
Jeśli zmienisz `index.html`, wgraj nowy plik na hosting i w `sw.js` zmień `moja-masa-v1` na `moja-masa-v2`. Apka pobierze nową wersję przy następnym uruchomieniu z internetem. Pomiary zostaną na miejscu.
