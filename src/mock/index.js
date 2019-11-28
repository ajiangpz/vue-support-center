import Mock from "mockjs";
const Random = Mock.Random;
function getQs(len) {
  const questions = [];
  for (let i = 0; i < len; i++) {
    questions.push({
      title: Random.title(),
      content: Random.paragraph()
    });
  }
  return questions
}
Mock.mock("/login",'post',function(options){
  
  const {username}=JSON.parse(options.body);
  return username

})
Mock.setup({
  timeout:300
})
export default Mock.mock("/questions",getQs(5));
