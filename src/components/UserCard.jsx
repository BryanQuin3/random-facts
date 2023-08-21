/* eslint-disable react/prop-types */
export const UserCard = ({ user }) => {
  return (
    <header className="user-info-container">
      <section className="user-info">
        {user && (
          <img
            className="card-avatar"
            src={`https://unavatar.io/${user.name}`}
            alt="Este es el avatar de un usuario"
          />
        )}
        <div className="card-info">
          {user && (
            <>
              <strong>{`${user.name} ${user.lastName}`}</strong>
              <span className="card-infoUserName">{`${user.userName}`}</span>
            </>
          )}
        </div>
      </section>
      <nav className="card-icons">
        <img src="./heart-icon.svg" alt="" />
        <img src="./comment-icon.svg" alt="" />
        <img src="./save-icon.svg" alt="" />
      </nav>
    </header>
  );
};
