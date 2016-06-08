*Kursiv*, **Fett**, ***Fett Kursiv***   Kursiv, Fett, Fett Kursiv
Als ‘Queltext’ gekennzeichnet   Ausgabe als Quelltext
* Aufzählung  Ausgabe mit Punktaufzählung
1. Aufzählung   Ausgabe als nummerische Aufzählung
# Überschrift   H1 Überschrift
#### Überschrift  H4 Überschrift
_______________________________________________________


# Mobile Health Platform

Mobile Health Platform ist ein Framework, dass Funktionen und Module, sowie deren Anwendung für Gesundheits Apps zur Verfügung stellt. 

## Git Manifest

Das Framework benutzt den Ansatz des [Feature Branch Workflow][git-feature-branch]. In diesem Ansatz wird für jedes neue Feature (Funktion oder Modul) ein neuer Branch angelegt. Erst wenn das Modul vollständig integriert ist, wird der Feature Branch in den Master Branch gemergt.

## Download Framework

Das Framework lässt mit folgendem Befehl herunterladen:

	git clone https://github.com/mobody/mobileHealthPlatform.git

Wir arbeiten mit dem Frontend Package Manager [npm][npm]. In der package.json Datei stehen die vom Framework verwendeten Packages. Zunächst sollten diese heruntergeladen werden via:


	npm install


## Usage

#### JQuery Mobile

Wir benutzen ein HTML5 User Interface System: [jQuery Mobile][jquery-mobile].

#### ChartJS

ChartJS ermöglicht es dem Entwickler mit Hilfe von JavaScript Diagramme zu erstellen. Im Folgenden werden drei Diagrammarten beschrieben. Zunächst wird bei der Verknüpfung vom html-Content mit Java-Script begonnen.

Der Entwickler muss die Chart-Klasse instanziieren, um ein Diagramm erstellen zu können. Dazu wird
	
	<canvas id="testChart" width="200" height="200"></canvas>

aufgerufen. Canvas bedeutet "Leinwand" und dient zur dynamischen Erstellung von Grafiken.
id="testChart" legt die ID für nachfolgendes Diagramm fest. Die Breite (width) und die Höhe (height) sind - wie die ID - frei wählbar, es muss aber die Größe des anzeigenden Gerätes berücksichtigt werden.

Mit dem Aufruf    

	<script>
          var ctx = document.getElementById("testChart");

wird eine Variable instanziiert, es wird der Ausdruck "testChart" angegeben und java-Skript durchsucht das Dokument nach der ID "testChart".

Das folgende Beispiel instanziiert ein Kuchendiagramm/ Kreisdiagramm und stellt die Messung der Pulsfrequenz an einem Tag in 2-Stunden-Abschnitten, beginnend bei 0 dar. 

       <script>
          var ctx = document.getElementById("testChart");

          var data = {
              labels: ["06:55", "08:00", "12:00", "14:01", "16:05", "18:00", "20:02"],
              datasets: [{
                  label: '# pulse frequencies Monday',
                  data: [77, 65, 90, 67, 64, 88, 87],
                  backgroundColor: 'rgba(190,52,5,0.9)'
              }]
            };
          var options = {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }
              };
         var myChart = new makeChart(ctx,'pie',data, options);
        </script>

Erläuterung zum obrigen Quellcode:
- var data: ist vom Typ Array und beinhaltet eine Menge von weiteren Elementen, die im Diagramm angezeigt werden sollen, wie z. B.:
	- labels: vom Typ String und beschreibt das Label des Datensatzes, welcher sich in der Legende befindet.
- datasets: vom Typ String und beinhaltet eine Menge von weiteren Elemtenten, die zusätzlich dargestellt werden können, wie z. B.: 
	- label: vom Typ String und beschreibt die Überschrift des Diagrammes.
	- backgroundColor: vom Typ Color und wird in rgba (0, 0, 0, Opacity/ Transparenz -> z. B.: 0.2) angegeben. Nützlich ist [Colorschemedesigner][colorschemedesigner] zur Farbwertermittlung.
	- borderColor: vom Typ Color und bestimmt die Linienfarbe.
- options: ist vom Typ Array und beinhaltet eine Menge von weiteren Elementen, die im Diagramm enthalten sein sollen, wie z. B.:
	- scale: vom Typ Object und bietet Optionen für die einzelnen Skalen an, welche im Diagramm genutzt werden. Dies kann verwendet werden, um Zeichen, Raster und Labels zu entwerfen.
		- yAxes: vom Typ Array und kann lineare Typen enthalten.
		- ticks: Zeichen, die erstellt werden.
	- beginAtZero: Diagramm beginnt bei null = true.
	
	var myChart = new makeChart(ctx,'pie',data, options);
Hier wird das neue Diagramm erstellt. Hier ist das Diagramm vom Typ 'pie'.

Zwei weitere Diagrammtypen wären:

Bar Chart = Balkendiagramm
Line Chart = Liniendiagramm

Diese wären ebenso wie das Kuchendiagramm (Pie) zu generieren. Weitere Datentypen für die jeweiligen Diagramme finden Sie [hier][Diagrammtypen_chartjs.org]

### HL7 (Health-Level Seven)

Health-Level Seven ist ein Kommunikationsstandard speziell für das Gesundheitswesen, welcher primär für die Kommunikation im Krankenhaus verwendet wird. Ziele des Einsatzes von HL7 wären
* Effizienz und Qualität medizinischer Versorgung verbessern
* Integration von Anwendungssystemen erleichtern
* Vereinheitlichung der Kommunikation
* Leitfaden

Im Folgenden wird zuerst auf den Aufbau der HL7-Nachricht eingegangen, im Anschluss auf den im Framework enthaltenen Programmcode zur Erstellung der HL7-Nachrichten.
[HL7-Präsentation Johner] [http://www.johner.org/fileadmin/vorlesungen/material/medinf/HL7-V2-HTWG.pdf]

Aufbau:
Nachrichten-Segment
Feld
Komponente
Sub-Komponente

*Segment-ID
<table><tr><th>Segment-ID</th><th>Beschreibung</th></tr>
<tr><th>MSH</th><th>Message-Header</th></tr>
<tr><th>EVN</th><th>Event</th></tr>
<tr><th>PID</th><th>Patienten-Information</th></tr>
<tr><th>PV1</th><th>Patient Visit</th></tr>
<tr><th>OBR</th><th>Observation Request</th></tr>
<tr><th>OBX</th><th>Observation Result</th></tr>
<tr><th>DG1</th><th>Diagnosis z. B. ICD-Code</th></tr>
<tr><th>PR1</th><th>Procedure</th></tr>
<tr><th>FT1</th><th>Financial Transaction z. B. DRG-Code</th></tr></table>

Diese Elemente beschreiben die Segment-ID, welche bei jeder HL7-Nachricht im Ersten Abschnitt des jeweiligen Elements steht.

Beispiel: MSH|^~\&|KIS|Aufn|PDMS||200907110801||ADTA01|20090711080104|P|2.3|||||D

Nach Message-Header erfolgt durch "|", welches das Trennzeichen bezeichnet, ein neues Feld.

<table><tr><th>Position</th><th>Beschreibung</th><th>Standardzeichen</th></tr>
<tr><th>1</th><th>Komponententrenner</th><th>^</th></tr>
<tr><th>2</th><th>Wiederholungstrenner</th><th>~</th></tr>
<tr><th>3</th><th>Escape-Symbol</th><th>\</th></tr>
<tr><th>4</th><th>Subkomponententrenner</th><th>&</th></tr></table>

In diesem Projekt finden Sie die Ver- und Entschlüsselung der HL7-Nachrichten vom Message Type "ADT".
ADT beschreibt eine Patientenstammdaten-Nachricht (Admission-Discharge-Transfer).

### Smartphone Camera

Im Folgenden wird beschrieben, wie auf die Kamera auf eines Smartphones zugreifen und Aufnahmen tätigen kann. Des Weiteren ist es möglich, Fotos abzuspeichern oder Fotos in der eigenen Gallerie / im eigenen Album abzulegen und/oder zuzugreifen.




[package-json]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[git-feature-branch]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[laravel-elixir]: https://github.com/laravel/elixir
[jquery-mobile]: http://jquerymobile.com/
[npm]: https://www.npmjs.com/
[colorschemedesigner]: http://colorschemedesigner.com/csd-3.5/
[Diagrammtypen_chartjs.org]: http://www.chartjs.org/docs/#getting-started
[HL7-Präsentation Johner]: http://www.johner.org/fileadmin/vorlesungen/material/medinf/HL7-V2-HTWG.pdf
