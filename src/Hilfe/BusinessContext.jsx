import React, { useState } from "react";
import { Input, Button, message, Image } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
export default function BusinessContext() {
  const [code, setCode] = useState(
    `SELECT
    cfd_w_bus_ctxt_t~business_context AS businesscontext,
    cfd_w_bus_ctxt_t~language AS language,
    cfd_w_odata_ctxt~model_name AS modelname,
    p_cfd_odata_service_names~service_name,
    cfd_w_odata_ctxt~entity_name AS entityname,
    cfd_w_bus_ctxt_t~description AS description
  FROM
    p_cfd_odata_service_names JOIN
    cfd_w_odata_ctxt ON p_cfd_odata_service_names~model_name = cfd_w_odata_ctxt~model_name
  JOIN
    cfd_w_bus_ctxt_t ON cfd_w_odata_ctxt~business_context = cfd_w_bus_ctxt_t~business_context
  WHERE
    cfd_w_bus_ctxt_t~language = 'D'
    AND
    p_cfd_odata_service_names~service_name = 'ODATA-SERVICE-NAME'.`
  );
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    message.success("SQL-Statement kopiert!");
  };
  return (
    <div>
      <h2>
        {" "}
        Wie wird geprüft, ob sich der Geschäftskontext einer Fiori-Anwendung im
        Erweiterungsregister befindet?
      </h2>
      <div>
        <p>
          Zuerst müssen Sie den OData-Service ihrer Fiori-Anwendung
          identifzieren. Den Namen des OData-Service erhalten Sie aus der{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={
              "https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F1708')/S27OP"
            }
          >
            Fiori Apps Reference Library
          </Link>{" "}
        </p>
        <Image src={"/2ODATA.gif"} />
        <p>
          Das folgende Select Statement sollte in die SQL-Konsole in Eclipse
          eingegeben werden:
        </p>
        <i>
          {" "}
          'ODATA-SERVICE-NAME' sollte durch den Namen des OData-Service ihrer
          Fiori-Anwendung ausgetauscht werden
        </i>
        <Input.TextArea
          autoSize={{ minRows: 5 }}
          value={code}
          readOnly
          style={{ fontFamily: "monospace", marginTop: 10 }}
        />
        <br />
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <Button
            style={{
              marginTop: 10,
            }}
          >
            {copied ? "Kopiert!" : "In Zwischenablage kopieren"}
          </Button>
        </CopyToClipboard>
        <p>Nun gibt es zwei Optionen:</p>
        <ul>
          <li>
            `SQL-Abfrage liefert <b>kein Ergebnis</b>: Kein Geschäftskontext im
            Erweiterungsregister
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            SQL-Abfrage liefert Ergibnis: Geschäftskontext(e) im
            Erweiterungsregister. Name Beschreibung und erweiterbrare Entität
            sollte für potenzielle Erweiterungen notiert werden.
          </li>
        </ul>
      </div>
    </div>
  );
}
