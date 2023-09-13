const express = require('express')

const path = require('path')

const app = express()


app.get('/students',(req,res,next)=> {
  res.sendFile('index.html',{
    root: path.join(__dirname)
  },(err) => {
    if(err)
    {
      throw err
    }
    else{
        next()
    }

  })
})

app.listen(3003,() =>{
console.log("App started using express")
})
