exports.seed = function (knex) {  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        { project_id: 1, resource_id: 4 },
        { project_id: 6, resource_id: 1 },
        { project_id: 4, resource_id: 2 },
        { project_id: 5, resource_id: 2 },
        { project_id: 5, resource_id: 6 },
        { project_id: 8, resource_id: 3 },
        { project_id: 5, resource_id: 1 },
        { project_id: 6, resource_id: 8 },
        { project_id: 1, resource_id: 3 },
        { project_id: 7, resource_id: 10 }
      ]);
    });
};


// /ask taryn about this bridge table for the many to many relationship and seeding it.
// do i need to include something different on the migration when this one is created. 
//  the others have the increment() spelled out specifically. how does primary called at the end compare to calling incrememt at the beginning of a table create method