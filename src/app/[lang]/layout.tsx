import type { Metadata } from 'next';
import Script from 'next/script';
import '../globals.css';

const { env } = process;

import { JetBrains_Mono } from 'next/font/google';

import { SupportedLanguages } from '@/utils/i18n';

import SnowComponent from '@/components/snow';

const JetBrainsMono = JetBrains_Mono({
  weight: '800',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "ManghiDev",
  authors: [{
    name: "ManghiDev",
  }],
  description: "With manghidev you can make your ideas come true, with the professionalism that will help you create your mobile or web project, from the initial idea to its launch.",
  keywords: ['ManghiDev', 'manghidev', 'manghi', 'dev', 'development', 'web', 'mobile', 'app', 'android', 'ios', 'design', 'programming', 'professional', 'team', 'ideas', 'reality', 'project', 'idea', 'launch', 'startup', 'start-up'],
};

export const generateStaticParams = async () => SupportedLanguages.map(({ code }) => ({ lang: code }));

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      {
        env.NODE_ENV === 'production' && <>
          <head>
            <Script
              defer
              src="https://umami.byfruits.dev/script.js"
              data-website-id="eaa9331e-14e6-4b4d-aa55-7ed89cb7bd9a"
            />
            <meta name="google-adsense-account" content="ca-pub-4108962150005369" />
          </head>
        </>
      }
      <body className={`text-[#0D1117] dark:text-[#F8F8F8] bg-[#F8F8F8] dark:bg-[#0D1117] ${JetBrainsMono.className} antialiased`} >
        <SnowComponent months={[1, 11, 12]} particleNumberByMonthPosition={[50, 100, 450]} idChristmasHat="personalDescription" />

        {children}
      </body>
    </html>
  );
}