const port = process.env.PORT || 6565;
import axios from "axios";

export default {
  async list() {
    const response = await axios.get(`http://localhost:${port}/todos`);
    return response.data;
  },
  async add(todo) {
    await axios.post(`http://localhost:${port}/todos`, todo);
  },
  async remove(id) {
    await axios.delete(`http://localhost:${port}/todos/${id}`);
  },
};
