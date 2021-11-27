const express = require('express');

let app = express();

app.get('/users', (req,res,next)=>{
	let users =[
     		'felipe',
		'tito',
		'felipe2'
		];
        res.send(users);
});

app.listen(3001, () =>{
console.log('Corriendo en puerto 3001');
})
