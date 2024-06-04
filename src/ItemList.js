import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FaArrowAltCircleLeft } from "react-icons/fa"; // react 
import { Button } from 'reactstrap';  // use reactstrap use  for button

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState('');
  const [newname, setNewName] = useState('');
  const [newgmail, setNewGmail] = useState('');
  const [newgender, setNewGender] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  // add data
  const handleAddItem = () => {
    if (!id || !newname || !newgender || !newgmail) 
      
    return;
    setItems([...items, { id: id, name: newname, gender: newgender, email: newgmail }]);
    setId('');
    setNewName('');
    setNewGender('');
    setNewGmail('')
  };
  // edit and add data
  const editItem = (itemId, newName, newGender, newgmail) => {
    setItems(
      items.map(item =>
        item.id === itemId ? { ...item, name: newName, gender: newGender, email: newgmail } : item
      )
    );
    setEditItemId(null);
    setNewName('');
    setNewGender('');
    setNewGmail('')
  };

  // delete all data
  const deleteItem = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <>

      <div className='container d-flex justify-content-center align-items-center m-5 p-5'>
        <table className='table table-dark table-striped  '>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{editItemId === item.id ? <input  value={newname}  onChange={(e) => setNewName(e.target.value)} data-testid="name-input"/> : item.name} </td>
                <td>{editItemId === item.id ? <input  value={newgmail} onChange={(e) => setNewGmail(e.target.value)}  data-testid="email-input" /> : item.email}</td>
                <td>{editItemId === item.id ? (
                  <>
                    <Form.Check
                      type="radio"
                      id={`${item.id}-male`}
                      label="Male"
                      value="male"
                      checked={newgender === 'male'}
                      onChange={() => setNewGender('male')}
                    />
                    <Form.Check
                      type="radio"
                      id={`${item.id}-Female`}
                      label="Female"
                      value="Female"
                      checked={newgender === 'female'}
                      onChange={() => setNewGender('female')}
                    />
                  </>
                ) : item.gender}</td>
                <td>
                  {editItemId === item.id ? (
                    <Button style={{ borderRadius: '10px', padding: '10px', backgroundColor: '#000', color: '#fff' }} className='text-bg-primary'onClick={() => editItem(item.id, newname, newgender, newgmail)} placeholder='save'>Save</Button>
                  ) : (
                    <Button className='text-bg-primary' placeholder='name' onClick={() => setEditItemId(item.id)}>EditBtn</Button>
                  )}
                </td>
                <td><Button className='text-bg-danger ' placeholder='delete' onClick={() => deleteItem(item.id)}>Delete</Button></td>
              </tr>
            ))}
            <tr>
              <td><input type="number" data-testid='mytestid' placeholder='id' value={id} onChange={(e) => setId(e.target.value)} /></td>
              <td><input type="text" placeholder='name' value={newname} onChange={(e) => setNewName(e.target.value)} data-testid="name-input  " /></td>
              <td><input type="email" placeholder='gmail' value={newgmail} onChange={(e) => setNewGmail(e.target.value)}  data-testid="email-input" /></td>
              <td>
      
                <Form.Check
                  type="radio"
                  id="Male"
                  label="Male"
                  value="Male"
                  checked={newgender === 'Male'}
                  onChange={() => setNewGender('Male')}
                />
                <Form.Check

                  type="radio"
                  id="Female"
                  label="Female"
                  value="Female"
                  checked={newgender === 'Female'}
                  onChange={() => setNewGender('Female')}
                />
                {/* react icon use */}
              </td><td><Button className='text-bg-primary ' onClick={handleAddItem}> <FaArrowAltCircleLeft />{' '}</Button></td>
              <td><Button className='text-bg-primary  w-75 ' onClick={handleAddItem}> Add</Button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemList;







  