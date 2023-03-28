import * as uuid from "uuid";
import { sendAdminCommand } from "../../admin";


sendAdminCommand({
  action: "StopTransaction",
  messageId: uuid.v4(),
  payload: {
    transactionId: 656851249,
    timestamp: new Date(),
    meterStop: 2000
  }
});
