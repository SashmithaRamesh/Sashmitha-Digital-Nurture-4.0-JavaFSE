import './OfficeList.css';

const OfficeList = () => {
  const offices = [
    { Name: 'DBS', Rent: 50000, Address: 'Chennai', Image: 'Dbs.jpg' },
    { Name: 'WeWork', Rent: 70000, Address: 'Bangalore', Image: 'WeWork.jpg' },
    { Name: 'Regus', Rent: 45000, Address: 'Hyderabad', Image: 'Regus.jpg' }
  ];

  return (
    <div>
      <h2>Office Space, at Affordable Range</h2>
      <div className="office-container">
        {offices.map((office, index) => (
          <div key={index} className="office-card">
            <img src={`/images/${office.Image}`} alt="Office Space" width="100%" />
            <h2>Name: {office.Name}</h2>
            <h3 className={office.Rent <= 60000 ? 'textRed' : 'textGreen'}>
              Rent: Rs. {office.Rent}
            </h3>
            <h3>Address: {office.Address}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeList;
