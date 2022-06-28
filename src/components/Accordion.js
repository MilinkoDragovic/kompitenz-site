import React from "react";
import styled, { css } from "styled-components";

const Container = styled.main`
  position: relative;
`;

const Section = styled.section`
  position: relative;
`;

const InnerSection = styled.div`
  position: relative;
  max-width: 500px;
  padding: 2rem;
`;

const AccordionContainer = styled.div``;

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #aaafbf;
`;

const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #aaafbf;
  }
`;

const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
      margin-top: .75rem;
    `}
`;

const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1.5rem 1.5rem;
  height: auto;
`;

const Accordion = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight
}) => {

  return (
    <AccordionContainer>
      <AccordionInner>
      {accordionContent.map(({ title, content }, i) => {
        return (
          <AccordionItem key={`accordion-item-${i}`}>
            <AccordionTitle
              onClick={() => {
                setCurrentAccordion(i);
                setBodyHeight(refs[i].current.clientHeight);
              }}
            >
              {title}
            </AccordionTitle>
            <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
              <AccordionContent ref={refs[i]}>{content}</AccordionContent>
            </AccordionBody>
          </AccordionItem>
        )
      })}

      </AccordionInner>
    </AccordionContainer>
  )
}

export default Accordion
