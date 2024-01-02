import React from 'react'
import SurveyForm from './survey-form'
import SurveySecondForm from './survey-second-form'
import SurveyThirdForm from './survey-third-form'
import SurveyFourthForm from './survey-fourth-form'
import SurveyFifthForm from './survey-fifth-form'
import SurveySixthForm from './survey-sixth-form'
import SurveySeventhForm from './survey-seventh-form'
import SurveyNineForm from './survey-nineth-form'
import SurveyEightForm from './survey-eight-form'
import QuestionForm from './question-form'
import TermsDescription from './terms-description'


interface Props {
    register: any,
    errors: any
}

export default function FactaForm({ register, errors }: Props) {
    return (
        <div className='grid space-y-10'>
            <div className="flex gap-2   text-[#455A64] flex-col">
                <p className="font-bold text-lg">FACTA From</p>
            </div>
            <QuestionForm register={register} errors={errors} />
            <TermsDescription />
            <SurveyForm register={register} errors={errors} />
            <SurveySecondForm register={register} errors={errors} />
            <SurveyThirdForm register={register} errors={errors} />
            <SurveyFourthForm register={register} errors={errors} />
            <SurveyFifthForm register={register} errors={errors} />
            <SurveySixthForm register={register} errors={errors} />
            <SurveySeventhForm register={register} errors={errors} />
            <SurveyNineForm register={register} errors={errors} />
            <SurveyEightForm register={register} errors={errors} />
        </div>
    )
}
