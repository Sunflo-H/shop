export default class Cloudinary {
  constructor() {
    this.url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`;
    this.formData = new FormData();
    this.formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
    this.formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_PRESET
    );
  }

  uploadFile(files) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      this.formData.append("file", file);
    }
    fetch(this.url, {
      method: "POST",
      body: this.formData,
    })
      .then((response) => {
        console.log(response);

        return response.json();
      })
      .then((data) => {
        console.log(this.formData);
        console.log(data);
      });
  }

  fetchFile() {
    fetch(this.url, {
      method: "POST",
      body: this.formData,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        console.log(this.formData);
        console.log(data);
      });
  }
}
