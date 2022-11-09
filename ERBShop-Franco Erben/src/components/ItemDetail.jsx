const ItemDetail = (props) =>{
    return(
        <>
        <div className="detail-container">
        <img className="detail-img" src={props.thumbnail} alt="detail-img"></img>
        <div className="detail-description">
        <h3 className="detail-titulo">{props.title}</h3>
         <div className="detail-info">

        <p>{props.description}</p>  <span>ID: {props.id}</span>   
            
         </div>       
         <h3 className="detail-price">${props.price}</h3>

        </div>








        </div>
          
        </>
    )
}

export default ItemDetail