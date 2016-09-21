const fs = require('fs');
const jimp = require('jimp');
const DataStore = require('nedb');

const db = new DataStore({
    filename: 'images.nedb',
    autoload: true,
});


db.remove({}, {multi: true}, function(err, numRemoved){

    fs.readdir('images/', function(err, files){
        if (err) throw err;

        files.forEach(function(fileName){
            jimp.read(`images/${fileName}`, function(err, image){
                 if (err) throw err;
                 const width = image.bitmap.width;
                 const height = image.bitmap.height;
                  //const{width,height} = image.bitmap;
                  //console.log(width, height);

                 db.insert({fileName, width, height}, function(err, insertedImage){
                     if (err) throw err;
                     image.resize(100, jimp.AUTO);
                    image.write(`converted/${insertedImage._id}.png`, function(err){
                         if (err) throw err;
                        console.log(fileName, 'feldolgozva');
                    })                    
                }); //eza kettőspontos cucc lenne, de most rövidítve van ~~ az insert utána cucc
            });
        })
    });
    console.log('VEGE')
})

//callback hell 
