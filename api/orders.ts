
import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from '../utils/fileManager';
import { Order, OrderStatus } from '../types';

const router = Router();

// POST /api/orders - Create a new order
router.post('/', async (req, res) => {
  try {
    const { mealId, clientId, chefId, quantity, pickupTime } = req.body;

    // Validate required fields
    if (!mealId || !clientId || !chefId || !quantity || !pickupTime) {
      return res.status(400).json({ 
        error: 'Missing required fields: mealId, clientId, chefId, quantity, pickupTime' 
      });
    }

    // Generate confirmation code (4 digits)
    const confirmationCode = Math.floor(1000 + Math.random() * 9000).toString();

    const newOrder: Order = {
      id: uuidv4(),
      mealId,
      clientId,
      chefId,
      quantity,
      pickupTime,
      confirmationCode,
      status: 'pending' as OrderStatus,
      createdAt: new Date().toISOString()
    };

    const orders = await readFile<Order[]>('orders.json');
    orders.push(newOrder);
    await writeFile('orders.json', orders);

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/orders/chef/:id - Get orders for a specific chef
router.get('/chef/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Chef ID is required' });
    }

    const orders = await readFile<Order[]>('orders.json');
    const chefOrders = orders.filter(order => order.chefId === id);

    res.json(chefOrders);
  } catch (error) {
    console.error('Error fetching chef orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/orders/client/:id - Get orders for a specific client
router.get('/client/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Client ID is required' });
    }

    const orders = await readFile<Order[]>('orders.json');
    const clientOrders = orders.filter(order => order.clientId === id);

    res.json(clientOrders);
  } catch (error) {
    console.error('Error fetching client orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/orders/:id - Get specific order details
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Order ID is required' });
    }

    const orders = await readFile<Order[]>('orders.json');
    const order = orders.find(order => order.id === id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
