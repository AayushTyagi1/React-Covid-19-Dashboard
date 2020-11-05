import React, {Component, useState} from 'react';
import { UncontrolledCollapse,Collapse, Button, CardBody, Card } from 'reactstrap';

import "./About.css";

const About = (props) =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
        <div className="jumbotron">
      <h1>Covid-19</h1>
      <h2>Informative </h2>
        </div>
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-3">
                <nav class="menu">
                    <ul>
                         <li><a class="menu-item" href="#what">What is it?</a></li>
                        <li><a class="menu-item" href="#how">How does it spread?</a></li>
                         <li><a class="menu-item" href="#symptoms">What are the symptoms?</a></li>
                         <li><a class="menu-item" href="#care">Prevention & Care</a></li>
                        <li><a class="menu-item" href="#faq">Questions & Answers</a></li>
                    </ul>     
                </nav>
                </div>
                <div className="col-xs-12 col-sm-9">
                <main>
      <section id="what">
        <h1>What is it?</h1>
        <article>
          <p>
            Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
            To understand what COVID-19 is we must define what a coronavirus is first; coronaviruses are a large family
            of viruses which may cause illness in animals or humans. In humans, several coronaviruses are known to cause
            respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory
            Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS).

            COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and
            disease were unknown before the outbreak began in Wuhan, China, in December 2019.
          </p>
        </article>
      </section>

      <section id="how">
        <h1>How does it spread?</h1>
        <article>
          <p>
            People can catch COVID-19 from others who have the virus. The disease can spread from person to person
            through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or
            exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by
            touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19
            if they breathe in droplets from a person with COVID-19 who coughs out or exhales droplets. This is why it
            is important to stay more than 1 meter (3 feet) away from a person who is sick.
          </p>
        </article>
      </section>

      <section id="symptoms">
        <h1>What are the Symptoms</h1>
        <article>
          <p>
            The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and
            pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin
            gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people
            (about 80%) recover from the disease without needing special treatment. Around 1 out of every 6 people who
            gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with
            underlying medical problems like high blood pressure, heart problems or diabetes, are more likely to develop
            serious illness. People with fever, cough and difficulty breathing should seek medical attention.

            While we are still learning about how COVID-2019 affects people, older persons and persons with pre-existing
            medical conditions (such as high blood pressure, heart disease, lung disease, cancer or diabetes) appear to
            develop serious illness more often than others.
          </p>
        </article>
      </section>

      <section id="care">
        <h1>Prevention & Care</h1>
        <article>
          <ul id="taking-care">
            <li>
              Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
            </li>
            <li>
              Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
            </li>
            <li>Avoid touching eyes, nose and mouth.</li>
            <li>
              Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth
              and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue
              immediately.
            </li>
            <li>
              Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention
              and call in advance. Follow the directions of your local health authority.
            </li>
          </ul>
        </article>
      </section>

      <section id="faq">
        <h1>Questions & Answers</h1>
        <hr />
        <article>
        <Button id="1" className="accordion" onClick={toggle} style={{ marginBottom: '1rem' }}>How does the virus spread?</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="panel">
                  <ul>The virus that causes COVID-19 most commonly spreads between people who are in close contact with one another (within about 6 feet, or 2 arm lengths).
                  It spreads through respiratory droplets or small particles, such as those in aerosols, produced when an infected person coughs, sneezes, sings, talks, or breathes.
                  </ul>
                  <ul>These particles can be inhaled into the nose, mouth, airways, and lungs and cause infection. This is thought to be the main way the virus spreads.
                   Droplets can also land on surfaces and objects and be transferred by touch. A person may get COVID-19 by touching the surface or object that has the
                    virus on it and then touching their own mouth, nose, or eyes. Spread from touching surfaces is not thought to be the main way the virus spreads.</ul>
                    <ul>It is possible that COVID-19 may spread through the droplets and airborne particles that are formed when a person who has COVID-19 coughs, sneezes,
                         sings, talks, or breathes. There is growing evidence that droplets and airborne particles can remain suspended in the air and be breathed in by 
                         others, and travel distances beyond 6 feet (for example, during choir practice, in restaurants, or in fitness classes). In general, indoor 
                         environments without good ventilation increase this risk.</ul>
                    <ul>COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in many affected geographic areas. Community spread means 
                        people have been infected with the virus in an area, including some who are not sure how or where they became infected.</ul>
          </CardBody>
        </Card>
      </Collapse>

      <Button id="2" className="accordion" onClick={toggle} style={{ marginBottom: '1rem' }}>How likely am I to catch COVID-19?</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="panel">
          The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding
              there.

              For most people in most locations the risk of catching COVID-19 is still low. However, there are now
              places around the world (cities or areas) where the disease is spreading. For people living in, or
              visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are
              taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local
              restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce
              your risk of catching or spreading COVID-19.

              COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other
              countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation
              where you are or intend to go.
          </CardBody>
        </Card>
      </Collapse>

      <Button className="accordion" onClick={toggle} style={{ marginBottom: '1rem' }}>How likely am I to catch COVID-19?</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="panel">
          The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding
              there.

              For most people in most locations the risk of catching COVID-19 is still low. However, there are now
              places around the world (cities or areas) where the disease is spreading. For people living in, or
              visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are
              taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local
              restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce
              your risk of catching or spreading COVID-19.

              COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other
              countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation
              where you are or intend to go.
          </CardBody>
        </Card>
      </Collapse>

      <Button className="accordion" onClick={toggle} style={{ marginBottom: '1rem' }}>How likely am I to catch COVID-19?</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="panel">
          The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding
              there.

              For most people in most locations the risk of catching COVID-19 is still low. However, there are now
              places around the world (cities or areas) where the disease is spreading. For people living in, or
              visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are
              taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local
              restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce
              your risk of catching or spreading COVID-19.

              COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other
              countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation
              where you are or intend to go.
          </CardBody>
        </Card>
      </Collapse>

      <Button className="accordion" onClick={toggle} style={{ marginBottom: '1rem' }}>How likely am I to catch COVID-19?</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="panel">
          The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding
              there.

              For most people in most locations the risk of catching COVID-19 is still low. However, there are now
              places around the world (cities or areas) where the disease is spreading. For people living in, or
              visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are
              taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local
              restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce
              your risk of catching or spreading COVID-19.

              COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other
              countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation
              where you are or intend to go.
          </CardBody>
        </Card>
      </Collapse>
      
      <Button className="accordion" onClick={toggle} style={{ marginBottom: '1rem' }}>How likely am I to catch COVID-19?</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody className="panel">
          The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding
              there.

              For most people in most locations the risk of catching COVID-19 is still low. However, there are now
              places around the world (cities or areas) where the disease is spreading. For people living in, or
              visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are
              taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local
              restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce
              your risk of catching or spreading COVID-19.

              COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other
              countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation
              where you are or intend to go.
          </CardBody>
        </Card>
        </Collapse>
        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Toggle
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Toggle
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card>
    </UncontrolledCollapse>
    

        </article>
      </section>
      </main>
                </div>
            </div>
        </div>

      </div>
        );
}

export default About;