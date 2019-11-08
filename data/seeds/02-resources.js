
exports.seed = function(knex) {

      return knex('resources').insert([
        {name: 'internet', description: 'the internet is full of information. use it!'}, //1
        {name: 'caree_help channel', description: 'get help from experience professionals in the career help channel'},//1
        {name: 'resume builders', description: 'you can look at modern resumes'},//1
        {name: 'Vue Documentation', description: 'head over to the vue website and get familiar with the docs'},//2
        {name: 'Youtube', description: 'watch tutorial on youtube to get more familiar with vue'},//2
        {name: 'Pluralsight', description: 'find a recent tutorial on vue'},//2
        {name: 'Github', description: 'with github you can push repositorys for other people to see'},//3
        {name: 'TL', description: 'ask your tl for help if you are confused'},
        {name: 'Projects', description: 'you can find a lot of useful information in previous projects'},//3
      ]);
};
