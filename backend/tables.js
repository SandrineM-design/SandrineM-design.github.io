const ExperienceManager = require("./models/ExperienceManager");
const FormationManager = require("./models/FormationManager");
const ProjectManager = require("./models/ProjectManager");
const SkillManager = require("./models/SkillManager");
const TypeManager = require("./models/TypeManager");

const managers = [
  ExperienceManager,
  FormationManager,
  ProjectManager,
  SkillManager,
  TypeManager,
];

const tables = {};

managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();

  tables[manager.table] = manager;
});

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
