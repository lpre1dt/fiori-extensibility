import React, { useState } from "react";
import { Input, Button, message, Image } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BusinessContext() {
  const { t } = useTranslation();
  //BC
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
    message.success(t("helpPage.businessContext.sqlStatementCopied"));
  };
  return (
    <div>
      <h2>
        {t("helpPage.businessContext.title")}
      </h2>
      <div>
        <p>
          {t("helpPage.businessContext.identifyOdataService")}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to={
              "https://fioriappslibrary.hana.ondemand.com/sap/fix/externalViewer/#/detail/Apps('F1708')/S27OP"
            }
          >
            {t("helpPage.businessContext.fioriAppsLibrary")}
          </Link>{" "}
        </p>
        <Image src={"/2ODATA.gif"} />
        <p>
          {t("helpPage.businessContext.sqlConsolePrompt")}
        </p>
        <i>
          {" "}
          {t("helpPage.businessContext.odataServiceNamePlaceholder")}
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
            {copied ? t("helpPage.businessContext.copied") : t("helpPage.businessContext.copyToClipboard")}
          </Button>
        </CopyToClipboard>
        <p>{t("helpPage.businessContext.optionsTitle")}</p>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t("helpPage.businessContext.sqlNoResult") }} />
        </ul>
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t("helpPage.businessContext.sqlResult") }} />
        </ul>
      </div>
    </div>
  );
}
