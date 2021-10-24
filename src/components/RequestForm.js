import React from 'react';
import styled from 'styled-components';
import HeaderBg from '../assets/images/header.jpg';
import { Button } from './Button';
import { MdConnectWithoutContact } from 'react-icons/md';

const RequestFormWidget = () => {

    return (
        <RequestFormContainer>
            <RequestFormWrapper>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title">
                                <span>06</span>
                                <h2><strong>lass uns</strong> verbinden</h2>
                                <h6>
                                    Füllen Sie alle Eingaben im Anfrageformular aus
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form class="row inner">
                                <div class="form-group col-md-6">
                                    <label htmlFor="firstname">Ihre Vorname</label>
                                    <input id="firstname" type="text" placeholder="Vorname" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label htmlFor="lastname">Ihr Nachname </label>
                                    <input id="lastname" type="text" placeholder="Nachname" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label htmlFor="company">Unternehmensname</label>
                                    <input id="company" type="text" placeholder="Unternehmensname" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label htmlFor="email">Ihre E-Mail-Adresse</label>
                                    <input id="email" type="text" placeholder="E-Mail-Adresse" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label htmlFor="phone">Telefon- oder Mobilnummer</label>
                                    <input id="phone" type="text" placeholder="Telefon- oder Mobilnummer" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label htmlFor="message">Ihr Vorhaben</label>
                                    <textarea id="message" rows="5" placeholder="Beschreiben Sie kurz Ihr Vorhaben"></textarea>
                                </div>
                                <div class="form-group col-md-12">
                                    <SubmitButton>
                                        <Button
                                            primary="'true'"
                                            big="'true'">
                                            SUBMIT
                                        </Button>
                                    </SubmitButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </RequestFormWrapper>
            <RequestFormHeaderBg></RequestFormHeaderBg>
        </RequestFormContainer>
    )
}

export default RequestFormWidget

const RequestFormContainer = styled.div`
    position: relative;
    width: 100%;

    form {
        margin-bottom: 0;

        label {
            width: 100%;
        }

        input[type=text] {
            width: 100%;
        }
    }
`;

const RequestFormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 120px;
    padding-bottom: 180px;
    background: ${({ theme }) => theme.colors.white};
    margin-bottom: -54px;
`;

const RequestFormHeaderBg = styled.div`
    background: url(${HeaderBg});
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    width: 100%;
    height: 150px;
`;

const SubmitButton = styled.div`
    margin-top: 3rem;
`;

const RequestFormIcon = styled(MdConnectWithoutContact)`
    font-size: 8em;
    text-align: center;
    margin: 0 auto 2rem;
    color: #eaebee;
    width: 100%;
`;