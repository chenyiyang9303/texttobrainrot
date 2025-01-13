import nodemailer from 'nodemailer';

// 配置邮件发送器
const transporter = nodemailer.createTransport({
  service: 'gmail',  // 或其他邮件服务
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD  // 使用应用专用密码
  }
});

// 发送给管理员的通知邮件
export async function sendAdminNotification(submissionData: any) {
  const adminEmail = process.env.ADMIN_EMAIL;
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: '新的视频生成请求',
    html: `
      <h2>收到新的视频生成请求</h2>
      <p><strong>用户邮箱：</strong> ${submissionData.email}</p>
      <p><strong>生成模式：</strong> ${submissionData.mode}</p>
      <p><strong>选择语言：</strong> ${submissionData.language}</p>
      <p><strong>语音类型：</strong> ${submissionData.voice}</p>
      <h3>文本内容：</h3>
      <p>${submissionData.text}</p>
      <hr>
      <p>时间：${new Date().toLocaleString()}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Admin notification email sent successfully');
  } catch (error) {
    console.error('Error sending admin notification:', error);
  }
}

// 发送给用户的确认邮件
export async function sendUserConfirmation(userEmail: string) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Video Generation Request Received',
    html: `
      <h2>We've Received Your Request!</h2>
      <p>Thank you for using our service. We have received your video generation request.</p>
      <p>We will process your request and get back to you soon.</p>
      <p>Best regards,<br>Your Video Generation Team</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('User confirmation email sent successfully');
  } catch (error) {
    console.error('Error sending user confirmation:', error);
  }
}
