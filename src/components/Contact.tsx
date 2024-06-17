'use client';
import React, { useState } from 'react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { cn } from '../lib/utils';
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import Alert from './Alert';
import Earth from './Earth';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const [alert, setAlert] = useState<{
    message: string;
    bgColor: string;
    textColor: string;
  } | null>(null);

  const handleGithubClick = () => {
    window.open('https://github.com/MalekGhazal', '_blank');
  };

  const handleEmailClick = () => {
    const email = 'ghazal.malek@gmail.com';
    navigator.clipboard.writeText(email).then(
      () => {
        setAlert({
          message: 'Email copied to clipboard.',
          bgColor: 'green',
          textColor: 'white',
        });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      },
      (err) => {
        console.error('Failed to copy email: ', err);
      }
    );
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_varnm28',
        'template_pr4tud2',
        '#contactForm',
        'uBdLjeM1Nv0eEvaK-'
      )
      .then((result: { text: string }) => {
        console.log('Email sent successfully:', result.text);
        setAlert({
          message: 'Message Has Been Sent Successfully!',
          bgColor: 'green',
          textColor: 'white',
        });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      })
      .catch((error: { message: string }) => {
        console.error('Error sending email:', error.message);
        setAlert({
          message: 'Error sending your message',
          bgColor: 'red',
          textColor: 'white',
        });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      });

    e.currentTarget.reset();
  };

  return (
    <>
      <div
        id="contact"
        className="flex items-center justify-center flex-wrap bg-white dark:bg-black"
      >
        <Earth />
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-white bg-black">
          <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-800">
            {t('touch')}
          </h2>
          <p className="text-neutral-300 text-sm max-w-sm mt-2 dark:text-neutral-600">
            {t('contact-body')}
          </p>

          <form id="contactForm" className="my-8" onSubmit={sendEmail}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">{t('firstName')}</Label>
                <Input id="firstname" placeholder="Malek" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">{t('lastName')}</Label>
                <Input id="lastname" placeholder="Kazal" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">{t('email')}</Label>
              <Input id="email" placeholder="youremail@host.com" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">{t('message')}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message here ..."
              ></Textarea>
            </LabelInputContainer>

            <button
              className="dark:bg-gradient-to-br relative group/btn bg-gray-50 dark:from-black dark:to-neutral-600 block dark:bg-zinc-800  w-full text-black dark:text-white rounded-md h-10 font-medium dark:shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              {t('send')} &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
                onClick={handleGithubClick}
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
                onClick={handleEmailClick}
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Email
                </span>
                <BottomGradient />
              </button>
            </div>
            {alert && (
              <Alert
                message={alert.message}
                bgColor={alert.bgColor}
                textColor={alert.textColor}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-black to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-black to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2 w-full', className)}>
      {children}
    </div>
  );
};
