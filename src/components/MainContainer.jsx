export const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="header">
        <div className="name">
          iPhone 14
        </div>
        <div className="logo">
          <img src={import.meta.env.BASE_URL + 'jCloud.png'} alt="logo" />
        </div>
      </div>
    </div>
  );
};
