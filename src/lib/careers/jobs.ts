export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
export type WorkplaceType = 'On-site' | 'Hybrid' | 'Remote';

export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  employmentType: EmploymentType;
  workplaceType: WorkplaceType;
  shortDescription: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  postedAt: string;
  validThrough: string;
};

const jobs: Job[] = [
  {
    slug: 'chiller-operator-columbiana',
    title: 'Chiller Operator',
    team: 'Operations',
    location: 'Columbiana, AL 35051',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    shortDescription:
      'Operate and monitor critical chiller systems to ensure reliable thermal performance across facility operations.',
    description:
      'The Chiller Operator is responsible for the day-to-day operation, monitoring, and preventive maintenance of cooling systems supporting mission-critical environments.',
    responsibilities: [
      'Monitor chiller, pump, and cooling loop performance across all operational shifts.',
      'Perform scheduled inspections and document system readings and maintenance logs.',
      'Troubleshoot equipment anomalies and coordinate corrective actions with facility teams.',
      'Support safety, compliance, and incident response procedures for critical operations.',
    ],
    requirements: [
      '3+ years of experience in HVAC, chiller operations, or critical facility environments.',
      'Strong understanding of mechanical systems, controls, and preventive maintenance.',
      'Ability to work rotational schedules and respond to operational incidents.',
      'Clear communication and documentation skills.',
    ],
    niceToHave: [
      'EPA certification or similar technical credentials.',
      'Data center or industrial plant operations background.',
    ],
    postedAt: '2026-01-12',
    validThrough: '2026-08-31',
  },
  {
    slug: 'data-center-mep-engineer-manager',
    title: 'Data Center MEP Engineer / MEP Manager',
    team: 'Engineering',
    location: 'Columbiana, AL',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    shortDescription:
      'Lead multidisciplinary mechanical, electrical, and plumbing execution for high-performance infrastructure.',
    description:
      'This role owns MEP design coordination and construction oversight, ensuring resilient and scalable infrastructure delivery aligned with operational goals.',
    responsibilities: [
      'Coordinate MEP engineering scope across design consultants, contractors, and internal teams.',
      'Review drawings, submittals, and commissioning plans for quality and code compliance.',
      'Drive schedule, budget, and risk controls for MEP packages through project lifecycle.',
      'Partner with operations teams to ensure maintainability and reliability targets are met.',
    ],
    requirements: [
      '7+ years in MEP engineering or construction management in critical environments.',
      'Strong knowledge of electrical distribution, cooling systems, and building controls.',
      'Experience with commissioning, QA/QC workflows, and field issue resolution.',
      'Ability to manage multiple stakeholders and communicate technical tradeoffs clearly.',
    ],
    niceToHave: [
      'PE license or equivalent technical accreditation.',
      'Prior hyperscale or colocation data center project experience.',
    ],
    postedAt: '2026-01-22',
    validThrough: '2026-08-31',
  },
  {
    slug: 'chiller-operator-north-tonawanda',
    title: 'Chiller Operator',
    team: 'Operations',
    location: '1070 Erie Ave, North Tonawanda, NY 14120',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    shortDescription:
      'Maintain thermal reliability and uptime for mission-critical facility systems in the North Tonawanda site.',
    description:
      'This role focuses on safe and efficient operation of thermal and mechanical systems, with emphasis on uptime, preventive maintenance, and incident readiness.',
    responsibilities: [
      'Run daily equipment checks and maintain operating logs for cooling infrastructure.',
      'Execute preventive maintenance tasks and coordinate planned maintenance windows.',
      'Respond to alarms and operational events with structured troubleshooting workflows.',
      'Collaborate with site engineering and safety teams to maintain compliance standards.',
    ],
    requirements: [
      '3+ years of facility operations or mechanical systems experience.',
      'Working knowledge of chiller plants, pumps, and building automation systems.',
      'Ability to read technical diagrams and execute operating procedures accurately.',
      'Commitment to safety and process discipline in critical environments.',
    ],
    niceToHave: [
      'Experience in 24/7 critical facilities.',
      'Trade certifications related to HVAC or mechanical operations.',
    ],
    postedAt: '2026-02-05',
    validThrough: '2026-08-31',
  },
];

export function getAllJobs(): readonly Job[] {
  return jobs;
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getJobSlugs(): string[] {
  return jobs.map((job) => job.slug);
}
