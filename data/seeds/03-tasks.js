
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([

        { id: 1, project_id: 1, description: "target dynamic metrics,praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat", completed: true },
        { id: 2, project_id: 2, description: "recontextualize clicks-and-mortar functionalities,dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum", completed: false },
        { id: 3, project_id: 3, description: "utilize out-of-the-box initiatives,dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet", completed: false },
        { id: 4, project_id: 4, description: "e-enable open-source metrics,pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue", completed: false },
        { id: 5, project_id: 5, description: "envisioneer collaborative schemas,nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla", completed: false },
        { id: 6, project_id: 6, description: "synthesize granular web services,aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis", completed: true },
        { id: 7, project_id: 7, description: "e-enable collaborative e-services,at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi", completed: true },
        { id: 8, project_id: 8, description: "generate holistic paradigms,sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at", completed: true },
        { id: 9, project_id: 9, description: "aggregate collaborative schemas,potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi", completed: false },
        { id: 10, project_id: 10, description: "deploy leading-edge technologies,tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor", completed: false },

      ]);
    });
};


