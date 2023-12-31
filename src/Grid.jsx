import React, { useContext, useState } from 'react'
import './grid.css'
import './mobilephones.css'
import ContentPlot from './ContentPlot';
import EnterCode from './EnterCode';
import { uiContent } from './lib/content';

import GoldBlank from './img/gold-blank.png'
import Gold from './img/gold.png'
import RedBlank from './img/red-blank.png'
import Red from './img/red.png'
import BlueBlank from './img/blue-blank.png'
import Blue from './img/blue.png'
import { UserContext } from './context/user';
import madnessBg from './img/madness-bg.png'
import DivergenceOne from './DivergenceOne';
import DivergenceTwo from './DivergenceTwo';
import DivergenceThree from './DivergenceThree';
import DivergenceFour from './DivergenceFour';

import divonetab from './img/div-one-tab.png';
import divtwotab from './img/div-two-tab.png';
import divthreetab from './img/div-three-tab.png';
import divfourtab from './img/div-four-tab.png';
import filesSealed from './img/FilesSealed.png';

export default function Grid() {

    const { nodes, tabStyleOne, tabStyleTwo, tabStyleThree, tabStyleFour, setTabStyleOne, setTabStyleTwo, setTabStyleThree, setTabStyleFour } = useContext(UserContext)
    const [cpShow, setCpShow] = useState(false)
    const [activeNode, setActiveNode] = useState()

    const [clickedTab, setClickedTab] = useState('')
    const [isHesitant, setIsHesitant] = useState(false)

    let ui = uiContent;

    const handleTab = (tab) => {
        if (tab === 'one') {
            setClickedTab('one')
            setTabStyleOne({
                backgroundColor: 'rgb(238, 196, 119)'
                // width: '36%'
            })
            setTabStyleTwo({width: '24%'})
            setTabStyleThree({width: '24%'})
            setTabStyleFour({width: '24%'})
        } else if (tab === 'two') {
            setClickedTab('two')
            setTabStyleOne({width: '24%'})
            setTabStyleTwo({
                backgroundColor: 'rgb(238, 196, 119)'
                // width: '36%'
            })
            setTabStyleThree({width: '24%'})
            setTabStyleFour({width: '24%'})
        } else if (tab === 'three') {
            setClickedTab('three')
            setTabStyleOne({width: '24%'})
            setTabStyleTwo({width: '24%'})
            setTabStyleThree({
                backgroundColor: 'rgb(238, 196, 119)'
                // width: '36%'
            })
            setTabStyleFour({width: '24%'})
        } else if (tab === 'four') {
            setClickedTab('four')
            setTabStyleOne({width: '24%'})
            setTabStyleTwo({width: '24%'})
            setTabStyleThree({width: '24%'})
            setTabStyleFour({
                backgroundColor: 'rgb(238, 196, 119)'
                // width: '36%'
            })
        }
    }

    const handleClick = (nodeName) => {
        setCpShow(true)
        setActiveNode(nodeName)
    }

    let madnessMap = null

    switch (clickedTab) {
        case 'one':
            madnessMap = (
                <div className='madness-madness' style={{position: 'absolute', display: 'flex'}}>
                    <DivergenceOne setCpShow={setCpShow} setActiveNode={setActiveNode} />
                </div>
            )
        break;
        case 'two':
            madnessMap = (
                <div className='madness-madness' style={{position: 'absolute', display: 'flex'}}>
                    <DivergenceTwo setCpShow={setCpShow} setActiveNode={setActiveNode} />
                </div>
            )
        break;
        case 'three':
            madnessMap = (
                <div className='madness-madness' style={{position: 'absolute', display: 'flex'}}>
                    <DivergenceThree setCpShow={setCpShow} setActiveNode={setActiveNode} />
                </div>
            )
        break;
        case 'four':
            madnessMap = (
                <div className='madness-madness' style={{position: 'absolute', display: 'flex'}}>
                    <DivergenceFour setCpShow={setCpShow} setActiveNode={setActiveNode} setIsHesitant={setIsHesitant} />
                </div>
            )
        break;
        default:
        break;
    }
        
    return (
    <div>
        <div>
            {cpShow ? <>
                <ContentPlot setCpShow={setCpShow} activeNode={activeNode} isHesitant={isHesitant} />
            </> : <></>}
            <section className="grid h-full font-archaic grid-section">
                <div className="flex flex-wrap justify-between w-full gap-5 p-8 text-3xl text-white title-code-container">
                    <h1 className="z-10 text-6xl text-white heresy-title">HERESY,<br />1897</h1>
                    <EnterCode />
                </div>
                <div className="grid place-content-center">
                    <div className='heresy-grid-bg'>
                    </div>
                    <div className="trans-heresy" style={{gridArea: '1/1/2/2'}} />
                    <div
                        className="relative grid w-full h-full mx-auto heresy-grid"
                        style={{gridArea: '1/1/2/2'}}
                        id="scrollable"
                    >
                        <p />
                        <div className="stamp" style={{gridArea: '2/13/4/span 2'}} id="WelcomeToParadox">
                            {nodes && nodes.WelcomeToParadox ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('WelcomeToParadox')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.one.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={GoldBlank}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="vertical-line" id='line-one' style={{gridArea: '3 / 13 / span 5 / span 2', marginTop: 'calc(var(--spacing) * 6)', marginBottom: 'calc(var(--spacing) * 7)'}} />
                        <div className="stamp" style={{gridArea: '4/13/8/span 2'}} id="AnInvitation">
                            {nodes && nodes.AnInvitation ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('AnInvitation')}
                                />
                                <p className="text-2xl text-white title">{ui.nodes.two.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: An Invitation')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" id='line-two' style={{gridArea: '7 / 12 / span 4 / span 2', marginTop: 'calc(var(--spacing) * 6)', marginBottom: 'calc(var(--spacing) * 7)'}} />
                        <div className="horizontal-line" id='line-three' style={{gridArea: '4 / 14 / 8 / span 2'}} />
                        <div className="stamp" style={{gridArea: '4/15/span 4/span 2'}} id="Stubborn">
                            {nodes && nodes.Stubborn ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Stubborn')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.three.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Stubborn')}
                                />  
                            </>}
                        </div>
                        <div className="stamp" style={{gridArea: '8 / 10 / span 2 / span 2'}} id="TrainingWheels">
                            {nodes && nodes.TrainingWheels ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Theurgist')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.sixteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Theurgist')}
                                />
                            </>}
                            
                        </div>
                        <div className="horizontal-line" id='line-four' style={{gridArea: '3 / 11 / 12 / span 4'}} />
                        <div className="stamp" style={{gridArea: '8 / 12 / span 2 / span 2'}} id="YourOwnTwoFeet">
                            {nodes && nodes.YourOwnTwoFeet ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Divinator')}
                                />
                                <p className="w-2/3 text-2xl text-white title">Divinator</p>
                            </> : <>
                            <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Divinator')}
                                />
                            </>}
                        </div>
                        <div className="horizontal-line" id='line-five' style={{gridArea: '3 / 14 / 12 / span 3'}}/>
                        <div className="stamp" style={{gridArea: '8 / 14 / span 2 / span 2'}} id="YouWereWarned">
                            {nodes && nodes.YouWereWarned ? <>
                            <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Alchemist')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.ten.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Alchemist')}
                                />
                            </>}
                        </div>
                        <div className="stamp" style={{gridArea: '8 / 16 / span 2 / span 2'}} id="TheurgistII">
                            {nodes && nodes.TheurgistII ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('TheurgistII')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.twentythree.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Theurgist')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-100 stamp green" style={{gridArea: '11 / 10 / span 2 / span 2'}} id="SinsOfTheFather">
                            {nodes && nodes.SinsOfTheFather ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('SinsOfTheFather')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.four.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Sins of the Father')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-200 stamp red" style={{gridArea: '11 / 13 / span 2 / span 2'}} id="ToTheNines">
                            {nodes && nodes.ToTheNines ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('ToTheNines')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.six.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: To The Nines')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-300 stamp blue" style={{gridArea: '11 / 16 / span 2 / span 2'}} id="BeyondTheVeil">
                            {nodes && nodes.BeyondTheVeil ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('BeyondTheVeil')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.nine.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Beyond The Veil')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-500 stamp green" style={{gridArea: '14 / 10 / span 2 / span 2'}} id="PandorasBox">
                            {nodes && nodes.PandorasBox ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('PandorasBox')}
                                />
                                <p className="w-2/3 text-2xl text-white title" >{ui.nodes.eight.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: What Was Lost')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-700 stamp" style={{gridArea: '14 / 13 / span 2 / span 2'}} id="OutOfTime">
                            {nodes && nodes.OutOfTime ? <>
                            <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('OutOfTime')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.seven.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Out Of Time')}
                                />
                            </>}
                        </div>
                        <div className="stamp" style={{gridArea: '14 / 16 / span 2 / span 2'}} id="ASoulInLimbo">
                            {nodes && nodes.ASoulInLimbo ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('ASoulInLimbo')}
                                />
                                <p className="w-2/3 text-2xl text-white title">A Soul In Limbo</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: A Soul In Limbo')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" id='line-six' style={{gridArea: '7 / 12 / span 4 / 10', marginTop: 'calc(var(--spacing) * 6)', marginBottom: 'calc(var(--spacing) * 7)'}}/>
                        <div className="horizontal-line" id='line-seven' style={{gridArea: '7 / 11 / 14 / 14'}}/>
                        <div className="vertical-line" id='line-eight' style={{gridArea: '7 / 14 / span 4 / span 2', marginTop: 'calc(var(--spacing) * 6)', marginBottom: 'calc(var(--spacing) * 7)'}}/>
                        <div className="vertical-line" id='line-nine' style={{gridArea: '7 / 16 / span 4 / span 2', marginTop: 'calc(var(--spacing) * 6)', marginBottom: 'calc(var(--spacing) * 7)'}}/>
                        <div className="horizontal-line" id='line-ten' style={{gridArea: '7 / 14 / 14 / span 3'}}/>
                        <div className="vertical-line" id='line-eleven' style={{gridArea: '10 / 13 / span 3 / span 2', marginTop: 'calc(var(--spacing) * 6)', marginBottom: 'calc(var(--spacing) * 7)'}}/>
                        <div className="vertical-line" id='line-twelve' style={{gridArea: '13 / 13 / span 2 / span 2', marginRight: 'calc(var(--spacing) * 4)', marginTop: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" id='line-thirteen' style={{gridArea: '13 / 13 / span 2 / span 2', marginLeft: 'calc(var(--spacing) * 4', marginTop: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" id='line-fourteen' style={{gridArea: '12 / 10 / span 7 / span 2'}} />
                        <div className="vertical-line" id='line-fifteen' style={{gridArea: '12 / 16 / span 7 / span 2'}} />
                        <div className="horizontal-line" id='line-sixteen' style={{gridArea: '8 / 11 / 16 / span 3'}} />
                        <div className="horizontal-line" id='line-seventeen' style={{gridArea: '8 / 14 / 16 / span 3'}} />
                        <div className="horizontal-line" id='line-eighteen' style={{gridArea: '10 / 11 / 16 / span 3', marginLeft: 'calc(var(--spacing) * 4)', marginTop: 'calc(var(--spacing) * 9)', marginRight: 'calc(var(--spacing) * 2)'}} />
                        <div className="horizontal-line" id='line-nineteen' style={{gridArea: '10 / 14 / 16 / span 3', marginLeft: 'calc(var(--spacing) * 2)', marginTop: 'calc(var(--spacing) * 9)', marginRight: 'calc(var(--spacing) * 4)'}} />
                        <div className="vertical-line" id='line-twenty' style={{gridArea: '12 / 10 / 14 / span 2', marginLeft: 'calc(var(--spacing) * 8', marginBottom:'calc(var(--spacing) * 8'}} />
                        <div className="vertical-line" id='line-twentyone' style={{gridArea: '12 / 16 / 14 / span 2', marginRight: 'calc(var(--spacing) * 8', marginBottom:'calc(var(--spacing) * 8'}} />
                        <div className="horizontal-line" id='line-twentytwo' style={{gridArea: '14 / 11 / 16 / span 3'}} />
                        <div className="horizontal-line" id='line-twentythree' style={{gridArea: '14 / 14 / 16 / span 3'}} />
                        <div className="horizontal-line" id='line-twentyfour' style={{gridArea: '15 / 11 / span 2 / span 6', marginLeft: 'calc(var(--spacing) * 4)', marginTop: 'calc(var(--spacing) * 10)', marginRight: 'calc(var(--spacing) * 4)'}} />
                        <div className="horizontal-line" id='line-twentyfive' style={{gridArea: '18 / 10 / span 2 / span 8'}} />
                        <div className="vertical-line" id='line-twentysix' style={{gridArea: '16 / 14 / span 2 / span 3', marginRight: 'calc(var(--spacing) * 14)', marginTop: 'calc(var(--spacing) * 5)'}} />
                        <div className="vertical-line" id='line-twentyseven' style={{gridArea: '16 / 9 / span 3 / span 3', marginTop: 'calc(var(--spacing) * 5)', marginLeft: 'calc(var(--spacing) * 24)'}} />
                        <div className="vertical-line" id='line-twentyeight' style={{gridArea: '16 / 16 / span 3 / span 3', marginRight: 'calc(var(--spacing) * 24)', marginTop: 'calc(var(--spacing) * 5)'}} />
                        <div className="vertical-line" id='line-twentynine' style={{gridArea: '18 / 12 / 19 / span 3', marginRight: 'calc(var(--spacing) * 14)', marginTop: 'calc(var(--spacing) * 5)'}} />
                        <div className="bg-blue-100 stamp" style={{gridArea: '17 / 12 / span 2 / span 2'}} id="WhatWasLost">
                            {nodes && nodes.WhatWasLost ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('WhatWasLost')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.eleven.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: What Was Lost')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-800 stamp" style={{gridArea: '17 / 14 / span 2 / span 2'}} id="GoodHousekeeping">
                            {nodes && nodes.GoodHousekeeping ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Honesty')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.eighteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Honesty')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" id='line-thirty' style={{gridArea: '19 / 9 / 21 / span 3', marginRight: 'calc(var(--spacing) * 15)'}} />
                        <div className="vertical-line" id='line-thirtyone' style={{gridArea: '19 / 17 / 21 / span 3', marginRight: 'calc(var(--spacing) * 14)'}} />
                        <div className="horizontal-line" id='line-thirtytwo' style={{gridArea: '20 / 9 / span 2 / span 1'}} />
                        <div className="horizontal-line" id='line-thirtythree' style={{gridArea: '20 / 18 / span 2 / span 1', marginLeft: 'calc(var(--spacing) * 0.5)'}} />
                        <div className="bg-green-800 stamp" style={{gridArea: '20 / 8 / span 2 / span 2'}} id="MorsExMachina">
                            {nodes && nodes.MorsExMachina ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('MorsExMachina')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.fourteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Mors Ex Machina')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" id='line-thirtyfour' style={{gridArea: '19 / 10 / span 3 / span 2', marginRight: 'calc(var(--spacing) * 4'}} />
                        <div className="vertical-line" id='line-thirtyfive' style={{gridArea: '19 / 10 / span 3 / span 2', marginLeft: 'calc(var(--spacing) * 4'}} />
                        <div className="vertical-line" id='line-thirtysix' style={{gridArea: '19 / 16 / span 3 / span 2', marginRight: 'calc(var(--spacing) * 4'}} />
                        <div className="vertical-line" id='line-thirtyseven' style={{gridArea: '19 / 16 / span 3 / span 2', marginLeft: 'calc(var(--spacing) * 4'}} />
                        <div className="vertical-line" id='line-thirtyeight' style={{gridArea: '22 / 9 / span 2 / span 2'}} />
                        <div className="vertical-line" id='line-thirtynine' style={{gridArea: '22 / 11 / span 2 / span 2'}} />
                        <div className="vertical-line" id='line-fourty' style={{gridArea: '22 / 15 / span 2 / span 2'}} />
                        <div className="vertical-line" id='line-fourtyone' style={{gridArea: '22 / 17 / span 2 / span 2'}} />
                        <div className="horizontal-line" id='line-fourtytwo' style={{gridArea: '21 / 10 / span 2 / span 1', marginRight: 'calc(var(--spacing) * 2'}} />
                        <div className="horizontal-line" id='line-fourtythree' style={{gridArea: '21 / 11 / span 2 / span 1', marginLeft: 'calc(var(--spacing) * 2'}} />
                        <div className="horizontal-line" id='line-fourtyfour' style={{gridArea: '21 / 16 / span 2 / span 1', marginRight: 'calc(var(--spacing) * 2'}} />
                        <div className="horizontal-line" id='line-fourtyfive' style={{gridArea: '21 / 17 / span 2 / span 1', marginLeft: 'calc(var(--spacing) * 2'}} />
                        <div className="bg-green-400 stamp" style={{gridArea: '18 / 10 / span 2 / span 2'}} id="MachineOfBlood">
                            {nodes && nodes.MachineOfBlood ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('MachineOfBlood')}
                                />
                                <p className="w-2/3 text-2xl text-white title" >{ui.nodes.twelve.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Machine Of Blood')}
                                />
                            </>}
                        </div>
                        <div className="bg-green-600 stamp" style={{gridArea: '18 / 16 / span 2 / span 2'}} id="ChainsThatBind">
                            {nodes && nodes.ChainsThatBind ? <>
                            <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('ChainsThatBind')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.thirteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Chains That Bind')}
                                />
                            </>}
                        </div>
                        <div className="bg-green-200 stamp" style={{gridArea: '20 / 18 / span 2 / span 2'}} id="Unbound">
                            {nodes && nodes.Unbound ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Unbound')}
                                />
                                <p className="w-2/3 text-2xl text-white title" >{ui.nodes.fifteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Unbound')}
                                />
                            </>}
                        </div>
                        <div className="bg-blue-900 stamp" style={{gridArea: '23 / 9 / span 2 / span 2'}} id="OutWithABang">
                            {nodes && nodes.OutWithABang ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('OutWithABang')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.nineteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Out With A Bang')}
                                />
                            </>}
                        </div>
                        <div className="bg-blue-200 stamp" style={{gridArea: '23 / 11 / span 2 / span 2'}} id="DeathDeferred">
                            {nodes && nodes.DeathDeferred ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('DeathDeferred')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.twenty.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Death Deferred')}
                                />
                            </>}
                        </div>
                        <div className="bg-blue-500 stamp" style={{gridArea: '23 / 15 / span 2 / span 2'}} id="Misled">
                            {nodes && nodes.Misled ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Misled')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.twentyone.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Misled')}
                                />
                            </>}
                        </div>
                        <div className="bg-blue-800 stamp" style={{gridArea: '23 / 17 / span 2 / span 2'}} id="BetterSafeThanSorry">
                            {nodes && nodes.BetterSafeThanSorry ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('BetterSafeThanSorry')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.twentytwo.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Better Safe Than Sorry')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" id='line-fourtysix' style={{gridArea: '24 / 15 / span 4 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" id='line-fourtyseven' style={{gridArea: '24 / 17 / span 4 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" id='line-fourtyeight' style={{gridArea: '24 / 9 / span 4 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" id='line-fourtynine' style={{gridArea: '24 / 11 / span 4 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                    </div>
                </div>
            </section>
            <div 
                className="w-full font-extrabold madness-start"
                style={{backgroundImage: `url(${madnessBg})`, backgroundSize: '100vw 100vh', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat', display: 'flex', flexWrap: 'wrap'}}
            >
                <div className='flex flex-wrap justify-between w-full h-60 gap-5 text-3xl text-white title-container'>
                    <h1 className="z-10 text-6xl text-black madness-title" >Madness,<br />1917</h1>
                    <div className='text-black enter-code-two'> <EnterCode /> </div>
                </div>
                <div className='flex flex-wrap justify-between w-full px-8 pt-8 text-4xl madness-tab-container' id='madness'>
                    {nodes.OutWithABang || nodes.AlienistInTraining ? <>
                        <span
                            className='text-3xl madness-tab'
                            onClick={() => handleTab('one')}     
                            style={tabStyleOne}   
                        >
                            <img src={divonetab} alt='tab'/>
                            </span>
                    </>:<>
                        <span
                            className='text-3xl redacted'
                            onClick={() => handleClick('TabOne')}     
                            style={tabStyleOne}
                        >
                            <img src={filesSealed} alt='tab'/>
                            </span>
                    </>}
                    {nodes.DeathDeferred || nodes.MissionOfMercy ? <>
                        <span 
                            className='text-3xl madness-tab'
                            onClick={() => handleTab('two')}     
                            style={tabStyleTwo}   
                        >
                            <img src={divtwotab} alt='tab'/>
                            </span>
                    </>:<>
                    <span
                            className='text-3xl redacted'
                            onClick={() => handleClick('TabOne')}     
                            style={tabStyleOne}
                        >
                            <img src={filesSealed} alt='tab'/>
                            </span>
                    </>}
                    {nodes.Misled || nodes.UnhingedBehavior ? <>
                        <span
                            className='text-3xl madness-tab'
                            onClick={() => handleTab('three')}   
                            style={tabStyleThree}
                        >
                            <img src={divthreetab} alt='tab'/>
                            </span>
                    </>:<>
                    <span
                            className='text-3xl redacted'
                            onClick={() => handleClick('TabOne')}     
                            style={tabStyleOne}
                        >
                            <img src={filesSealed} alt='tab'/>
                            </span>
                    </>}
                    {nodes.BetterSafeThanSorry || nodes.ALead ? <>
                        <span 
                            className='text-3xl madness-tab'
                            onClick={() => handleTab('four')}    
                            style={tabStyleFour}  
                        >
                            <img src={divfourtab} alt='tab'/>
                            </span>
                    </>:<>
                    <span
                            className='text-3xl redacted'
                            onClick={() => handleClick('TabOne')}     
                            style={tabStyleOne}
                        >
                            <img src={filesSealed} alt='tab'/>
                            </span>
                    </>}
                </div>
            </div>
            {madnessMap}
            <div className='space' style={{minHeight: '96px', width: 'full', position: 'absolute'}}>.</div>
        </div>
    </div>
  )
}
