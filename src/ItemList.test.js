
// import React from 'react';
// import { render, fireEvent, screen, getByTestId} from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
// import ItemList from './ItemList'; //  component is in a separate file
// // import {async} from 'p'
// // import { Placeholder } from 'react-bootstrap';

// // ------test case 1--------

// test('renders the item list and allows adding, editing, and deleting items', () => {
//     // Render the component
//     render(<ItemList />);
//     // label Placeholder testing 
//     const idInput = screen.getByPlaceholderText('id');
//     const nameInput = screen.getByPlaceholderText('name');
//     const emailInput = screen.getByPlaceholderText('gmail');
//     const maleRadioButton = screen.getByLabelText('Male');
//     const maleRadioButton2 = screen.getByLabelText('Female');
//     const addButton = screen.getByText('Add');
//     // // add  item
//     fireEvent.change(idInput, { target: { value: '1' } });
//     fireEvent.change(nameInput, { target: { value: 'shubh' } });
//     fireEvent.change(emailInput, { target: { value: 'chaudharishubh000@gmail.com' } });
//     fireEvent.click(maleRadioButton);
//     fireEvent.click(maleRadioButton2);
//     fireEvent.click(addButton);

//     //  item is added
//     expect(screen.getByText('1')).toBeInTheDocument();
//     expect(screen.getByText('shubh')).toBeInTheDocument();
//     expect(screen.getByText('chaudharishubh000@gmail.com')).toBeInTheDocument();

// });

// // ---------unit case  no 2 ------

// test("edit item unit test case 3", async () => {
//     render(<ItemList />);
    
//     // Edit the item
//     const editButton = screen.getByText('Edit');
//     await userEvent.click(editButton);
    
//     // Assert that the item ID is displayed
//     expect(screen.getByText('Edit')).toBeInTheDocument(); // Replace 'item.id' with the actual ID value
//   });

// test('clicking the edit button sets the editItemId state correctly', () => {
//     render(<ItemList/>)
//     const newNameInput = screen.getByPlaceholderText('name');
//     fireEvent.change(newNameInput, { target: { value: 'shubh chaudhari' } });
//     expect(newNameInput.value).toBe('shubh chaudhari')
//   });

//   // --------unit test case  no 3---------
  
// // Delete the item
// test("delete  item unit test case 2", () => {
//     // render component
//     render(<ItemList />)

//     const deleteButton = screen.getByText('Delete');
//     fireEvent.click(deleteButton);
//     expect(screen.queryByText('shubhhhh')).not.toBeInTheDocument();

// })

// test("in change event testing male",  () => {
//   // userEvent.setup()
//   render(<ItemList />);
//   const element = screen.getByLabelText("Male");
//  userEvent.type(element, "Male");
//   expect(screen.getByLabelText("Male")).toBeInTheDocument();
// })


// test("in change event testing  female",  () => {
//   // userEvent.setup()
//   render(<ItemList />);
//   const element = screen.getByLabelText("Female");
//  userEvent.type(element, "Female");
//   expect(screen.getByLabelText("Female")).toBeInTheDocument();
// })





import React, { Component } from 'react';
import { render, fireEvent } from '@testing-library/react';
import ItemList from './ItemList';



// ----------------------------------Component render---------------------------------------------
test('renders ItemList component', () => {
  const { getByText, getByPlaceholderText } = render(<ItemList />);
  
  // Check if the component renders successfully
  expect(getByText('Id')).toBeInTheDocument();
  expect(getByPlaceholderText('id')).toBeInTheDocument();
  expect(getByText('Name')).toBeInTheDocument();
  expect(getByPlaceholderText('name')).toBeInTheDocument();
  expect(getByText('Email')).toBeInTheDocument();
  expect(getByPlaceholderText('gmail')).toBeInTheDocument();
  expect(getByText('Gender')).toBeInTheDocument();
  expect(getByText('Edit')).toBeInTheDocument();
  expect(getByText('Delete')).toBeInTheDocument();
  expect(getByText('Add')).toBeInTheDocument();
});

// ---------------------------------- add item ------------------------------------
test('adds a new item', () => {
  const { getByPlaceholderText, getByText ,getByLabelText} = render(<ItemList />);
  
  // Fill in input fields
  fireEvent.change(getByPlaceholderText('id'), { target: { value: '1' } });
  fireEvent.change(getByPlaceholderText('name'), { target: { value: 'jay' } });
  fireEvent.change(getByPlaceholderText('gmail'), { target: { value: 'jay@example.com' } });
  fireEvent.click(getByLabelText('Male')); // Assuming Male radio button is selected
  
  // Click Add button
  fireEvent.click(getByText('Add'));

  // Check if the new item is added to the list
  expect(getByText('jay')).toBeInTheDocument();
  expect(getByText('jay@example.com')).toBeInTheDocument();
  expect(getByLabelText('Male')).toBeInTheDocument();
});

// ----------------------------------edit item-----------------------------------------------

test('edits an item', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<ItemList />);
  
  // Add an item
  fireEvent.change(getByPlaceholderText('id'), { target: { value: '1' } });
  fireEvent.change(getByPlaceholderText('name'), { target: { value: 'shubh' } });
  fireEvent.change(getByPlaceholderText('gmail'), { target: { value: 'shubh@example.com' } });
  fireEvent.click(getByText('Male'));
  fireEvent.click(getByText('Female'));
  fireEvent.click(getByText('Add'));
  
  // Click Edit button
  fireEvent.click(getByText('EditBtn'));
  
  // Edit item details
  fireEvent.change(getByPlaceholderText('name'), { target: { value: 'parth patel' } });
  fireEvent.click(getByText('Save'));
  
  // Check if item is edited
  expect(queryByText('parth')).not.toBeInTheDocument();
  expect(getByText('parth patel')).toBeInTheDocument();
});

// ------------------------------------delete item--------------------------------------
test('deletes an item', () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<ItemList />);
  
  // Add an item
  fireEvent.change(getByPlaceholderText('id'), { target: { value: '1' } });
  fireEvent.change(getByPlaceholderText('name'), { target: { value: 'shubh' } });
  fireEvent.change(getByPlaceholderText('gmail'), { target: { value: 'chaudharishubh0@gmail.com' } });
  fireEvent.click(getByText('Male'));
  fireEvent.click(getByText('Add'));
  
  // Click Delete button
  fireEvent.click(getByPlaceholderText('delete'));
  
  // Check if item is deleted
  expect(queryByText('tejas')).not.toBeInTheDocument();
  expect(queryByText('tejas@example.com')).not.toBeInTheDocument();
  expect(queryByText('maleee')).not.toBeInTheDocument();

});


test('editing name and email fields', () => {
  const { getByTestId, getByLabelText } = render(<ItemList />);
  
  // Find input fields for name and email
  const nameInput = getByTestId('name-input');
  const emailInput = getByTestId('email-input');
  
  // Simulate editing name field
  fireEvent.change(nameInput, { target: { value: 'New Name' } });
  expect(nameInput.value).toBe('New Name');

  // Simulate editing email field
  fireEvent.change(emailInput, { target: { value: 'newemail@example.com' } });
  expect(emailInput.value).toBe('newemail@example.com');
});

test('editing gender radio buttons', () => {
  const { getByLabelText } = render(<ItemList />);
  
  // Find radio buttons for gender
  const maleRadio = getByLabelText('Male');
  const femaleRadio = getByLabelText('Female');
  
  // Simulate clicking male radio button
  fireEvent.click(maleRadio);
  expect(maleRadio.checked).toBe(true);
  expect(femaleRadio.checked).toBe(false);

  // Simulate clicking female radio button
  fireEvent.click(femaleRadio);
  expect(maleRadio.checked).toBe(false);
  expect(femaleRadio.checked).toBe(true);
});



test('renders input fields and radio buttons correctly when editItemId matches', () => {
  const { getByTestId } = render(<ItemList />);
  
  // Simulate edit mode
  fireEvent.change(getByTestId('name-input'), { target: { value: 'New Name' } });
  fireEvent.change(getByTestId('email-input'), { target: { value: 'newemail@example.com' } });
  // fireEvent.click(getByTestId('male-radio'));
  
  // Check if input fields and radio buttons are rendered correctly
  expect(getByTestId('name-input')).toHaveValue('New Name');
  expect(getByTestId('email-input')).toHaveValue('newemail@example.com');
  // expect(getByTestId('male-radio')).toBeChecked();
});