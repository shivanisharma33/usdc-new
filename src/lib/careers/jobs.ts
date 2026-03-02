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
  whyItMatters?: string;
  workEnvironment?: string;
};

const jobs: Job[] = [
  {
    slug: 'chiller-operator-columbiana',
    title: 'Chiller Operator / Data Center Mechanical Technician',
    team: 'Operations',
    location: 'Columbiana, AL 35051',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    shortDescription:
      'Operate and monitor critical chiller systems to ensure reliable thermal performance in a mission-critical data center environment.',
    description:
      'We are seeking an experienced Chiller Operator / Mechanical Technician to support mission-critical cooling infrastructure in a high-availability data center environment. This role is responsible for the operation, monitoring, maintenance, and optimization of chilled water systems and associated mechanical equipment supporting redundant (N+1 / 2N) configurations. The ideal candidate has hands-on experience with industrial chillers, closed-loop cooling systems, pumps, heat exchangers, and control systems.',
    responsibilities: [
      'Operate, start up, shut down, and monitor water-cooled and air-cooled chillers, cooling towers, and pumping systems.',
      'Maintain optimal system performance under continuous load conditions, monitoring flow rates and pressures.',
      'Operate and maintain N+1 and 2N redundant configurations and execute controlled failover procedures.',
      'Maintain and troubleshoot closed-loop chilled water systems, including expansion tanks and loop pressurization.',
      'Perform preventative and corrective maintenance on chillers, pumps, valves, actuators, and VFDs.',
      'Utilize BMS / BAS / SCADA systems for monitoring and respond to alerts and alarms in real time.',
      'Follow all safety protocols, lockout/tagout procedures, and maintain OSHA compliance standards.',
    ],
    requirements: [
      '5+ years of experience operating and maintaining industrial or data center cooling systems.',
      'Hands-on experience with major chiller manufacturers (e.g., Trane, Carrier, York, Daikin).',
      'Strong understanding of hydronic systems, closed-loop cooling, and redundant mechanical design.',
      'Ability to read P&IDs, mechanical drawings, and electrical schematics.',
      'Experience in mission-critical or Tier III / Tier IV environments preferred.',
    ],
    niceToHave: [
      'EPA Certification (Universal).',
      'Experience with high-density AI / HPC cooling environments or direct-to-chip liquid cooling.',
      'Background in commissioning support and load bank testing.',
    ],
    postedAt: '2026-03-02',
    validThrough: '2026-09-30',
    whyItMatters:
      'This position is critical to ensuring infrastructure reliability, scalability, and operational excellence in a high-performance computing environment.',
    workEnvironment:
      '24/7 critical infrastructure facility. May require shift work, on-call rotation, and emergency response availability.',
  },
  {
    slug: 'data-center-mep-engineer-manager',
    title: 'Data Center MEP Engineer / MEP Manager',
    team: 'Engineering',
    location: 'Columbiana, AL',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    shortDescription:
      'Lead the design, coordination, and commissioning of critical mechanical, electrical, and plumbing systems.',
    description:
      'We are seeking an experienced Data Center MEP Engineer / Manager to lead the design, coordination, commissioning, and ongoing optimization of mechanical, electrical, and plumbing systems in a mission-critical data center environment. This role is responsible for ensuring infrastructure reliability, scalability, and efficiency across high-density compute deployments, including liquid cooling and large-scale chilled water systems.',
    responsibilities: [
      'Oversee design and operation of chilled water plants, closed-loop hydronic systems, and CDUs.',
      'Validate heat load calculations, thermal capacity planning, and optimize PUE/cooling efficiency.',
      'Manage design of utility service, switchgear, 480V/415V distribution, UPS systems, and generators.',
      'Support load modeling, capacity planning, and oversee short-circuit, coordination, and arc-flash studies.',
      'Oversee domestic water, process water, glycol systems, and coordinate leak detection monitoring.',
      'Review engineering drawings (P&IDs, one-lines) and lead integrated systems testing (IST).',
      'Lead commissioning efforts for new pods or expansions and maintain SOPs/MOPs.',
    ],
    requirements: [
      '7+ years experience in MEP engineering within data centers or critical infrastructure environments.',
      'Strong understanding of redundant electrical configurations and closed-loop mechanical systems.',
      'Experience reading and reviewing electrical one-line diagrams and mechanical schematics.',
      'Experience with commissioning and construction oversight.',
      'Bachelor’s degree in Mechanical, Electrical, or related Engineering field (PE preferred).',
    ],
    niceToHave: [
      'Experience with high-density AI / HPC deployments and direct-to-chip liquid cooling.',
      'Prior experience with modular data center pods and utility interconnection coordination.',
      'Experience in large MW-scale deployments (10MW+ environments).',
    ],
    postedAt: '2026-03-02',
    validThrough: '2026-09-30',
    whyItMatters:
      'This position is critical to ensuring infrastructure reliability, scalability, and operational excellence in a high-performance computing environment. The MEP Engineer plays a foundational role in enabling uptime, expansion readiness, and long-term operational efficiency.',
    workEnvironment:
      'On-site presence required. May require extended hours during commissioning and on-call support.',
  },
  {
    slug: 'chiller-operator-north-tonawanda',
    title: 'Chiller Operator / Data Center Mechanical Technician',
    team: 'Operations',
    location: '1070 Erie Ave, North Tonawanda, NY 14120',
    employmentType: 'Full-time',
    workplaceType: 'On-site',
    shortDescription:
      'Maintain thermal reliability and uptime for mission-critical mechanical systems in the North Tonawanda site.',
    description:
      'We are seeking an experienced Chiller Operator / Mechanical Technician to support mission-critical cooling infrastructure in a high-availability data center environment. This role is responsible for the operation, monitoring, maintenance, and optimization of chilled water systems and associated mechanical equipment supporting redundant (N+1 / 2N) configurations. You will ensure systems operate within design parameters to support 24/7 uptime.',
    responsibilities: [
      'Operate, start up, shut down, and monitor water-cooled and air-cooled chillers and cooling towers.',
      'Maintain optimal system performance under continuous load conditions and monitor chilled water deltas.',
      'Execute controlled failover procedures and participate in integrated systems testing (IST).',
      'Manage expansion tanks, air separators, loop pressurization, and monitor water chemistry.',
      'Perform preventative and corrective maintenance on chillers, pumps, valves, and heat exchangers.',
      'Utilize BMS / BAS / SCADA systems for real-time monitoring and alarm response.',
      'Support audits and inspections related to mechanical systems and follow safety protocols.',
    ],
    requirements: [
      '5+ years of experience operating and maintaining industrial or data center cooling systems.',
      'Familiarity with major chiller manufacturers like Trane, Carrier, York, or Daikin.',
      'Strong understanding of hydronic systems and closed-loop cooling configurations.',
      'Ability to read technical diagrams and execute operating procedures accurately.',
      'Experience in 24/7 mission-critical environments.',
    ],
    niceToHave: [
      'EPA Certification (Universal).',
      'Experience with High-density AI / HPC cooling or direct-to-chip liquid cooling systems.',
      'Traceable experience in Tier III or Tier IV data center operations.',
    ],
    postedAt: '2026-03-02',
    validThrough: '2026-09-30',
    whyItMatters:
      'This position ensures infrastructure reliability and operational excellence in a high-performance environment.',
    workEnvironment:
      '24/7 critical infrastructure facility. Requires on-call support and emergency response availability.',
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
