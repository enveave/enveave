import { Button } from '@material-ui/core'
import React from 'react'
import RoleCard from './RoleCard'
import CategoryCard from './CategoryCard'
import ProjectCard from './ProjectCard'
import StoryCard from './StoryCard'
import './Home.css'
import chiko from '../images/Chipko.png'
import volunteer from '../images/Volunteer.png'
import afforest from '../images/Afforestation.png'
import carbon from '../images/Carbon.png'
import cleaning from '../images/Cleaning.png'
import greenTech from '../images/GreenTech.png'
import habitat from '../images/Habitat.png'
import resource from '../images/Resource.png'
import reycling from '../images/Recycling.png'
import sanitation from '../images/Sanitation.png'
import vm from '../images/VM.png'
import uh from '../images/UH.png'
import discovery from '../images/Discovery.png'
import pepsico from '../images/Pepsico.png'
import beach from '../images/Beach.png'
import paris from '../images/Paris.png'
import help1 from '../images/HelpCom1.png'
import help2 from '../images/HelpCom2.png'
import help3 from '../images/HelpCom3.png'
import help4 from '../images/HelpCom4.png'
import help5 from '../images/HelpCom5.png'
import help6 from '../images/HelpCom6.png'
import works from '../images/Works.png'
import worksToggle from '../images/Works_toggle.png'

function Home() {
    return (
        <div className='home'>
            <div className='home__join'>
                <div className='home__join__background'>
                    <img src={chiko} alt='Chipko Movement'></img>
                </div>
                <div className='home__join__options'>
                    <h1>A MOVEMENT NEEDS MULTIPLE HANDS TOGETHER</h1>
                    <Button>
                        <span>Join The Movement</span>
                    </Button>
                </div>
            </div>

            <div className='home__care'>
                <div className='home__care__left'>
                    <h1>WHY SHOULD I CARE?</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc at ex pharetra, vulputate ipsum viverra, vestibulum dolor. 
                    Integer non nisi et ligula facilisis tempor. 
                    Donec pretium ipsum magna, eget gravida dolor finibus at. 
                    </p>
                    
                    <p>
                    Duis aliquet mauris facilisis lorem iaculis, sollicitudin dapibus mi rutrum. 
                    Suspendisse tempus diam arcu, in fermentum lacus vehicula eget. 
                    Vestibulum ac mi at erat varius luctus. 
                    Integer blandit nisl ac mauris dignissim mollis nec at arcu.
                    </p>

                    <Button>
                        <span>Know More</span>
                    </Button>

                </div>
                <div className='home__care__right'>
                    <img src={volunteer} alt='Volunteer'></img>
                </div>
            </div>

            <div className='home__roles'>
                <div className='home__roles__header'>
                    <h1>HOW CAN I BE A PART?</h1>
                </div>
                <div className='home__roles__list'>
                    <RoleCard role='PROJECT MANAGER' buttonText='START A PROJECT'/>
                    <RoleCard role='VOLUNTEER' buttonText='JOIN'/>
                    <RoleCard role='DONATE' buttonText='FUND'/>
                    <RoleCard role='SOCIAL ENTERPRISE' buttonText='PARTNER'/>
                </div>
            </div>
            <div className='home__works'>
                <div className='home__works__header'>
                    <h1>HOW ENVEAVE WORKS FOR A</h1>
                    <img src ={worksToggle} alt='Works Toggle'></img>
                </div>
                <img src={works} alt='Works'></img>
            </div>
            <div className='home__categories'>
                <div className='home__categories__header'>
                    <h1>CATEGORIES</h1>
                </div>
                <div className='home__categories__row'>
                        <CategoryCard name='Resource Conservation' image={resource}/>
                        <CategoryCard name='Green Technology' image={greenTech}/>
                        <CategoryCard name='Cleaning' image={cleaning}/>
                        <CategoryCard name='Afforestation' image={afforest}/>
                </div>
                <div className='home__categories__row'>
                        <CategoryCard name='Recycling' image={reycling}/>
                        <CategoryCard name='Sanitation' image={sanitation}/>
                        <CategoryCard name='Carbon Reduction' image={carbon}/>
                        <CategoryCard name='Habitat Conservation' image={habitat}/>
                </div>
            </div>
            <div className='home__popularProjs'>
                <div className='home__popularProjs__header'>
                    <h1>POPULAR PROJECTS</h1>
                </div>
                <div className='home__popularProjs__row'>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
                <Button>
                    <span>Browse More</span>
                </Button>
            </div>
            <div className='home__helpingCom'>
                <div className='home__helpingCom__header'>
                    <h1>HELPING COMMUNITIES</h1>
                </div>
                <h2>TRENDING ACTIVITIES</h2>
                <div className='home__helpingCom__row'>
                    <img src={help1} alt='Helping Community'></img>
                    <img src={help2} alt='Helping Community'></img>
                    <img src={help3} alt='Helping Community'></img>
                    <img src={help4} alt='Helping Community'></img>
                    <img src={help5} alt='Helping Community'></img>
                    <img src={help6} alt='Helping Community'></img>
                </div>
                <Button><span>Explore</span></Button>
                <h2>PERSONAL STORIES</h2>
                <div className='home__helpingCom__row'>
                    <StoryCard 
                        image= {beach}
                        title='EVERY STEP COUNTS!' 
                        text= 'I noticed that my neighbourhood park is littered with waste. I decided to take a step forward and individually decide to clean up the park'
                    />
                    <StoryCard
                        image= {paris}
                        title='PARIS, TODAY' 
                        text= "The State of Paris' Atmosphere today is a mess. The air is filled with large quantities of PM 2.5 particles, which make breathing extremely tough even for the ones who are perfectly healthy"
                    />
                </div>
                <Button><span>Explore</span></Button>
            </div>
            <div className='home__featured'>
                <div className='home__featured__header'>
                    <h1>FEATURED IN</h1>
                </div>
                <div className='home__featured__rows'>
                    <img src={vm} alt="VMWare"></img>
                    <img src={discovery} alt="Discovery"></img>
                    <img src={uh} alt="UH"></img>
                </div>
                <div className='home__featured__rows'>
                    <img src={pepsico} alt="Pepsico"></img>
                    <img src={vm} alt="VMWare"></img>
                    <img src={discovery} alt="Discovery"></img>
                </div>
                <div className='home__featured__help'>
                    <h3>Have any questions for us? Chat with our team on WhatsApp Now</h3>
                    <Button><span>594-190-1650</span></Button>
                </div>
            </div>

        </div>
    )
}

export default Home
