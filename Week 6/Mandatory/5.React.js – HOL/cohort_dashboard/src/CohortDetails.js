import styles from './CohortDetails.module.css';
const CohortDetails = () => {
  const cohorts = [
    {
      id: "INTADMDF10 - .NET FSD",
      startDate: "22-Feb-2022",
      status: "Scheduled",
      coach: "Aathma",
      trainer: "Jojo Jose",
    },
    {
      id: "ADM21JF014 - Java FSD",
      startDate: "10-Sep-2021",
      status: "Ongoing",
      coach: "Apoorv",
      trainer: "Elisa Smith",
    },
  ];
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Cohorts Details</h2>
      <div className={styles.container}>
        {cohorts.map((cohort, index) => {
          const isOngoing = cohort.status.toLowerCase() === 'ongoing';
          return (
            <div key={index} className={styles.box}>
              <h3 style={{ color: isOngoing ? 'green' : 'blue' }}>{cohort.id}</h3>
              <dl>
                <dt>Started On</dt>
                <dd>{cohort.startDate}</dd>
                <dt>Current Status</dt>
                <dd>{cohort.status}</dd>
                <dt>Coach</dt>
                <dd>{cohort.coach}</dd>
                <dt>Trainer</dt>
                <dd>{cohort.trainer}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CohortDetails;