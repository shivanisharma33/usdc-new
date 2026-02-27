import { NextResponse } from 'next/server';

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const payload = {
      jobTitle: readString(formData, 'jobTitle'),
      jobSlug: readString(formData, 'jobSlug'),
      fullName: readString(formData, 'fullName'),
      email: readString(formData, 'email'),
      phone: readString(formData, 'phone'),
      linkedInUrl: readString(formData, 'linkedInUrl'),
      portfolioUrl: readString(formData, 'portfolioUrl'),
      coverLetter: readString(formData, 'coverLetter'),
    };

    const resume = formData.get('resume');

    const missingFields = [
      ['jobTitle', payload.jobTitle],
      ['fullName', payload.fullName],
      ['email', payload.email],
      ['phone', payload.phone],
      ['linkedInUrl', payload.linkedInUrl],
      ['coverLetter', payload.coverLetter],
    ]
      .filter(([, value]) => !value)
      .map(([fieldName]) => fieldName);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: `Missing required fields: ${missingFields.join(', ')}`,
        },
        { status: 400 }
      );
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Resume file is required.',
        },
        { status: 400 }
      );
    }

    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        {
          success: false,
          message: 'Resume file must be smaller than 5MB.',
        },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 800));

    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

    console.info('[careers.apply] simulated application save', {
      applicationId,
      ...payload,
      resumeName: resume.name,
      resumeType: resume.type,
      resumeSize: resume.size,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully.',
        applicationId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[careers.apply] failed to process application', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to process application at this time.',
      },
      { status: 500 }
    );
  }
}
