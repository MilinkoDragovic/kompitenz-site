import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageHeader from "../components/PageHeader";
import styled from 'styled-components';
import Video from '../assets/videos/kompitenz-video.mp4'
import ImageBg from '../assets/images/slider/hero-1.jpg'
import SideIcon from '../assets/images/side-widget-icon.png'
import DataProtection from '../assets/images/beratung/data-protection.jpg';
import SoftwareSolutions from '../assets/images/beratung/software-solutions.jpg';
import StartUp from '../assets/images/beratung/start-up.jpg';
import Digitalization from '../assets/images/beratung/digitalization.jpg';

const BeratungPage = () => (
  <Layout>
    <Seo title="Beratung" />
    <PageHeader heading="Beratung" subheading="Zielführende und praxisbezogene beratung" />

        <SideImageContentContainer>
            <SideImageContentSide>
                <SideImageContentSideInner>
                    <div className="section-title">
                        <span>01</span>
                        <h2>Digitalisierung</h2>
                    </div>
                    <p>Kompitenz ist in Zeiten der Digitalen Transformation ein kompetenter und erfahrener Partner für kleine und mittelständische Unternehmen (KMU). Dabei gibt es für KMU zwei wesentliche Aspekte, von denen Sie profitieren können. Erster Aspekt ist die Vereinfachung und Optimierung (auch Automatisierung) von Arbeitsabläufen mit dem Ziel, effizienter und schneller agieren zu können. Dies gilt sowohl für interne Geschäftsprozesse als auch gegenüber Ihren Kunden, Partnern, Lieferanten etc.</p>
                    <p>Der zweite Aspekt besteht in der Nutzung der zahlreichen Instrumente des Internets mit dem Ziel, Umsätze und Gewinne zu maximieren. Durch die Digitalisierung können (z.B. durch Social Media Marketing) sowohl klassische Geschäftsmodelle unterstützt als auch neue digitale Geschäftsmodelle (z.B. Online Services) aufgebaut werden.</p>
                </SideImageContentSideInner>
            </SideImageContentSide>
            <SideImageContentSide style={{backgroundImage: `url(${Digitalization})`}}>

                <SideImageContentLeftSideVideo>
                    <LeftSideVideo src={Video} type="video/mp4" autoPlay muted loop></LeftSideVideo>
                </SideImageContentLeftSideVideo>

            </SideImageContentSide>
        </SideImageContentContainer>

        <SideImageContentContainer>
            <SideImageContentSide style={{backgroundImage: `url(${StartUp})`}}>

                <SideImageContentLeftSideVideo>
                    <LeftSideVideo src={Video} type="video/mp4" autoPlay muted loop></LeftSideVideo>
                </SideImageContentLeftSideVideo>

            </SideImageContentSide>
            <SideImageContentSide>
                <SideImageContentSideInner>
                    <div className="section-title">
                        <span>02</span>
                        <h2>Start-up</h2>
                    </div>
                    <p>Neue Geschäftsideen und „digitale“ Geschäftsmodelle werden immer häufiger im Rahmen von eigenen Start-up Vorhaben realisiert. Dabei besteht die größte Herausforderung darin die Impulsgeber sowie auch die richtigen Entwickler zu finden und diese für Ihr Start-up zu gewinnen. </p>
                    <p> Sie möchten innovative und kreative Visionen zeitnah realisieren und z.B. ein Prototyp entwickeln lassen? Im Rahmen des Entwicklungsprozesses gilt es die Geschäftsidee entsprechend zu etablieren (MVP – Minimum Viable Product) und technologisch zur Produktreife zu führen.</p>
                </SideImageContentSideInner>
            </SideImageContentSide>
        </SideImageContentContainer>

        <SideImageContentContainer>
            <SideImageContentSide>
                <SideImageContentSideInner>
                    <div className="section-title">
                        <span>03</span>
                        <h2>Übernahme bestehende softwarelösung</h2>
                    </div>
                    <p>Viele Unternehmen betreiben einen enormen Aufwand (finanziell und personell) bestehende Softwarelösungen (in der Regel ältere lokale oder/und Client-Server basierte Softwarelösungen) einfach „am Leben“ zu halten, obwohl der technologische Fortschritt und moderne Webapplikationen eine sehr viel höhere Flexibilität und Zukunftssicherheit versprechen. </p>
                    <p>Die aus der Historie gewachsenen Strukturen verhindern häufig die Ausrichtung an teilweise schon aktuelle Anforderungen, da die Softwarelösung gewisse Funktionen nicht abdeckt, Erweiterungen technisch nicht realisierbar oder zu teuer sind. Die Zeiten, in denen sich Unternehmen für eine Softwarelösung verbiegen mussten, sind vorbei. Die Technologie muss die Anforderungen der Geschäftsprozesse erfüllen und nicht umgekehrt!</p>
                </SideImageContentSideInner>
            </SideImageContentSide>
            <SideImageContentSide style={{backgroundImage: `url(${SoftwareSolutions})`}}>

                <SideImageContentLeftSideVideo>
                    <LeftSideVideo src={Video} type="video/mp4" autoPlay muted loop></LeftSideVideo>
                </SideImageContentLeftSideVideo>

            </SideImageContentSide>
        </SideImageContentContainer>

        <SideImageContentContainer>
            <SideImageContentSide style={{backgroundImage: `url(${DataProtection})`}}>

                <SideImageContentLeftSideVideo>
                    <LeftSideVideo src={Video} type="video/mp4" autoPlay muted loop></LeftSideVideo>
                </SideImageContentLeftSideVideo>

            </SideImageContentSide>
            <SideImageContentSide>
                <SideImageContentSideInner>
                    <div className="section-title">
                        <span>04</span>
                        <h2>Datenschutz / IT-Sicherheit</h2>
                    </div>
                    <p>Sind meine Daten sicher? Was passiert wenn…? Das Thema Informationssicherheit und Datenschutz (DSGVO) nimmt einen immer größeren Stellenwert ein da mehr und mehr Geschäftsprozesse auf digitalem Wege abgewickelt werden.</p>
                    <p>Etablierte Standards wie ISO 27001, BSI IT-Grundschutz und die DSGVO liefern hierbei gesetzliche Richtlinien und Vorgaben, woran sich Unternehmen richten müssen. Sie möchte hier Gewissheit haben und Ihnen ist ein Schutzniveau Ihrer Daten und Informationen wichtig? Sorgen Sie dafür, dass Sie zu jeder Zeit die Kontrolle über Ihre Daten und Informationen (sowie Ihrer Kunden, Lieferanten, Mitarbeiter etc.) haben.</p>
                </SideImageContentSideInner>
            </SideImageContentSide>
        </SideImageContentContainer>
    
  </Layout>
)

export default BeratungPage


const SideImageContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0;
`;

const SideImageContentSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0;
    background-size: cover !important;
    position: relative;
    background-color: ${({ theme }) => theme.colors.white};
`;

const SideImageContentSideInner = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 0 60px;

    .section-title {
        h2 {
            color: ${({ theme }) => theme.colors.text};
            font-size: 2rem; 
            strong {
                opacity: .65;
            }
        }

        h6 {
            color: ${({ theme }) => theme.colors.text};
            line-height: 1.6;
        }
    }

    p {
        color: ${({ theme }) => theme.colors.text};
        line-height: 1.6;
        margin-bottom: 1.2rem;
    }

    img {
        height: 38px;
        margin-top: 10px;
    }
`;

const SideImageContentLeftSideVideo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    opacity: 1;
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -ms-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
`;

const LeftSideVideo = styled.video`
    min-height: 100%;
    min-width: 100%;
    float: left;
    margin-left: -30%;
    opacity: 0.1;
`;

const SideImageIcon = styled.img`
    height: 5em !important;
    margin: 0 auto;
    display: block;
    margin-bottom: 2rem;
`;
