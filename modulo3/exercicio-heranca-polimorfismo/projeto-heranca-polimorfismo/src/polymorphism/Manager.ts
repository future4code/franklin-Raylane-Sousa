
import { InterfaceClientLbn } from "./models/InterfaceClientLbn";

export class ClientManager {
private clients: InterfaceClientLbn[] = [];

public getClientsQuantity(){
    return this.clients.length;
}
public registerClient(client: InterfaceClientLbn): void {
    this.clients.push(client);
}
} 