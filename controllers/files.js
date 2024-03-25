const path = require('path')
const fs = require('fs')


function upload(name, fileObject, subpath) {
   return new Promise((resolve, reject) => {
      let uploadPath = path.join(__dirname + '/../images/' + subpath + '/')

      if (!fs.existsSync(uploadPath)) {
         fs.mkdirSync(uploadPath, { recursive: true });
      }
      //   let filePath = folderName + '/' + name
      uploadPath = uploadPath + name
      try {
         fileObject.mv(uploadPath, function (err) {
            if (err)
               resolve(false)
            // resolve(process.env.SERVER_URL + 'api/images/' + name)
            resolve(subpath + '/' + name)
         });
      } catch (err) {
         resolve(false)
      }
   })
}

module.exports = { upload }