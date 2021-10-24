import React from 'react';
import styled from 'styled-components';

const AboutPageTextWidget = () => {

    return (
        <AboutPageContent>
            <div className="container">
                <div className="col-12">
                    <div className="section-title">
                        <span>01</span>
                        <h2><strong>software für das</strong>  digitale zeitalter</h2>
                        <h6>
                            IMPULSE GEBEN | MIT- UND WEITERDENKEN
                        </h6>
                        <h6>ZUKUNFT GESTALTEN | TECHNOLOGIE AN NUTZER - UND KUNDENBEDÜRFNISSE AUSRICHTEN</h6>
                    </div>
                </div>
                <div className="col-lg-6">
                    <p>Wir sind ein dynamisches und innovatives Unternehmen, das sich den Herausforderungen des digitalen Wandels stellt und Sie bei der Transformation vollumfänglich begleitet.</p>
                    <p>Unser Team aus Generalisten und IT-Experten arbeitet mit Ihnen zusammen daran, Ihre strategische Ausrichtung zu verstehen und Lösungsansätze für Ihr Vorhaben zu entwickeln und umzusetzen.</p>
                </div>
            </div>
        </AboutPageContent>
    )
}

export default AboutPageTextWidget

const AboutPageContent = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 120px 0;

    .col-lg-6 {
        p {
            margin-bottom: 1rem;
        }
    }
`;