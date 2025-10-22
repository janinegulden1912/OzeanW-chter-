# Zahlungsanbieter-Guide
## Schritt-für-Schritt: Stripe, PayPal & Tentary einrichten

---

## Übersicht: Welcher Anbieter ist der Richtige?

| Anbieter | Kosten | Schwierigkeit | Empfohlen für |
|:---|:---|:---|:---|
| **Tentary** | 5-10% + Gebühren | ⭐ Einfach | Anfänger |
| **Stripe** | 1,4% + 0,25€ | ⭐⭐ Mittel | Fortgeschrittene |
| **PayPal** | 2,49% + 0,35€ | ⭐⭐ Mittel | Alle |

---

### Option 1: Tentary (Am einfachsten!)

### Was ist Tentary?

Tentary ist eine All-in-One-Plattform für digitale Produkte. Du brauchst **keine eigene Website** - Tentary hostet alles für dich.

**Kosten:** Ab 9€/Monat + Transaktionsgebühren (siehe unten)
### Vorteile:
✅ Super einfach - in 10 Minuten fertig  
✅ Keine technischen Kenntnisse nötig  
✅ Automatische E-Mail-Zustellung  
✅ Kundenverwaltung inklusive  
✅ Mehrere Zahlungsmethoden (Kreditkarte, PayPal, Klarna)

### Nachteile:
❌ Höhere Gebühren (ca. 5-10%)  
❌ Weniger Kontrolle über Design  
❌ Abhängigkeit von der Plattform

---

### Schritt-für-Schritt Anleitung

#### Schritt 1: Konto erstellen
1. Gehe zu [tentary.com](https://tentary.com/?ref=janinek4)
2. Klicke auf "Kostenlos starten"
3. Registriere dich mit E-Mail und Passwort
4. Bestätige deine E-Mail-Adresse

#### Schritt 2: Profil einrichten
1. Füge dein Profilbild hinzu
2. Schreibe eine kurze Bio
3. Füge deine Social Media Links hinzu
4. Wähle deine URL (z.B. tentary.com/deinname)

#### Schritt 3: Produkt erstellen
1. Klicke auf "Neues Produkt"
2. Wähle "Digitales Produkt"
3. Fülle die Felder aus:
   - **Name:** "Ozean-Wächter - Nischenfinder"
   - **Beschreibung:** [Nutze die Texte aus der Werbetexte-Sammlung]
   - **Preis:** z.B. 95€
   - **Dateien:** Lade PDFs hoch ODER füge den Link zum Mitgliederbereich ein

#### Schritt 4: Zahlungsmethoden aktivieren
1. Gehe zu "Einstellungen" → "Zahlungen"
2. Verbinde dein Bankkonto (für Auszahlungen)
3. Aktiviere Zahlungsmethoden:
   - Kreditkarte (automatisch aktiv)
   - PayPal (optional)
   - Klarna (optional)

#### Schritt 5: Veröffentlichen
1. Klicke auf "Veröffentlichen"
2. Kopiere den Link zu deinem Produkt
3. Teile ihn auf Social Media!

**Fertig!** 🎉

---

### Kosten bei Tentary

**Gebührenstruktur:**
- **Starter Plan (9€/Monat):** 5% Gebühr pro Verkauf + Zahlungsgebühren
- **Pro Plan (29€/Monat):** 3% Gebühr pro Verkauf + Zahlungsgebühren
- **Business Plan (99€/Monat):** 1% Gebühr pro Verkauf + Zahlungsgebühren

**Beispiel-Rechnung (Free Plan):**
- Produktpreis: 95€
- Tentary-Gebühr (10%): 9,50€
- Zahlungsgebühr (ca. 2%): 1,90€
- **Du bekommst:** 83,60€

**Tipp:** Starte mit dem Starter Plan (9€/Monat) - das lohnt sich schon ab 2-3 Verkäufen!

**Jetzt anmelden:** [https://tentary.com/?ref=janinek4](https://tentary.com/?ref=janinek4)

---

## Option 2: Stripe (Professionell & günstig)

### Was ist Stripe?

Stripe ist ein Zahlungsanbieter, den du in deine eigene Website integrierst. Professionell, günstig, aber technisch anspruchsvoller.

### Vorteile:
✅ Niedrige Gebühren (1,4% + 0,25€)  
✅ Volle Kontrolle über Design  
✅ Professioneller Eindruck  
✅ Viele Zahlungsmethoden

### Nachteile:
❌ Technisch anspruchsvoller  
❌ Du brauchst eine eigene Website  
❌ Mehr Verantwortung (Datenschutz, etc.)

---

### Schritt-für-Schritt Anleitung

#### Schritt 1: Stripe-Konto erstellen
1. Gehe zu [stripe.com](https://stripe.com)
2. Klicke auf "Jetzt starten"
3. Registriere dich mit E-Mail
4. Verifiziere deine Identität (Personalausweis/Reisepass)
5. Füge deine Bankverbindung hinzu

#### Schritt 2: Produkt in Stripe erstellen
1. Logge dich in dein Stripe Dashboard ein
2. Gehe zu "Produkte" → "Produkt hinzufügen"
3. Fülle die Felder aus:
   - **Name:** "Ozean-Wächter"
   - **Beschreibung:** "KI-gestützter Nischenfinder"
   - **Preis:** 95€
   - **Einmalige Zahlung** (nicht Abo)

#### Schritt 3: Payment Link erstellen
1. Klicke auf "Payment Link erstellen"
2. Wähle dein Produkt
3. Passe die Einstellungen an:
   - ✅ Automatische E-Mail-Bestätigung
   - ✅ Kundeninformationen sammeln
4. Kopiere den Payment Link

**Beispiel-Link:**  
`https://buy.stripe.com/abc123xyz`

#### Schritt 4: Link in deine Website einbauen
1. Öffne deine Landingpage (HTML-Datei)
2. Suche nach den "Jetzt kaufen"-Buttons
3. Ersetze `#` durch deinen Stripe Payment Link
4. Speichern und hochladen!

**Beispiel-Code:**
```html
<a href="https://buy.stripe.com/abc123xyz" class="cta-button">
  Jetzt kaufen - 95€
</a>
```

#### Schritt 5: Automatische E-Mails einrichten
1. Gehe zu "Einstellungen" → "E-Mails"
2. Aktiviere "Zahlungsbestätigung"
3. Füge eine Nachricht hinzu:
   ```
   Danke für deinen Kauf!
   
   Hier ist dein Zugang zum Ozean-Wächter:
   [LINK ZUM MITGLIEDERBEREICH]
   
   Passwort: [PASSWORT]
   ```

**Fertig!** 🎉

---

### Kosten bei Stripe

**Gebührenstruktur (Europa):**
- **1,4% + 0,25€** pro erfolgreiche Transaktion

**Beispiel-Rechnung:**
- Produktpreis: 95€
- Stripe-Gebühr: (95€ × 1,4%) + 0,25€ = 1,58€
- **Du bekommst:** 93,42€

**Tipp:** Stripe ist deutlich günstiger als Tentary, aber du brauchst eine eigene Website!

---

## Option 3: PayPal (Bekannt & vertraut)

### Was ist PayPal?

PayPal ist der bekannteste Zahlungsanbieter weltweit. Viele Kunden haben bereits ein PayPal-Konto.

### Vorteile:
✅ Sehr bekannt - Kunden vertrauen PayPal  
✅ Einfache Integration  
✅ Käuferschutz (gut für Kunden)

### Nachteile:
❌ Höhere Gebühren als Stripe (2,49% + 0,35€)  
❌ Manchmal Probleme mit Sperrungen  
❌ Käuferschutz kann auch gegen dich verwendet werden

---

### Schritt-für-Schritt Anleitung

#### Schritt 1: PayPal Business-Konto erstellen
1. Gehe zu [paypal.com/de/business](https://www.paypal.com/de/business)
2. Klicke auf "Geschäftskonto eröffnen"
3. Wähle "Einzelunternehmer" oder "Freiberufler"
4. Fülle das Formular aus
5. Verifiziere deine Identität und Bankverbindung

#### Schritt 2: Payment Button erstellen
1. Logge dich in dein PayPal-Konto ein
2. Gehe zu "Bezahllösungen" → "PayPal-Buttons"
3. Wähle "Jetzt kaufen"-Button
4. Fülle die Felder aus:
   - **Artikelname:** "Ozean-Wächter"
   - **Preis:** 95€
   - **Währung:** EUR
5. Klicke auf "Button erstellen"
6. Kopiere den HTML-Code

#### Schritt 3: Button in Website einbauen
1. Öffne deine Landingpage (HTML-Datei)
2. Füge den PayPal-Button-Code ein:
   ```html
   <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
     <input type="hidden" name="cmd" value="_s-xclick">
     <input type="hidden" name="hosted_button_id" value="ABC123XYZ">
     <input type="submit" value="Jetzt kaufen - 95€" class="cta-button">
   </form>
   ```
3. Speichern und hochladen!

#### Schritt 4: Automatische E-Mails einrichten
1. Gehe zu "Einstellungen" → "Verkaufstools"
2. Klicke auf "Sofortige Zahlungsbestätigung"
3. Aktiviere die Option
4. Füge eine Nachricht hinzu (wie bei Stripe)

**Fertig!** 🎉

---

### Kosten bei PayPal

**Gebührenstruktur (Deutschland):**
- **2,49% + 0,35€** pro Transaktion

**Beispiel-Rechnung:**
- Produktpreis: 95€
- PayPal-Gebühr: (95€ × 2,49%) + 0,35€ = 2,72€
- **Du bekommst:** 92,28€

---

## Vergleich: Was ist am besten?

### Für absolute Anfänger:
**→ Tentary**  
- Einfachste Lösung
- Alles in einem
- Keine technischen Kenntnisse nötig

### Für Fortgeschrittene mit eigener Website:
**→ Stripe**  
- Niedrigste Gebühren
- Professionellster Eindruck
- Volle Kontrolle

### Für maximales Vertrauen:
**→ PayPal**  
- Bekanntester Anbieter
- Kunden vertrauen PayPal
- Einfache Integration

### Unsere Empfehlung:
**Nutze BEIDE: Stripe + PayPal!**

Warum? Manche Kunden haben kein PayPal, andere wollen keine Kreditkarte nutzen. Wenn du beide anbietest, maximierst du deine Conversions!

---

## Bonus: Kombination mehrerer Anbieter

### So bietest du mehrere Zahlungsmethoden an:

**Auf deiner Landingpage:**
```html
<div class="payment-buttons">
  <h3>Wähle deine Zahlungsmethode:</h3>
  
  <!-- Stripe Button -->
  <a href="https://buy.stripe.com/abc123" class="cta-button">
    💳 Mit Kreditkarte zahlen (Stripe)
  </a>
  
  <!-- PayPal Button -->
  <a href="https://paypal.me/deinname/95" class="cta-button">
    💰 Mit PayPal zahlen
  </a>
</div>
```

**Tipp:** Teste, welche Zahlungsmethode deine Kunden bevorzugen!

---

## Häufige Fragen

### Brauche ich ein Gewerbe?
**Ja!** Sobald du Geld verdienst, musst du ein Gewerbe anmelden (in Deutschland ca. 20-60€).

### Muss ich Steuern zahlen?
**Ja!** Alle Einnahmen müssen versteuert werden. Sprich mit einem Steuerberater!

### Was ist mit Rechnungen?
- **Tentary:** Erstellt automatisch Rechnungen
- **Stripe:** Du musst selbst Rechnungen erstellen
- **PayPal:** Du musst selbst Rechnungen erstellen

**Tipp:** Nutze Tools wie Lexoffice oder sevDesk für automatische Rechnungen!

### Wie lange dauert die Auszahlung?
- **Tentary:** 7-14 Tage
- **Stripe:** 2-7 Tage
- **PayPal:** Sofort verfügbar (aber Auszahlung auf Bankkonto dauert 1-3 Tage)

---

## Checkliste

- [ ] Zahlungsanbieter ausgewählt
- [ ] Konto erstellt und verifiziert
- [ ] Bankverbindung hinzugefügt
- [ ] Produkt erstellt
- [ ] Payment Link/Button erstellt
- [ ] In Website integriert
- [ ] Automatische E-Mails eingerichtet
- [ ] Test-Kauf durchgeführt
- [ ] Gewerbe angemeldet
- [ ] Steuerberater kontaktiert
- [ ] Los geht's! 🚀

---

## Support

Hast du Fragen? Kontaktiere mich:  
**E-Mail:** fairytalemagics@gmail.com

---

**Viel Erfolg beim Verkaufen! 💰**

© 2025 Janine Gülden - Ozean-Wächter

