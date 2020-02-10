
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, resource_name: "Starling", description: "harness global partnerships", completed: false },
        { id: 2, resource_name: "Knutson", description: "transform plug-and-play markets", completed: true },
        { id: 3, resource_name: "Maywood", description: "evolve best-of-breed initiatives", completed: false },
        { id: 4, resource_name: "Clyde Gallagher", description: "mesh sexy technologies", completed: false },
        { id: 5, resource_name: "Fallview", description: "drive innovative partnerships", completed: false },
        { id: 6, resource_name: "Clarendon", description: "leverage back-end e-commerce", completed: false },
        { id: 7, resource_name: "Carey", description: "leverage leading-edge content", completed: true },
        { id: 8, resource_name: "Dunning", description: "target innovative synergies", completed: false },
        { id: 9, resource_name: "Eggendart", description: "transition user-centric action-items", completed: true },
        { id: 10, resource_name: "Birchwood", description: "evolve scalable e-services", completed: false }

      ]);
    });
};


