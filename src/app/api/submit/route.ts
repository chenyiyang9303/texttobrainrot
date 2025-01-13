import { NextResponse } from 'next/server';
import { sendAdminNotification, sendUserConfirmation } from '@/lib/email';

export async function POST(request: Request) {
  try {
    console.log('Received form submission request');
    const body = await request.json();
    console.log('Request body:', body);
    
    // 验证必填字段
    const requiredFields = ['text', 'mode', 'language', 'voice', 'backgroundVideo', 'backgroundAudio'];
    for (const field of requiredFields) {
      if (!body[field]) {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // 验证文本长度
    if (body.text.length < 200 || body.text.length > 2000) {
      console.error('Invalid text length:', body.text.length);
      return NextResponse.json(
        { error: 'Text length must be between 200 and 2000 characters' },
        { status: 400 }
      );
    }

    console.log('Starting to send emails');
    
    try {
      // 发送邮件通知
      await Promise.all([
        sendAdminNotification(body).catch(error => {
          console.error('Error sending admin notification:', error);
          throw error;
        }),
        sendUserConfirmation(body.email).catch(error => {
          console.error('Error sending user confirmation:', error);
          throw error;
        })
      ]);
      
      console.log('Emails sent successfully');
    } catch (error) {
      console.error('Error sending emails:', error);
      return NextResponse.json(
        { error: 'Failed to send notification emails' },
        { status: 500 }
      );
    }

    // 返回成功响应
    return NextResponse.json({
      success: true,
      message: 'Your request has been received. We will notify you via email when it\'s ready.',
      estimatedTime: '30-60 minutes'
    });
    
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
