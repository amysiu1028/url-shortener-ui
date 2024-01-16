import './Urlcard.css'

const Urlcard = ({id, long_url, short_url, title}) => {
  return (
    <div className="url">
        <h3>{title}</h3>
        <a href={short_url} target="blank">{short_url}</a>
        <p>{long_url}</p>
    </div>
  )
}

export default Urlcard
