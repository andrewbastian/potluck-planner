import React, { useState, useEffect } from 'react';
import { Form, Field, ErrorMessage, withFormik } from 'formik';
import ItemsList from './ItemsList';
import axios from 'axios';


const CreateItems = ({ errors, touched, values, status }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (status) {
      setItems([...items, status]);
    }
  }, [status]);
  return (


    <div>
      <Form className='no-im'>
        <h2>Create New Item</h2>
        <Field type="item" name="item" placeholder="item" />
        <ErrorMessage name="item" component="div" />
        <Field type="amountNeeded" name="amountNeeded" placeholder="Amount" />
        <ErrorMessage name="amountNeeded" component="div" />
        <Field type="note" name="note" placeholder="note" />
        <button type="submit">
          Add
          </button>
      </Form>


      {items.map(item => (
        <ItemsList item={item} key={item.item} />
      ))}
    </div>
  );
};

const FormikCreateItems = withFormik({
  mapPropsToValues({ item, amountNeeded, note }) {
    return {
      item: item || '',
      amountNeeded: amountNeeded || '',
      note: note || ''
    }
  },
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)

      .then(res => {
        setStatus(res.data);
        // resetForm();
      })

      .catch(err => console.log("Axios error", err));
  }
})(CreateItems)

export default FormikCreateItems;
