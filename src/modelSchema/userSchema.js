import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  id: String,
  user_name: String,
  password: Boolean,
  name: String,
  phone_no: String,
  user_token: string,
  created_at:new Date(),
  updated_at: Date,
}, {
  timestamps: true
});

const Blog = model('user_detail', blogSchema);
export default Blog;
