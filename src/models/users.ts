import mongoose from 'mongoose';

interface User {
  name: string;
  avatar: string;
  about: string;
}

const userSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200,
  },
});

export default mongoose.model<User>('user', userSchema);
