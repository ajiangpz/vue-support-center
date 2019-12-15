import Mock from "mockjs";
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
const Tickets=Mock.mock({'data|1-7':[{
  'id|+1':1,
  title:'@TITLe',
  status:`@PICK(["new", "working", "done"])`,
  date: '@DATE'
}]})
Mock.mock("/login", "post", function(options) {
  const { username } = JSON.parse(options.body);
  return username;
});
Mock.mock(/\/ticket\/\w+$/,function(option){
  const arr=option.url.split('/');
  const id=arr[arr.length-1];
  const ticket= Tickets.data.filter(ticket=>ticket.id===parseInt(id))[0]
  return {data:ticket}
})
Mock.mock("/tickets", Tickets);

Mock.mock("/user", "get", { username: "pzzz" });
export default Mock.mock("/questions",
{"data|1-10":[{
  title: `@title`,
  content:` @paragraph`
}]}
);
