// Table component to handle data rendering
export default function Table({ data, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact Number</th>
          <th>Location</th>
          <th>Date</th>
          <th>Nature of Waste</th>
          <th className="action">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((waste, index) => (
          <tr key={index}>
            <td>{waste.name}</td>
            <td>{waste.number}</td>
            <td>{waste.location}</td>
            <td>{waste.date}</td>
            <td>{waste.nature}</td>
            <td>
              <button className="btn btn-danger mb-3 btn-sm" onClick={() => onDelete(index)}>Waste recycled</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}