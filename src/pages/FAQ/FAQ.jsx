import { useState, useEffect } from 'react'
import style from './FAQ.module.scss'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
const FAQConfig = [{
    question: 'How to power it with DELTA Pro or DELTA Pro extra battery?',
    answer: 'Connect it with DELTA Max Extra Battery Cable and DELTA Pro to Smart Generator Adapter.',
    id: '1'
}, {
    question: 'How many power supply methods does Wave support?',
    answer: 'Wave can be powered by any of the following methods:',
    answerList: ['AC power supply (such as your wall outlet) (100V-240V)',
        'Wave’s add-on battery.',
        'DELTA Max or DELTA Max Extra Battery',
        'DELTA Pro or DELTA Pro Extra Battery'
    ],
    id: '2'
}, {
    question: 'How to power it with DELTA Max or DELTA Max extra battery?',
    answer: 'Use the DELTA Max Extra Battery Cable to directly connect to Wave.',
    id: '3'
}, {
    question: 'How long can Wave battery support the operation of Wave?',
    answer: 'It depends on the battery you choose to use:',
    answerList: ['Wave add-on battery: 3 hours',
        'DELTA Max: 5-6 hours',
        'DELTA Pro: 12 hours'
    ],
    text: 'Note: Assumes average power consumption of 300W per hour for Wave under 26° with the lowest volume of air',
    id: '4'
}, {
    question: 'How many charging ways does Wave battery pack support?',
    answer: 'As long as you’re using a battery with Wave (Add-on battery, DELTA Max, DELTA Max Extra Battery, DELTA Pro, DELTA Pro Extra Battery)  three charging ways are available:',
    answerList: ['AC charging (500W charging rate).',
        'Solar charging (200W charging rate).',
        'Car charing (200W charging rate).'
    ],
    id: '5'
},]

const FAQ = () => {
    const [currentId, setCurrentId] = useState(null)

useEffect(() => {
    window.scrollTo(0, 0);
}, []);
    return (
        <div className={style.faq}>
            <div alt='Welcome to EcoFlow Support' className={style.faq_image}>
                <h3 className={style.faq_title} >Welcome to EcoFlow Support</h3>
                <h5 className={style.faq_subtitle} >We're here for you</h5>
            </div>
            <div className={style.faq_questions_section}>
                <ul className={style.faq_how_to_power}>
                    {FAQConfig.map((item) => (
                        <li key={item.id} id={item.id} className={style.faq_item}><div className={style.faq_wrapper}>
                            <h6 className={style.faq_question_title}>{item.question}</h6>
                            {currentId !== item.id && <IoIosArrowDown className={style.faq_arrow} onClick={() => setCurrentId(item.id)} />}
                            {currentId === item.id && <IoIosArrowUp className={style.faq_arrow} onClick={() => setCurrentId(null)} />}
                        </div>
                            {currentId === item.id && <> < p className={style.faq_text}>{item.answer} </p>
                                {!item.answerList?.length &&
                                    <ol >
                                        {item.answerList?.map((item) => (
                                            <li>{item}</li>
                                        ))}
                                    </ol>
                                }
                            </>}

                        </li>
                    ))}

                </ul>

            </div>
        </div >
    )
}
export default FAQ