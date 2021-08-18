export class Button {
    public buttonName: string;
    public endpoint: string;
    public realmId: string;

    constructor(buttonName: string, endpoint: string, realmId: string) {
        this.buttonName = buttonName;
        this.endpoint = endpoint;
        this.realmId = realmId;
    }
}