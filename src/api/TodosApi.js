import axios from "axios";

export default {
  async list() {
    const response = await axios.get("http://localhost:6565/todos");
    return response.data;
  },
  async add(todo) {
    await axios.post(`http://localhost:6565/todos`, todo);
  },
  async remove(id) {
    await axios.delete(`http://localhost:6565/todos/${id}`);
  },
};
