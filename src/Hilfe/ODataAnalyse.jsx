import { Image, Tabs } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ODataAnalyse() {
  const { t } = useTranslation();
  return (
    <div>
      <h3>
        {t("howODataHeader")}
      </h3>
      <p>
        {t("howOData1")}{" "}
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
      <Image src={"/2ODATA.gif"} alt={t("helpPage.odataAnalyse.odataAnalyseAltText")} />
      <p>
        {t("howOData2")}
      </p>
      <Image src={"/ODataAnalyse.png"} alt={t("helpPage.odataAnalyse.analyseProfileAltText")} />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={<span>{t("helpPage.odataAnalyse.analyseProfilA")}</span>} key="1">
          <h3>{t("overView")}</h3>
          <p>{t("helpPage.odataAnalyse.datenmodellCdsBasiert")}</p>
          <p>{t("helpPage.odataAnalyse.abapFrameworkRap")}</p>
          <p>{t("helpPage.odataAnalyse.rapOdataStartsWithUI")}</p>
          <p>
            {t("helpPage.odataAnalyse.rapNamingConvention")}
          </p>
          <h3>{t("helpPage.odataAnalyse.odataToCdsModell")}</h3>
          <Image src="/RAPTPCDS.gif" alt="CDS Modell" />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>{t("helpPage.odataAnalyse.analyseProfilB")}</span>} key="2">
          <h3>{t("overView")}</h3>
          <p>{t("helpPage.odataAnalyse.datenmodellCdsBasiert")}</p>
          <p>{t("helpPage.odataAnalyse.abapFrameworkBopf")}</p>
          <p>
            {t("helpPage.odataAnalyse.bopfNamingConvention")}
          </p>
          <h3>{t("helpPage.odataAnalyse.odataToCdsModell")}</h3>
          <Image src="/CDSGIF.gif" alt="CDS Modell" />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>{t("helpPage.odataAnalyse.zwischenschrittCD")}</span>} key="3">
          <p>
            {t("helpPage.odataAnalyse.zwischenschrittCDDescription")}
          </p>
          <Image src="/ServiceClient.png" alt={t("helpPage.odataAnalyse.serviceClientAltText")} />
          <p>
            {t("helpPage.odataAnalyse.serviceAnzeigenDescription")}
          </p>
          <Image src="/ServiceAnzeigen.png" alt={t("helpPage.odataAnalyse.serviceAnzeigenAltText")} />
          <p>
            {t("helpPage.odataAnalyse.classBuilderDescription")}
          </p>
          <Image src="/Classbuilder.png" alt={t("helpPage.odataAnalyse.classBuilderAltText")} />
          <p>
            {t("helpPage.odataAnalyse.segwProjectIdentified")}
          </p>
          <Image src="/SADL.png" alt={t("helpPage.odataAnalyse.sadlAltText")} />
          <p>
            {t("helpPage.odataAnalyse.datenmodellDirektImSEGW")}
          </p>
          <Image src="/PAOC.png" alt="PAOC" />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>{t("helpPage.odataAnalyse.analyseProfilC")}</span>} key="4">
          <h3>{t("overView")}</h3>
          <p>{t("helpPage.odataAnalyse.datenmodellCdsBasiert")}</p>
          <p>{t("helpPage.odataAnalyse.abapFrameworkBopf")}</p>
          <h3>{t("helpPage.odataAnalyse.odataToCdsModell")}</h3>
          <Image src="SADLGIF.gif" alt="CDS Modell" />
        </Tabs.TabPane>
        <Tabs.TabPane tab={<span>{t("helpPage.odataAnalyse.analyseProfilD")}</span>} key="5">
          <h3>{t("overView")}</h3>
          <p>{t("helpPage.odataAnalyse.datenmodellNichtCdsBasiert")}</p>
          <p>{t("helpPage.odataAnalyse.abapFrameworkMinus")}</p>
          <p>{t("helpPage.odataAnalyse.datenmodellImSEGWProjekt")}</p>
          <Image src="/PAOC.png" alt="PAOC" />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
