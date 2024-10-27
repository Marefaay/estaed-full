// SchoolCard.js
const SchoolCard = ({ schoolName, managerName, studentsNumber, cityName }) => (
    <div className="card">
      <h2>{schoolName}</h2>
      <p>Manager: {managerName}</p>
      <p>Students: {studentsNumber}</p>
      <p>City: {cityName}</p>
    </div>
  );
  
  export default SchoolCard;
  