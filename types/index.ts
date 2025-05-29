export interface Order {
  id: string;
  mealId: string;
  clientId: string;
  chefId: string;
  quantity: number;
  pickupTime: string;
  confirmationCode: string;
  status: OrderStatus;
  createdAt: string;
  completedAt?: string;
}