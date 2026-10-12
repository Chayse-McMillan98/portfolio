import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { WindowCard } from './ui';
import { profile } from '../data/resume';

const fieldClass = 'w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-white/30 focus:ring-4 focus:ring-white/5';

const Field = ({ id, label, children }) => (
    <div className='flex flex-col gap-1.5'>
        <label htmlFor={id} className='font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400'>{label}</label>
        {children}
    </div>
);

const ContactForm = () => {
    return (
        <WindowCard bar={<span className='font-mono text-xs text-zinc-400'>new message → {profile.email}</span>}>
                <form action='https://getform.io/f/06ce6abb-c193-4e23-bbee-a060bbb55ba3' method='POST' encType='multipart/form-data' className='grid gap-4 p-5 md:p-6'>
                    <div className='grid gap-4 md:grid-cols-2'>
                        <Field id='contact-name' label='Name'>
                            <input id='contact-name' className={fieldClass} type='text' name='name' autoComplete='name'/>
                        </Field>
                        <Field id='contact-phone' label='Phone'>
                            <input id='contact-phone' className={fieldClass} type='tel' name='phone' autoComplete='tel'/>
                        </Field>
                    </div>
                    <Field id='contact-email' label='Email'>
                        <input id='contact-email' className={fieldClass} type='email' name='email' autoComplete='email'/>
                    </Field>
                    <Field id='contact-subject' label='Subject'>
                        <input id='contact-subject' className={fieldClass} placeholder='Let me know how I can help.' type='text' name='subject'/>
                    </Field>
                    <Field id='contact-message' label='Message'>
                        <textarea id='contact-message' className={fieldClass} placeholder='Leave a comment...' rows='7' name='message'></textarea>
                    </Field>
                    <div className='flex justify-end pt-1'>
                        <button type='submit' className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 shadow-sm transition-colors hover:bg-zinc-200 md:w-auto'>
                            Send message <AiOutlineSend aria-hidden="true" />
                        </button>
                    </div>
                </form>
        </WindowCard>
    )
}

export default ContactForm
