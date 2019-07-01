const express=require('require');
var app=express();
app.listen(8080);
app.use(express.static('piblic'));
app.use('/user',userRouter);
