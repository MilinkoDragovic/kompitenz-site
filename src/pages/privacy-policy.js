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
                    <h6>
                        Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist :
                    </h6>
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
                margin-left: .75rem;
            }
        }
    }
`
