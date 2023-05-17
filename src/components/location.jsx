import PropTypes from 'prop-types';

const Location = ({ location }) => {
    return (
        <>
<h2>{location.name}</h2>

<ul>
  <li>
    <b>Type: </b>
    {location.type}
  </li>
  <li>
    <b>Dimension: </b>
    {location.dimension}
  </li>
  <li>
    <b>Population: </b>
    {location.residents.length}
  </li>
</ul>
        </>
    );
};
Location.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired,
    residents: PropTypes.array.isRequired,
}),
};

export default Location;