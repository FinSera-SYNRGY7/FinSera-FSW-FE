import React from "react";



const CardMutation = ({color, dateTXN, noTXN, typeTXN, nominal, time }) => {
  const cardMutationStyle = {
    containecard: {
      justifyContent: 'space-between',
      padding: '30px 84px',
      width: '100%',
      border: '2px solid #F5F5F5',
      boxShadow: "0 4px 5px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px"
    },
    Container: {
      margin: "0",
      marginBottom: "41px"
    },
    title:{
      fontWeight: 700,
      fontSize: '20px',
      margin: '0 0 3px 0'
    },
    txn: {
      fontWeight: 700,
      fontSize: '20px',
      margin: 0
    },
    price: {
      fontWeight: 700,
      fontSize: '24px',
      margin: 0,
      color: color
    },
    text: {
      margin: "15px 0 0 0"
    },
    containerMutation: {
      width: "100%",
    }  
  }

 return (
  <div style={cardMutationStyle.containerMutation}>
    <div className="d-flex flex-column align-items-start" style={cardMutationStyle.Container}>
    <h2 style={cardMutationStyle.title}>{dateTXN}</h2>
    <div className="containerCard d-flex flex-row" style={cardMutationStyle.containecard}>
      <div className="content1 d-flex flex-column align-items-start">
        <h2 style={cardMutationStyle.txn}>{noTXN}</h2>
        <p style={cardMutationStyle.text}>{typeTXN}</p>
      </div>
      <div className="content2 d-flex flex-column align-items-end">
        <h2 style={cardMutationStyle.price}>{nominal}</h2>
        <p style={cardMutationStyle.text}>{time}</p>
      </div>
    </div>
  </div>
  </div>
 )
}

export default CardMutation;