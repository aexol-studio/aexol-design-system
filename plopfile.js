module.exports = function(plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "Create component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Specify component name"
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "src/Components/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.template"
      },
      {
        type: "add",
        path: "src/Components/styles/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/componentStyle.template"
      },
      {
        type: "add",
        path: "docs/components/{{pascalCase name}}.mdx",
        templateFile: "plop-templates/componentDocs.template"
      }
    ] // array of actions
  });
};
