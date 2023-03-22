import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="text"
          name="filter"
          placeholder="Find contacts by name"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
