import React from 'react';
import styled from 'styled-components';
import HeaderBg from '../assets/images/header.jpg';
import { Button } from './Button';

const RequestFormWidget = () => {

    return (
        <RequestFormContainer>
            <RequestFormHeaderBg></RequestFormHeaderBg>
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
                                    <label>Ihr Vor- und Nachname</label>
                                    <input type="text" placeholder="Vor- und Nachname" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Ihre E-Mail-Adresse</label>
                                    <input type="text" placeholder="E-Mail-Adresse" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label>Ihr Vorhaben</label>
                                    <textarea rows="5" placeholder="Beschreiben Sie kurz Ihr Vorhaben"></textarea>
                                </div>
                                <div class="form-group col-md-12">
                                    <SubmitButton>
                                        <Button
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
        </RequestFormContainer>
    )
}

export default RequestFormWidget

const RequestFormContainer = styled.div`
    position: relative;
    width: 100%;

    .section-title {
        h2 {
            color: ${({ theme }) => theme.colors.white};
            strong {
                opacity: .65;
            }
        }

        h6 {
            color: ${({ theme }) => theme.colors.white};
            line-height: 1.6;
        }
    }

    form {
        margin-bottom: 0;

        label {
            width: 100%;
            color: ${({ theme }) => theme.colors.white};
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
    background: ${({ theme }) => theme.colors.primary};
    margin-bottom: -54px;
`;

const RequestFormHeaderBg = styled.div`
    background: url(${HeaderBg});
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    width: 100%;
    height: 120px;
`;

const SubmitButton = styled.div`
    margin-top: 3rem;
`;