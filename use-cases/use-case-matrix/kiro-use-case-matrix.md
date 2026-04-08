# Kiro Use-Case-Matrix

*Basierend auf Dan Shapiros „Fünf Stufen der KI-Automatisierung" (Januar 2026)*

## Legende

| Symbol | Bedeutung |
|--------|-----------|
| ✅ | Mit Kiro möglich |
| ⚠️ | Eingeschränkt möglich / mit Vorbehalt |
| ❌ | Nicht möglich (technische Limitierung) |
| 🚫 | Nicht erlaubt (Richtlinienverstoß) |

---

## Matrix: Entwickler-Anwendungsfälle

| Automatisierungsstufe | Use Case | Status | Anmerkung |
|---|---|---|---|
| **Stufe 0 – Handarbeit** | KI als Suchmaschine nutzen (Syntax nachschlagen) | ✅ | AWS-Dokumentation, Web-Suche |
| | Tab-Completion für einzelne Zeilen | ❌ | Kiro CLI ist kein Inline-Editor-Plugin |
| **Stufe 1 – Spurhalteassistent** | Unit-Tests generieren lassen | ✅ | Code-Generierung auf Anfrage |
| | Docstrings / Kommentare hinzufügen | ✅ | Dateien lesen und bearbeiten |
| | Regex-Muster erstellen | ✅ | Direkte Code-Generierung |
| | Boilerplate-Code generieren | ✅ | Dateien erstellen und befüllen |
| **Stufe 2 – Autopilot auf der Autobahn** | Ganze Funktionen/Module implementieren | ✅ | Mehrstufige Aufgaben mit Taskplanung |
| | Refactoring bestehender Codebasis | ✅ | AST-basierte Suche und Rewrite |
| | Debugging mit Fehleranalyse | ✅ | Logs lesen, Code analysieren, Fixes vorschlagen |
| | CI/CD-Pipelines konfigurieren | ✅ | YAML/Config-Dateien erstellen |
| | Abhängigkeiten aktualisieren | ⚠️ | Dateien bearbeiten ja, aber kein automatisches Testen der Kompatibilität |
| **Stufe 3 – Waymo mit Sicherheitsfahrer** | Mehrere parallele Coding-Aufgaben orchestrieren | ✅ | Subagent-Pipelines mit DAG-Abhängigkeiten |
| | Code-Reviews durchführen | ✅ | Dateien lesen und Feedback geben |
| | CDK/CloudFormation-Stacks erstellen und prüfen | ✅ | CDK Nag, Solutions Constructs, IaC-Tools |
| | Architektur-Entscheidungen dokumentieren | ✅ | Markdown-Dateien erstellen |
| **Stufe 4 – Das Robotaxi** | Spezifikation → vollständige Implementierung | ⚠️ | Möglich für abgegrenzte Projekte, erfordert menschliche Validierung |
| | Autonome 12-Stunden-Coding-Sessions | ❌ | Kiro arbeitet interaktiv, nicht autonom über lange Zeiträume |
| | Eigenständige Projektplanung ohne Input | ❌ | Benötigt menschliche Steuerung und Bestätigung |
| **Stufe 5 – Dark Factory** | Vollautonome Software-Produktion | ❌ | Kiro ist ein interaktiver Assistent, keine autonome Fabrik |
| | Selbstständige Spezifikations-Interpretation | ❌ | Kein eigenständiger Agent ohne menschliche Schleife |

---

## Matrix: Nichtentwickler-Anwendungsfälle

| Kategorie | Use Case | Status | Anmerkung |
|---|---|---|---|
| **Textarbeit** | Berichte und Dokumentationen erstellen | ✅ | Markdown-Dateien erstellen und bearbeiten |
| | Texte zusammenfassen | ✅ | Dateien lesen und Zusammenfassungen generieren |
| | Übersetzungen anfertigen | ✅ | Textverarbeitung in verschiedenen Sprachen |
| | Korrekturlesen und Stilverbesserungen | ✅ | Textanalyse und Überarbeitung |
| **Analyse** | CSV/Textdaten analysieren | ✅ | Dateien lesen, Bash-Befehle für Datenverarbeitung |
| | Recherche zu AWS-Themen | ✅ | AWS-Dokumentationssuche, Web-Suche |
| | Vergleichsmatrizen erstellen | ✅ | Strukturierte Markdown-Tabellen |
| | Kostenanalysen (AWS) | ✅ | AWS Cost Explorer Integration |
| **Organisation** | Aufgabenlisten erstellen und verwalten | ✅ | Todo-List-Tool |
| | Projektstruktur planen | ✅ | Verzeichnisse und Dateien anlegen |
| | Meeting-Notizen strukturieren | ✅ | Markdown-Dateien erstellen |
| **Systemverwaltung** | Dateien suchen und organisieren | ✅ | Glob, Grep, Dateisystem-Operationen |
| | Shell-Befehle ausführen | ✅ | Bash-Ausführung |
| | AWS-Ressourcen verwalten | ✅ | AWS CLI Integration |
| **Lernen** | AWS-Services erklären lassen | ✅ | Dokumentationssuche und Erklärung |
| | Technische Konzepte vereinfacht darstellen | ✅ | Anpassung an Zielgruppe |
| | Tutorials und Anleitungen erstellen | ✅ | Schritt-für-Schritt-Dokumentation |

---

## Matrix: Nicht mögliche / nicht erlaubte Anwendungsfälle

| Kategorie | Use Case | Status | Begründung |
|---|---|---|---|
| **Illegale Aktivitäten** | Malware oder Schadcode erstellen | 🚫 | Richtlinie: Kein bösartiger Code |
| | Hacking-Tools entwickeln | 🚫 | Richtlinie: Keine Penetrationstests / Security-Audits |
| | Phishing-Seiten oder Social-Engineering-Skripte | 🚫 | Richtlinie: Kein bösartiger Code |
| | Kryptowährungs-Schlüssel suchen | 🚫 | Richtlinie: Keine Suche nach privaten Schlüsseln |
| **Medizin & Gesundheit** | Medizinische Diagnosen stellen | 🚫 | Richtlinie: Keine sensiblen/persönlichen Themen |
| | Medikamenten-Empfehlungen geben | 🚫 | Richtlinie: Keine sensiblen/persönlichen Themen |
| | Therapie- oder Gesundheitsberatung | 🚫 | Richtlinie: Keine sensiblen/persönlichen Themen |
| **Persönliches & Emotionales** | Psychologische Beratung | 🚫 | Richtlinie: Keine sensiblen/persönlichen/emotionalen Themen |
| | Beziehungsberatung | 🚫 | Richtlinie: Keine sensiblen/persönlichen/emotionalen Themen |
| | Emotionale Unterstützung / Seelsorge | 🚫 | Richtlinie: Keine sensiblen/persönlichen/emotionalen Themen |
| **Datenschutz** | Personenbezogene Daten verarbeiten (echte PII) | 🚫 | Richtlinie: PII wird durch Platzhalter ersetzt |
| | Nutzerprofile mit echten Daten erstellen | 🚫 | Richtlinie: Keine PII in Code-Beispielen |
| **Sicherheit** | Penetrationstests durchführen | 🚫 | Richtlinie: Auch mit Genehmigung nicht erlaubt |
| | Security-Audits auf fremde Systeme | 🚫 | Richtlinie: Keine Penetrationstests |
| | Geheimnisse/Schlüssel im Code einbetten | 🚫 | Richtlinie: Keine Secret Keys im Code (außer explizit angefragt) |
| **Technische Grenzen** | Echtzeit-IDE-Integration (Inline-Completion) | ❌ | Kiro CLI ist ein Terminal-Tool, kein Editor-Plugin |
| | GUI-Anwendungen bedienen | ❌ | Nur Terminal/CLI-Zugang |
| | Autonomer Dauerbetrieb ohne Interaktion | ❌ | Interaktives Tool, benötigt menschlichen Input |
| | Zugriff auf externe APIs (außer AWS/Web) | ❌ | Nur eingebaute Integrationen verfügbar |
| | Bilder/Videos erstellen oder bearbeiten | ❌ | Nur Textverarbeitung, Bilder nur lesbar |
| **Unternehmensgeheimnisse** | Details über Cloud-Implementierungen von Firmen | 🚫 | Richtlinie: Keine proprietären Implementierungsdetails |

---

## Zusammenfassung nach Automatisierungsstufe

| Stufe | Beschreibung | Kiro-Abdeckung |
|---|---|---|
| 0 | Handarbeit – KI als Suchmaschine | ✅ Vollständig |
| 1 | Spurhalteassistent – Abgegrenzte Aufgaben delegieren | ✅ Vollständig |
| 2 | Autopilot – Kollaboratives Arbeiten im Flow | ✅ Weitgehend |
| 3 | Waymo – Manager-Rolle, Code-Review | ✅ Weitgehend (Subagents, Pipelines) |
| 4 | Robotaxi – PM-Rolle, Spezifikation → Code | ⚠️ Teilweise (interaktiv, nicht autonom) |
| 5 | Dark Factory – Vollautonome Produktion | ❌ Nicht abgedeckt |

---

*Erstellt am 06.04.2026 mit Kiro CLI*
