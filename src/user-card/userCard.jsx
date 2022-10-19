export const UserCard = ({ user }) => {
  return (
    <>
      <div className="container m-2">
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {user.username}
                </h6>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
