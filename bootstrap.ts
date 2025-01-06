import { Application } from 'express';

export default class Bootstrap {
    constructor(private app: Application) { }

    async init() {
        // Initialize your application
        // Add middleware, routes, etc.
    }
}