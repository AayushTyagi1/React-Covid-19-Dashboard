import React from 'react';
import { Button, CardBody, Card } from 'reactstrap';
import Collapsible from 'react-collapsible';
import "./About.css";
import covidImg from "../images/VirusCovid.png"

const About = () =>{
    return(
        <div>
        <div className="jumbotron row jumbotron-fluid text-white">
          <div className="col-4 ">
      <h1>Covid-19</h1>
      <h2>Informative </h2>
      </div>
      <div className="col-7 flex-auto">
      <img id ="covidImg" src={covidImg} alt ="covid" className="rounded float-right  mx-auto" />
      </div>
        </div>
        <div>
            <div className="row p-0">
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
          COVID-19 spreads easily from person to person, mainly by the following routes:
            <li> Between people who are in close contact with one another (within 6 feet).</li>
            <li> Through respiratory droplets produced when an infected person coughs, sneezes, breathes, sings or talks.</li>
            <li>Respiratory droplets cause infection when they are inhaled or deposited on mucous membranes, such as those that line
                the inside of the nose and mouth.</li>
                <li>People who are infected but do not have symptoms can also spread the virus to others.</li>
          </p>
        </article>
      </section>

      <section id="symptoms">
        <h1>What are the Symptoms</h1>
        <article>
          <p>
            The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and
            pains, nasal congestion, runny nose, sore throat or diarrhea. 
            The most common symptoms of COVID-19 are
           <li>	Fever</li>
           <li>	Cough</li>
           <li>	Headaches</li>
           <li>	Fatigue</li>
           <li>	Muscle or body aches</li>
           <li>	Loss of taste or smell</li>
           <li>	Sore throat</li>
           <li>	Nausea</li>
           <li>	Diarrhea</li>
          Other symptoms are signs of serious illness. If someone has trouble breathing, chest pain or pressure, or difficulty staying awake,
           get medical care immediately.

          </p>
        </article>
      </section>

      <section id="care">
        <h1>Prevention & Care</h1>
        <article>
          <ul id="taking-care">
            <li>
            Wash your hands with soap and water for 20 seconds or use hand sanitizer with at least 60% alcohol.
            </li>
            <li>
            Stay at least 6 feet (about two arm lengths) from others who don’t live with you, particularly in crowded areas.
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
      <Collapsible trigger={<span><Button id="1" className="accordion"  style={{ marginBottom: '1rem' }}>How does the virus spread?</Button></span>}>
        <Card>
          <CardBody className="panel">
                  <li>The virus that causes COVID-19 most commonly spreads between people who are in close contact with one another (within about 6 feet, or 2 arm lengths).
                  It spreads through respiratory droplets or small particles, such as those in aerosols, produced when an infected person coughs, sneezes, sings, talks, or breathes.
                  </li>
                  <li>These particles can be inhaled into the nose, mouth, airways, and lungs and cause infection. This is thought to be the main way the virus spreads.
                   Droplets can also land on surfaces and objects and be transferred by touch. A person may get COVID-19 by touching the surface or object that has the
                    virus on it and then touching their own mouth, nose, or eyes. Spread from touching surfaces is not thought to be the main way the virus spreads.</li>
                    <li>It is possible that COVID-19 may spread through the droplets and airborne particles that are formed when a person who has COVID-19 coughs, sneezes,
                         sings, talks, or breathes. There is growing evidence that droplets and airborne particles can remain suspended in the air and be breathed in by 
                         others, and travel distances beyond 6 feet (for example, during choir practice, in restaurants, or in fitness classes). In general, indoor 
                         environments without good ventilation increase this risk.</li>
                    <li>COVID-19 seems to be spreading easily and sustainably in the community (“community spread”) in many affected geographic areas. Community spread means 
                        people have been infected with the virus in an area, including some who are not sure how or where they became infected.</li>
          </CardBody>
        </Card>
      </Collapsible>

      <Collapsible trigger={<span><Button id="1" className="accordion"  style={{ marginBottom: '1rem' }}>How likely am I to catch COVID-19?</Button></span>}>
        <Card>
          <CardBody className="panel">
              <li>The risk depends on where you are - and more specifically, whether there is a COVID-19 outbreak unfolding
              there.</li>

              <li>For most people in most locations the risk of catching COVID-19 is still low. However, there are now
              places around the world (cities or areas) where the disease is spreading. For people living in, or
              visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are
              taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local
              restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce
              your risk of catching or spreading COVID-19.</li>

              <li>COVID-19 outbreaks can be contained and transmission stopped, as has been shown in China and some other
              countries. Unfortunately, new outbreaks can emerge rapidly. It’s important to be aware of the situation
              where you are or intend to go.</li>
          </CardBody>
        </Card>
      </Collapsible>
      <Collapsible trigger={<span><Button id="1" className="accordion"  style={{ marginBottom: '1rem' }}>What to Do If You're Sick?</Button></span>}>
        <Card>
          <CardBody className="panel">
              <li>Stay home except to get medical care. Most people with COVID-19 have mild 
                illness and recover at home without medical care.</li>

              <li>Isolate yourself from other members of your family to prevent spread to them and the people that they may have contact with, like grandparents.
                  If you have to leave isolation, wear a mask, stay 6 feet apart from others, wash your hands frequently, and clean all touched surfaces.</li>

              <li>Even if you don’t feel sick, you can spread COVID-19 to others.
                 Be sure that you protect everyone as though they are the most fragile person in your family.</li>
                 <li>
                 Get care immediately if you are having emergency warning signs, 
                 like trouble breathing, pain or pressure in chest.
                 </li>
          </CardBody>
        </Card>
      </Collapsible>
      <Collapsible trigger={<span><Button id="1" className="accordion"  style={{ marginBottom: '1rem' }}>How to Get a Test for Current Infection?</Button></span>}>
        <Card>
          <CardBody className="panel">
              <li>You can visit your state or local health department’s website to look for the latest local information on testing.A viral test checks samples to find out if you are currently infected with COVID-19.
                The time it takes to process these tests can vary.</li>
              <li>If you have symptoms of COVID-19 and want to get tested, call your healthcare provider first.</li>
              <li>If you have symptoms of COVID-19 and choose to not get tested, it is important to stay home.</li>
          </CardBody>
        </Card>
      </Collapsible>
      <Collapsible trigger={<span><Button id="1" className="accordion"  style={{ marginBottom: '1rem' }}>How to Cope with Stress?</Button></span>}>
        <Card>
          <CardBody className="panel">
              <li>Taking care of your friends and your family can be a stress reliever, but it should be balanced with care for yourself. 
                Helping others cope with their stress, such as by providing social support, can also make your community stronger. </li>

              <li>Unwind by doing yoga, listening to music, or gardening.</li>

              <li>Find new ways to connect with family and friends, get support, and share feelings.</li>
                 <li>
                 Eat healthy foods and get enough rest</li>
                <li>Relax by reading, listening to music, or starting a new hobby.
                 </li>
          </CardBody>
        </Card>
      </Collapsible>

    

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