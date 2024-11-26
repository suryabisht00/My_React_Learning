import profilepic from './assets/photo_6194841686090300722_y.jpg'


function Card(){
return(
    <div className="card">
        <img className = "cardimg" src={profilepic} alt="comming soon "></img>
        <h2 className='card-title'>Surya bhaii</h2>
        <p className='card-txt'> i love coding and playing chess</p>
    </div>
)

}
export default Card