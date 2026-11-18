// Direct Bitcoin Payment
// BTC Address: bc1q6t7jhqyrvh6qdmrtqg4xswy4wulj3f7wzckacjqa0ndm5sqwrg7qr82ada

export const BTC_ADDRESS = 'bc1q6t7jhqyrvh6qdmrtqg4xswy4wulj3f7wzckacjqa0ndm5sqwrg7qr82ada';

export interface PaymentDetails {
  orderId: string;
  amountUsd: number;
  btcAddress: string;
}

export function generateOrderId(): string {
  return `CV-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

export function createPaymentDetails(amountUsd: number): PaymentDetails {
  return {
    orderId: generateOrderId(),
    amountUsd,
    btcAddress: BTC_ADDRESS,
  };
}
