
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1,  project_name: "North West Mounted Police", description: "repurpose 24/7 content" },
        { id: 2,  project_name: "Good News",                 description: "integrate visionary synergies" },
        { id: 3,  project_name: "Next Karate Kid",           description: "grow frictionless applications" },
        { id: 4,  project_name: "Zombie Honeymoon",          description: "incentivize strategic niches" },
        { id: 5,  project_name: "Patriot, The",              description: "maximize clicks-and-mortar infrastructures" },
        { id: 6,  project_name: "Holidays by the Sea",       description: "exploit seamless architectures" },
        { id: 7,  project_name: "800 Bullets (800 Balas)",   description: "facilitate transparent methodologies" },
        { id: 8,  project_name: "Dark Angel: Ascent",        description: " The benchmark world-class applications" },
        { id: 9,  project_name: "Mike's New Car",            description: "incentivize seamless users" },
        { id: 10, project_name: "Hood of the Living Dead",   description: "e-enable revolutionary technologies" },
      ]);
    });
};
