import React, { useState, useRef } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import { FaRegDotCircle } from "react-icons/fa";
import Accordion from "../components/Accordion";
import { Link } from "gatsby";

const PrivacyPolicy = () => {
    const [currentAccordion, setCurrentAccordion] = useState(0);
    const [bodyHeight, setBodyHeight] = useState(0);
  
    const item0 = useRef(null);
    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);
    const item5 = useRef(null);
    const item6 = useRef(null);
    const item7 = useRef(null);
    const item8 = useRef(null);
    const item9 = useRef(null);
    const item10 = useRef(null);
    const item11 = useRef(null);
    const item12 = useRef(null);
    const item13 = useRef(null);
    const item14 = useRef(null);
    const item15 = useRef(null);
    const item16 = useRef(null);
    const item17 = useRef(null);
  
    const refs = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17];
    
    const sampleAccordionData = [
        {
        title: "SSL-VERSCHLÜSSELUNG",
        content:
            "Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS."
        },
        {
        title: "SERVERDATEN",
        content:
            <div>
                <ParagraphSection>Aus technischen Gründen, insbesondere zur Gewährleistung eines sicheren und stabilen Internetauftritts, werden Daten durch Ihren Internet-Browser an uns bzw. an unseren Webspace-Provider übermittelt. Mit diesen sog. Server-Logfiles werden u.a. Typ und Version Ihres Internetbrowsers, das Betriebssystem, die Website, von der aus Sie auf unseren Internetauftritt gewechselt haben (Referrer URL), die Website(s) unseres Internetauftritts, die Sie besuchen, Datum und Uhrzeit des jeweiligen Zugriffs sowie die IP-Adresse des Internetanschlusses, von dem aus die Nutzung unseres Internetauftritts erfolgt, erhoben.</ParagraphSection>
                <ParagraphSection>Diese so erhobenen Daten werden vorrübergehend gespeichert, dies jedoch nicht gemeinsam mit anderen Daten von Ihnen.</ParagraphSection>
                <ParagraphSection>Diese Speicherung erfolgt auf der Rechtsgrundlage von Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Verbesserung, Stabilität, Funktionalität und Sicherheit unseres Internetauftritts.</ParagraphSection>
                <ParagraphSection>Die Daten werden spätestens nach sieben Tage wieder gelöscht, soweit keine weitere Aufbewahrung zu Beweiszwecken erforderlich ist. Andernfalls sind die Daten bis zur endgültigen Klärung eines Vorfalls ganz oder teilweise von der Löschung ausgenommen.</ParagraphSection>
            </div>
        },
        {
        title: "COOKIES",
        content:
          <PrivacyList>
            <li>
                <h2>a) Sitzungs-Cookies/Session-Cookies</h2>
                <ParagraphSection>Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien oder andere Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt und gespeichert werden. Durch diese Cookies werden im individuellen Umfang bestimmte Informationen von Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet.</ParagraphSection>
                <ParagraphSection>Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver und sicherer, da die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen oder das Angebot einer Warenkorbfunktion ermöglicht.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese Cookies Daten zur Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden.</ParagraphSection>
                <ParagraphSection>Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser berechtigtes Interesse in der Verbesserung der Funktionalität unseres Internetauftritts. Rechtsgrundlage ist in dann Art. 6 Abs. 1 lit. f) DSGVO.</ParagraphSection>
                <ParagraphSection>Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.</ParagraphSection>
            </li>
            <li>
                <h2>b) Drittanbieter-Cookies</h2>
                <ParagraphSection>Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, mit denen wir zum Zwecke der Werbung, der Analyse oder der Funktionalitäten unseres Internetauftritts zusammenarbeiten, verwendet.</ParagraphSection>
                <ParagraphSection>Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen der Verarbeitung solcher Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden Informationen.</ParagraphSection>
            </li>
            <li>
                <h2>c) Beseitigungsmöglichkeit</h2>
                <ParagraphSection>Sie können die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers verhindern oder einschränken. Ebenfalls können Sie bereits gespeicherte Cookies jederzeit löschen. Die hierfür erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret genutzten Internet-Browser ab. Bei Fragen benutzen Sie daher bitte die Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die Verarbeitung allerdings nicht über die Einstellungen des Browsers unterbunden werden. Stattdessen müssen Sie insoweit die Einstellung Ihres Flash-Players ändern. Auch die hierfür erforderlichen Schritte und Maßnahmen hängen von Ihrem konkret genutzten Flash-Player ab. Bei Fragen benutzen Sie daher bitte ebenso die Hilfefunktion oder Dokumentation Ihres Flash-Players oder wenden sich an den Hersteller bzw. Benutzer-Support.</ParagraphSection>
                <ParagraphSection>Sollten Sie die Installation der Cookies verhindern oder einschränken, kann dies allerdings dazu führen, dass nicht sämtliche Funktionen unseres Internetauftritts vollumfänglich nutzbar sind.</ParagraphSection>
            </li>
          </PrivacyList>
        },
        {
        title: "VERTRAGSABWICKLUNG",
        content:
            <div>
                <ParagraphSection>Die von Ihnen zur Inanspruchnahme unseres Waren- und/oder Dienstleistungsangebots übermittelten Daten werden von uns zum Zwecke der Vertragsabwicklung verarbeitet und sind insoweit erforderlich. Vertragsschluss und Vertragsabwicklung sind ohne Bereitstellung Ihrer Daten nicht möglich.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</ParagraphSection>
                <ParagraphSection>Wir löschen die Daten mit vollständiger Vertragsabwicklung, müssen dabei aber die steuer- und handelsrechtlichen Aufbewahrungsfristen beachten.</ParagraphSection>
                <ParagraphSection>Im Rahmen der Vertragsabwicklung geben wir Ihre Daten an das mit der Warenlieferung beauftragte Transportunternehmen oder an den Finanzdienstleister weiter, soweit die Weitergabe zur Warenauslieferung oder zu Bezahlzwecken erforderlich ist.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage für die Weitergabe der Daten ist dann Art. 6 Abs. 1 lit. b) DSGVO.</ParagraphSection>
            </div>
        },
        {
        title: "KUNDENKONTO / REGISTRIERUNGSFUNKTION",
        content:
            <div>
                <ParagraphSection>Falls Sie über unseren Internetauftritt ein Kundenkonto bei uns anlegen, werden wir die von Ihnen bei der Registrierung eingegebenen Daten (also bspw. Ihren Namen, Ihre Anschrift oder Ihre E-Mail-Adresse) ausschließlich für vorvertragliche Leistungen, für die Vertragserfüllung oder zum Zwecke der Kundenpflege (Anfragen zu Störungen oder Änderungsanfragen) erheben und speichern. Gleichzeitig speichern wir dann die IP-Adresse und das Datum Ihrer Registrierung nebst Uhrzeit. Eine Weitergabe dieser Daten an Dritte erfolgt natürlich nicht.</ParagraphSection>
                <ParagraphSection>Im Rahmen des weiteren Anmeldevorgangs wird Ihre Einwilligung in diese Verarbeitung eingeholt und auf diese Datenschutzerklärung verwiesen. Die dabei von uns erhobenen Daten werden ausschließlich für die Zurverfügungstellung des Kundenkontos verwendet.</ParagraphSection>
                <ParagraphSection>Soweit Sie in diese Verarbeitung einwilligen, ist Art. 6 Abs. 1 lit. a) DSGVO Rechtsgrundlage für die Verarbeitung.</ParagraphSection>
                <ParagraphSection>Sofern die Eröffnung des Kundenkontos zusätzlich auch vorvertraglichen Maßnahmen oder der Vertragserfüllung dient, so ist Rechtsgrundlage für diese Verarbeitung auch noch Art. 6 Abs. 1 lit. b) DSGVO.</ParagraphSection>
                <ParagraphSection>Die uns erteilte Einwilligung in die Eröffnung und den Unterhalt des Kundenkontos können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen.</ParagraphSection>
                <ParagraphSection>Die insoweit erhobenen Daten werden gelöscht, sobald die Verarbeitung nicht mehr erforderlich ist. Hierbei müssen wir aber steuer- und handelsrechtliche Aufbewahrungsfristen beachten.</ParagraphSection>
            </div>
        },
        {
        title: "NEWSLETTER",
        content: 
            <div>
                <ParagraphSection>Falls Sie sich für unseren kostenlosen Newsletter anmelden, werden die von Ihnen hierzu abgefragten Daten, also Ihre E-Mail-Adresse sowie – optional – Ihr Name und Ihre Anschrift, an uns übermittelt. Gleichzeitig speichern wir die IP-Adresse des Internetanschlusses von dem aus Sie auf unseren Internetauftritt zugreifen sowie Datum und Uhrzeit Ihrer Anmeldung. Im Rahmen des weiteren Anmeldevorgangs werden wir Ihre Einwilligung in die Übersendung des Newsletters einholen, den Inhalt konkret beschreiben und auf diese Datenschutzerklärung verwiesen. Die dabei erhobenen Daten verwenden wir ausschließlich für den Newsletter-Versand – sie werden deshalb insbesondere auch nicht an Dritte weitergegeben.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage hierbei ist Art. 6 Abs. 1 lit. a) DSGVO.</ParagraphSection>
                <ParagraphSection>Die Einwilligung in den Newsletter-Versand können Sie gemäß Art. 7 Abs. 3 DSGVO jederzeit mit Wirkung für die Zukunft widerrufen. Hierzu müssen Sie uns lediglich über Ihren Widerruf in Kenntnis setzen oder den in jedem Newsletter enthaltenen Abmeldelink betätigen.</ParagraphSection>
            </div>
        },
        {
        title: "KONTAKTANFRAGEN / KONTAKTMÖGLICHKEIT",
        content: 
            <div>
                <ParagraphSection>Sofern Sie per Kontaktformular oder E-Mail mit uns in Kontakt treten, werden die dabei von Ihnen angegebenen Daten zur Bearbeitung Ihrer Anfrage genutzt. Die Angabe der Daten ist zur Bearbeitung und Beantwortung Ihre Anfrage erforderlich – ohne deren Bereitstellung können wir Ihre Anfrage nicht oder allenfalls eingeschränkt beantworten.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. b) DSGVO.</ParagraphSection>
                <ParagraphSection>Ihre Daten werden gelöscht, sofern Ihre Anfrage abschließend beantwortet worden ist und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen, wie bspw. bei einer sich etwaig anschließenden Vertragsabwicklung.</ParagraphSection>
            </div>
        },
        {
        title: "GOOGLE ANALYTICS",
        content: 
            <div>
                <ParagraphSection>In unserem Internetauftritt setzen wir Google Analytics ein. Hierbei handelt es sich um einen Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend nur „Google“ genannt.</ParagraphSection>
                <ParagraphSection>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a></ParagraphSection>
                <ParagraphSection>garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</ParagraphSection>
                <ParagraphSection>Der Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens unseres Internetauftritts. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Analyse, Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.</ParagraphSection>
                <ParagraphSection>Nutzungs- und nutzerbezogene Informationen, wie bspw. IP-Adresse, Ort, Zeit oder Häufigkeit des Besuchs unseres Internetauftritts, werden dabei an einen Server von Google in den USA übertragen und dort gespeichert. Allerdings nutzen wir Google Analytics mit der sog. Anonymisierungsfunktion. Durch diese Funktion kürzt Google die IP-Adresse schon innerhalb der EU bzw. des EWR.</ParagraphSection>
                <ParagraphSection>Die so erhobenen Daten werden wiederum von Google genutzt, um uns eine Auswertung über den Besuch unseres Internetauftritts sowie über die dortigen Nutzungsaktivitäten zur Verfügung zu stellen. Auch können diese Daten genutzt werden, um weitere Dienstleistungen zu erbringen, die mit der Nutzung unseres Internetauftritts und der Nutzung des Internets zusammenhängen.</ParagraphSection>
                <ParagraphSection>Google gibt an, Ihre IP-Adresse nicht mit anderen Daten zu verbinden. Zudem hält Google unter</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://policies.google.com/technologies/partner-sites?hl=de">https://policies.google.com/technologies/partner-sites?hl=de</a></ParagraphSection>
                <ParagraphSection>weitere datenschutzrechtliche Informationen für Sie bereit, so bspw. auch zu den Möglichkeiten, die Datennutzung zu unterbinden.</ParagraphSection>
                <ParagraphSection>Zudem bietet Google unter</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://tools.google.com/dlpage/gaoptout?hl=de">https://tools.google.com/dlpage/gaoptout?hl=de</a></ParagraphSection>
                <ParagraphSection>ein sog. Deaktivierungs-Add-on nebst weiteren Informationen hierzu an. Dieses Add-on lässt sich mit den gängigen Internet Browsern installieren und bietet Ihnen weitergehende Kontrollmöglichkeit über die Daten, die Google bei Aufruf unseres Internetauftritts erfasst. Dabei teilt das Add-on dem JavaScript (ga.js) von Google Analytics mit, dass Informationen zum Besuch unseres Internetauftritts nicht an Google Analytics übermittelt werden sollen. Dies verhindert aber nicht, dass Informationen an uns oder an andere Webanalysedienste übermittelt werden. Ob und welche weiteren Webanalysedienste von uns eingesetzt werden, erfahren Sie natürlich ebenfalls in dieser Datenschutzerklärung.</ParagraphSection>
            </div>
        },
        {
        title: "GOOGLE-MAPS",
        content: 
            <div>
                <ParagraphSection>In unserem Internetauftritt setzen wir Google Maps zur Darstellung unseres Standorts sowie zur Erstellung einer Anfahrtsbeschreibung ein. Es handelt sich hierbei um einen Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend nur „Google“ genannt.</ParagraphSection>
                <ParagraphSection>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a></ParagraphSection>
                <ParagraphSection>garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</ParagraphSection>
                <ParagraphSection>Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung zu dem Google-Server in den USA aufgebaut.</ParagraphSection>
                <ParagraphSection>Sofern Sie die in unseren Internetauftritt eingebundene Komponente Google Maps aufrufen, speichert Google über Ihren Internet-Browser ein Cookie auf Ihrem Endgerät. Um unseren Standort anzuzeigen und eine Anfahrtsbeschreibung zu erstellen, werden Ihre Nutzereinstellungen und -daten verarbeitet. Hierbei können wir nicht ausschließen, dass Google Server in den USA einsetzt.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung der Funktionalität unseres Internetauftritts.</ParagraphSection>
                <ParagraphSection>Durch die so hergestellte Verbindung zu Google kann Google ermitteln, von welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die Anfahrtsbeschreibung zu übermitteln ist.</ParagraphSection>
                <ParagraphSection>Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie die Möglichkeit, die Installation der Cookies durch die entsprechenden Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten hierzu finden Sie vorstehend unter dem Punkt „Cookies“.</ParagraphSection>
                <ParagraphSection>Zudem erfolgt die Nutzung von Google Maps sowie der über Google Maps erlangten Informationen nach den Google-Nutzungsbedingungen und den Geschäftsbedingungen für Google Maps</ParagraphSection>
                <ParagraphSection>Überdies bietet Google unter</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://adssettings.google.com/authenticated%20https://policies.google.com/privacy">https://adssettings.google.com/authenticated%20https://policies.google.com/privacy</a></ParagraphSection>
                <ParagraphSection>weitergehende Informationen an.</ParagraphSection>
            </div>
        },
        {
        title: "GOOGLE RECAPTCHA",
        content: 
            <div>
                <ParagraphSection>In unserem Internetauftritt setzen wir Google reCAPTCHA zur Überprüfung und Vermeidung von Interaktionen auf unserer Internetseite durch automatisierte Zugriffe, bspw. durch sog. Bots, ein. Es handelt sich hierbei um einen Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend nur „Google“ genannt.</ParagraphSection>
                <ParagraphSection>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a></ParagraphSection>
                <ParagraphSection>garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</ParagraphSection>
                <ParagraphSection>Durch diesen Dienst kann Google ermitteln, von welcher Webseite eine Anfrage gesendet wird sowie von welcher IP-Adresse aus Sie die sog. reCAPTCHA-Eingabebox verwenden. Neben Ihrer IP-Adresse werden womöglich noch weitere Informationen durch Google erfasst, die für das Angebot und die Gewährleistung dieses Dienstes notwendig sind.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Sicherheit unseres Internetauftritts sowie in der Abwehr unerwünschter, automatisierter Zugriffe in Form von Spam o.ä..</ParagraphSection>
                <ParagraphSection>Google bietet unter</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></ParagraphSection>
                <ParagraphSection>weitergehende Informationen zu dem allgemeinen Umgang mit Ihren Nutzerdaten an.</ParagraphSection>
            </div>
        },
        {
        title: "GOOGLE FONTS",
        content: 
            <div>
                <ParagraphSection>In unserem Internetauftritt setzen wir Google Fonts zur Darstellung externer Schriftarten ein. Es handelt sich hierbei um einen Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend nur „Google“ genannt.</ParagraphSection>
                <ParagraphSection>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a></ParagraphSection>
                <ParagraphSection>garantiert Google, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</ParagraphSection>
                <ParagraphSection>Um die Darstellung bestimmter Schriften in unserem Internetauftritt zu ermöglichen, wird bei Aufruf unseres Internetauftritts eine Verbindung zu dem Google-Server in den USA aufgebaut.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.</ParagraphSection>
                <ParagraphSection>Durch die bei Aufruf unseres Internetauftritts hergestellte Verbindung zu Google kann Google ermitteln, von welcher Website Ihre Anfrage gesendet worden ist und an welche IP-Adresse die Darstellung der Schrift zu übermitteln ist.</ParagraphSection>
                <ParagraphSection>Google bietet unter</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></ParagraphSection>
                <ParagraphSection>weitere Informationen an und zwar insbesondere zu den Möglichkeiten der Unterbindung der Datennutzung.</ParagraphSection>
            </div>
        },
        {
        title: "XING & LINKEDIN-SOCIAL-PLUG-IN",
        content: 
            <div>
                <ParagraphSection>Auf unseren Webseiten werden Social Plugins der unten aufgeführten Anbieter eingesetzt. Die Plugins können Sie daran erkennen, dass sie mit dem entsprechenden Logo gekennzeichnet sind.</ParagraphSection>
                <ParagraphSection>Über diese Plugins werden unter Umständen Informationen, zu denen auch personenbezogene Daten gehören können, an den Dienstebetreiber gesendet und ggf. von diesem genutzt. Wir verhindern die unbewusste und ungewollte Erfassung und Übertragung von Daten an den Diensteanbieter durch eine 2-Klick-Lösung. Um ein gewünschtes Social Plugin zu aktivieren, muss dieses erst durch Klick auf den entsprechenden Schalter aktiviert werden. Erst durch diese Aktivierung des Plugins wird auch die Erfassung von Informationen und deren Übertragung an den Diensteanbieter ausgelöst. Wir erfassen selbst keine personenbezogenen Daten mittels der Social Plugins oder über deren Nutzung.</ParagraphSection>
                <ParagraphSection>Wir haben keinen Einfluss darauf, welche Daten ein aktiviertes Plugin erfasst und wie diese durch den Anbieter verwendet werden. Derzeit muss davon ausgegangen werden, dass eine direkte Verbindung zu den Diensten des Anbieters ausgebaut wird sowie mindestens die IP-Adresse und gerätebezogene Informationen erfasst und genutzt werden. Ebenfalls besteht die Möglichkeit, dass die Diensteanbieter versuchen, Cookies auf dem verwendeten Rechner zu speichern. Welche konkreten Daten hierbei erfasst und wie diese genutzt werden, entnehmen Sie bitte den Datenschutzhinweisen des jeweiligen Diensteanbieters.</ParagraphSection>
                <ParagraphSection>Wir haben auf unserer Website die Social-Media-Buttons folgender Unternehmen eingebunden:</ParagraphSection>
                <ParagraphSection>XING AG (Gänsemarkt 43 – 20354 Hamburg – Deutschland)</ParagraphSection>
                <ParagraphSection>LinkedIn Corporation (2029 Stierlin Court – Mountain View – CA 94043 – USA)</ParagraphSection>
            </div>
        },
        {
        title: "FACEBOOK-SOCIAL-PLUG-IN",
        content: 
            <div>
                <ParagraphSection>In unserem Internetauftritt setzen wir das Plug-in des Social-Networks Facebook ein. Bei Facebook handelt es sich um einen Internetservice der facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA. In der EU wird dieser Service wiederum von der Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland, betrieben, nachfolgend beide nur „Facebook“ genannt.</ParagraphSection>
                <ParagraphSection>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a></ParagraphSection>
                <ParagraphSection>garantiert Facebook, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</ParagraphSection>
                <ParagraphSection>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Qualitätsverbesserung unseres Internetauftritts.</ParagraphSection>
                <ParagraphSection>Weitergehende Informationen über die möglichen Plug-ins sowie über deren jeweilige Funktionen hält Facebook unter</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://developers.facebook.com/docs/plugins/">https://developers.facebook.com/docs/plugins/</a></ParagraphSection>
                <ParagraphSection>für Sie bereit.</ParagraphSection>
                <ParagraphSection>Sofern das Plug-in auf einer der von Ihnen besuchten Seiten unseres Internetauftritts hinterlegt ist, lädt Ihr Internet-Browser eine Darstellung des Plug-ins von den Servern von Facebook in den USA herunter. Aus technischen Gründen ist es dabei notwendig, dass Facebook Ihre IP-Adresse verarbeitet. Daneben werden aber auch Datum und Uhrzeit des Besuchs unserer Internetseiten erfasst.</ParagraphSection>
                <ParagraphSection>Sollten Sie bei Facebook eingeloggt sein, während Sie eine unserer mit dem Plug-in versehenen Internetseite besuchen, werden die durch das Plug-in gesammelten Informationen Ihres konkreten Besuchs von Facebook erkannt. Die so gesammelten Informationen weist Facebook womöglich Ihrem dortigen persönlichen Nutzerkonto zu. Sofern Sie also bspw. den sog. „Gefällt mir“-Button von Facebook benutzen, werden diese Informationen in Ihrem Facebook-Nutzerkonto gespeichert und ggf. über die Plattform von Facebook veröffentlicht. Wenn Sie das verhindern möchten, müssen Sie sich entweder vor dem Besuch unseres Internetauftritts bei Facebook ausloggen oder durch den Einsatz eines Add-ons für Ihren Internetbrowser verhindern, dass das Laden des Facebook-Plug-in blockiert wird.</ParagraphSection>
                <ParagraphSection>Weitergehende Informationen über die Erhebung und Nutzung von Daten sowie Ihre diesbezüglichen Rechte und Schutzmöglichkeiten hält Facebook in den unter abrufbaren Datenschutzhinweisen bereit.</ParagraphSection>
            </div>
        },
        {
        title: "YOUTUBE",
        content: 
            <div>
                <ParagraphSection>In unserem Internetauftritt setzen wir YouTube ein. Hierbei handelt es sich um ein Videoportal der YouTube LLC., 901 Cherry Ave., 94066 San Bruno, CA, USA, nachfolgend nur „YouTube“ genannt.</ParagraphSection>
                <ParagraphSection>YouTube ist ein Tochterunternehmen der Google LLC., 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, nachfolgend nur „Google“ genannt.</ParagraphSection>
                <ParagraphSection>Durch die Zertifizierung nach dem EU-US-Datenschutzschild („EU-US Privacy Shield“)</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active</a></ParagraphSection>
                <ParagraphSection>garantiert Google und damit auch das Tochterunternehmen YouTube, dass die Datenschutzvorgaben der EU auch bei der Verarbeitung von Daten in den USA eingehalten werden.</ParagraphSection>
                <ParagraphSection>Wir nutzen YouTube im Zusammenhang mit der Funktion „Erweiterter Datenschutzmodus“, um Ihnen Videos anzeigen zu können. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Qualitätsverbesserung unseres Internetauftritts. Die Funktion „Erweiterter Datenschutzmodus“ bewirkt laut Angaben von YouTube, dass die nachfolgend noch näher bezeichneten Daten nur dann an den Server von YouTube übermittelt werden, wenn Sie ein Video auch tatsächlich starten.</ParagraphSection>
                <ParagraphSection>Ohne diesen „Erweiterten Datenschutz“ wird eine Verbindung zum Server von YouTube in den USA hergestellt, sobald Sie eine unserer Internetseiten, auf der ein YouTube-Video eingebettet ist, aufrufen.</ParagraphSection>
                <ParagraphSection>Diese Verbindung ist erforderlich, um das jeweilige Video auf unserer Internetseite über Ihren Internet-Browser darstellen zu können. Im Zuge dessen wird YouTube zumindest Ihre IP-Adresse, das Datum nebst Uhrzeit sowie die von Ihnen besuchte Internetseite erfassen und verarbeiten. Zudem wird eine Verbindung zu dem Werbenetzwerk „DoubleClick“ von Google hergestellt.</ParagraphSection>
                <ParagraphSection>Sollten Sie gleichzeitig bei YouTube eingeloggt sein, weist YouTube die Verbindungsinformationen Ihrem YouTube-Konto zu. Wenn Sie das verhindern möchten, müssen Sie sich entweder vor dem Besuch unseres Internetauftritts bei YouTube ausloggen oder die entsprechenden Einstellungen in Ihrem YouTube-Benutzerkonto vornehmen.</ParagraphSection>
                <ParagraphSection>Zum Zwecke der Funktionalität sowie zur Analyse des Nutzungsverhaltens speichert YouTube dauerhaft Cookies über Ihren Internet-Browser auf Ihrem Endgerät. Falls Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie die Möglichkeit, die Speicherung der Cookies durch eine Einstellung in Ihrem Internet-Browsers zu verhindern. Nähere Informationen hierzu finden Sie vorstehend unter „Cookies“.</ParagraphSection>
                <ParagraphSection>Weitergehende Informationen über die Erhebung und Nutzung von Daten sowie Ihre diesbezüglichen Rechte und Schutzmöglichkeiten hält Google in den unter</ParagraphSection>
                <ParagraphSection><a target="_blank" href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></ParagraphSection>
                <ParagraphSection>abrufbaren Datenschutzhinweisen bereit.</ParagraphSection>
            </div>
        },
        {
        title: "ÄNDERUNG UNSERER DATENSCHUTZBESTIMMUNGEN",
        content: 
            <div>
                <ParagraphSection>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</ParagraphSection>
            </div>
        },
        {
        title: "FRAGEN AN DEN DATENSCHUTZBEAUFTRAGTEN",
        content: 
            <div>
                <ParagraphSection>
                    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an unseren Datenschutzbeauftragten

                    <ul>
                        <li><span>Kompitenz GmbH <br/> Herr Darko Turajlic <br/> Bachstraße 14 <br/> 69121 Heidelberg </span></li>
                    </ul>
                </ParagraphSection>
            </div>
        },
    ];

    return (
        <Layout>
            <Seo title="Datenschutz" />
            <PageHeader heading="Datenschutz" subheading="Datenschutzerklärung" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ParagraphSection>
                            Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.
                        </ParagraphSection>
                        <ParagraphSection>
                            Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend nur „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
                        </ParagraphSection>
                        <ParagraphSection>
                            Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck, Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung verarbeiten.
                        </ParagraphSection>
                        <ParagraphSection>
                            Unsere Datenschutzerklärung ist wie folgt gegliedert:

                            <ul>
                                <li><FaRegDotCircle /> <span>Informationen über uns als Verantwortliche</span></li>
                                <li><FaRegDotCircle /> <span>Rechte der Nutzer und Betroffenen</span></li>
                                <li> <FaRegDotCircle /> <span>Informationen zur Datenverarbeitung</span></li>
                            </ul>
                        </ParagraphSection>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="section-title">
                            <span>01</span>
                            <h2>Informationen über uns als Verantwortliche</h2>
                            <ParagraphSection>
                                Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:

                                <ul>
                                    <li><span>Kompitenz GmbH <br/> Herr Darko Turajlic <br/> Bachstraße 14 <br/> 69121 Heidelberg </span></li>
                                </ul>
                            </ParagraphSection>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="section-title">
                            <span>02</span>
                            <h2>Rechte der Nutzer und Betroffenen</h2>
                            <ParagraphSection>
                                Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen das Recht
                                auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch Art. 15 DSGVO);
                            </ParagraphSection>
                            <ParagraphSection>
                                auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16 DSGVO);
                            </ParagraphSection>
                            <ParagraphSection>
                                auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ, soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der Verarbeitung nach Maßgabe von Art. 18 DSGVO;
                            </ParagraphSection>
                            <ParagraphSection>
                                auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
                            </ParagraphSection>
                            <ParagraphSection>
                                auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen verarbeitet werden (vgl. auch Art. 77 DSGVO).
                            </ParagraphSection>
                            <ParagraphSection>
                                Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über diese Empfänger.
                            </ParagraphSection>
                            <ParagraphSection>
                                Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
                            </ParagraphSection>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="section-title">
                            <span>03</span>
                            <h2>Informationen zur Datenverarbeitung</h2>
                            <ParagraphSection>
                                Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht werden.
                            </ParagraphSection>

                            <Accordion
                                accordionContent={sampleAccordionData}
                                refs={refs}
                                currentAccordion={currentAccordion}
                                setCurrentAccordion={setCurrentAccordion}
                                setBodyHeight={setBodyHeight}
                                bodyHeight={bodyHeight}
                                />
                        </div>
                    </div>
                </div>
            </div>
        
        </Layout>
    )
}
  
export default PrivacyPolicy

const PrivacyList = styled.ul`
    > li {
        margin-bottom: 2rem;

        h2 {
            font-size: 16px;
            color: #7a4a75;
        }
    }
`

const ParagraphSection = styled.div`
    font-size: 1rem;
    color: #999999;
    line-height: 1.6;
    margin: 1rem 0;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 1rem 1rem 0;

        li {
            align-items: center;
            display: flex;

            svg {
                fill: #945b8e;
            }

            span {
                font-size: 1rem;
                color: #3f3f3f;
                line-height: 1.6;
                font-weight: 400;
                margin-left: .75rem;
                border-left: 4px solid #7a4a75;
                margin-bottom: 0;
                padding: 1rem;
            }
        }
    }
`
