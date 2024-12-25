// src/pages/MyCards.tsx
import React, { useEffect, useState } from 'react';
import { fetchRandomUsers } from '../api';
import Paginator from '../components/Paginator';
import { FaStar, FaComments } from 'react-icons/fa'; // ייבוא אייקונים
import 'bootstrap/dist/css/bootstrap.min.css';

const MyCards: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // מספר הכרטיסים להציג בכל עמוד

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    } else {
      const getUsers = async () => {
        try {
          const userData = await fetchRandomUsers();
          setUsers(userData.results);
          localStorage.setItem('users', JSON.stringify(userData.results));
        } catch (err) {
          setError('Failed to fetch users');
        }
      };
      getUsers();
    }
  }, []);

  const addToFavorites = (user: any) => {
    const storedFavUsers = localStorage.getItem('favUsers');
    const favUsers = storedFavUsers ? JSON.parse(storedFavUsers) : [];
    favUsers.push(user);
    localStorage.setItem('favUsers', JSON.stringify(favUsers));
  };

  const startChat = (user: any) => {
    // Placeholder function for starting chat
    alert(`Starting chat with ${user.name.first} ${user.name.last}`);
  };

  // חישוב הכרטיסים להצגה בעמוד הנוכחי
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedUsers = users.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mt-5">
      <h2>My Cards</h2>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {selectedUsers.map((user, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4 shadow-sm" style={{ backgroundColor: '#f9f9f9', borderRadius: '15px', transition: 'transform 0.2s, box-shadow 0.2s' }}>
              <img src={user.picture.large} className="card-img-top rounded-circle mx-auto d-block mt-3" style={{ width: '150px', height: '150px' }} alt={`${user.name.first} ${user.name.last}`} />
              <div className="card-body">
                <h5 className="card-title text-center">{user.name.first} {user.name.last}</h5>
                <p className="card-text"><strong>Email:</strong> {user.email}</p>
                <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
                <p className="card-text"><strong>Address:</strong> {user.location.street.name}, {user.location.city}, {user.location.state}, {user.location.country}</p>
                <div className="d-flex justify-content-between">
                  <a href={`https://www.facebook.com/${user.login.username}`} className="btn btn-primary" style={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}>
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href={`https://www.twitter.com/${user.login.username}`} className="btn btn-info" style={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <button className="btn btn-secondary" onClick={() => addToFavorites(user)} style={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}>
                    <FaStar />
                  </button>
                  <button className="btn btn-success" onClick={() => startChat(user)} style={{ transform: 'scale(1.1)', transition: 'transform 0.2s' }}>
                    <FaComments />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Paginator
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default MyCards;
