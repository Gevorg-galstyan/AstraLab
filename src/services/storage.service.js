const storage = window.localStorage;

export const StorageService = {
    get: async key => JSON.parse((await storage).getItem(key)),
    set: async (key, value) => (await storage).setItem(key, JSON.stringify(value)),
    delete: async key => (await storage).removeItem(key),
};
