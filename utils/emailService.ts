
// Mock email service for development
// In production, replace with real email service (SendGrid, Mailgun, etc.)

export interface EmailData {
  to: string;
  subject: string;
  template: 'order_confirmation' | 'pickup_ready';
  data: {
    customerName?: string;
    orderNumber?: string;
    confirmationCode?: string;
    pickupTime?: string;
    chefName?: string;
    mealName?: string;
  };
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('📧 EMAIL SENT (MOCK):', {
    to: emailData.to,
    subject: emailData.subject,
    template: emailData.template,
    data: emailData.data
  });

  // Simulate 95% success rate
  return Math.random() > 0.05;
};

export const sendOrderConfirmation = async (
  customerEmail: string,
  orderData: {
    customerName: string;
    orderNumber: string;
    confirmationCode: string;
    pickupTime: string;
    chefName: string;
    mealName: string;
  }
) => {
  return sendEmail({
    to: customerEmail,
    subject: `Commande confirmée - Code: ${orderData.confirmationCode}`,
    template: 'order_confirmation',
    data: orderData
  });
};
