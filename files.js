const fs=require('fs')
//reading files
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
//writing
// fs.writeFile('./docs/blog1.txt','hello',()=>{
//     console.log('file was written')
// })

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         console.log(err);
//     })
//     console.log('folder created')
// }else{
//     fs.rmdir('./assets',()=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
    })
}
