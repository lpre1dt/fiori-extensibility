import React from "react";

export default function SelectionHelp() {
  return (
    <div>
      <h3>
        So sollten Sie bei der Selektion der Erweiterungsoptionen vorgehen:
      </h3>
      <p>
        Es lassen sich jedoch logische Empfehlungen definieren, wie bei der
        Selektion vorzugehen ist:
      </p>
      <ol>
        <li>
          <p>
            Generell sollte erst das Datenmodell erweitert werden und danach UI
            und Logik implementiert werden, weil das Datenmodell die Grundlage
            bildet.
          </p>
        </li>{" "}
        <li>
          <p>
            Gestartet wird bei der Erweiterungsoption mit dem geringsten
            Aufwand.{" "}
          </p>
        </li>
        <li>
          <p>
            Wenn es erfahrungsbasiertes Wissen darüber gibt, dass sich die
            Anforderung mit einer Erweiterungsoption nicht umsetzen lässt, wird
            sie verworfen und die nächste Alternative mit dem nächsthöheren
            Aufwand selektiert.
          </p>
        </li>
        <li>
          <p>
            Wenn zwei Erweiterungsoptionen den gleichen Aufwand haben, wird sich
            für die flexiblere entschieden.
          </p>
        </li>
        <li>
          <p>
            Wenn ein Erweiterungsversuch erfolglos war, wird die
            Erweiterungsoption und alle mit einer niedrigeren Flexibilität
            verworfen.
          </p>
        </li>
      </ol>
    </div>
  );
}
