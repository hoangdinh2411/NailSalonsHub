'use client';
import TextField from 'components/ui/TextField';
import './Components.scss';
import Modal from 'components/ui/Modal';
import { useState } from 'react';
import Button from 'components/ui/Button';
import LoadingUI from 'components/ui/LoadingUI';
const Page = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className='components'>
      <h1>Page UI components</h1>
      <div className='components__items'>
        <p>Textfield </p>

        <TextField label='Label' id='name' placeholder='Textfield with small border radius' />
        <TextField
          label='Label 1'
          id='name'
          placeholder='Textfield with rounded full'
          roundedFull
        />
        <TextField id='name' placeholder='Textfield without label' />
        <TextField
          id='name'
          placeholder='Textfield with error message'
          error
          helperText='Error message'
        />
      </div>
      <div className='components__items'>
        <p>Modal </p>
        <button onClick={() => setModal(true)}>Open Modal</button>
        <Modal open={modal} onClose={() => setModal(false)}>
          <h1>Modal</h1>
          <p>Modal content</p>
        </Modal>
      </div>
      <div className='components__items'>
        <p>Button </p>
        <span>
          <Button>Primary small</Button>
        </span>
        <span>
          <Button variant='secondary' size='md'>
            Secondary medium
          </Button>
        </span>
        <span>
          <Button variant='contained' size='md'>
            Contained
          </Button>
        </span>
      </div>
      <div className='components__items'>
        <p>Loading </p>
        <LoadingUI />
      </div>
    </div>
  );
};

export default Page;
