import { Schema, model, Document } from 'mongoose';

interface ICredits extends Document {
  user_address: string;
  total_credits: number;
  credits_used: number;
  last_checked: Date;
}

const CreditsSchema = new Schema<ICredits>({
  user_address: { type: String, required: true, unique: true },
  total_credits: { type: Number, required: true },
  credits_used: { type: Number, default: 0 },
  last_checked: { type: Date, default: Date.now },
});

export default model<ICredits>('Credits', CreditsSchema);
