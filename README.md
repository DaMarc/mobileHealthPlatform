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

Mit dem Aufruf    <script>
          var ruediger = document.getElementById("testChart");
wird eine Variable instanziiert, es wird der Ausdruck "testChart" angegeben und java-Skript durchsucht das Dokument nach der ID "testChart".

Das folgende Beispiel instanziiert ein Kuchendiagramm/ Kreisdiagramm und stellt die Messung der Pulsfrequenz an einem Tag in 2-Stunden-Abschnitten, beginnend bei 0 dar. 

       <script>
          var ruediger = document.getElementById("testChart");

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
                              beginAtZero:false
                          }
                      }]
                  }
              };
         var myChart = new makeChart(ruediger,'pie',data, options);
        </script>
Erläuterung zum obrigen Quellcode:
- var data: ist vom Typ Array und beinhaltet eine Menge von weiteren Elementen, die im Diagramm angezeigt werden sollen, wie z. B.:
	- labels: vom Typ String und beschreibt das Label des Datensatzes, welcher sich in der Legende befindet.
- datasets: vom Typ String und beinhaltet eine Menge von weiteren Elemtenten, die zusätzlich dargestellt werden können, wie z. B.: 
	- label: vom Typ String und beschreibt die Überschrift des Diagrammes.
	- backgroundColor: vom Typ Color und wird in rgba (0, 0, 0, Opacity/ Transparenz -> z. B.: 0.2) angegeben. Nützlich ist http://colorschemedesigner.com/csd-3.5/ zur Farbwertermittlung.
	- borderColor: vom Typ Color und bestimmt die Linienfarbe.




[package-json]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[git-feature-branch]: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
[laravel-elixir]: https://github.com/laravel/elixir
[jquery-mobile]: http://jquerymobile.com/
[npm]: https://www.npmjs.com/