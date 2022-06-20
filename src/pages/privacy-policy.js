import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import { FaRegDotCircle } from "react-icons/fa";

const PrivacyPolicy = () => (
  <Layout>
    <Seo title="Impressum and Datenschutz" />
    <PageHeader heading="Impressum and Datenschutz" subheading="Datenschutzerklärung" />
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
                </div>
            </div>
        </div>
    </div>
   
  </Layout>
)

export default PrivacyPolicy

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
                color: #999999;
                line-height: 1.6;
                font-weight: 400;
                margin-left: .75rem;
            }
        }
    }
`
