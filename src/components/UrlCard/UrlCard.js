import './Urlcard.css'

const Urlcard = ({long_url, short_url, title, deleteCard, id}) => {
    
  return (
    <div className="url">
        <h3>{title}</h3>
        <a href={short_url} target="blank">{short_url}</a>
        <p>{long_url}</p>
        <button data-test='delete-button' onClick={() => deleteCard(id)}>Delete</button>
    </div>
  )
}

export default Urlcard
