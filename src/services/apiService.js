import { OROKII_BASE_URL } from '../config/constants';

export const processCardPayment = async (paymentData) => {
  try {
    const response = await fetch(`${OROKII_BASE_URL}/payment/simple-card-tokenized`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData)
    });
    return handleApiResponse(response);
  } catch (error) {
    throw new PaymentError('Card processing failed', error);
  }
};

const handleApiResponse=async (response) => {
  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }
  return response.json();
};