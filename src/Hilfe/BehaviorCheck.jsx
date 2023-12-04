import { Image } from "antd";
import React from "react";

export default function BehaviorCheck() {
  return (
    <div>
      <h3>
        Wie finde ich heraus, ob mein RAP OData-Service Behavior-Erweiterungen
        unterstützt
      </h3>
      <p>
        In der Definition des Verhaltens (Behavior) des Interface-Views muss
        dies explizit durch das Schlüsselwort "extensible" im Kopf erlaubt sein.
        Zudem müssen alle verfügbaren Änderungsoptionen manuell innerhalb der
        geschweiften Klammern erlaubt sein.
      </p>
      <Image src="/RAP_Extensible.png" />
    </div>
  );
}
