import React from "react";
import { Accordion, OptForm } from '../components';
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer(){
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            
            {faqsData.map((item) => (
                <Accordion.Item>
                    <Accordion.Header key={item.id}>
                        {item.header}
                    </Accordion.Header>
                    <Accordion.Body>
                        {item.body}
                    </Accordion.Body>
                </Accordion.Item>     
            ))}
            <Accordion.Item/>

            <OptForm>
                <OptForm.Text>Ready to Watch? Enter your email to create or restart your membership</OptForm.Text>

                <OptForm.Input placeholder="Email address"/>
                <OptForm.Button>Get Started</OptForm.Button>
                <OptForm.Break/>
            </OptForm>
        </Accordion>
    )
}