const teams = { teams: ["Inter", "Genoa"] };

const tasks = {
  tasks: [
    { name: "wash up", status: false, id: 13 },
    { name: "get up on time", status: true, id: 12 },
  ],
};

const login = {
  user: { username: "james", password: "fruitbat" },
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  teams,
  tasks,
  login,
};
