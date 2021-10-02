import {
    createServer,
    Model,
    Factory,
    hasMany,
    belongsTo,
    trait,
    afterCreate,
    association,
} from "miragejs";
import faker from "faker";

export function makeServer({ environment = "development" }) {
    return createServer({
        environment,
        factories: {
            restaurant: Factory.extend({
                name() {
                    return faker.company.companyName()
                },
                location() {
                    const [lat, long] = faker.address.nearbyGPSCoordinate([29.749907, -95.358421], faker.datatype.number({ min: 0.25, max: 5 }))
                    return [Number(lat), Number(long)]
                },
                rating() {
                    return [faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 })]
                },
                averagePrice() {
                    return faker.datatype.float({ min: 10, max: 30 })
                },
                genre() {
                    return faker.random.arrayElement(["Vietnamese", "Indian", "Comfort", "American", "Thai"])
                },
                averageWait() {
                    return [faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 })]
                }
            }),
            aggregate: Factory.extend({
                rating() {
                    return [faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 }), faker.datatype.float({ min: 3, max: 5 })]
                },
                averagePrice() { return faker.datatype.float({ min: 10, max: 30 }) },
                averageWait() {
                    return [faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 }), faker.datatype.float({ min: 0, max: 45 })]
                },
            })
        },
        models: {
            restaurant: Model.extend({}),
            aggregate: Model.extend({})
        },
        routes() {
            this.timing = 0;
            this.namespace = "api";
            this.get("/restaurants");
            this.get("/aggregates");
            // this.passthrough();
            this.passthrough("https://api.mapbox.com/**");
            this.passthrough("https://events.mapbox.com/**");
        },
        seeds(server) {
            server.createList("restaurant", 20);
            server.create("aggregate");
            console.log(server.db.dump());
        }
    })
}