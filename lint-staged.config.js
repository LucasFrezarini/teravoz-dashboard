module.exports = {
  linters: {
    "**/*.+(ts,tsx)": ["eslint . --fix", "git add"],
    "**/*.+(js|jsx|md|ts|tsx|json|yml|yaml)": ["prettier --write", "git add"],
  },
};
