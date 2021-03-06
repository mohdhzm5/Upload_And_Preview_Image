import React, { useState } from 'react'
const App = () => {

const [image, setImage ] = useState("");
const [ url, setUrl ] = useState("");
const [selectedImage, setSelectedImage] = useState();
const imageChange = (e) => {
  setImage(e.target.files[0])
  if (e.target.files && e.target.files.length > 0) {
    setSelectedImage(e.target.files[0]);
  }
};
const uploadImage = () => {
const data = new FormData()
data.append("file", image)
data.append("upload_preset", "tutorial")
data.append("cloud_name","breellz")
fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())
.then(data => {
setUrl(data.url)
})
.catch(err => console.log(err))
}
return (
<div>
<div>
<input type="file" onChange= {imageChange}></input>
{selectedImage && (
          <div>
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Thumb"
            />
          </div>
        )}
<button onClick={uploadImage}>Upload</button>
</div>
<div>
<h1>Uploaded Image is Above</h1>
</div>
</div>
)
}

export default App;