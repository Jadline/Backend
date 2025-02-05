/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import  { imageSync,image } from "qr-image"
import { createWriteStream } from "fs";

inquirer.prompt([
    {
        type : 'input',
        name: 'name',
        message : 'What is your current location'
    }
]).then((answers) => {
    const qr_svg = image(answers.name,{type : 'png'});
    const outputstream = createWriteStream('karen.png')
    qr_svg.pipe(outputstream)

    //
    outputstream.on('finish',() => {
        console.log('The QR code has been saved as karen.png')
    })
}).catch((error) => {
    console.log('Error',error)
})





// inquirer.prompt([{
//     type : 'input',
//     name : 'name',
//     message : 'What is your name'
// }]).then((answers) => {
//     const qr_svg = image(answers.name,{type : 'png'})
//     const outputstream = createWriteStream('gachoki.png')
//     qr_svg.pipe(outputstream)
    
// })
