// Single source of truth for the Resume and Work sections, and the PDF
// (`npm run resume:pdf`). Update content here — everything renders from it.

export const profile = {
    name: 'Chayse McMillan',
    title: 'Principal Engineer – Commerce',
    location: 'Salt Lake City, UT',
    email: 'chayse@chayse-mcmillan.com',
    links: [
        { name: 'Website', label: 'chayse-mcmillan.com', href: 'https://chayse-mcmillan.com' },
        { name: 'LinkedIn', label: 'linkedin.com/in/chayse-mcmillan', href: 'https://www.linkedin.com/in/chayse-mcmillan' },
        { name: 'GitHub', label: 'github.com/Chayse-McMillan98', href: 'https://github.com/Chayse-McMillan98' },
    ],
    summary: 'Principal engineer specializing in Salesforce-based commerce. I architect order, payment, and fulfillment systems for major retail brands, set technical direction across multiple engineering teams, and mentor engineers — with a focus on scalability, reliability, and integrations that hold up at volume.',
};

// Each company lists its roles newest first; promotions show as multiple roles.
export const experience = [
    {
        id: '1440',
        company: '1440',
        companyLink: 'https://www.1440.io/',
        location: 'Park City, UT',
        start: 'Jul 2021',
        end: 'Present',
        summary: 'Architecting Salesforce-based commerce platforms for brands including Playboy, Goodwill Finds, Linda\'s Stuff, Chalktalk Sports, and Scotts Lawn and Garden — leading marketplace, shipping, and payment integrations and setting engineering direction across teams.',
        roles: [
            {
                title: 'Principal Engineer – Commerce',
                start: 'Jan 2025',
                end: 'Present',
                highlights: [
                    'Architect critical commerce systems and drive engineering strategy across multiple teams.',
                    'Lead complex commerce integrations for large retail brands, from discovery through production.',
                    'Shape technical direction with a focus on scalability and reliability.',
                    'Mentor engineers and lead code review standards.',
                ],
            },
            {
                title: 'Software Engineer',
                start: 'Jul 2021',
                end: 'Jan 2025',
                highlights: [
                    'Built and maintained integrations between Salesforce and Shopify, Amazon, eBay, Magento, and SFCC for enterprise retail clients.',
                    'Integrated shipping (Shippo, ShipJunction, Desktop Shipper) and payments (Stripe, PayPal) into Salesforce OMS flows.',
                    'Contributed to executive-level software architecture decisions and served as development team lead.',
                    'Created internal tooling that automated company processes and streamlined product support.',
                ],
            },
        ],
        stack: ['Apex', 'LWC', 'Visualforce', 'SOQL', 'Flow', 'Salesforce OMS', 'OCI'],
    },
    {
        id: 'dakcs',
        company: 'DAKCS Software Systems',
        companyLink: 'https://www.dakcs.com/',
        location: 'Ogden, UT',
        start: 'Feb 2019',
        end: 'Jan 2021',
        summary: 'Developed debt collection and receivables management software across the full stack — platform services, cloud Java applications, middleware, and integrations — for a long-established industry provider.',
        roles: [
            {
                title: 'Software Developer',
                start: 'Feb 2019',
                end: 'Jan 2021',
                highlights: [
                    'Maintained and enhanced core platform services, cloud-based Java applications, and AWS-hosted infrastructure.',
                    'Developed middleware components and integrations for data transfer and API communication.',
                    'Built CRUD and reporting operations with DSXQI, a MySQL-like query interface.',
                    'Helped modernize legacy systems and improve developer tooling across BASIC, C++, C#, Python, Bash, and Java.',
                ],
            },
        ],
        stack: ['Java', 'AWS', 'Python', 'C#', 'C++', 'Bash', 'MySQL'],
    },
];

export const skills = [
    {
        group: 'Architecture & Leadership',
        items: ['Solution Architecture', 'API Design & Integration', 'Engineering Strategy', 'Code Review', 'Mentorship', 'Agile'],
    },
    {
        group: 'Salesforce',
        items: ['Apex', 'Lightning Web Components', 'Visualforce', 'SOQL', 'Flow', 'Order Management', 'Omnichannel Inventory'],
    },
    {
        group: 'Languages & Web',
        items: ['JavaScript', 'Java', 'Python', 'C#', 'C++', 'SQL', 'HTML/CSS', 'Bash'],
    },
    {
        group: 'Commerce & Integrations',
        items: ['Shopify', 'Amazon', 'eBay', 'Magento', 'SFCC', 'Stripe', 'PayPal', 'Shippo'],
    },
    {
        group: 'Domain',
        items: ['Global eCommerce', 'OMS', 'ERP', 'WMS', '3PL'],
    },
];

export const education = [
    {
        school: 'Ogden-Weber Technical College',
        degree: 'Associate\'s in Computer Science',
        location: 'Ogden, UT',
        start: '2016',
        end: '2018',
        detail: 'Coursework in Java, C#, cross-platform mobile development, and MySQL.',
    },
];

export const certifications = [
    { name: 'Salesforce Certified Platform Developer I', year: '2022' },
];

export const awards = [
    { name: 'SkillsUSA — 2nd Place, Coding Competition', year: '2019' },
];
