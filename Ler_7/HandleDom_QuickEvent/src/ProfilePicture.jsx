
function ProfilePicture() {


    const imageUrl = './src/assets/OIP.jpg';

    // const handleClick = () => { alert('You clicked on the image') };
    const handleClick = (e) => e.target.style.display = "none";
    return(
        <>
            <img onClick={handleClick} src={imageUrl} alt="temp image"></img>
        </>
    );

}



export default ProfilePicture;