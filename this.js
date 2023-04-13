const photoSlideShow={
    photoList:[photo1, photo2, photo3],
    currentPhotoIndex: 0,
    nextPhoto (){
        if (this.currentPhotoIndex< this.photoList.length -1){
            this.currentPhotoIndex++,
        console.log ("This is "+ this.currentPhotoIndex)}
        else{
            console.log("End of slideshow!")
        }
    },
    previousPhoto(){
        if (this.currentPhotoIndex>0){
            this.currentPhotoIndex--,
        console.log("This is "+this.currentPhotoIndex)
        }
    getCurrentPhoto() 
                return this.photoList[this.currentPhotoIndex];
              
            }
        }
