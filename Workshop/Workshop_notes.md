# Lab 1:

Prompt in German:
Hier ist die Übersetzung deiner Projektbeschreibung ins Deutsche:

---

## Projektbeschreibung: Task-Management (To-Do) Web-App

Erstelle eine Task-Management-Webanwendung mit der folgenden Struktur:
```
Projektbeschreibung: Task-Management (To-Do) Web-App

Erstelle eine Task-Management-Webanwendung mit der folgenden Struktur:
Benutzeroberfläche (Single Page + Modals)

Dashboard mit:

    Aufgabenliste: Organisiert nach Status (To Do, In Progress, Completed) in Spalten im Kanban-Stil.

    Beispieldaten: 10 vorinstallierte Beispielaufgaben.

    Visuelle Elemente: Emojis für Kategorien und Prioritätsindikatoren (Hoch 🔴, Mittel 🟡, Niedrig 🟢).

    Aufgabenzähler: Anzeige nach Status (erledigt vs. ausstehend).

    „Neue Aufgabe“-Button: Gut sichtbar im oberen Bereich platziert.

    Aufgabenkarten: Jede Karte zeigt Titel, Kategorie, Priorität, Fälligkeitsdatum und Aktionsschaltflächen (Bearbeiten, Löschen, Status ändern).

Modal für Erstellung/Bearbeitung:

    Felder: Titel, Beschreibung, Priorität (Hoch/Mittel/Niedrig), Kategorie, Fälligkeitsdatum.

    Wiederverwendbarkeit: Dasselbe Modal wird sowohl für das Erstellen als auch für das Bearbeiten genutzt.

Aufgabendetails-Modal (bei Klick auf Karte):

    Anzeige der vollständigen Beschreibung, Fälligkeitsdatum, Priorität und Kategorie.

    Button „Als erledigt markieren“.

    Button „Löschen“ (mit Sicherheitsabfrage).

    Notiz-/Kommentarbereich: Eingabefeld für neue Kommentare sowie eine Liste mit Beispielkommentaren.

Bestätigungsdialog: Sicherheitsabfrage vor dem endgültigen Löschen einer Aufgabe.
Architektur (3-Schichten-Modell)

    Frontend: React mit funktionalen Formularen für vollständige CRUD-Operationen.

    Backend: Node.js mit einer REST-API (Endpunkte zum Erstellen, Lesen, Aktualisieren und Löschen von Aufgaben und Kommentaren).

    Datenbank: Buns native SQLite-Lösung (bun:sqlite) – keine externen Datenbank-Abhängigkeiten; Tabellen für Aufgaben, Kategorien, Prioritäten und Kommentare.

Runtime (Laufzeitumgebung)

Verwende Bun als Runtime und Paketmanager für das gesamte Projekt. Nutze das integrierte bun:sqlite für die lokale Datenspeicherung, um ohne einen externen Datenbankserver auszukommen.
```

Mit Formatierung:

### Benutzeroberfläche (Single Page + Modals)

**Dashboard mit:**
* **Aufgabenliste:** Organisiert nach Status (To Do, In Progress, Completed) in Spalten im **Kanban-Stil**.
* **Beispieldaten:** 10 vorinstallierte Beispielaufgaben.
* **Visuelle Elemente:** Emojis für Kategorien und Prioritätsindikatoren (Hoch 🔴, Mittel 🟡, Niedrig 🟢).
* **Aufgabenzähler:** Anzeige nach Status (erledigt vs. ausstehend).
* **„Neue Aufgabe“-Button:** Gut sichtbar im oberen Bereich platziert.
* **Aufgabenkarten:** Jede Karte zeigt Titel, Kategorie, Priorität, Fälligkeitsdatum und Aktionsschaltflächen (Bearbeiten, Löschen, Status ändern).

**Modal für Erstellung/Bearbeitung:**
* **Felder:** Titel, Beschreibung, Priorität (Hoch/Mittel/Niedrig), Kategorie, Fälligkeitsdatum.
* **Wiederverwendbarkeit:** Dasselbe Modal wird sowohl für das Erstellen als auch für das Bearbeiten genutzt.

**Aufgabendetails-Modal (bei Klick auf Karte):**
* Anzeige der vollständigen Beschreibung, Fälligkeitsdatum, Priorität und Kategorie.
* Button „Als erledigt markieren“.
* Button „Löschen“ (mit Sicherheitsabfrage).
* **Notiz-/Kommentarbereich:** Eingabefeld für neue Kommentare sowie eine Liste mit Beispielkommentaren.

**Bestätigungsdialog:** Sicherheitsabfrage vor dem endgültigen Löschen einer Aufgabe.

---

### Architektur (3-Schichten-Modell)

* **Frontend:** React mit funktionalen Formularen für vollständige **CRUD-Operationen**.
* **Backend:** Node.js mit einer **REST-API** (Endpunkte zum Erstellen, Lesen, Aktualisieren und Löschen von Aufgaben und Kommentaren).
* **Datenbank:** Buns native SQLite-Lösung (`bun:sqlite`) – keine externen Datenbank-Abhängigkeiten; Tabellen für Aufgaben, Kategorien, Prioritäten und Kommentare.

---

### Runtime (Laufzeitumgebung)

Verwende **Bun** als Runtime und Paketmanager für das gesamte Projekt. Nutze das integrierte **`bun:sqlite`** für die lokale Datenspeicherung, um ohne einen externen Datenbankserver auszukommen.


# Lab 2
Prompt, Übersetzt ins Deutsche:

```
Füge eine Drag-and-Drop-Funktionalität für die Aufgabenkarten im Kanban-Dashboard hinzu, um deren Status zu ändern.
```

Original Prompt:

Add drag and drop functionality to the task cards on the Kanban dashboard to change status

# Lab 3

Prompt, Übersetzt ins Deutsche:

```
Erstelle einen Hook, der ausgelöst wird, wenn ich TypeScript- oder TSX-Dateien im To-Do-Projekt speichere. Er soll Codemuster und eine korrekte Fehlerbehandlung prüfen sowie Verbesserungsvorschläge machen. Verwende das fileEdited-Event mit Patterns für *.ts- und *.tsx-Dateien.
```

Original Prompt:

Create a hook that triggers when I save TypeScript or TSX files in the To-Do project. It should check code patterns, proper error handling, and suggest improvements. Use the fileEdited event with patterns for *.ts and *.tsx files.

Alternativ ist auch die automatische, im weiteren Verlauf immer aktualisierte Erstellung von Dokumentation.

Zuerst benötigen wir einen Initialen Prompt:
```
Falls noch nicht vorhanden, erstelle ein Verzeichnis doc/ . Darin erstelle eine Datei Todo-List_v1.md, die den bisherigen Projekt
Fortschritt dokumentiert. Erstelle im gleichen Verzeichnis eine Datei Todo-List_EN_v1.md, die die Dokumentation auf Englisch enthält.
```

Nun der Prompt, der den Kiro Hook erzeugt:
```
Wann immer die deutsche Dokumentation geändert wird, übernimm diese Änderungen auch ins englische Dokument.
```

