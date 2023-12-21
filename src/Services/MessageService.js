import GenericService from "./GenericServices";

class MessageService extends GenericService {
  sendmessage = (data) => this.post("messages/send_message", data);
  getlogs = () => this.get("messages/logs");
}
let messageService = new MessageService();
export default messageService;
