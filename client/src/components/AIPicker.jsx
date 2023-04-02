import React from 'react'
import CustomButton from './CustomButton'



const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
        <div className='aipicker-container'>
            <textarea className='aipicker-textarea' placeholder='Ask AI..'
                value={prompt} rows={5}
                onChange={(e) => setPrompt(e.target.value)}
            />

            <div className='flex flex-wrap gap-3'>
                {generatingImg ? (
                    <CustomButton
                        type='outlined'
                        title='Asking AI...'
                        customStyles="text-xs" />
                ) : (
                    <>
                        <CustomButton
                            type='outlined'
                            title='AI Logo'
                            handleClick={() => handleSubmit('logo')}
                            customStyles="text-xs"
                        />

                        <CustomButton
                            type='filled'
                            title='AI Full'
                            handleClick={() => handleSubmit('full')}
                            customStyles="text-xs"
                        />
                    </>
                )}
            </div>
        </div>
    )
}

export default AIPicker