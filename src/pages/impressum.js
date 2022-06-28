import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import { FaRegDotCircle } from "react-icons/fa";
import Accordion from "../components/Accordion";

const Impressum = () => {
   
    return (
        <Layout>
            <Seo title="Impressum" />
            <PageHeader heading="Impressum" subheading="Impressum" />
            <div className="container">
                <div className="row">
                    
                    <div className="col-12 mt-2">
                        <div className="section-title">
                            <ParagraphSection>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <ul>
                                            <li><span>Kompitenz GmbH <br/> Geschäftsführer: Darko Turajlic <br/> Bachstraße 14 <br/> 69121 Heidelberg <br/> Umsatzsteuer-ID: DE309267186 </span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <ul>
                                            <li><span>Telefon: +49 6221 1877950 <br/> Telefax: +49 6221 1877950 <br/> E-Mail: info@kompitenz.de </span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <ul>
                                            <li><span>Eingetragen im Handelsregister. <br/> Registergericht: Mannheim <br/> Registernummer: HRB 726 207 </span></li>
                                        </ul>
                                    </div>
                                </div>
                            </ParagraphSection>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="section-title">
                            <span>01</span>
                            <h2>Hinweis gemäß Online-Streitbeilegungs-Verordnung</h2>
                            <ParagraphSection>
                                Nach geltendem Recht sind wir verpflichtet, Verbraucher auf die Existenz der Europäischen Online-Streitbeilegungs-Plattform hinzuweisen, die für die Beilegung von Streitigkeiten genutzt werden kann, ohne dass ein Gericht eingeschaltet werden muss. Für die Einrichtung der Plattform ist die Europäische Kommission zuständig. Die Europäische Online-Streitbeilegungs-Plattform ist hier zu finden:
                                <br/><a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage">https://ec.europa.eu</a>
                            </ParagraphSection>
                            <ParagraphSection>
                                Unsere E-Mail lautet:<br/>
                                <a href="mailto:info@kompitenz.de" target="_blank" rel="noopener">info@kompitenz.de</a>
                            </ParagraphSection>
                            <ParagraphSection>
                                Wir weisen aber darauf hin, dass wir nicht bereit sind, uns am Streitbeilegungsverfahren im Rahmen der Europäischen Online-Streitbeilegungs-Plattform zu beteiligen. Nutzen Sie zur Kontaktaufnahme bitte unsere obige E-Mail und Telefonnummer.
                            </ParagraphSection>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className="section-title">
                            <span>02</span>
                            <h2>Bildnachweis</h2>
                            <ParagraphSection>
                                <div className="row">
                                    <div className="col-12">
                                        <ul>
                                            <li><span>Die Bilder, die hier auf dieser Website Verwendung finden stammen von: <br/> Homepage: Digital animation of Global business hologram © Shutterstock <br/> Softwareentwicklung: Program code and computer © Shutterstock <br/> IT Sicherheit: Security CCTV camera in office building © Shutterstock
                                            <br/> Über Uns: Abstract world map digital texture pattern technology innovation concept background © Shutterstock <br/>Projektmanagement: Futuristic sci fi hi tech concept background © Shutterstock </span></li>
                                        </ul>
                                    </div>
                                </div>
                            </ParagraphSection>
                        </div>
                    </div>
                </div>
            </div>
        
        </Layout>
    )
}
  
export default Impressum

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
        justify-content: center;
        margin: 1rem 1rem 0;
        height: 100%;

        li {
            align-items: center;
            display: flex;
            height: 100%;

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
                height: 100%;
                align-items: center;
                display: flex;
            }
        }
    }
`
