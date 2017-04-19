import Event from "./lib/Event";

class FDBVersionChangeEvent extends Event {
    public newVersion: number | null;
    public oldVersion: number;

    constructor(
        type: "blocked" | "upgradeneeded" | "versionchange",
        parameters: {newVersion?: number, oldVersion?: number} = {},
    ) {
        super(type);

        this.newVersion = parameters.newVersion !== undefined ? parameters.newVersion : null;
        this.oldVersion = parameters.oldVersion !== undefined ? parameters.oldVersion : 0;
    }

    public toString() {
        return "[object IDBVersionChangeEvent]";
    }
}

export default FDBVersionChangeEvent;
