import React from 'react';
import Title from './Title';
import backgroundImg from '../assets/images/web/little_dell.jpg';
import ProjectItem from './ProjectItem';

// 1440 Toolz screenshots (2000px wide)
import automatedScheduler from '../assets/images/web/toolz/automated-scheduler.jpg';
import salesforceScheduler from '../assets/images/web/toolz/salesforce-scheduler.jpg';
import apexJobs from '../assets/images/web/toolz/apex-jobs.jpg';
import apexLogs from '../assets/images/web/toolz/apex-logs.jpg';
import traceFlags from '../assets/images/web/toolz/trace-flags.jpg';
import workbenchApex from '../assets/images/web/toolz/workbench-apex.jpg';
import workbenchSoqlDark from '../assets/images/web/toolz/workbench-soql-dark.jpg';
import workbenchFiles from '../assets/images/web/toolz/workbench-files.jpg';
import asyncAnalytics from '../assets/images/web/toolz/async-analytics.jpg';
import orgLimits from '../assets/images/web/toolz/org-limits.jpg';

const data = [
  {
    name: '1440 Toolz',
    publisher: '1440',
    status: 'Free',
    tagline: 'A free admin and developer toolkit that runs inside Salesforce.',
    description: 'Schedule and monitor batch, scheduled and queueable Apex, anonymous blocks and Flows; search debug logs and manage trace flags; write and run Apex and SOQL; and keep an eye on async usage and org limits — without leaving Salesforce.',
    soleDeveloper: 'I am the sole developer of 1440 Toolz. I designed, built and maintain the entire app, end to end.',
    projectLink: 'https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000FAfNCUA1',
    linkLabel: 'Get it free on AppExchange',
    stack: ['Apex', 'Lightning Web Components', 'SOQL', 'Flow', 'Managed package'],
    gallery: [
      { src: automatedScheduler, label: 'Automated Scheduler', caption: 'Batch, scheduled and queueable Apex, anonymous blocks and Flows run on an interval by one master job.' },
      { src: salesforceScheduler, label: 'Salesforce Scheduler', caption: 'Schedule Apex through the standard scheduler with hourly, daily, weekly, monthly or custom cron timing.' },
      { src: apexJobs, label: 'Apex Jobs', caption: 'Batch, queueable, future and scheduled jobs across the org, with status, errors and progress.' },
      { src: apexLogs, label: 'Apex Logs', caption: 'Search debug log bodies across the org, re-run or refine earlier searches, and bulk delete logs.' },
      { src: traceFlags, label: 'Trace Flags', caption: 'Create trace flags for any user with preset or scheduled windows and the debug level of your choice.' },
      { src: workbenchApex, label: 'Workbench · Apex', caption: 'Write, compile and run anonymous Apex with its debug log, one snippet per tab.' },
      { src: workbenchSoqlDark, label: 'Workbench · SOQL', caption: 'Run Query or Tooling API SOQL and copy results as CSV or JSON. Shown here in dark mode.' },
      { src: workbenchFiles, label: 'Shared snippets', caption: 'Save snippets privately or share them with everyone in the org.' },
      { src: asyncAnalytics, label: 'Async Analytics', caption: 'Batch job items and async executions rolled up by Apex class.' },
      { src: orgLimits, label: 'Org Limits', caption: 'Live usage against every governor and allocation limit, sorted by how close each is to its ceiling.' },
    ],
  }
];

const Projects = () => {
  return (
    <div id='projects' className='bg-white relative'>

        { /* Background Img */}
        <div className='absolute w-full h-full'>
            <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="" aria-hidden="true" loading="lazy" />
            <div className='absolute w-full h-1/6 bg-gradient-to-b from-[#969696] to-transparent' style={{ top:0 }}></div>
            <div className='absolute w-full h-1/6 bg-gradient-to-t from-[#5C5C5C] to-transparent' style={{ bottom:0 }}></div>
        </div>

        { /* Section Title */}
        <Title
            index='02'
            eyebrow='Selected work'
            text='Projects'
            description='Products I have designed and built from the ground up.'
            meta={<a href='https://github.com/Chayse-McMillan98' target='_blank' rel='noreferrer' className='transition-colors hover:text-white'>GitHub ↗</a>}
            width='max-w-7xl 2xl:max-w-[min(90vw,110rem)]'
        />

        { /* Project Items */}
        <div className='relative mx-auto grid max-w-7xl gap-6 px-4 pb-20 md:px-8 md:pb-28 2xl:max-w-[min(90vw,110rem)]'>
            {data.map((item) => (
                <ProjectItem key={item.name} project={item} />
            ))}
        </div>
    </div>
  )
}

export default Projects
