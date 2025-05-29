
import { Router } from 'express';
import { readFile, writeFile } from '../utils/fileManager';
import { Order, OrderStatus } from '../types';

const router = Router();

// POST /api/verify - Verify order with confirmation code
router.post('/', async (req, res) => {
  try {
    const { confirmationCode, chefId } = req.body;

    // Validate required fields
    if (!confirmationCode || !chefId) {
      return res.status(400).json({ 
        error: 'Missing required fields: confirmationCode, chefId' 
      });
    }

    // Validate confirmation code format (4 digits)
    if (!/^\d{4}$/.test(confirmationCode)) {
      return res.status(400).json({ 
        error: 'Confirmation code must be 4 digits' 
      });
    }

    const orders = await readFile<Order[]>('orders.json');
    
    // Find order with matching confirmation code and chef ID
    const orderIndex = orders.findIndex(
      order => order.confirmationCode === confirmationCode && 
               order.chefId === chefId &&
               order.status === 'pending'
    );

    if (orderIndex === -1) {
      return res.status(404).json({ 
        error: 'Order not found or already completed' 
      });
    }

    // Update order status to completed
    orders[orderIndex].status = 'completed' as OrderStatus;
    orders[orderIndex].completedAt = new Date().toISOString();

    await writeFile('orders.json', orders);

    res.json({ 
      message: 'Order verified and completed successfully',
      order: orders[orderIndex]
    });
  } catch (error) {
    console.error('Error verifying order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
