
class Key {
    private signature: number = Math.random();
    getSignature() {
        return this.signature
    }
}
class Person {
    constructor(private key: Key) { }
    getKey() {
        return this.key
    }
}
abstract class House {
    protected door: boolean = false;
    protected tenants: Person[] = [];

    constructor(protected key: Key) { }

    comeIn(tenant: Person) {
        if (!this.door) {
            throw new Error("The door is close!");
        }
        this.tenants.push(tenant)
    }
    abstract openDoor(key: Key): void
}
class MyHouse extends House {
    openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };