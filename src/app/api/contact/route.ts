import { NextResponse } from 'next/server';
import { checkRateLimit, getClientIp, DEFAULT_RATE_LIMIT } from '../../../lib/rateLimit';

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request);
    
    // Check rate limit: 5 submissions per minute per IP
    const rateLimitConfig = { interval: 60, maxRequests: 5 };
    const rateLimit = checkRateLimit(clientIp, rateLimitConfig);

    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          message: `Too many requests. Please try again in ${rateLimit.resetIn} seconds.`,
          retryAfter: rateLimit.resetIn,
        },
        { 
          status: 429,
          headers: { 'Retry-After': rateLimit.resetIn.toString() }
        }
      );
    }

    const data = await request.json();

    // Validate required fields
    const { name, email, phone, subject, message } = data;
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Send email notification to owner
    // Example implementation:
    // await sendEmailNotification({
    //   to: process.env.CONTACT_EMAIL,
    //   from: process.env.CONTACT_FROM,
    //   subject: `New Contact: ${subject || 'Website Inquiry'}`,
    //   html: `
    //     <h2>New Contact Request</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `
    // });

    // TODO: Store in database/CRM
    console.log('New contact submission', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ipAddress: clientIp,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you! We'll contact you within 24 hours.",
        remaining: rateLimit.remaining
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact submission failed', error);
    return NextResponse.json(
      { success: false, message: 'Unable to process request' },
      { status: 500 }
    );
  }
}

