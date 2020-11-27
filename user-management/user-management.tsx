import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';

type accesslevels = 'admin' | 'read' | 'write';
type status = 'active' | 'inactive' | 'invited';

interface UserInterface {
  id: string;
  email: string;
  accessLevel: accesslevels;
  status: status;
}

const usersData: UserInterface[] = [
  {
    id: '111',
    email: 'test1@testing.com',
    accessLevel: 'admin',
    status: 'active',
  },
  {
    id: '222',
    email: 'test2@testing.com',
    accessLevel: 'read',
    status: 'invited',
  },
];

export const UserMangement = (): ReactElement => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [accessLevel, setAccessLevel] = useState<accesslevels | null>(null);
  const [users, setUsers] = useState<UserInterface[] | null>(null);

  const handleUserEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  const handleUserAccessLevel = (e: ChangeEvent<HTMLSelectElement>) => {
    setAccessLevel(e.target.value as accesslevels);
  };

  const handleSaveUser = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(userEmail);
    console.log(accessLevel);

    const newUser: UserInterface[] = [
      ...users,
      {
        id: '333',
        email: userEmail,
        accessLevel: accessLevel,
        status: 'invited',
      },
    ];

    setUsers(newUser);
  };

  const handleUsersFetch = () => {
    setUsers(usersData);
  };

  const handleDeleteUser = (id: string) => {
    console.log(id);

    setUsers(users.filter((user: UserInterface) => user.id !== id));
  };

  useEffect(() => {
    handleUsersFetch();
  }, []);

  return (
    <div>
      <form onSubmit={handleSaveUser}>
        <fieldset>
          <legend>User Management</legend>
          <label htmlFor="userEmail">Email</label>
          <input type="email" id="userEmail" onChange={handleUserEmail} />
          <label htmlFor="userAccess">Access</label>
          <select id="userAccess" onChange={handleUserAccessLevel}>
            <option value="">Please select</option>
            <option value="admin">Admin</option>
            <option value="read">Read</option>
            <option value="write">Write</option>
          </select>
        </fieldset>
        <button type="submit">Save</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Access</th>
            <th>State</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user: UserInterface) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.accessLevel}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <span className="u-hidden-visually">
                      Delete user {user.email}
                    </span>
                    <span>x</span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
