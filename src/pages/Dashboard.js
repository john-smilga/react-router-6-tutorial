const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h4>{`Welcome, ${user.name}`}</h4>
    </section>
  );
};
export default Dashboard;
