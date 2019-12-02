import Mock from "mockjs";
const Random = Mock.Random;
Mock.setup({
  timeout: 300
});
Mock.mock("/signup", "post", function() {
  return "ok";
});
Mock.mock("/logout", "post", function() {
  return {
    status: "ok"
  };
});

Mock.mock("/login", "post", function(options) {
  const { username } = JSON.parse(options.body);
  return username;
});
Mock.mock("/tickets", {
  'data|1-7': [{
    title: Random.title(),
    status: Random.pick(["new", "working", "done"]),
    date: Random.date()
  }]
});
Mock.mock("/user", "get", { username: "pzzz" });
export default Mock.mock("/questions",
{"data|1-10":[{
  title: Random.title(),
  content: Random.paragraph()
}]}
);
