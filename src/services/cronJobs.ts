import ContainerUptime from '../models/containerUptime';
import Credits from '../models/credits';


// should be updated by some other functionality - created just to test the functionality
export const updateLastPing = async (): Promise<void> => {
  try {
    const now = new Date();
    const result = await ContainerUptime.updateMany(
      { is_active: true },
      { last_ping: now }
    );
    console.log(`✅ Updated last_ping for ${result.modifiedCount} active containers.`);
  } catch (err) {
    console.error('❌ Error updating last_ping:', err);
  }
};

export const processContainerUptime = async (): Promise<void> => {
  const now = new Date();
  const oneMinuteAgo = new Date(now.getTime() - 60 * 1000);

  try {
    const containers = await ContainerUptime.find({
      last_ping: { $gte: oneMinuteAgo },
      is_active: true,
    });

    console.log(`${containers.length} containers found for processing.`);
    for (const container of containers) {
      const { user_address } = container;

      await Credits.findOneAndUpdate(
        { user_address },
        {
          $inc: { total_credits: -1, credits_used: 1 },
        },
        { new: true }
      );
    }
    console.log('Successfully processed container uptimes.');
  } catch (err) {
    console.error('Error processing container uptime:', err);
  }
};
