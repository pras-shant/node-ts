import { Schema, model, Document } from 'mongoose';

interface IContainerUptime extends Document {
  container_id: string;
  user_address: string;
  nft_id?: string;
  start_time: Date;
  last_ping: Date;
  is_active: boolean;
}

const ContainerUptimeSchema = new Schema<IContainerUptime>({
  container_id: { type: String, required: true, unique: true },
  user_address: { type: String, required: true },
  nft_id: { type: String },
  start_time: { type: Date, required: true },
  last_ping: { type: Date, default: Date.now },
  is_active: { type: Boolean, required: true, default: false },
});

export default model<IContainerUptime>('ContainerUptime', ContainerUptimeSchema);
