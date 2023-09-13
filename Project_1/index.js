const http = require('http');

const students = []

const handleRetrieveStudent = (req,res) =>{
  console.log("STUDENTS are",students)
  res.end(JSON.stringify(students));
}

const handleAddStudent =(req,res) =>{
  console.log(req.body)
  students.push(JSON.parse(req.body))
  res.end(JSON.stringify('added student'))
}
const server = http.createServer((req,res)=>{
  console.log(req.url,"REQ.URL")
  console.log(req.method,"REQ.method")
   
  let body = [];
req.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
req.body = body

console.log(req.method,'METHOD is')

if(req.url === '/students' && req.method === "GET"){
  return handleRetrieveStudent(req,res)
}
else if(req.url === '/students' && req.method === "POST")
{
  return handleAddStudent(req,res)
}
});
  // res.end('hello world')
})


server.listen(3003, () =>{
  console.log("****server started ****")
})