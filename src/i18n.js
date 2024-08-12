// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Beispiel: Übersetzungen für Deutsch und Englisch
const resources = {
  en: {
    translation: {
      landingpage: "Landingpage",
      fioriapplication: "Fiori Application",
      requirements: "Requirements",
      selection: "Selection",
      mainHeader: "Structured approach to extending SAP Fiori applications",
      mainText1:
        "This web application is designed to help you find the right extension option for your SAP Fiori application. You can select the different extension options and get an overview of the extension possibilities. The web application is part of the concept for a structured approach to extending SAP Fiori applications. This concept consists of an analysis of the application, a description of the application, and a selection of the available extension options.",
      mainText2: "To access the entire concept, please contact",
      mainText3: "The web application is divided into three areas:",
      mainText4:
        "Here you can describe the frontend and backend of the Fiori application. Help is provided to answer the questions",
      mainText5:
        "Here you can describe the extension requirement you want to implement for your Fiori application.",
      mainText6:
        "Here the available extension options are visualized, and you can select the option that is right for you.",
      mainText7: "You can access the different areas via the navigation.",
      mainText8: "Introduction video",
      mainText9: "Please watch the following video before the first execution:",
      mainText10: "Data basis",
      mainText11:
        "The following CSV file serves as the data basis for the extension options.",
      applicationText1: "Description Phase",
      applicationText2: "Frontend",
      applicationText3: "Backend",
      applicationText4: "Please choose an option.",
      applicationText5:
        "Please watch the following video to understand the complete concept:",
      applicationText6: "An overview of Fiori Elements floorplans can be found",
      applicationText7: "here",
      applicationText8: "Finish Description",
      applicationText9: "Continue to Backend Analysis",
      applicationText10: "Back to Frontend",
      applicationText11: "Complete Description",
      applicationText12:
        "Does the application meet the conditions for SAPUI5 Flexibility?",
      applicationText13: "Does the application contain synchronous views?",
      applicationText14:
        "Is the business context of the application available in the extension registry?",
      applicationText15:
        "On which technology is the application's OData service based?",
      applicationText16:
        "Are behavior extensions allowed for the RAP OData service?",
      chooseOption:
        "Please choose an option. Help for answering this question can be found ",
      here: "here",
      ja: "Yes",
      nein: "No",
      cdsBOPF: "CDS with BOPF",
      cdsRAP: "CDS with RAP",
      cds: "CDS (without ABAP framework)",
      noCDS: "Not CDS-based",
      multipleOData:
        "If the application uses more than one OData service, please specify the technology of the service that is considered for extending the Fiori application. You can find out which data an OData service provides ",
      businessContext:
        "How to find out if the business context of the application is available in the extension registry, you can find out ",
      backTo: "Back to ",
      toBackend: "Continue to Backend Analysis",

      floorPlan: "For which floorplan should extensions be considered?",
      asyncViews:
        "How to check if the application contains synchronous views can be found ",
      sapUi5Flex:
        "How to check if the conditions for SAPUI Flexibility are met can be found ",
      requiremetText1: "Requirement of the extension",
      requiremetText2: "Extensions of the UI",
      requiremetText3: "Extensions of the logic",
      requiremetText4: "Extensions of the data model",
      requiremetText5:
        "To which complexity level can the desired extension be assigned with regard to the UI?",
      requiremetText6:
        "To which complexity level can the desired extension be assigned with regard to the logic?",
      requiremetText7:
        "To which complexity level can the desired extension be assigned with regard to the extension of the data model in the backend?",
      requiremetText8: "General requirement of the extension",
      requiremetText9: "Description phase must be completed",
      finishRequirement: "Finish Requirement Description",
      ui0: "No extensions or changes to the UI.",
      ui1: "Change view, adjust table columns and filters.",
      ui2: "Visual adjustment, remove, move, change content.",
      ui3: "Visual extension, add new content.",
      logik0: "No extensions or changes to the logic.",
      logik1: "Adjust existing logic.",
      logik2: "Add new logic.",
      backend0:
        "No extensions to the data model - required data is already in the existing data model.",
      backend1:
        "Add fields to the existing data model (already available in S/4HANA).",
      backend2:
        "Add fields to the existing data model (not yet available in S/4HANA).",
      backend3:
        "The existing data model is fundamentally extended and, for example, new nodes, entities are created.",
      noChanges: "No changes or extensions",
      addLogic: "Add new logic",
      changeLogic: "Adjust existing logic",

      stufe: "Level",

      possibleExtensions: "Possible extensions",
      erweiterungsOption: "Extension option",
      type: "Type",

      pleaseDescriptionPhase: "Please complete the description phase first",
      description: "Description",
      voraussetzung: "Precondition",
      technische: "Technical implementation",
      flexibilitaet: "Flexibility",
      aufwand: "Effort",
      possibleUI: "Possible UI extensions",
      possibleLogic: "Possible logic extensions",
      possibleDataModel: "Possible data model extensions",
      minimumLevel:
        "Extension option that at least meets the requirement level ",
      possibleForReq: "Possible extensions for the respective requirements",
      evaluatedOptions: "Evaluated extension options",
      evauluationCriteria: "Evaluation criteria",
      effortText:
        "How effortful is the extension option to implement in % based on the extension option with the highest effort. ( 100% = extension option with the highest effort)",
      evaluationText2:
        "Information on the exact calculation of flexibility and effort can be found ",
      evaluationText3: "Help for selecting the extension options can be found",
      flexText:
        "How flexible is the extension option in % based on the extension option with the highest flexibility. ( 100% = extension option with the highest flexibility)",
      howODataHeader:
        "How is it determined on which technology an OData service is based?",
      howOData1:
        "First you have to identify the OData service of your Fiori application. You get the name of the OData service from the",
      howOData2:
        "Some OData services can be identified by their naming convention. It is recommended to go through the following decision tree and assign one of the analysis profiles:",
      overView: "Overview",
      analyPro: "Analysis Profile",
      zwischenschrritt: "Intermediate Step",
      dataModel: "Data Model",
      startsWith: "starts with",
      help: "Help",
      uiDefine: "How to identify the ui-type of an Fiori-App:",
      evaluationHelp:
        "Please complete the description phase and the description of the requirements first.",
    },
  },
  de: {
    translation: {
      landingpage: "Startseite",
      fioriapplication: "Fiori-Anwendung",
      requirements: "Anforderungen",
      selection: "Selektion",
      mainHeader:
        "Strukturiert vorgehen bei der Erweiterung von SAP Fiori-Anwendungen",
      mainText1:
        "Diese Webanwendung soll Ihnen dabei helfen, die richtige Erweiterungsoption für Ihre SAP Fiori-Anwendung zu finden. Dazu können Sie die verschiedenen Erweiterungsoptionen auswählen und erhalten eine Übersicht über die Erweiterungsmöglichkeiten. Die Webanwendung ist Teil  des Konzepts zum strukturierten Vorgehen bei der Erweiterung von SAP Fiori-Anwendungen. Dieses Konzept besteht aus einer Analyse der  Anwendung, einer Beschreibung der Anwendung und einer Selektion der verfügbaren Erweiterungsoptionen.",
      mainText2:
        "Um Zugriff auf das gesamte Konzept zu erhalten, wenden Sie sich bitte",
      mainText3: "Die Webanwendung ist in drei Bereiche unterteilt:",
      mainText4:
        "Hier können Sie Frontend und Backend der Fiori-Anwendung beschreiben. Zur Beantwortung der Fragen werden Ihnen Hilfestellungen angeboten",
      mainText5:
        " Hier können Sie die Erweiterungsanforderung beschreiben, die Sie für Ihre Fiori-Anwendung implementieren möchten.",
      mainText6:
        "Hier werden die verfügbaren Erweiterungsoptionen visualisiert, und Sie können die für Sie passende Option auswählen.",
      mainText7:
        "Sie können die verschiedenen Bereiche über die Navigation erreichen.",
      mainText8: "Einführungsvideo",
      mainText9:
        "Schauen Sie sich bitte vor der ersten Durchführung das folgende Video an:",
      mainText10: "Datengrundlage",
      mainText11:
        " Als Datengrundlage für die Erweiterungsoptionen dient die folgende CSV-Datei.",
      applicationText1: "Beschreibungsphase",
      applicationText2: "Frontend",
      applicationText3: "Backend",
      applicationText4: "Bitte wählen Sie eine Option aus.",
      applicationText5:
        "Schauen Sie sich bitte das folgende Video an, um das vollständige Konzept zu verstehen:",
      applicationText6:
        "Eine Übersicht über Fiori-Elemente-Floorpläne finden Sie",
      applicationText7: "hier",
      applicationText8: "Beschreibung abschließen",
      applicationText9: "Weiter zur Backend-Analyse",
      applicationText10: "Zurück zum Frontend",
      applicationText11: "Beschreibung abschließen",
      applicationText12:
        "Erfüllt die Anwendung die Bedingungen für SAPUI5 Flexibility?",
      applicationText13: "Enthält die Anwendung synchrone Views? ",
      applicationText14:
        "Ist der Geschäftskontext der Anwendung im Erweiterungsregister vorhanden?",
      applicationText15:
        "Auf welcher Technologie basiert der OData-Service der Anwendung?",
      applicationText16:
        "Sind für den RAP-OData-Service Behavior-Erweiterungen erlaubt?",
      here: "hier",
      chooseOption:
        "Bitte wählen Sie eine Option aus. Hilfe zur Beantwortung dieser Frage finden Sie ",
      ja: "Ja",
      nein: "Nein",
      cdsBOPF: "CDS mit BOPF",
      cdsRAP: "CDS mit RAP",
      cds: "CDS (ohne ABAP-Framework)",
      noCDS: "Nicht CDS-basiert",
      multipleOData:
        "Wenn die Anwendung mehr als einen OData-Service verwendet, geben Sie bitte die die Technologie des Services an, der für die Erweiterung der Fiori-Anwendung in Betracht gezogen wird. Wie Sie herausfinden welche Daten ein OData-Service zur Verfügung stellt, erfahren Sie ",
      businessContext:
        "Wie Sie herausfinden können, ob der Geschäftskontext der Anwendung im Erweiterungsregister vorhanden ist, erfahren Sie",
      backTo: "Zurück zum ",
      toBackend: "Weiter zur Backend-Analyse ",
      floorPlan:
        "Für welchen Floorplan sollen Erweiterungen in Betracht gezogen werden? ",
      asyncViews:
        "Wie überprüft werden kann, ob die Anwendung synchrone Views enthält erfahren Sie ",
      sapUi5Flex:
        "Wie überprüft werden kann, ob die Bedingungen für SAPUI Flexibility erfüllt sind erfahren Sie ",
      requiremetText1: "Anforderung der Erweiterung",
      requiremetText2: "Erweiterungen der UI",
      requiremetText3: "Erweiterungen der Logik",
      requiremetText4: "Erweiterungen des Datenmodells",
      requiremetText5:
        "Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung bezogen auf die UI zuordnen? ",
      requiremetText6:
        "Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung bezogen auf die Logik zuordnen? ",
      requiremetText7:
        "Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung bezogen auf die Erweiterung des Datenmodells im Backend zuordnen? ",
      requiremetText8: "Allgemeine Anforderung der Erweiterung ",
      requiremetText9:
        "Beschreibungsphase muss vollständig durchgeführt werden",
      finishRequirement: "Anforderungsbeschreibung abschließen",
      ui0: "Keine Erweiterungen oder Änderungen an der UI.",
      ui1: "Ansicht verändern, Tabellenspalten und Filter anpassen.",
      ui2: "Visuelle Anpassung, Inhalte entfernen, verschieben, ändern.",
      ui3: "Visuelle Erweiterung, neue Inhalte hinzufügen.",
      logik0: "Keine Erweiterungen oder Änderungen an der Logik.",
      logik1: "Bestehende Logik anpassen.",
      logik2: "Neue Logik hinzufügen.",
      backend0:
        "Keine Erweiterungen am Datenmodell - benötigte Daten befinden sich bereits im bestehenden Datenmodell.",
      backend1:
        "Felder zum bestehenden Datenmodell hinzufügen (bereits in S/4HANA vorhanden).",
      backend2:
        "Felder zum bestehenden Datenmodell hinzufügen (noch nicht in S/4HANA vorhanden).",
      backend3:
        "Das bestehende Datenmodell wird grundlegend erweitert und zum Beispiel neue Knoten, Entitäten angelegt.",
      noChanges: "Keine Änderungen",
      addLogic: "Neue Logik hinzufügen",
      changeLogic: "Bestehende Logik anpassen",
      stufe: "Stufe",
      possibleExtensions: "Mögliche Erweiterungen",
      pleaseDescriptionPhase:
        "Bitte führen Sie erst die Beschreibungsphase durch vollständig durch",
      erweiterungsOption: "Erweiterungsoption",
      type: "Typ",

      description: "Beschreibung",
      voraussetzung: "Voraussetzung",
      technische: "Technische Umsetzung",
      flexibilitaet: "Flexibilität",
      aufwand: "Aufwand",
      possibleUI: "Mögliche Erweiterungen der UI",
      possibleLogic: "Mögliche Erweiterungen der Logik",
      possibleDataModel: "Mögliche Erweiterungen des Datenmodells",
      minimumLevel:
        " Erweiterunsgoption, die mindestens die Anforderungsstufe ",
      possibleForReq: "Mögliche Erweiterungen für die jeweiligen Anforderungen",
      evaluatedOptions: "Bewertete Erweiterungsoptionen",
      evauluationCriteria: "Bewertungskriterien",
      effortText:
        "Wie aufwändig ist die Erweiterungsoption zu implementieren in % ausgehend von der Erweiterungsoption mit dem höchsten Aufwand. ( 100% = Erweiterungsoption mit dem höchsten Aufwand)",
    },
    flexText:
      "Wie flexibel ist die Erweiterungsoption in % ausgehend von der Erweiterungsoption mit der höchsten Flexibilität. ( 100% = Erweiterungsoption mit der höchsten Flexibilität)",
    evaluationText2:
      "Informationen zu der genauen Berechnung von Flexibilität und Aufwand finden Sie ",
    evaluationText3:
      "Hilfestellungen zur Selektion der Erweiterungsoptionen finden Sie",

    howODataHeader:
      "Wie wird bestimmt, auf welcher Technologie ein OData-Service basiert?",
    howOData1:
      "Zuerst müssen Sie den OData-Service Ihrer Fiori-Anwendung identifizieren. Den Namen des OData-Service erhalten Sie aus der",
    howOData2:
      "Einige OData-Services kann man über ihre Namenskonvention identifizieren. Es wird empfohlen, den folgenden Entscheidungsbaum zu durchlaufen und einem der Analyse-Profile zuzuordnen:",
    overView: "Überblick",
    analyPro: "Analyse-Profil",
    zwischenschrritt: "Zwischenschritt",
    dataModel: "Datenmodell",
    startsWith: "beginnen mit",
    help: "Hilfe",
    uiDefine: "Wie wird der UI-Typ einer Fiori-App identifziert?",
    evaluationHelp:
      "Bitte führen Sie zuerst die Beschreibungsphase und die Beschreibung der Anforderungen durch.",
  },
};

i18n
  .use(initReactI18next) // bind i18n to react
  .init({
    resources,
    lng: "de", // Standard-Sprache
    fallbackLng: "de", // Fallback-Sprache
    interpolation: {
      escapeValue: false, // Kein Escaping notwendig
    },
  });

export default i18n;
