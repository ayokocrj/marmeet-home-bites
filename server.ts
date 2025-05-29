import mealsRouter from './api/meals';
import ordersRouter from './api/orders';
import verifyRouter from './api/verify';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/meals', mealsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/verify', verifyRouter);