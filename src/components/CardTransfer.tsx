import React from 'react';

const CardTransfer = ({ profile, tfName, bankName, accountNumber, cardWidth = '100%' }) => {
  const cardTransferStyle = {
    containerCard: {
      padding: '14px',
      width: cardWidth,
      height: '120px',
      border: '1px solid #F5F5F5',
      boxShadow: '0 4px 5px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
    },
    Container: {
      margin: '0',
    },
    image: {
      width: '50px',
    },
    title: {
      fontWeight: 700,
      fontSize: '20px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    content: {
      fontWeight: 400,
      fontSize: '20px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }

  return (
    <div className="d-flex flex-column align-items-start" style={cardTransferStyle.Container}>
      <div className="containerCard d-flex flex-row gap-4 align-items-center" style={cardTransferStyle.containerCard}>
        <div className="content1 d-flex flex-column">
          <img src={profile} style={cardTransferStyle.image} />
        </div>
        <div className="content2" style={{ overflow: "hidden", textAlign: "start" }}>
          <h4 style={cardTransferStyle.title}>{tfName}</h4>
          <h4 style={cardTransferStyle.content}>{bankName}</h4>
          <h4 style={cardTransferStyle.content}>{accountNumber}</h4>
        </div>
      </div>
    </div>
  )
}

export default CardTransfer;