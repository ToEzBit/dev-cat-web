import axios from '../config/axios';

//input: userId, productId, packageId
export const createOrder = async (input) => {
  await axios.post('/orders/create-order', input);
};

//input: orderId, userId
export const createPaymentIntent = async (input) =>
  await axios.post('/orders/create-payment', input);

//input title, detail, price, duration
export const createSpecialRequirement = async (input) => {
  await axios.post('/orders/special-requirement', input);
};

export const deleteSpecialRequirement = async (specialRequirementId) => {
  await axios.delete(`/orders/special-requirement/${specialRequirementId}`);
};

// dev's side
// input = status : Inprogress(start working), awaitingReview(submit work), cancelled(cancel work)
export const updateOrderStatus = async (input, orderId) => {
  await axios.patch(`/orders/${orderId}/status`);
};

//transactionId
export const orderPayment = async (input, orderId) => {
  await axios.post(`/orders/${orderId}/payment`, input);
};

//user's side
export const OrderIsCompleted = async (orderId) => {
  await axios.patch(`/orders/${orderId}/complete/user`);
};

//user's side
//input: reviewDetail
export const orderNeedsRevision = async (input, orderId) => {
  await axios.patch(`/orders/${orderId}/review`, input);
};
