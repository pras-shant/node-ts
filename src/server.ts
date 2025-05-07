import app from './app';
import cron from 'node-cron';
import { updateLastPing, processContainerUptime } from './services/cronJobs';

const PORT = process.env.PORT || 3000;

// Schedule Cron Jobs
cron.schedule('*/2 * * * *', async () => {
  console.log('Running scheduled task: updateLastPing');
  await updateLastPing();
});

cron.schedule('*/1 * * * *', async () => {
  console.log('Running scheduled task: processContainerUptime');
  await processContainerUptime();
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
