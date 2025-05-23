// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Beispiel: Übersetzungen für Deutsch und Englisch
const resources = {
  en: {
    translation: {
      landingpage: "Homepage", // Corrected
      fioriapplication: "Fiori Application",
      requirements: "Requirements",
      selection: "Selection",
      mainHeader: "Structured approach to extending SAP Fiori applications",
      mainText1:
        "This web application is designed to help you find the right extension option for your SAP Fiori application. You can select the different extension options and get an overview of the extension possibilities. The web application is part of the concept for a structured approach to extending SAP Fiori applications. This concept consists of an analysis of the application, a description of the application, and a selection of the available extension options.",
      mainText2: "To access the entire concept, please contact",
      mainText3: "The web application is divided into three areas:",
      mainText4:
        "Here you can describe the frontend and backend of the Fiori application. Help is provided to answer the questions.", // Added period
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

      pleaseDescriptionPhase: "Please complete the description phase first.", // Added period
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
        "How effortful is the extension option to implement in % based on the extension option with the highest effort. (100% = extension option with the highest effort)", // Corrected typo: effortful
      evaluationText2:
        "Information on the exact calculation of flexibility and effort can be found ",
      evaluationText3: "Help for selecting the extension options can be found",
      flexText:
        "How flexible is the extension option in % based on the extension option with the highest flexibility. (100% = extension option with the highest flexibility)",
      howODataHeader:
        "How is it determined on which technology an OData service is based?",
      howOData1:
        "First you have to identify the OData service of your Fiori application. You get the name of the OData service from the",
      howOData2:
        "Some OData services can be identified by their naming convention. It is recommended to go through the following decision tree and assign one of the analysis profiles:",
      overView: "Overview",
      analyPro: "Analysis Profile",
      zwischenschrritt: "Intermediate Step", // Corrected German: "Zwischenschritt" -> English: "Intermediate Step"
      dataModel: "Data Model",
      startsWith: "starts with",
      help: "Help",
      uiDefine: "How to identify the UI type of a Fiori App:", // Corrected typo and case
      evaluationHelp:
        "Please complete the description phase and the description of the requirements first.",

      anforderungen: {
        hoch: "high"
      },

      anwendung: {
        wizard: "Wizard",
        manuell: "Manual",
        sapui5Freestyle: "SAPUI5 Freestyle",
        fioriElements: "Fiori Elements",
        objectPage: "Object Page",
        listReport: "List Report",
        analyticalListPage: "Analytical List Page",
        overviewPage: "Overview Page",
        worklist: "Worklist"
      },

      bewertung: {
        uiLabel: "UI:",
        bewerteteLogikOptionen: "Evaluated Logic Extension Options",
        bewerteteDatenmodellOptionen: "Evaluated Data Model Extension Options"
      },

      detailView: {
        mockErweiterungsoption1: "Extension Option 1",
        implizit: "Implicit",
        mockBeschreibung1: "Description 1",
        mockLokalvoraussetzung1: "Local Prerequisite 1",
        mockUmsatzung1: "Implementation 1",
        explizitTooltip: "This extension option is explicit. It must be checked in each individual case whether it is available for the Fiori application.",
        detailsTitle: "Details",
        idLabel: "ID:",
        personaLabel: "Persona:",
        aufbauendeOptionen: "Building Extension Options"
      },

      fioriAppDetector: {
        appNameOrIdInputLabel: "Enter app name or app ID:",
        appNameOrIdPlaceholder: "App name or app ID",
        gefundeneAppsTitle: "Found Apps",
        fioriIdLabel: "Fiori ID:",
        appNameLabel: "App Name:"
      },

      homepage: {
        footerText: "MHP a Porsche Company ©2023 Created by Lukas Preidt"
      },

      loginPage: {
        loginTitle: "Login",
        loginSuccess: "Logged in successfully!",
        verifyEmailError: "Please verify your email before logging in!",
        loginFailedError: "Failed to log in!",
        mhpEmailError: "You can only sign up with an @mhp.com email address.",
        signUpSuccess: "Account created successfully! Please verify your email.",
        signUpFailedError: "Failed to create account!",
        passwordResetEmailPrompt: "Please enter your email to reset your password.",
        passwordResetSuccess: "Password reset email sent! Please check your inbox.",
        passwordResetFailed: "Failed to send password reset email. Please try again.",
        appTitle: "Fiori Extensibility Compass",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        loginButton: "Log in",
        forgotPasswordLink: "Forgot your password?",
        signUpTitle: "Sign Up",
        confirmPasswordPrompt: "Please confirm your password!",
        passwordsNoMatchError: "The two passwords that you entered do not match!",
        confirmPasswordPlaceholder: "Confirm Password",
        signUpButton: "Sign Up",
        freeAccountInfo: "You can create a free account with an @mhp.com email address. If you don't have one, you can get your email address whitelisted. Just request account via mail ",
        requestAccountLink: "Request account",
        predefinedMailInfo: " just send predefined mail (no adjustments or formalities needed)."
      },

      overviewTable: {
        uiPrefix: "UI-",
        logicPrefix: "Logic-",
        backendPrefixWithSpace: "Backend "
      },

      startseite: {
        downloadButton: "Download"
      },

      helpPage: {
        behaviorCheck: {
          title: "How to find out if my RAP OData service supports behavior extensions",
          extensibleDescription: "In the definition of the behavior of the interface view, this must be explicitly allowed by the keyword \"extensible\" in the header. In addition, all available change options must be manually allowed within the curly braces.",
          rapExtensibleAltText: "RAP Extensible"
        },
        bewertungsmetriken: {
          title: "How were the values for flexibility and effort calculated?",
          flexStufenDef: "For flexibility, 6 flexibility levels were defined:",
          flexStufe1: "Customize or personalize existing content.",
          flexStufe2: "Add simple content that is not yet in the data model.",
          flexStufe3: "Guided data model or logic extensions (Key User).",
          flexStufe4: "Add custom code at explicit extension points.",
          flexStufe5: "Add implicit extensions with custom code.",
          flexStufe6: "Actively intervene in existing program code.",
          eingeordnetDescription: "All extension options were classified into these flexibility levels.",
          multipliziertDescription: "After this classification, all extension options were multiplied by 10 and subjective adjustments in the interval (-10;10) were made to diversify the ratings.",
          umgewandeltDescription: "Finally, the corrected values were converted into percentages (%) relative to the highest value.",
          gesamtaufwandDescription: "The total effort (TE) is calculated from the minimum effort (ME) and a value calculated from the characteristic in the \"Extension Possibility\" (EP) column.",
          gaFormula: "TE = ME + EP",
          mindestaufwandDescription: "The <b>minimum effort</b> is calculated from the sum of steps that must be performed at a minimum when implementing an extension option, without the actual implementation. So, the opportunity costs of an extension option, so to speak.",
          beispielControllerAnlegen: "Example for the extension option \"Create Controller\":",
          adaptationProjectAnlegen: "Create Adaptation Project",
          controllerAnlegen: "Create Controller",
          logikImplementieren: "Implement logic (not included)",
          produktivsetzen: "Deploy to production",
          maResult: "This results in an ME of 3",
          wertErweiterungsmoeglichkeit: "The <b>value from the extension possibility</b> results from the highest value contained in the category in which the extension option is listed in the \"Extension Possibilities in Data Basis\" column.",
          tabelleEmWerte: "The following table shows the values adopted for EP for each extension option. Logic extension options are generally adopted with a value of 3.",
          auspraegung: "Characteristic",
          wert: "Value",
          emUbersicht1: "Change view, adjust table columns and filters.",
          emUbersicht2: "Visual adjustment, remove, move content.",
          emUbersicht3: "Visual extension, add content.",
          emLogik1: "Logic adjustment, extensions that intervene in the existing logic.",
          emLogik2: "Logic extensions that do not intervene in the existing logic and add new logic.",
          emDatenmodell1: "Add fields to the existing data model (already available in S/4HANA).",
          emDatenmodell2: "Add fields to the existing data model (not yet available in S/4HANA).",
          emDatenmodell3: "Fundamentally extend the existing data model, e.g., with new nodes or entities.",
          auchHierMultipliziert: "Here too, after this classification, all extension options were multiplied by 10 and subjective adjustments in the interval (-10;10) were made to diversify the ratings."
        },
        businessContext: {
          title: "How to check if the business context of a Fiori application is in the extension registry?",
          identifyOdataService: "First, you need to identify the OData service of your Fiori application. You can get the name of the OData service from the ",
          fioriAppsLibrary: "Fiori Apps Reference Library",
          sqlConsolePrompt: "The following SELECT statement should be entered into the SQL console in Eclipse:",
          odataServiceNamePlaceholder: "'ODATA-SERVICE-NAME' should be replaced with the name of your Fiori application's OData service.",
          sqlStatementCopied: "SQL statement copied!",
          copied: "Copied!",
          copyToClipboard: "Copy to clipboard",
          optionsTitle: "Now there are two options:",
          sqlNoResult: "SQL query returns <b>no result</b>: No business context in the extension registry.",
          sqlResult: " SQL query returns a result: Business context(s) in the extension registry. Name, description, and extensible entity should be noted for potential extensions."
        },
        floorplan: {
          title: "How do I identify the floorplan of a Fiori Elements application?",
          manualAbgleich: "If the name of the floorplan cannot be identified from the application type in the Fiori Apps Reference Library, it must be manually compared. An overview of all Fiori Elements floorplans can be found ",
          dot: "."
        },
        odataAnalyse: {
          odataAnalyseAltText: "OData Analysis",
          analyseProfileAltText: "Analysis Profile",
          analyseProfilA: "Analysis Profile A",
          datenmodellCdsBasiert: "Data model: CDS-based",
          abapFrameworkRap: "ABAP Framework: RAP",
          rapOdataStartsWithUI: "RAP OData services start with \"UI_*\"",
          rapNamingConvention: "Due to the strict naming convention for RAP OData services, it is possible to view the architecture of the service in Eclipse with relatively little effort. To do this, you only need to search for the name of the OData service in the ABAP object search.",
          odataToCdsModell: "How to get from the OData service name to the CDS model:",
          analyseProfilB: "Analysis Profile B",
          abapFrameworkBopf: "ABAP Framework: BOPF",
          bopfNamingConvention: "The name of the OData service can also be obtained from the entry in the Fiori Apps Reference Library. To analyze OData services ending with \"_CDS\", the \"_CDS\" suffix can be removed to get the name of the Consumption CDS view from which the OData service was published. This works because OData services with this naming convention were generated from the CDS view using the annotation \"@OData.Publish:true\".",
          zwischenschrittCD: "Intermediate Step CD",
          zwischenschrittCDDescription: "If the OData service could not be assigned to Analysis Profile A or B, intermediate step CD must be performed. Intermediate step CD shows how to find its SEGW project using the OData service name and assign the OData service to Analysis Profile C or D. The OData service should be viewed in the SAP Gateway client in transaction \"/IWFND/MAINT_SERVICE\". From there, you can reach the \"Display Service\" screen via the \"Service Implementation\" button.",
          serviceClientAltText: "Service Client",
          serviceAnzeigenDescription: "In the \"Display Service\" screen, you can navigate to the model provider class, which is located in the package where the SEGW project is also created.",
          serviceAnzeigenAltText: "Display Service",
          classBuilderDescription: "Once in the folder, you can see the SEGW projects created in the folder. It may happen that multiple SEGW projects are created in the same folder. In this case, you should check which name has the greatest similarity with the name of the OData service.",
          classBuilderAltText: "Class Builder",
          segwProjectIdentified: "Once the SEGW project is identified, the project can be opened in the transaction and the service analyzed. Here you should check where the data model of the OData service originates. If the data model consists of data source references defined in the \"Exposures via SADL\" folder, the OData service corresponds to Analysis Profile C.",
          sadlAltText: "SADL",
          datenmodellDirektImSEGW: "If the data model is defined directly in the SEGW project, it is Analysis Profile D.",
          analyseProfilC: "Analysis Profile C",
          analyseProfilD: "Analysis Profile D",
          datenmodellNichtCdsBasiert: "Data model: Not CDS-based",
          abapFrameworkMinus: "ABAP Framework: -",
          datenmodellImSEGWProjekt: "You can find the data model of the OData service in the SEGW project."
        },
        odataContent: {
          title: "How to determine the content of an OData service?",
          multipleOdataDescription: "If the application uses multiple OData services, the relevant OData services for the extension should be identified. This can be checked by comparing the entities of the OData service with the entities of the extension request, especially if the extension request involves an extension of the data model.",
          browserUrlDescription: "To determine what data the OData service provides without technically analyzing it, the browser URL of the OData service can be called up and viewed in JSON format. The browser URL is obtained from the transaction \"/IWFND/MAINT_SERVICE\" - Activate and Manage Services, via the \"Get Browser\" button. This URL can be used to send requests to obtain the data read by the OData service.",
          beispielSDSRV: "An example of how to read the contents of an OData service via URL queries is demonstrated here using the OData service \"SD_F1708_CRT_WL_SRV\".",
          vorgehen: "Procedure:",
          ausgabeJsonFormat: "Output in JSON format:",
          inhaltEntitaetICustomer: "Content of entity I_Customer:"
        },
        sapFlex: {
          title: "How to determine if a Fiori application uses SAPUI5 Flexibility?",
          freestyleCheck: "An application of type SAPUI5 Freestyle should be checked to see if it supports SAPUI5 Flexibility. There are three different ways to do this:",
          pruefungInAnwendung: "Check within the application.",
          pruefungInBas: "Check in Business Application Studio.",
          manuellePruefung: "Manual check.",
          inDerAnwendungTitle: "In the application",
          inDerAnwendungDescription: "The quickest option is to perform the check directly in the application. This requires key user extension authorizations. If the \"Adapt UI\" option is available, the application supports SAPUI5 Flexibility. If the option is not available, it does not support SAPUI5 Flexibility.",
          imBasTitle: "In Business Application Studio",
          imBasDescription: "Similarly, availability can be checked in Business Application Studio. If an Adaptation Project can be created for the application, it supports SAPUI5 Flexibility. The project does not need to be fully created; it is sufficient to select the application and check if an Adaptation Project could be created.",
          manuellTitle: "Manual",
          manuellDescription1: "It can be manually checked whether the application supports SAPUI5 Flexibility. To do this, the sufficient conditions for SAPUI5 Flexibility must be checked in the application's source code. This requires calling up the Business Server Pages (BSP) with the SAPUI5 application in the system. The technical name can be found in the Fiori Apps Reference Library.",
          manuellDescription2: "In the SAP GUI, the application's Manifest.json file can be viewed via transaction SE80. If the application does not contain a Manifest.json file, it is not available for SAPUI5 Flexibility.", // Removed extra period
          manifestAnalyseOrder: "When analyzing the Manifest.json file, it is recommended to proceed in the following order:",
          manifestMinUi5Version: "Check MinUI5Version: This should be at least version 1.28. If it is lower, the application does not support SAPUI5 Flexibility.",
          manifestDependencies: "Check Dependencies: In the Dependencies section, if the library \"sap.ca.scfld.md\" is defined in the Manifest.json file, the application is not available for SAPUI5 Flexibility.",
          manifestFlexEnabled: "Check FlexEnabled annotation: If this is set to false, the application is not available for SAPUI5 Flexibility. If it is set to true or not set, and no cases were identified in steps 1 and 2 that indicate SAPUI5 Flexibility is unavailable, then flexibility is available for the application."
        },
        selectionHelp: {
          title: "How you should proceed with the selection of extension options:",
          logischeEmpfehlungen: "However, logical recommendations can be defined on how to proceed with the selection:",
          punkt1DatenmodellZuerst: "Generally, the data model should be extended first, followed by the implementation of UI and logic, because the data model forms the basis.",
          punkt2GeringsterAufwand: "Start with the extension option that requires the least effort.",
          punkt3Erfahrungsbasiert: "If there is experience-based knowledge that the requirement cannot be implemented with an extension option, it is discarded, and the next alternative with the next higher effort is selected.",
          punkt4GleicherAufwandFlexiblere: "If two extension options have the same effort, the more flexible one is chosen.",
          punkt5ErfolglosVerwerfen: "If an extension attempt was unsuccessful, the extension option and all those with lower flexibility are discarded."
        },
        syncViews: {
          title: "How to determine if a Fiori application uses synchronous views?",
          basCheck: "To determine if the application uses synchronous views, this should be checked in Business Application Studio. For this, an Adaptation Project must be defined and proceeded to the \"Select Application\" step.",
          adaptationProjectAltText: "Adaptation Project",
          syncViewsMessage: "If the application contains synchronous views, this will be reported, and the option to choose between an Adaptation or Extension project will be offered."
        }
      }
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
        "Um Zugriff auf das gesamte Konzept zu erhalten, wenden Sie sich bitte an", // Added "an"
      mainText3: "Die Webanwendung ist in drei Bereiche unterteilt:",
      mainText4:
        "Hier können Sie Frontend und Backend der Fiori-Anwendung beschreiben. Zur Beantwortung der Fragen werden Ihnen Hilfestellungen angeboten.",
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
      applicationText13: "Enthält die Anwendung synchrone Views?", // Removed space
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
        "Wie Sie herausfinden können, ob der Geschäftskontext der Anwendung im Erweiterungsregister vorhanden ist, erfahren Sie ", // Added space at the end
      backTo: "Zurück zum ",
      toBackend: "Weiter zur Backend-Analyse", // Removed space
      floorPlan:
        "Für welchen Floorplan sollen Erweiterungen in Betracht gezogen werden?", // Removed space
      asyncViews:
        "Wie überprüft werden kann, ob die Anwendung synchrone Views enthält erfahren Sie ",
      sapUi5Flex:
        "Wie überprüft werden kann, ob die Bedingungen für SAPUI Flexibility erfüllt sind erfahren Sie ",
      requiremetText1: "Anforderung der Erweiterung",
      requiremetText2: "Erweiterungen der UI",
      requiremetText3: "Erweiterungen der Logik",
      requiremetText4: "Erweiterungen des Datenmodells",
      requiremetText5:
        "Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung bezogen auf die UI zuordnen?", // Removed space
      requiremetText6:
        "Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung bezogen auf die Logik zuordnen?", // Removed space
      requiremetText7:
        "Welcher Komplexitätsstufe lässt sich die gewünschte Erweiterung bezogen auf die Erweiterung des Datenmodells im Backend zuordnen?", // Removed space
      requiremetText8: "Allgemeine Anforderung der Erweiterung", // Removed space
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
        "Bitte führen Sie erst die Beschreibungsphase vollständig durch.", // Added period
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
        " Erweiterungsoption, die mindestens die Anforderungsstufe ", // Corrected typo "Erweiterunsgoption"
      possibleForReq: "Mögliche Erweiterungen für die jeweiligen Anforderungen",
      evaluatedOptions: "Bewertete Erweiterungsoptionen",
      evauluationCriteria: "Bewertungskriterien",
      effortText:
        "Wie aufwändig ist die Erweiterungsoption zu implementieren in % ausgehend von der Erweiterungsoption mit dem höchsten Aufwand. (100% = Erweiterungsoption mit dem höchsten Aufwand)",
      flexText:
        "Wie flexibel ist die Erweiterungsoption in % ausgehend von der Erweiterungsoption mit der höchsten Flexibilität. (100% = Erweiterungsoption mit der höchsten Flexibilität)",
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
      zwischenschrritt: "Zwischenschritt", // Corrected spelling
      dataModel: "Datenmodell",
      startsWith: "beginnen mit",
      help: "Hilfe",
      uiDefine: "Wie wird der UI-Typ einer Fiori-App identifiziert?", // Corrected "identifziert"
      evaluationHelp:
        "Bitte führen Sie zuerst die Beschreibungsphase und die Beschreibung der Anforderungen durch.",

      anforderungen: {
        hoch: "hoch"
      },

      anwendung: {
        wizard: "Wizard",
        manuell: "Manuell",
        sapui5Freestyle: "SAPUI5 Freestyle",
        fioriElements: "Fiori Elements",
        objectPage: "Object Page",
        listReport: "List Report",
        analyticalListPage: "Analytical List Page",
        overviewPage: "Overview Page",
        worklist: "Worklist"
      },

      bewertung: {
        uiLabel: "UI:",
        bewerteteLogikOptionen: "Bewertete Logik-Erweiterungsoptionen",
        bewerteteDatenmodellOptionen: "Bewertete Datenmodell-Erweiterungsoptionen"
      },

      detailView: {
        mockErweiterungsoption1: "Erweiterungsoption 1",
        implizit: "Implizit",
        mockBeschreibung1: "Beschreibung 1",
        mockLokalvoraussetzung1: "Lokalvoraussetzung 1",
        mockUmsatzung1: "Umsetzung 1",
        explizitTooltip: "Diese Erweiterungsoption ist explizit. Es muss im Einzelfall geprüft werden, ob sie für die Fiori-Anwendung vorhanden ist.",
        detailsTitle: "Details",
        idLabel: "ID:",
        personaLabel: "Persona:",
        aufbauendeOptionen: "Aufbauende Erweiterungsoptionen"
      },

      fioriAppDetector: {
        appNameOrIdInputLabel: "App-Name oder App-ID eingeben:",
        appNameOrIdPlaceholder: "App-Name oder App-ID",
        gefundeneAppsTitle: "Gefundene Apps",
        fioriIdLabel: "fioriId:",
        appNameLabel: "AppName:"
      },

      homepage: {
        footerText: "MHP a Porsche Company ©2023 Created by Lukas Preidt"
      },

      loginPage: {
        loginTitle: "Login",
        loginSuccess: "Erfolgreich eingeloggt!",
        verifyEmailError: "Bitte bestätigen Sie Ihre E-Mail-Adresse, bevor Sie sich einloggen!",
        loginFailedError: "Login fehlgeschlagen!",
        mhpEmailError: "Sie können sich nur mit einer @mhp.com E-Mail-Adresse registrieren.",
        signUpSuccess: "Konto erfolgreich erstellt! Bitte bestätigen Sie Ihre E-Mail-Adresse.",
        signUpFailedError: "Kontoerstellung fehlgeschlagen!",
        passwordResetEmailPrompt: "Bitte geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen.",
        passwordResetSuccess: "E-Mail zum Zurücksetzen des Passworts gesendet! Bitte überprüfen Sie Ihren Posteingang.",
        passwordResetFailed: "Fehler beim Senden der E-Mail zum Zurücksetzen des Passworts. Bitte versuchen Sie es erneut.",
        appTitle: "Fiori Extensibility Compass",
        emailPlaceholder: "E-Mail",
        passwordPlaceholder: "Passwort",
        loginButton: "Einloggen",
        forgotPasswordLink: "Passwort vergessen?",
        signUpTitle: "Registrieren",
        confirmPasswordPrompt: "Bitte bestätigen Sie Ihr Passwort!",
        passwordsNoMatchError: "Die beiden eingegebenen Passwörter stimmen nicht überein!",
        confirmPasswordPlaceholder: "Passwort bestätigen",
        signUpButton: "Registrieren",
        freeAccountInfo: "Sie können ein kostenloses Konto mit einer @mhp.com E-Mail-Adresse erstellen. Wenn Sie keine haben, können Sie Ihre E-Mail-Adresse auf die Whitelist setzen lassen. Fordern Sie einfach ein Konto per Mail an ",
        requestAccountLink: "Konto anfordern",
        predefinedMailInfo: " senden Sie einfach eine vordefinierte Mail (keine Anpassungen oder Formalitäten erforderlich)."
      },

      overviewTable: {
        uiPrefix: "UI-",
        logicPrefix: "Logik-",
        backendPrefixWithSpace: "Backend "
      },

      startseite: {
        downloadButton: "Download"
      },

      helpPage: {
        behaviorCheck: {
          title: "Wie finde ich heraus, ob mein RAP OData-Service Behavior-Erweiterungen unterstützt",
          extensibleDescription: "In der Definition des Verhaltens (Behavior) des Interface-Views muss dies explizit durch das Schlüsselwort \"extensible\" im Kopf erlaubt sein. Zudem müssen alle verfügbaren Änderungsoptionen manuell innerhalb der geschweiften Klammern erlaubt sein.",
          rapExtensibleAltText: "RAP Extensible"
        },
        bewertungsmetriken: {
          title: "Wie wurden die Werte für Flexibilität und Aufwand berechnet?",
          flexStufenDef: "Für die Flexibilität wurden 6 Flexibilitätsstufen definiert:",
          flexStufe1: "Bestehendes anpassen oder personalisieren.",
          flexStufe2: "Einfache Inhalte hinzufügen, die noch nicht im Datenmodell sind.",
          flexStufe3: "Datenmodell- oder Logikerweiterungen geführt (Key-User).",
          flexStufe4: "An expliziten Erweiterungspunkten benutzerdefinierten Code hinzufügen.",
          flexStufe5: "Implizite Erweiterungen mit benutzerdefiniertem Code hinzufügen.",
          flexStufe6: "Aktiv in bestehenden Programmcode eingreifen.",
          eingeordnetDescription: "In diese Flexibilitätsstufen wurden alle Erweiterungsoptionen eingeordnet.",
          multipliziertDescription: "Nach dieser Einordnung wurden alle Erweiterungsoptionen * 10 multipliziert und subjektive Anpassungen im Intervall (-10;10) durchgeführt, um die Bewertungen zu diversifizieren.",
          umgewandeltDescription: "Am Ende wurden die korrigierten Werte in Prozent (%) zum höchsten Wert umgewandelt.",
          gesamtaufwandDescription: "Der Gesamtaufwand (GA) berechnet sich aus dem Mindestaufwand (MA) und einem Wert, der aus der Ausprägung in der Spalte \"Erweiterungsmöglichkeit\" (EM) berechnet wird.",
          gaFormula: "GA = MA + EM",
          mindestaufwandDescription: "Der <b>Mindestaufwand</b> wird berechnet aus der Summe an Schritten, die mindestens bei der Implementation einer Erweiterungsoption durchgeführt werden müssen, ohne die eigentliche Implementation. Also sozusagen die Opportunitätskosten einer Erweiterungsoption.",
          beispielControllerAnlegen: "Beispiel für die Erweiterungsoption \"Controller anlegen\":",
          adaptationProjectAnlegen: "Adaptation Project anlegen",
          controllerAnlegen: "Controller anlegen",
          logikImplementieren: "Logik implementieren (wird nicht einbezogen)",
          produktivsetzen: "Produktivsetzen",
          maResult: "Daraus ergibt sich ein MA von 3",
          wertErweiterungsmoeglichkeit: "Der <b>Wert aus der Erweiterungsmöglichkeit</b> ergibt sich aus dem höchsten Wert, den die Kategorie enthält, in der die Erweiterungsoption in der Spalte \"Erweiterungsmöglichkeiten in der Datengrundlage\" enthalten ist.",
          tabelleEmWerte: "Die folgende Tabelle zeigt die Werte, die für EM übernommen werden, für jede Erweiterungsoption. Logikerweiterungsoptionen werden pauschal mit dem Wert 3 übernommen.",
          auspraegung: "Ausprägung",
          wert: "Wert",
          emUbersicht1: "Ansicht verändern, Tabellenspalten und Filter anpassen.",
          emUbersicht2: "Visuelle Anpassung, Inhalte entfernen, verschieben.", // German: "Visuelle Anpassung, Inhalte entfernen, verschieben, ändern." - kept original for now, but "ändern" (change) is missing in EN.
          emUbersicht3: "Visuelle Erweiterung, Inhalte hinzufügen.",
          emLogik1: "Logikanpassung, Erweiterungen die in die bestehende Logik eingreifen.",
          emLogik2: "Logikerweiterungen, die nicht in die bestehende Logik eingreifen und neue Logik ergänzen.",
          emDatenmodell1: "Felder zum bestehenden Datenmodell hinzufügen (bereits in S/4HANA vorhanden).",
          emDatenmodell2: "Felder zum bestehenden Datenmodell hinzufügen (noch nicht in S/4HANA vorhanden).",
          emDatenmodell3: "Das bestehende Datenmodell grundlegend erweitern um neue Knoten oder Entitäten.",
          auchHierMultipliziert: "Auch hier wurden nach dieser Einordnung alle Erweiterungsoptionen * 10 multipliziert und subjektive Anpassungen im Intervall (-10;10) durchgeführt, um die Bewertungen zu diversifizieren."
        },
        businessContext: {
          title: "Wie wird geprüft, ob sich der Geschäftskontext einer Fiori-Anwendung im Erweiterungsregister befindet?",
          identifyOdataService: "Zuerst müssen Sie den OData-Service ihrer Fiori-Anwendung identifizieren. Den Namen des OData-Service erhalten Sie aus der ", // Corrected "identifzieren"
          fioriAppsLibrary: "Fiori Apps Reference Library",
          sqlConsolePrompt: "Das folgende Select Statement sollte in die SQL-Konsole in Eclipse eingegeben werden:",
          odataServiceNamePlaceholder: "'ODATA-SERVICE-NAME' sollte durch den Namen des OData-Service ihrer Fiori-Anwendung ausgetauscht werden.", // Added period
          sqlStatementCopied: "SQL-Statement kopiert!",
          copied: "Kopiert!",
          copyToClipboard: "In Zwischenablage kopieren",
          optionsTitle: "Nun gibt es zwei Optionen:",
          sqlNoResult: "`SQL-Abfrage liefert <b>kein Ergebnis</b>: Kein Geschäftskontext im Erweiterungsregister.", // Added period
          sqlResult: " SQL-Abfrage liefert Ergebnis: Geschäftskontext(e) im Erweiterungsregister. Name, Beschreibung und erweiterbare Entität sollte für potenzielle Erweiterungen notiert werden." // Corrected "Ergibnis", "erweiterbrare", added comma
        },
        floorplan: {
          title: "Wie identifiziere ich den Floorplan einer Fiori Elements-Anwendung?",
          manualAbgleich: "Ist der Name des Floorplans nicht aus dem Applikationstyp in der Fiori Apps Reference Library identifizierbar, muss er manuell abgeglichen werden. Eine Übersicht mit allen Fiori Elements Floorplans finden Sie ",
          dot: "."
        },
        odataAnalyse: {
          odataAnalyseAltText: "OData Analyse", // German: OData Analyse
          analyseProfileAltText: "Analyse Profile", // German: Analyse Profile
          analyseProfilA: "Analyse-Profil A",
          datenmodellCdsBasiert: "Datenmodell: CDS-basiert",
          abapFrameworkRap: "ABAP-Framework: RAP",
          rapOdataStartsWithUI: "RAP OData-Services beginnen mit \"UI_*\"",
          rapNamingConvention: "Durch die strenge Namenskonvention bei RAP OData Services ist es möglich, mit relativ geringem Aufwand, die Architektur des Services in Eclipse zu betrachten. Dafür muss nur der Name des OData Service in der ABAP-Objektsuche gesucht werden.",
          odataToCdsModell: "Wie Sie vom Namen des OData-Services zum CDS-Modell kommen:",
          analyseProfilB: "Analyse-Profil B",
          abapFrameworkBopf: "ABAP-Framework: BOPF",
          bopfNamingConvention: "Den Namen des OData Services erhält man hier auch aus dem Eintrag in der Fiori Apps Reference Library. Um OData Services zu analysieren, die mit „_CDS“ enden, kann die Endung „_CDS“ entfernt werden und man erhält den Namen des Consumption CDS-Views, aus dem der OData-Service veröffentlicht wurde. Das funktioniert, da OData-Services mit dieser Namenskonvention, über die Annotation „@OData.Publish:true“ aus dem CDS-View generiert wurden.",
          zwischenschrittCD: "Zwischenschritt CD",
          zwischenschrittCDDescription: "Falls der OData-Service nicht dem Analyse-Profil A oder B zugeordnet werden konnte, ist der Zwischenschritt CD durchzuführen. Im Zwischenschritt CD wird gezeigt, wie man mit dem Namen des OData-Service sein SEGW-Projekt finden kann und den OData-Service den Analyseprofilen C oder D zuordnen kann. Der OData-Service sollte im SAP Gateway-Client in der Transaktion „/IWFND/MAINT_SERVICE“ betrachtet werden. Von dort kann über den Button „Serviceimplementierung“ der Screen „Service anzeigen“ erreicht werden.",
          serviceClientAltText: "Service Client",
          serviceAnzeigenDescription: "Im Screen „Service anzeigen“ kann zur Modellanbieterklasse navigiert werden, die sich im Paket befindet, in dem auch das SEGW-Projekt angelegt ist.",
          serviceAnzeigenAltText: "Service Anzeigen", // German: Service anzeigen
          classBuilderDescription: "Befindet man sich im Ordner, kann man die SEGW-Projekte, die im Ordner angelegt sind. Es kann vorkommen, dass mehrere SEGW-Projekte im gleichen Ordner angelegt sind. In diesem Fall sollte überprüft werden, welcher Name die größte Übereinstimmung mit dem Namen des OData-Services hat.",
          classBuilderAltText: "Class Builder",
          segwProjectIdentified: "Ist das SEGW-Projekt identifiziert, kann das Projekt in der Transaktion geöffnet werden und der Service analysiert werden. Hier sollte geprüft werden, woher das Datenmodell des OData-Services stammt. Besteht das Datenmodell aus Datenquellenreferenzen, die sich im Ordner „Exposures via SADL“ definiert, entspricht der OData-Service Analyse-Profil C.",
          sadlAltText: "SADL",
          datenmodellDirektImSEGW: "Ist das Datenmodell direkt im SEGW-Projekt definiert, handelt es sich um Analyseprofil D.",
          analyseProfilC: "Analyse-Profil C",
          analyseProfilD: "Analyse-Profil D",
          datenmodellNichtCdsBasiert: "Datenmodell: Nicht CDS-basiert",
          abapFrameworkMinus: "ABAP-Framework: -",
          datenmodellImSEGWProjekt: "Das Datenmodell des OData-Services finden Sie im SEGW-Projekt."
        },
        odataContent: {
          title: "Wie wird bestimmt, welchen Inhalt ein OData-Service enthält?",
          multipleOdataDescription: "Wenn die Anwendung mehrere OData-Services verwendet, sollten die relevanten OData-Services für die Erweiterung identifiziert werden. Dies kann durch den Abgleich der Entitäten des OData-Services mit den Entitäten der Erweiterungsanforderung überprüft werden, insbesondere wenn die Erweiterungsanforderung eine Erweiterung des Datenmodells vorsieht.",
          browserUrlDescription: "Um festzustellen, welche Daten der OData-Service bereitstellt, ohne diesen technisch zu analysieren, kann die Browser-URL des OData-Services aufgerufen und im JSON-Format betrachtet werden. Die Browser-URL erhält man aus der Transaktion \"/IWFND/MAINT_SERVICE\" - Services aktivieren und verwalten, über den Button \"Browser abrufen\". Mit dieser URL können Anfragen gesendet werden, um die vom OData-Service ausgelesenen Daten zu erhalten.",
          beispielSDSRV: "Ein Beispiel, wie man über URL-Abfragen die Inhalte eines OData-Services auslesen kann, ist hier am OData-Service \"SD_F1708_CRT_WL_SRV\" demonstriert.",
          vorgehen: "Vorgehen:",
          ausgabeJsonFormat: "Ausgabe im JSON-Format:",
          inhaltEntitaetICustomer: "Inhalt der Entität I_Customer:"
        },
        sapFlex: {
          title: "Wie wird bestimmt, ob eine Fiori-Anwendung SAPUI5 Flexibility nutzt?",
          freestyleCheck: "Eine Anwendung vom Typ SAPUI5 Freestyle sollte daraufhin geprüft werden, ob sie die SAPUI5 Flexibility unterstützt. Hierfür gibt es drei verschiedene Wege:", // Corrected "EineAnwendung"
          pruefungInAnwendung: "Prüfung innerhalb der Anwendung.",
          pruefungInBas: "Überprüfung im Business Application Studio.", // Corrected "Applikation"
          manuellePruefung: "Manuelle Überprüfung.",
          inDerAnwendungTitle: "In der Anwendung",
          inDerAnwendungDescription: "Die schnellste Option ist, die Überprüfung direkt in der Anwendung vorzunehmen. Dafür benötigt man die Erweiterungsberechtigungen für Key-User. Wenn die Option \"UI-anpassen\" verfügbar ist, unterstützt die Anwendung SAPUI5 Flexibility. Ist die Option nicht verfügbar, unterstützt sie SAPUI5 Flexibility nicht.",
          imBasTitle: "Im Business Application Studio", // Corrected "Applikation"
          imBasDescription: "Ähnlich kann die Verfügbarkeit im Business Application Studio überprüft werden. Wenn sich für die Anwendung ein Adaptation Project anlegen lässt, unterstützt sie SAPUI5 Flexibility. Dafür muss das Projekt nicht vollständig angelegt werden, sondern es reicht, dass man die Anwendung selektiert und prüft, ob ein Adaptation Project angelegt werden könnte.", // Corrected "Applikation"
          manuellTitle: "Manuell",
          manuellDescription1: "Es kann manuell geprüft werden, ob die Anwendung SAPUI5 Flexibility unterstützt. Dafür müssen die hinreichenden Bedingungen für SAPUI5 Flexibility im Quellcode der Anwendung überprüft werden. Hierfür muss man die Business Server Pages (BSP) mit der SAPUI5 Applikation im System aufrufen. Den technischen Namen findet man in der Fiori Apps Reference Library.",
          manuellDescription2: "Im SAP GUI kann die Manifest.json-Datei der Anwendung über die Transaktion SE80 betrachtet werden. Falls die Anwendung keine Manifest.json-Datei enthält, ist sie nicht für SAPUI5 Flexibility verfügbar.", // Removed extra period
          manifestAnalyseOrder: "Bei der Analyse der Manifest.json-Datei ist es empfehlenswert, in folgender Reihenfolge vorzugehen:",
          manifestMinUi5Version: "MinUI5Version überprüfen: Diese sollte mindestens Version 1.28 entsprechen. Falls sie geringer ist, unterstützt die Anwendung nicht SAPUI5 Flexibility.",
          manifestDependencies: "Dependencies prüfen: Im Bereich Dependencies, falls die Library \"sap.ca.scfld.md\" in der Manifest.json-Datei definiert ist, ist die Anwendung nicht für SAPUI5 Flexibility verfügbar.",
          manifestFlexEnabled: "FlexEnabled-Annotation prüfen: Ist diese auf false gesetzt, ist die Anwendung nicht für SAPUI5 Flexibility verfügbar. Ist sie auf true gesetzt oder nicht gesetzt und wurden bei den Schritten 1 und 2 keine Fälle identifiziert, die darauf hindeuten, dass SAPUI5 Flexibility nicht verfügbar ist, so ist die Flexibilität für die Anwendung verfügbar."
        },
        selectionHelp: {
          title: "So sollten Sie bei der Selektion der Erweiterungsoptionen vorgehen:",
          logischeEmpfehlungen: "Es lassen sich jedoch logische Empfehlungen definieren, wie bei der Selektion vorzugehen ist:",
          punkt1DatenmodellZuerst: "Generell sollte erst das Datenmodell erweitert werden und danach UI und Logik implementiert werden, weil das Datenmodell die Grundlage bildet.",
          punkt2GeringsterAufwand: "Gestartet wird bei der Erweiterungsoption mit dem geringsten Aufwand.",
          punkt3Erfahrungsbasiert: "Wenn es erfahrungsbasiertes Wissen darüber gibt, dass sich die Anforderung mit einer Erweiterungsoption nicht umsetzen lässt, wird sie verworfen und die nächste Alternative mit dem nächsthöheren Aufwand selektiert.",
          punkt4GleicherAufwandFlexiblere: "Wenn zwei Erweiterungsoptionen den gleichen Aufwand haben, wird sich für die flexiblere entschieden.",
          punkt5ErfolglosVerwerfen: "Wenn ein Erweiterungsversuch erfolglos war, wird die Erweiterungsoption und alle mit einer niedrigeren Flexibilität verworfen."
        },
        syncViews: {
          title: "Wie wird bestimmt, ob eine Fiori-Anwendung synchrone Views verwendet?",
          basCheck: "Um festzustellen, ob die Anwendung synchrone Views verwendet, sollte dies im Business Application Studio geprüft werden. Hierfür muss ein Adaptation Project definiert und bis zum Schritt \"Select Application\" fortgefahren werden.", // Corrected "Applikation"
          adaptationProjectAltText: "Adaptation Project",
          syncViewsMessage: "Wenn die Anwendung synchrone Views enthält, wird dies gemeldet, und es wird die Möglichkeit geboten, zwischen einem Adaptation- oder Extension-Projekt zu wählen."
        }
      }
    },
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
