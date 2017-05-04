import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    require: true,
    minLength: [5, 'Title must be 5 characters long'],
  },
  description: {
    type: String,
    require: true,
    minLength: [10, 'Title must be 10 characters long'],
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupSchema);
