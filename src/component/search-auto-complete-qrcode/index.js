import { useEffect, useState } from "react";
import Suggestions from "./suggestions";
import QRCode from "react-qr-code";

export default function SearchAutoComplete() {
  const [qrCode, setQrCode] = useState("");
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleClick(event) {
    setSearchParam(event.target.innerText);
    setShowDropdown(false);
    setFilteredUsers([]);
  }

  function generateQrCode() {
    setQrCode(searchParam);
    setClick(true);
    setShowDropdown(false);
  }

  function filter(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
      
    } else {
      setShowDropdown(false);
    }    
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("http://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setLoading(false);
        setUsers(data.users.map((userItem) => userItem.firstName));
        setError(null);            
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading please wait!!</h1>
      ) : (
        <>
          <h1>QR Code Generator</h1>
          <input
            name="search-users"
            placeholder="Search users here..."
            value={searchParam}
            onChange={filter}
          />
          <button
            onClick={generateQrCode}
            disabled={searchParam.length !== 0 ? false : true}
          >
            Generate
          </button>
        </>
      )}
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers}/>
      )}
      <br />
      {click && (
        <>
          <QRCode id="qr-code-value" value={qrCode} size={200} bgColor="grey" />
          <br />
          <button
            onClick={() => {
              setClick(false);
              setSearchParam("");
              setShowDropdown(false);
            }}
          >
            Reset
          </button>
        </>
      )}
    </>
  );
}
